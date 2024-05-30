<template>
    <page-meta>
        <navigation-bar :title="npc.chinese" background-color="#8D6549" />
    </page-meta>
    <view class="npc-item">
        <view class="npc-item-info" @click="back">
            <image :src="'/static/img/npc/' + npc.name + '.png'" style="width: 100px; height: 130px;margin-right: 10px;" mode="scaleToFill"/>
            <view class="tag-div">
                <view style="margin: 0px;font-weight: bold;font-size: 20px;">{{ npc.chinese }}</view>
                <view>持有: {{ npc.money }} 円</view>
                <view>出没地区: {{ npc.location }}</view>
            </view>
        </view>
        <view class="npc-item-tab">
            <uv-tabs :list="tabList" @click="clickTab" :scrollable="false"></uv-tabs>
            <view class="npc-item-tab-div tab-css" v-if="tabName === tabList[0].name">
                <view class="npc-item-tab-div-recommend-cook" v-if="!!npc.recommendCooks">
                    <view class="npc-item-tab-div-cook-div-cook" v-for="item in npc.recommendCooks.split(',')" :key="item">
                        <view class="npc-item-tab-div-cook-div-cook-left">
                            <image :src="'/static/img/cook/' + cookMap[item.trim().split('*')[0]]?.name + '.png'" style="width: 50px; height: 50px;" mode="scaleToFill"/>
                            <image :src="'/static/img/common/' + cookMap[item.trim().split('*')[0]]?.cooker + '.png'" style="width: 50px; height: 50px;" mode="scaleToFill"/>
                        </view>
                        <view class="npc-item-tab-div-cook-div-cook-middle">
                            <view><span class="npc-item-tab-div-cook-div-cook-middle-span">{{ cookMap[item.trim().split('*')[0]]?.chinese }}</span><span class="npc-item-tab-div-cook-div-cook-middle-span-money"> ￥{{ cookMap[item.trim().split('*')[0]]?.money }}</span> - Lv {{ cookMap[item.trim().split('*')[0]]?.level }} </view>
                            <view>食材：{{ cookMap[item.trim().split('*')[0]]?.material }} <text class="npc-item-tab-div-cook-div-cook-middle-material" v-if="!!item.split('*')[1]">* {{ item.split('*')[1] }}</text></view>
                            <view class="cook-div-cook-middle-tag"><view class="touhou-tag" v-for="tag in cookMap[item.trim().split('*')[0]]?.tag.split(',')" :key="tag">{{ tag.trim() }}</view></view>
                            <view class="cook-div-cook-middle-tag" v-if="!!cookMap[item.trim().split('*')[0]]?.withNo"><view class="touhou-notag-left" v-for="tag in cookMap[item.trim().split('*')[0]]?.withNo.split(',')" :key="tag">{{ tag.trim() }}</view></view>
                        </view>
                    </view>
                </view>
                <view class="npc-item-tab-div-recommend-cook" v-if="!npc.recommendCooks">
                    <view class="npc-item-tab-div-cook-div-cook" style="height: 50px;display: flex;justify-content: center;">
                        无推荐!
                    </view>
                </view>
                <view class="npc-item-tab-div-recommend-cook" v-if="!!npc.recommendDrinks">
                    <view class="npc-item-tab-div-cook-div-cook" v-for="item in npc.recommendDrinks.split(',')" :key="item">
                        <view class="npc-item-tab-div-cook-div-cook-left">
                            <image :src="'/static/img/drink/' + drinksMap[item.trim().split('*')[0]]?.name + '.png'" style="width: 40px; height: 40px;" mode="scaleToFill"/>
                        </view>
                        <view class="npc-item-tab-div-cook-div-cook-middle">
                            <view><span class="npc-item-tab-div-cook-div-cook-middle-span">{{ drinksMap[item.trim().split('*')[0]]?.chinese }}</span><span class="npc-item-tab-div-cook-div-cook-middle-span-money"> ￥{{ drinksMap[item.trim().split('*')[0]]?.money }}</span> - Lv {{ drinksMap[item.trim().split('*')[0]]?.level }}</view>
                            <view class="cook-div-cook-middle-tag">
                                <view class="drink-tag" v-for="drink in drinksMap[item.trim().split('*')[0]]?.tag.split(',')" :key="drink">{{ drink.trim() }}</view>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="npc-item-tab-div-recommend-cook" v-if="!npc.recommendDrinks">
                    <view class="npc-item-tab-div-cook-div-cook" style="height: 50px;display: flex;justify-content: center;">
                        无推荐!
                    </view>
                </view>
            </view>
            <view class="npc-item-tab-div tab-css" v-if="tabName === tabList[1].name">
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
                <view class="npc-item-tab-div-cook-tag" style="height: 30px;" v-else>
                </view>
                <view class="npc-item-tab-div-cook-div">
                    <view class="npc-item-tab-div-cook-div-cook" v-for="item in cooks" :key="item.name" @click="openItem(item)">
                        <view class="npc-item-tab-div-cook-div-cook-left">
                            <image :src="'/static/img/cook/' + item.name + '.png'" style="width: 40px; height: 40px;" mode="scaleToFill"/>
                            <image :src="'/static/img/common/' + item.cooker + '.png'" style="width: 40px; height: 40px;" mode="scaleToFill"/>
                        </view>
                        <view class="npc-item-tab-div-cook-div-cook-middle">
                            <view><span class="npc-item-tab-div-cook-div-cook-middle-span">{{ item.chinese }}</span></view>
                            <view><span class="npc-item-tab-div-cook-div-cook-middle-span-money">￥{{ item.money }}</span> - Lv {{ item.level }} </view>
                            <view>{{ item.material }}</view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="npc-item-tab-div tab-css" v-if="tabName === tabList[2].name">
                <view class="npc-item-tab-div-drinks-tag">
                    <view class="drink-tag" v-for="item in npc.drinks.split(',')" :key="item" @click="filterDrinks(item.trim())">
                         • {{ item.trim() }}
                         <view v-if="drinksFilter.has(item.trim())" class="drink-tag-select"></view>
                    </view>
                </view>
                <view class="npc-item-tab-div-drinks-div">
                    <view class="npc-item-tab-div-drinks-div-drink" v-for="item in npcDrinks" :key="item.name" @click="openItem(item)">
                        <view class="npc-item-tab-div-drinks-div-drink-left">
                            <image :src="'/static/img/drink/' + item.name + '.png'" style="width: 40px; height: 40px;" mode="scaleToFill"/>
                        </view>
                        <view class="npc-item-tab-div-drinks-div-drink-middle">
                            <view><span class="npc-item-tab-div-drinks-div-drink-middle-span">{{ item.chinese }}</span></view>
                            <view><span class="npc-item-tab-div-drinks-div-drink-middle-span-money">￥{{ item.money }}</span> - Lv {{ item.level }}</view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="npc-item-tab-div tab-css" v-else-if="tabName === tabList[3].name">
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
            <view class="npc-item-tab-div tab-css" v-if="tabName === tabList[4].name">
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
        </view>
        <uv-modal ref="itemModal" :showConfirmButton="false">
            <view class="modal-div">
                <view>{{ chooseItem.chinese }}</view>
                <view>Lv {{ chooseItem.level }}</view>
                <view>￥{{ chooseItem.money }}</view>
                <view class="modal-div-tag" v-if="!!chooseItem.material">
                    <view class="touhou-tag" v-for="item in chooseItem.tag.split(',')" :key="item"> • {{ item.trim() }} </view>
                </view>
                <view class="modal-div-tag" v-if="!!chooseItem.withNo">
                    <view class="touhou-notag-left" v-for="item in chooseItem.withNo.split(',')" :key="item">{{ item.trim() }}</view>
                </view>
                <view class="modal-div-tag" v-if="!chooseItem.material">
                    <view class="drink-tag" v-for="item in chooseItem.tag.split(',')" :key="item"> • {{ item.trim() }} </view>
                </view>
            </view>
        </uv-modal>
    </view>
</template>

<script setup>
    import { ref } from 'vue';
    
    const itemModal = ref('')
    const chooseItem = ref('')
    const openItem = (item) => {
        chooseItem.value = item
        itemModal.value.open()
    }
    
    const back = () => {
        uni.navigateBack()
    }
    
    const tabList = ref([
        {name: '推荐'},
        {name: '烹饪'},
        {name: '饮料'},
        {name: '符卡'},
        {name: '羁绊'},
    ])
    const tabName = ref(tabList.value[0].name)
    const clickTab = (item) => {
        tabName.value = item.name
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
	
	@keyframes masked-animation {
	    0% {
            background-position: 200% 0;
        }
        100% {
            background-position: 0 0;
        }
	}
    .npc-item-tab-div-cook-div-cook-middle-material {
        background: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);
        color: transparent;
        -webkit-background-clip: text;
        background-size: 200% 100%;
        animation-name: masked-animation;
        animation-duration: 2s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }
    
    .npc-item {
        width: 100vw;
        height: calc(100dvh - 10px);
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
            height: 68dvh;
            
            .npc-item-tab-div {
                // min-height: calc(100dvh - 250px);
                height: calc(100dvh - 220px);
                // max-height: calc(100dvh - 250px);
                overflow: auto;
                padding: 5px;
                // background-color: #d7ad95;
                color: #000000;
                background-color: #CFBFA2;
                
                .npc-item-tab-div-recommend-cook {
                    height: 48%;
                    margin: 5px;
                    overflow: auto;
                    
                    .npc-item-tab-div-cook-div-cook {
                        margin: 5px 2px;
                        padding: 5px 5px;
                        height: auto;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        border-radius: 10px;
                        background-color: #FBEFCB;
                
                        .npc-item-tab-div-cook-div-cook-left {
                            width: 50px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                        }
                        
                        .npc-item-tab-div-cook-div-cook-middle {
                            margin-left: 8px;
                            font-size: 14px;
                            width: calc(100vw - 55px);
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            justify-content: space-between;
                            
                            .npc-item-tab-div-cook-div-cook-middle-span {
                                font-weight: bold;
                                font-size: 16px;
                            }
                            .npc-item-tab-div-cook-div-cook-middle-span-money {
                                font-weight: bold;
                            }
                            
                            .cook-div-cook-middle-tag {
                                display: flex;
                                flex-wrap: wrap;
                            }
                        }
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
                
                .npc-item-tab-div-cook-div {
                    width: 100%;
                    height: calc(100dvh - 340px);
                    // min-height: calc(100dvh - 370px);
                    // max-height: calc(100dvh - 370px);
                    overflow: auto;
                    border-radius: 10px;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    align-content: flex-start;
                    justify-content: space-between;
                    align-items: stretch;
                    
                    .npc-item-tab-div-cook-div-cook {
                        width: 45%;
                        margin: 5px 2px;
                        padding: 5px 5px;
                        height: auto;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        border-radius: 10px;
                        background-color: #FBEFCB;
                        
                        .npc-item-tab-div-cook-div-cook-left {
                            width: 50px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                        }
                        
                        .npc-item-tab-div-cook-div-cook-middle {
                            margin-left: 8px;
                            font-size: 14px;
                            width: calc(100vw - 55px);
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            justify-content: space-between;
                            
                            .npc-item-tab-div-cook-div-cook-middle-span {
                                font-weight: bold;
                            }
                            .npc-item-tab-div-cook-div-cook-middle-span-money {
                                font-weight: bold;
                            }
                        }
                    }
                }
                
                .npc-item-tab-div-drinks-tag {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    margin: 5px;
                    height: 60px;
                }
                .npc-item-tab-div-drinks-div {
                    height: calc(100dvh - 290px);
                    // min-height: calc(100dvh - 320px);
                    // max-height: calc(100dvh - 320px);
                    overflow: auto;
                    border-radius: 10px;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    align-content: flex-start;
                    justify-content: space-between;
                    align-items: stretch;
                    
                    .npc-item-tab-div-drinks-div-drink {
                        width: 45%;
                        margin: 5px 2px;
                        padding: 5px 5px;
                        height: auto;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        border-radius: 10px;
                        background-color: #FBEFCB;
                        
                        .npc-item-tab-div-drinks-div-drink-left {
                            width: 50px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                        }
                        
                        .npc-item-tab-div-drinks-div-drink-middle {
                            margin-left: 8px;
                            font-size: 14px;
                            width: calc(100vw - 55px);
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            justify-content: space-between;
                            
                            .npc-item-tab-div-drinks-div-drink-middle-span {
                                font-weight: bold;
                            }
                            .npc-item-tab-div-drinks-div-drink-middle-span-money {
                                font-weight: bold;
                            }
                            
                        }
                    }
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
            .tab-css {
                height: calc(100dvh - 220px);
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
    :deep(.uv-modal) {
        background-color: #fbefcb;
    }
</style>