<template>
    <page-meta>
        <navigation-bar :title="npc.chinese" background-color="#8D6549" />
    </page-meta>
    <view class="npc-item" :style="{ height: swiperHeight + 'px' }">
        <view class="npc-item-info" @click="back">
            <image :src="'/static/img/npc/' + npc.name + '.png'" style="width: 100px; height: 130px;margin-right: 10px;" mode="scaleToFill"/>
            <view class="tag-div">
                <view style="margin: 0px;font-weight: bold;font-size: 20px;">{{ npc.chinese }}</view>
                <view>持有: {{ npc.money }} 円</view>
                <view>出没地区: {{ npc.location }}</view>
            </view>
        </view>
        <view class="npc-item-tab" :style="{ height: swiperHeight - 150 + 'px' }">
            <uv-tabs :list="tabList" :current="tabName" @click="clickTab" :scrollable="false"></uv-tabs>
            <swiper :current="tabName" :autoplay="false" @change="e => {tabName = e.detail.current}" :style="{ height: swiperHeight - 200 + 'px' }">
                <swiper-item>
                    <view class="npc-item-tab-div tab-css" :style="{ height: swiperHeight - 200 + 'px' }">
                        <view class="npc-item-tab-div-recommend-cook" v-if="!!npc.recommendCooks">
                            <view class="npc-item-tab-div-cook-div-cook" v-for="item in npc.recommendCooks.split(',')" :key="item">
                    			<cook-bar :type="'cook'" :isRecommand="true" :recommandCook="item.trim().split('*')[1]" :cookItem="cookMap[item.trim().split('*')[0]]" :cookFilter="npc.tag" :cookNoFilter="npc.noTag"></cook-bar>
                            </view>
                        </view>
                        <view class="npc-item-tab-div-recommend-cook" v-if="!npc.recommendCooks">
                            <view class="npc-item-tab-div-cook-div-cook" style="height: 50px;display: flex;justify-content: center;">
                                无推荐!
                            </view>
                        </view>
                        <view class="npc-item-tab-div-recommend-cook" v-if="!!npc.recommendDrinks">
                            <view class="npc-item-tab-div-cook-div-cook" v-for="item in npc.recommendDrinks.split(',')" :key="item">
                    			<cook-bar :type="'drink'" :isRecommand="true" :cookItem="drinksMap[item.trim().split('*')[0]]" :cookFilter="npc.drinks"></cook-bar>
                            </view>
                        </view>
                        <view class="npc-item-tab-div-recommend-cook" v-if="!npc.recommendDrinks">
                            <view class="npc-item-tab-div-cook-div-cook" style="height: 50px;display: flex;justify-content: center;">
                                无推荐!
                            </view>
                        </view>
                    </view>
                </swiper-item>
                <swiper-item>
                    <view class="npc-item-tab-div" :style="{ height: swiperHeight - 200 + 'px' }">
                        <view class="npc-item-tab-div-cook-tag" style="height: 68px;">
                            <view class="touhou-tag" v-for="item in npc.tag.split(',')" :key="item" @click="filterCooks('tag', item.trim())">
                                 • {{ item.trim() }}
                                <view v-if="cookFilter.has(item.trim())" class="touhou-tag-select"></view>
                            </view>
                        </view>
                        <view class="npc-item-tab-div-cook-tag" style="height: 30px;" v-if="!!npc.noTag">
                            <view class="touhou-notag-left" v-for="item in npc.noTag.split(',')" :key="item" @click="filterCooks('noTag', item.trim())">
                                {{ item.trim() }}
                                <view v-if="cookNoTagFilter.has(item.trim())" class="touhou-notag-left-select"></view>
                            </view>
                        </view>
                        <view class="npc-item-tab-div-cook-tag" style="height: 30px;" v-else></view>
                        <view class="npc-item-tab-div-recommend-cook" :style="{ height: swiperHeight - 335 + 'px' }">
                            <view class="npc-item-tab-div-cook-div-cook" v-for="item in cooks" :key="item.name">
                    			<cook-bar :type="'cook'" :isRecommand="false" :cookItem="item" :cookFilter="cookFilter" :cookNoFilter="npc.noTag"></cook-bar>
                            </view>
                        </view>
                    </view>
                </swiper-item>
                <swiper-item>
                    <view class="npc-item-tab-div" :style="{ height: swiperHeight - 200 + 'px' }">
                        <view class="npc-item-tab-div-drinks-tag">
                            <view class="drink-tag" v-for="item in npc.drinks.split(',')" :key="item" @click="filterDrinks(item.trim())">
                                 • {{ item.trim() }}
                                 <view v-if="drinksFilter.has(item.trim())" class="drink-tag-select"></view>
                            </view>
                        </view>
                        <view class="npc-item-tab-div-recommend-cook" :style="{ height: swiperHeight - 280 + 'px' }">
                            <view class="npc-item-tab-div-cook-div-cook" v-for="item in npcDrinks" :key="item.name">
                    			<cook-bar :type="'drink'" :isRecommand="false" :cookItem="item" :cookFilter="drinksFilter"></cook-bar>
                            </view>
                        </view>
                    </view>
                </swiper-item>
                <swiper-item>
                    <view class="npc-item-tab-div" :style="{ height: swiperHeight - 200 + 'px' }">
                        <view v-if="!!npc.rewardCard?.effect">
                            <view class="npc-item-tab-div-reward-title">
                                <view>{{ npc.rewardCard.name }}</view>
                            </view>
                            <view class="npc-item-tab-div-reward-div">
                                <text>{{ npc.rewardCard.effect }}</text>
                            </view>
                            <view class="npc-item-tab-div-punish-title">
                                <view>{{ npc.punishCard.name }}</view>
                            </view>
                            <view class="npc-item-tab-div-punish-div">
                                <text>{{ npc.punishCard.effect }}</text>
                            </view>
                        </view>
                        <view class="npc-item-tab-div-friend" v-else>
                            <view><uv-empty text="无符卡！" textColor="#000" textSize="20px" icon="/static/img/common/no-card.png"></uv-empty></view>
                        </view>
                    </view>
                </swiper-item>
                <swiper-item>
                    <view class="npc-item-tab-div" :style="{ height: swiperHeight - 200 + 'px' }">
                        <view class="npc-item-tab-div-friend" v-if="npc?.friendship.length > 0">
                            <view class="npc-item-tab-div-friend-item" v-for="item in npc.friendship" :key="item.name">
                                <view class="npc-item-tab-div-friend-item-view">
                                    <view class="left">羁绊提升：</view>
                                    <view class="right"><uv-rate activeIcon="heart-fill" v-model="item.name" inactiveIcon="heart" readonly=""></uv-rate></view>
                                </view>
                                <view class="npc-item-tab-div-friend-item-view">
                                    <view class="left">前置任务：</view>
                                    <view class="right"><text>{{ !!item.condition ? item.condition : '无' }}</text></view>
                                </view>
                                <view class="npc-item-tab-div-friend-item-view">
                                    <view class="left">{{ item.name === '5' ? '最终奖励：' : '升级任务：'}}</view>
                                    <view class="right">{{ item.task }}</view>
                                </view>
                            </view>
                        </view>
                        <view class="npc-item-tab-div-friend" v-else>
                            <view><uv-empty text="无羁绊！" textColor="#000" textSize="20px" icon="/static/img/common/no-friend.png" iconSize="220"></uv-empty></view>
                        </view>
                    </view>
                </swiper-item>
            </swiper>
        </view>
    </view>
</template>

<script setup>
    import { ref } from 'vue';
	import cookBar from '@/components/cookBar.vue'
    import { onLoad } from '@dcloudio/uni-app'
    
    const back = () => {
        uni.navigateBack()
    }
    const swiperHeight = ref('')
    onLoad(() => {
        swiperHeight.value = uni.getSystemInfoSync().windowHeight;
    })
    
    const tabList = ref([
        {name: '推荐'},
        {name: '烹饪'},
        {name: '饮料'},
        {name: '符卡'},
        {name: '羁绊'},
    ])
    const tabName = ref(0)
    const clickTab = (item) => {
        tabName.value = item.index
    }
    
    const npc = ref(uni.getStorageSync('selectNpc'))
    const drinks = ref(uni.getStorageSync('drinksData'))
    const npcDrinks = ref([])
    const drinksMap = ref([])
    drinks.value.forEach(item => {
        drinksMap.value[item.chinese] = item
    })
    const drinksFilter = ref(new Set())
    const filterDrinks = (item) => {
        if (!!item) {
            if (drinksFilter.value.has(item)) {
                drinksFilter.value.delete(item)
            } else {
                drinksFilter.value.add(item)
            }
        }
        // 筛选饮料
        npcDrinks.value = drinks.value.filter(item => {
            let tagList = item.tag.split(",")
            let filter = [...drinksFilter.value].concat()
            if (tagList.length < drinksFilter.value.size) {
                return false
            }
            tagList.forEach(tag => {
                filter = filter.filter(item => item !== tag.trim())
            })
            return filter.length === 0
        })
    }
    filterDrinks('')
    
    const cookList = ref(uni.getStorageSync('cookData'))
    const cooks = ref([])
    const cookMap = ref([])
    cookList.value.forEach(item => {
        cookMap.value[item.chinese] = item
    })
    const cookFilter = ref(new Set())
    const cookNoTagFilter = ref(new Set())
    npc.value.noTag.split(',').forEach(tag => {
        cookNoTagFilter.value.add(tag.trim())
    })
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
    filterCooks('', '')
    
</script>

<style lang="scss" scoped>
    :deep(.uni-page-head__title) {
        color: #000000;
    }
    
    .npc-item {
        width: 100vw;
        background-color: #d7ad95;
        // border: 1px solid red;
        
        .npc-item-info {
            padding: 10px;
            display: flex;
            
            .tag-div {
                width: calc(100vw - 110px);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        }
        
        .npc-item-tab {
            width: 100vw;
            
            .npc-item-tab-div {
                overflow: auto;
                padding: 5px;
                color: #000000;
                background-color: #CFBFA2;
                
                .npc-item-tab-div-recommend-cook {
                    height: 48%;
                    margin: 5px;
                    overflow: auto;
                    border-radius: 10px;
                    
                    .npc-item-tab-div-cook-div-cook {
                        margin: 5px 2px;
                        padding: 0px 5px;
                        height: auto;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        border-radius: 10px;
                        background-color: #d4aa76;
						border: 1px solid rgb(165, 115, 66);
                    }
                }
                
                .npc-item-tab-div-recommend-cook::-webkit-scrollbar {
                  display: none;
                }
                
                .npc-item-tab-div-cook-tag {
                    padding: 5px 5px;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                }
                
                .npc-item-tab-div-drinks-tag {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    margin: 5px;
                    height: 60px;
                }
                
                .npc-item-tab-div-reward-title {
                    padding: 10px;
                    font-weight: bold;
                    font-size: 20px;
                    color: #FFF3D1;
                    text-shadow: -1px 0 #FF4F56, 0 1px #FF4F56, 1px 0 #FF4F56, 0 -1px #FF4F56;
                }
                .npc-item-tab-div-reward-div {
                    padding: 20px;
                    background-image: url('/static/img/common/reward.png');
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                }
                .npc-item-tab-div-punish-title {
                    padding: 10px;
                    font-weight: bold;
                    font-size: 20px;
                    color: #FFF3D1;
                    text-shadow: -1px 0 #93596D, 0 1px #93596D, 1px 0 #93596D, 0 -1px #93596D;
                }
                .npc-item-tab-div-punish-div {
                    padding: 20px;
                    background-image: url('/static/img/common/punish.png');
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                }
                
                .npc-item-tab-div-friend {
                    padding: 10px;
                    
                    .npc-item-tab-div-friend-item {
                        margin: 10px 0px;
                        
                        .npc-item-tab-div-friend-item-view {
                            display: flex;
                            align-items: center;
                            margin: 5px 0;
                            
                            .left {
                                width: 25%;
                            }
                            
                            .right {
                                width: 75%;
                            }
                        }
                    }
                }
            }
            .npc-item-tab-div::-webkit-scrollbar {
              display: none;
            }
            .npc-item-tab-div-cook-div::-webkit-scrollbar {
              display: none;
            }
            .npc-item-tab-div-card::-webkit-scrollbar {
              display: none;
            }
            .npc-item-tab-div-drinks-div::-webkit-scrollbar {
              display: none;
            }
        }
    }
</style>