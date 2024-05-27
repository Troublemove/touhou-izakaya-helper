<template>
    <view class="cook">
        <view class="tag-filter">
            <view class="touhou-tag" @click="openModel('like')">喜爱</view>
            <uv-scroll-list class="tag-scroll" :indicator="false" >
                <view class="touhou-tag" v-for="item in cookFilter" :key="item" @click="chooseTagFilter('like', item)">{{ item }}<view class="touhou-tag-select"></view></view>
            </uv-scroll-list>
            <view class="touhou-tag" @click="clear('like')" v-if="cookFilter.size > 0">清空</view>
        </view>
        <view class="tag-filter">
            <view class="touhou-notag-left" @click="openModel('dislike')">厌恶</view>
            <uv-scroll-list class="tag-scroll" :indicator="false" >
                <view class="touhou-notag-left" v-for="item in cookNoTagFilter" :key="item" @click="chooseTagFilter('dislike', item)">{{ item }}<view class="touhou-notag-left-select"></view></view>
            </uv-scroll-list>
            <view class="touhou-tag" @click="clear('dislike')" v-if="cookNoTagFilter.size > 0">清空</view>
        </view>
        <view class="tag-filter">
            <view class="drink-tag" @click="openModel('material')">食材</view>
            <uv-scroll-list class="tag-scroll" :indicator="false" >
                <view class="drink-tag" v-for="item in materialsFilter" :key="item" @click="chooseTagFilter('material', item)">{{ item }}<view class="drink-tag-select"></view></view>
            </uv-scroll-list>
            <view class="touhou-tag" @click="clear('material')" v-if="materialsFilter.size > 0">清空</view>
        </view>
        <view class="cook-div">
            <view class="cook-div-cook" v-for="item in cooks" :key="item.chinese">
                <view class="cook-div-cook-left">
                    <image :src="'/static/img/common/' + item.cooker + '.png'" style="width: 40px; height: 40px;" mode="scaleToFill"/>
                    <image :src="'/static/img/common/' + item.cooker + '.png'" style="width: 40px; height: 40px;" mode="scaleToFill"/>
                </view>
                <view class="cook-div-cook-middle">
                    <view><span class="cook-div-cook-middle-span">{{ item.chinese }}<span class="cook-div-cook-middle-span-money">￥{{ item.money }}</span> - Lv {{ item.level }}</span></view>
                    <view><span class="cook-div-cook-middle-span-money">{{ item.material }}</span></view>
                    <view class="cook-div-cook-middle-tag"><view class="touhou-tag" v-for="item in item.tag.split(',')" :key="item">{{ item.trim() }}</view></view>
                    <view class="cook-div-cook-middle-tag" v-if="!!item.withNo"><view class="touhou-notag-left" v-for="item in item.withNo.split(',')" :key="item">{{ item.trim() }}</view></view>
                </view>
            </view>
        </view>
        
        <uv-modal ref="tagModal" :showConfirmButton="false">
            <view class="modal-div">
                <view class="modal-div-tag" v-if="chooseItem.type === 'like'">
                    <view class="touhou-tag" v-for="item in chooseItem.value" :key="item" @click="chooseTagFilter(chooseItem.type, item)">{{ item }}<view v-if="cookFilter.has(item)" class="touhou-tag-select"></view></view>
                </view>
                <view class="modal-div-tag" v-if="chooseItem.type === 'dislike'">
                    <view class="touhou-notag-left" v-for="item in chooseItem.value" :key="item" @click="chooseTagFilter(chooseItem.type, item)">{{ item }}<view v-if="cookNoTagFilter.has(item)" class="touhou-notag-left-select"></view></view>
                </view>
                <view class="modal-div-tag" v-if="chooseItem.type === 'material'">
                    <view class="drink-tag" v-for="item in chooseItem.value" :key="item" @click="chooseTagFilter(chooseItem.type, item.chinese)">{{ item.chinese }}<view v-if="materialsFilter.has(item.chinese)" class="drink-tag-select"></view></view>
                </view>
            </view>
        </uv-modal>
    </view>
	<tab-bar :selected="1"></tab-bar>
</template>

<script setup>
    import { ref } from 'vue';
    import tabBar from '@/components/tab-bar/tabBar.vue'
    import { onShow } from '@dcloudio/uni-app'
    import { initCache } from '@/static/js/common.js'

    onShow(() => {
		if (!!cookList) {
			cookList.value = uni.getStorageSync('cookData')
		}
		if (!!cookTags) {
			cookTags.value = uni.getStorageSync('cookTagData')
		}
		if (!!cookNoTags) {
			cookNoTags.value = uni.getStorageSync('cookTagData')
		}
		if (!!materials) {
			materials.value = uni.getStorageSync('materialData')
		}
        filterCooks('')
    })
    
    const cookTags = ref(uni.getStorageSync('cookTagData'))
    const cookNoTags = ref(uni.getStorageSync('cookTagData'))
    const cookList = ref(uni.getStorageSync('cookData'))
    const materials = ref(uni.getStorageSync('materialData'))
    const cooks = ref('')
    const cookFilter = ref(new Set())
    const cookNoTagFilter = ref(new Set())
    const materialsFilter = ref(new Set())
    const filterCooks = (item) => {
        // 筛选喜好食物
        cooks.value = cookList.value.filter(item => {
            let tagList = item.tag.split(",")
            let materialList = item.material.split(",")
            let tagfilter = [...cookFilter.value].concat()
            let tagNofilter = [...cookNoTagFilter.value].concat()
            let materialfilter = [...materialsFilter.value].concat()
            let tagNoResult = new Set()
            if (tagList.length < cookFilter.value.size) {
                return false
            }
            tagList.forEach(tag => {
                tagfilter = tagfilter.filter(item => item !== tag.trim())
                cookNoTagFilter.value.forEach(noTag => {
                    if (noTag === tag.trim()) {
                        tagNoResult.add(noTag)
                    }
                })
            })
            // 筛选食材
            materialList.forEach(material => {
                materialfilter = materialfilter.filter(item => item !== material.trim())
            })
            return tagfilter.length === 0 && tagNoResult.size === 0 && materialfilter.length === 0
        })
    }
    
    const tagModal = ref(false)
    const chooseItem = ref('')
    const openModel = (item) => {
        chooseItem.value = ''
        if ('like' === item) {
            chooseItem.value = {
                "type": item,
                "value": cookTags.value
            }
        } else if ('dislike' === item) {
            chooseItem.value = {
                "type": item,
                "value": cookNoTags.value
            }
        } else if ('material' === item) {
            chooseItem.value = {
                "type": item,
                "value": materials.value
            }
        }
        tagModal.value.open()
    }
    const clear = (type) => {
        if ('like' === type) {
            cookFilter.value.clear()
        } else if ('dislike' === type) {
            cookNoTagFilter.value.clear()
        } else if ('material' === type) {
            materialsFilter.value.clear()
        }
        filterCooks('')
    }
    // model选择tag
    const chooseTagFilter = (type, item) => {
        if ('like' === type) {
            if (cookFilter.value.has(item)) {
                cookFilter.value.delete(item)
            } else {
                cookFilter.value.add(item)
            }
        } else if ('dislike' === type) {
            if (cookNoTagFilter.value.has(item)) {
                cookNoTagFilter.value.delete(item)
            } else {
                cookNoTagFilter.value.add(item)
            }
        } else if ('material' === type) {
            if (materialsFilter.value.has(item)) {
                materialsFilter.value.delete(item)
            } else {
                materialsFilter.value.add(item)
            }
        }
        filterCooks('')
    }
</script>

<style lang="scss" scoped>
    .cook {
        width: 100vw;
        background-color: #8D6549;
        
        .tag-filter {
            height: 30px;
            padding: 2px 5px;
            display: flex;
            justify-content: space-between;
            
            .tag-scroll {
                width: calc(100% - 105px);
                white-space: nowrap;
            }
        }
        
        .cook-div {
            margin: 5px;
            max-height: calc(100dvh - 208px);
            min-height: calc(100dvh - 208px);
            overflow: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            border-radius: 15px;
            box-shadow: inset 0px 0px 10px 1px #000000;
            
            .cook-div-cook {
                width: 90%;
                margin: 5px 2px;
                padding: 5px 5px;
                height: auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-radius: 10px;
                background-color: #FBEFCB;
                
                .cook-div-cook-left {
                    width: 50px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                
                .cook-div-cook-middle {
                    margin-left: 8px;
                    font-size: 14px;
                    width: calc(100vw - 55px);
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-between;
                    
                    .cook-div-cook-middle-span {
                        font-weight: bold;
                    }
                    .cook-div-cook-middle-span-money {
                        font-weight: bold;
                    }
                    
                    .cook-div-cook-middle-tag {
                        display: flex;
                        flex-wrap: wrap;
                    }
                }
            }
        }
        .cook-div::-webkit-scrollbar {
            display: none;
        }
        
        .modal-div {
            width: 100vw;
            // background-color: #fbefcb;
            
            .modal-div-tag {
                padding: 5px 5px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
            }
        }
    }
    
    :deep(.uv-popup__content) {
        background-color: rgba(141, 101, 73, 0.5) !important;
    }
    :deep(.uv-modal__button-group__wrapper--hover) {
        background-color: #fbefcb;
    }
</style>