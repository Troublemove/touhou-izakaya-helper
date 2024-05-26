<template>
    <view class="cook">
        <view class="cook-tag">
            <view class="touhou-tag">喜爱</view>
            <scroll-view class="npc-scroll" scroll-x="true" scroll-left="0" :show-scrollbar="false">
                <view class="touhou-tag" v-for="item in cookTags" :key="item">
                    {{ item }}
                    <view class="touhou-tag-select"></view>
                </view>
            </scroll-view>
            <!-- <view class="touhou-tag" v-for="item in cookTags" :key="item" @click="filterCooks('tag', item)">
                 • {{ item }}
                <view v-if="cookFilter.has(item)" class="touhou-tag-select"></view>
            </view> -->
        </view>
        <!-- <view class="cook-tag">
            <view class="touhou-notag-left" v-for="item in cookNoTags" :key="item" @click="filterCooks('noTag', item)">
                {{ item }}
                <view v-if="cookNoTagFilter.has(item)" class="touhou-notag-left-select"></view>
            </view>
        </view> -->
        <view class="cook-div">
            <view class="cook-div-cook" v-for="item in cooks" :key="item.name">
                <view class="cook-div-cook-left">
                    <image :src="'/static/img/common/' + item.cooker + '.png'" style="width: 40px; height: 40px;" mode="scaleToFill"/>
                    <image :src="'/static/img/common/' + item.cooker + '.png'" style="width: 40px; height: 40px;" mode="scaleToFill"/>
                </view>
                <view class="cook-div-cook-middle">
                    <view><span class="cook-div-cook-middle-span">{{ item.chinese }}</span></view>
                    <view><span class="cook-div-cook-middle-span-money">￥{{ item.money }}</span> - Lv {{ item.level }} </view>
                    <view>{{ item.material }}</view>
                </view>
            </view>
        </view>
    </view>
	<tab-bar :selected="1"></tab-bar>
</template>

<script setup>
    import { ref } from 'vue';
    import tabBar from '@/components/tab-bar/tabBar.vue'
    import { onShow } from '@dcloudio/uni-app'
    import { initCache } from '@/static/js/common.js'

    onShow(() => {
        initCache()
		if (!!cookTags) {
			cookTags.value = uni.getStorageSync('cookTagData')
		}
		if (!!cookNoTags) {
			cookNoTags.value = uni.getStorageSync('cookTagData')
		}
		if (!!cookList) {
			cookList.value = uni.getStorageSync('cookData')
		}
        filterCooks('', '')
		console.log(1113);
    })
    
    const cookTags = ref(uni.getStorageSync('cookTagData'))
    const cookNoTags = ref(uni.getStorageSync('cookTagData'))
    const cookList = ref(uni.getStorageSync('cookData'))
    const cooks = ref('')
    const cookFilter = ref(new Set())
    const cookNoTagFilter = ref(new Set())
    const filterCooks = (flag, item) => {
        if (!!item) {
            if ('tag' === flag) {
                if (cookFilter.value.has(item)) {
                    cookFilter.value.delete(item)
                } else {
                    cookFilter.value.add(item)
                }
            } else {
                if (cookNoTagFilter.value.has(item)) {
                    cookNoTagFilter.value.delete(item)
                } else {
                    cookNoTagFilter.value.add(item)
                }
            }
        }
        // 筛选喜好食物
        cooks.value = cookList.value.filter(item => {
            let tagList = item.tag.split(",")
            let tagfilter = [...cookFilter.value].concat()
            let tagNofilter = [...cookNoTagFilter.value].concat()
            let tagNoResult = new Set()
            if (tagList.length < cookFilter.value.size) {
                return false
            }
            tagList.forEach(tag => {
                tagfilter = tagfilter.filter(item => item !== tag.trim())
                cookNoTagFilter.value.forEach(item => {
                    if (item === tag.trim()) {
                        tagNoResult.add(item)
                    }
                })
            })
            return tagfilter.length === 0 && tagNoResult.size === 0
        })
    }
</script>

<style lang="scss" scoped>
    .cook {
        width: 100vw;
        background-color: #8D6549;
        
        .cook-tag {
            width: 100%;
            height: 30px;
            padding: 5px;
            display: flex;
            align-items: center;
            
            .npc-scroll {
                width: calc(100% - 72px);
                white-space: nowrap;
            }
        }
        
        .cook-div {
            width: 100%;
            overflow: auto;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-content: flex-start;
            justify-content: flex-start;
            align-items: flex-start;
            
            .cook-div-cook {
                width: 45%;
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
                }
            }
        }
    }
</style>