<template>
    <view class="cook" :style="{ height: cookHeight - 55 + 'px' }">
        <view class="cook-view">
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
            <view class="cooker-select">
                <uv-checkbox-group v-model="cookerValue" placement="row" labelColor="#e6b4a6" labelSize="16px" activeColor="#8d6549" inactiveColor="#fbefcb" @change="selectCooker">
                    <uv-checkbox v-for="(item, index) in cookerList" :key="index" :label="item.name" :name="item.value" ></uv-checkbox>
                </uv-checkbox-group>
            </view>
            <view class="cook-total">
                <view class="cook-total-view" style="width: 50%;">
                    <uv-search placeholder="请输入料理名称" v-model="searchFilter" bgColor="#8D6549" borderColor="#FBEFCB" searchIconColor="#e0afa0" color="#e0afa0" :showAction="false" height="55rpx" @change="filterCooks('')"></uv-search>
                </view>
                <view class="cook-total-view" style="width: 30%;">
                    <uv-drop-down sign="cookSort" text-color="#dbaa9b" text-active-color="#d3aa76" :defaultValue="[0, '0', 'normal']">
                        <uv-drop-down-item name="normal" type="2" :label="sortDefaultValue.label" :value="sortDefaultValue.value"></uv-drop-down-item>
                        <uv-drop-down-popup sign="cookSort" @clickItem="changeSort" :currentDropItem="sortList"></uv-drop-down-popup>
                    </uv-drop-down>
                </view>
                <view class="cook-total-view" style="width: 10%;color: #e0afa0;">
                    {{ cooks.length }}
                </view>
            </view>
        </view>
		<cook-view :type="'cook'" :cookShow="cookShow" :cookFilter="cookFilter"></cook-view>
        
        <uv-modal ref="tagModal" :showConfirmButton="false">
            <view class="modal-div">
                <view class="modal-div-tag" v-if="chooseItem.type === 'like'">
                    <view class="touhou-tag" v-for="item in chooseItem.value" :key="item" @click="chooseTagFilter(chooseItem.type, item)">{{ item }}<view v-if="cookFilter.has(item)" class="touhou-tag-select"></view></view>
                </view>
                <view class="modal-div-tag" v-if="chooseItem.type === 'dislike'">
                    <view class="touhou-notag-left" v-for="item in chooseItem.value" :key="item" @click="chooseTagFilter(chooseItem.type, item)">{{ item }}<view v-if="cookNoTagFilter.has(item)" class="touhou-notag-left-select"></view></view>
                </view>
                <view class="modal-div-tag" v-if="chooseItem.type === 'material'">
                    <view class="material-div">
                        <view class="matrial-tag">
                            <view class="drink-tag" v-for="item in materialTags" :key="item" @click="selectMaterialTag(item)">{{ item }}<view v-if="materialTagsFilter.has(item)" class="drink-tag-select"></view></view>
                        </view>
                        <view class="matrial-div-div">
                            <view class="material-item" v-for="item in chooseItem.value" :key="item" @click="chooseTagFilter(chooseItem.type, item.chinese)">
                                <view class="material-item-left">
                                    <image :src="'/static/img/material/' + item.name + '.png'" style="width: 50px; height: 50px;" mode="scaleToFill" lazy-load="true"/>
                                </view>
                                <view class="material-item-middle">
                                    <view>{{ item.chinese }} ￥{{ item.money }} - Lv {{ item.level }}</view>
                                    <view class="material-item-middle-tag" v-if="!!item.tag">
                                        <view class="drink-tag" v-for="tag in item.tag.split(',')" :key="tag">{{ tag.trim() }}<view v-if="materialTagsFilter.has(tag.trim())" class="drink-tag-select"></view></view>
                                    </view>
                                </view>
                                <view class="material-item-right" v-show="materialsFilter.has(item.chinese)"></view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </uv-modal>
    </view>
	<tab-bar :selected="1"></tab-bar>
</template>

<script setup>
    import { nextTick, ref } from 'vue';
    import tabBar from '@/components/tab-bar/tabBar.vue'
	import cookView from '@/components/cookView.vue'
    import { onShow } from '@dcloudio/uni-app'
    import { initCache } from '@/static/js/common.js'

    const cookHeight = ref('')
	nextTick(() => {
		cookHeight.value = uni.getSystemInfoSync().windowHeight
	})
    onShow(() => {
		// if (!!cookList) {
		// 	cookList.value = uni.getStorageSync('cookData')
		// }
		// if (!!cookTags) {
		// 	cookTags.value = uni.getStorageSync('cookTagData')
		// }
		// if (!!cookNoTags) {
		// 	cookNoTags.value = uni.getStorageSync('cookTagData')
		// }
		// if (!!materials) {
		// 	materials.value = uni.getStorageSync('materialData')
  //           if (!!materialTags) {
  //               initMaterialTags()
  //           }
		// }
    })
    
    const cookShow = ref([])
    const spliceCook = () => {
        cookShow.value.splice(0)
		let len = 20
        let end = cooks.value.length < len ? cooks.value.length : len
        for (let i = 0; i < end; i++) {
            cookShow.value.push(cooks.value[i])
        }
        setTimeout(() => {
            cookShow.value = cooks.value
        }, 100)
    }
    
    const cookerValue = ref([''])
    const cookerFilter = ref(new Set())
    const cookerList = ref([
        {name: '煮锅', value: 'cook1', disabled: false},
        {name: '烤架', value: 'cook2', disabled: false},
        {name: '油锅', value: 'cook3', disabled: false},
        {name: '蒸锅', value: 'cook4', disabled: false},
        {name: '料理台', value: 'cook5', disabled: false}
    ])
    const selectCooker = (item) => {
        cookerFilter.value.clear()
        item.forEach(cooker => {
            cookerFilter.value.add(cooker)
        })
        filterCooks('')
    }
    
    const sortDefaultValue = ref({label: '默认排序', value: 'normal'})
    const sortList = ref({
        label: '默认排序',
        value: 'normal',
        activeIndex: 0,
        color: '#dbaa9b',
        activeColor: '#d3aa76',
        child: [{
            label: '默认排序',
            value: 'normal'
        }, {
            label: '价格升序',
            value: 'moneyUp'
        }, {
            label: '价格降序',
            value: 'moneyDown'
        }]
    })
    const changeSort = (e) => {
        sortDefaultValue.value.label = e.label
        sortDefaultValue.value.value = e.value
        filterCooks('')
    }
    
    const cookTags = ref(uni.getStorageSync('cookTagData'))
    const cookNoTags = ref(uni.getStorageSync('cookTagData'))
    const cookList = ref(uni.getStorageSync('cookData'))
    const materials = ref(uni.getStorageSync('materialData'))
    const materialTags = ref(new Set())
    const materialTagsFilter = ref(new Set())
    const initMaterialTags = () => {
        materials.value.forEach(item => {
            item.tag.split(',').forEach(tag => {
                let t = tag.trim()
                if (!!t) {
                    materialTags.value.add(tag.trim())
                }
            })
        })
    }
    initMaterialTags()
    
    const cooks = ref('')
    const cookFilter = ref(new Set())
    const cookNoTagFilter = ref(new Set())
    const materialsFilter = ref(new Set())
	const searchFilter = ref('')
    const filterCooks = (item) => {
        cooks.value = cookList.value.filter(item => {
            // 筛选搜索
            if (!!searchFilter.value && !item.chinese.includes(searchFilter.value)) {
                return false
            }
            let tagList = item.tag.split(",")
            let materialList = item.material.split(",")
            let tagfilter = [...cookFilter.value].concat()
            let tagNofilter = [...cookNoTagFilter.value].concat()
            let materialfilter = [...materialsFilter.value].concat()
            let tagNoResult = new Set()
            if (tagList.length < cookFilter.value.size) {
                return false
            }
            // 筛选厨具
            if (cookerFilter.value.size > 0 && !cookerFilter.value.has(item.cooker)) {
                return false
            }
            // 筛选喜好食物
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
        // 排序
        if ('moneyUp' === sortDefaultValue.value.value) {
            cooks.value = cooks.value.sort((x, y) => {
                return x.money - y.money
            })
        } else if ('moneyDown' === sortDefaultValue.value.value) {
            cooks.value = cooks.value.sort((x, y) => {
                return -(x.money - y.money)
            })
        }
        spliceCook()
    }
	filterCooks('')
    
    const tagModal = ref(false)
    const chooseItem = ref('')
    const openModel = (item) => {
        chooseItem.value = ''
        materialTagsFilter.value.clear()
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
    // model选择食材tag
    const selectMaterialTag = (name) => {
        if (materialTagsFilter.value.has(name)) {
            materialTagsFilter.value.delete(name)
        } else {
            materialTagsFilter.value.add(name)
        }
        chooseItem.value.value = materials.value.filter(item => {
            let tagList = item.tag.split(",")
            let materialTagsfilter = [...materialTagsFilter.value].concat()
            tagList.forEach(tag => {
                materialTagsfilter = materialTagsfilter.filter(item => item !== tag.trim())
            })
            return materialTagsfilter.length === 0
        })
    }
</script>

<style lang="scss" scoped>
    .cook {
        width: 100vw;
		// height: calc(100vh - 55px);
        display: flex;
        flex-direction: column;
        background-color: #8D6549;
        
        .cook-view {
            height: 168px;
            
            .tag-filter {
                height: 30px;
                padding: 2px 5px;
                display: flex;
                justify-content: space-between;
                
                .tag-scroll {
                    width: calc(100% - 108px);
                    white-space: nowrap;
                }
            }
            .uv-checkbox-group--row {
                justify-content: space-between;
                align-items: center;
                margin: 5px 10px;
            }
            
            .cook-total {
                margin: 0px 5px;
                text-align: center;
                color: #fff;
                display: flex;
                align-items: center;
                
                .cook-total-view {
                    margin: 5px;
                }
            }
        }
        
        .modal-div {
            width: 100vw;
            
            .touhou-tag, .touhou-notag-left, .drink-tag {
                width: 60px;
                height: 23px;
                margin: 5px 2px;
                justify-content: center;
                font-size: 15px;
            }
            .touhou-notag-left {
                background-color: #5d453a;
            }
            
            
            .modal-div-tag {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-around;
                
                .material-div {
                    height: 80vh;
					display: flex;
					flex-direction: column;
                    overflow: auto;
                    
                    .matrial-tag {
                        width: 100%;
                        height: 270px;
                        display: flex;
                        flex-wrap: wrap;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
						
						.drink-tag {
						    margin: 2px 5px;
						    padding: 1px 5px !important;
						}
                    }
                    .matrial-div-div {
						flex: 1;
                        margin-top: 20px;
                        overflow: auto;
						
						.drink-tag {
							height: 22px;
						}
                        
                        .material-item {
                            color: #e6b4a6;
                            margin: 5px 2px;
                            padding: 5px 5px;
                            height: auto;
                            display: flex;
                            align-items: center;
                            justify-content: flex-start;
                            
                            .material-item-left {
                                width: 50px;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                            }
                            
                            .material-item-middle {
                                width: calc(100% - 70px);
                                margin-left: 8px;
                                display: flex;
                                flex-direction: column;
                                align-items: flex-start;
                                justify-content: space-between;
                                
                                .material-item-middle-tag {
                                    display: flex;
                                    flex-wrap: wrap;
                                }
                            }
                            .material-item-right {
                                content: '';
                                width: 5px;
                                height: 15px;
                                border: 3px solid #E40D0D;
                                border-top-color: transparent;
                                border-left-color: transparent;
                                transform: rotate(45deg);
                            }
                        }
                    }
					
					.matrial-div-div::-webkit-scrollbar {
						display: none;
					}
                }
            }
        }
    }
    
    :deep(.uv-popup__content) {
        padding: 0px;
        border: 1px solid #e6b4a6;
        background-color: rgba(141, 101, 73, 0.9) !important;
    }
    :deep(.uv-line) {
        display: none;
    }
    :deep(.uv-modal) {
        width: 92vw !important;
    }
    :deep(.uv-modal__content) {
        padding: 15px 2px !important;
    }
    :deep(.uv-drop-down) {
        width: 96px;
        height: 55rpx;
        background-color: #8d6549;
        border: 1px solid #fbefcb;
        border-radius: 20px;;
    }
    :deep(.uv-dp__container) {
        width: 35%;
        float: right;
        margin-right: 14%;
        background-color: #8D6549;
        
        span {
            color: #e6b4a6;
        }
    }
</style>