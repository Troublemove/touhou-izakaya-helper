<template>
    <view class="npc">
        <view class="npc-filter">
            <view class="touhou-tag" @click="selectLocation('全部')">
                全部
                <view v-if="locationFilter.has('全部')" class="touhou-tag-select"></view>
            </view>
            <scroll-view class="npc-scroll" scroll-x="true" scroll-left="0" :show-scrollbar="false">
                <view class="touhou-tag" v-for="item in locations" :key="item" @click="selectLocation(item)">
                    {{ item }}
                    <view v-if="locationFilter.has(item)" class="touhou-tag-select"></view>
                </view>
            </scroll-view>
        </view>
        <view class="npc-area">
            <view class="npc-area-img">
                <view class="npc-img" v-for="(item, index) in npc" :key="item.name" @click="openNpcItem(item)">
                    <img :src="'static/img/npc/' + item.name + '.png'" style="width: 76px; height: 100px;" mode="scaleToFill" @error="imageError(index)" />
                </view>
            </view>
        </view>
        <view class="top-back" @click="topBack" v-if="topBackShow">
            <view class="arrow"></view>
            <view class="stick"></view>
        </view>
    </view>
    <tab-bar :selected="0"></tab-bar>
</template>

<script setup>
    import { ref } from "vue";
    import tabBar from '@/components/tab-bar/tabBar.vue'
    import { onPageScroll } from '@dcloudio/uni-app'
    import { onShow } from '@dcloudio/uni-app'
    import { initCache } from '@/static/js/common.js'

    onShow(() => {
        initCache()
		if (!!locations) {
			locations.value = uni.getStorageSync('locationData')
		}
		if (!!npcs) {
			npcs.value = uni.getStorageSync('npcData')
		}
        let location = '全部'
        locationFilter.value.forEach(item => {
            location = item
        })
        locationFilter.value.clear()
        selectLocation(location)
    })

    const imageError = (index) => {
        // npc.value[index].name = 'wss'
        // e.target.src = '/static/img/npc/wss.png'
    }

    // 上层组件方法
    const emits = defineEmits(["openItem"]);

    const locations = ref(uni.getStorageSync('locationData'))
    const npcs = ref(uni.getStorageSync('npcData'))
    const selectAll = ref(true)
    const locationFilter = ref(new Set())

    const npc = ref([])
    const selectLocation = (item) => {
        if ('全部' !== item) {
            if (locationFilter.value.has(item)) {
                locationFilter.value.delete(item)
                locationFilter.value.clear()
                locationFilter.value.add('全部')
                npc.value = npcs.value
                return
            } else {
                locationFilter.value.clear()
                locationFilter.value.add(item)
            }
            npc.value = npcs.value.filter(npc => {
                let locationList = npc.location.split(",")
                let filter = [...locationFilter.value].concat()
                locationList.forEach(location => {
                    filter = filter.filter(item => item !== location.trim())
                })
                return filter.length === 0
            })
        } else{
            locationFilter.value.clear()
            locationFilter.value.add(item)
            npc.value = npcs.value
        }
    }

    // 打开npc详情页面
    const openNpcItem = (npc) => {
        uni.setStorageSync('selectNpc', npc)
        uni.navigateTo({
            url: '/pages/npcItem'
        })
    }
    
    const topBackShow = ref(false)
    onPageScroll(e => {
        if (e.scrollTop >= 300) {
            topBackShow.value = true
        } else {
            topBackShow.value = false
        }
    })  
    const topBack = () => {
        uni.pageScrollTo({
            scrollTop: 0,   // 滚动到页面的目标位置  这个是滚动到顶部, 0 
            duration: 150  // 滚动动画的时长
        })
    }
</script>

<style lang="scss" scoped>
    .top-back {
        width: 40px;
        height: 40px;
        position: fixed;
        right: 15px;
        bottom: 80px;
        border-radius: 30px;
        border: 1px solid #fbefcb;
        background-color: #8D6549;
        
        .arrow {
            position: absolute;
            left: 11px;
            top: -1px;
            width: 0;
            height: 0;
            border: 9px solid transparent;
            border-bottom-color: #fbefcb;
        }
        .stick {
            position: absolute;
            left: 16px;
            top: 15px;
            width: 8px;
            height: 14px;
            display: block;
            background-color: #fbefcb;
            -webkit-border-radius: 1px;
            -moz-border-radius: 1px;
            border-radius: 1px;
        }
    }
    
    .touhou-tag {
        display: inline-block;
        margin: 5px 4px;
        padding: 2px 8px;
        color: #830000;
        background-color: inherit;
        background-image: url('/static/img/common/tag.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        box-shadow: inset 0px 0px 10px 1px #E6B4A6;
        position: relative;
    }

    .touhou-tag-select::after {
        content: '';
        width: 5px;
        height: 15px;
        position: absolute;
        right: 5px;
        bottom: 0px;
        border: 3px solid #E40D0D;
        border-top-color: transparent;
        border-left-color: transparent;
        transform: rotate(45deg);
    }
    
    :deep(.uni-scroll-view::-webkit-scrollbar) {
        display: none;
    }
    
    body {
        background-color: #8D6549;
    }
    .npc {
        background-color: #8D6549;

        .npc-filter {
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

        .npc-area {
            padding: 10px 5px;
            background-color: #8D6549;

            .npc-area-img {
                // height: calc(100vh - 125px);
                min-height: calc(100vh - 140px);
                overflow: auto;
                display: grid;
                justify-content: space-evenly;
                justify-items: center;
                grid-template-columns: repeat(auto-fill, 80px);
                grid-template-rows: repeat(auto-fill, 110px);
                border-radius: 15px;
                // background-color: #8D6549;
                box-shadow: inset 0px 0px 10px 1px #000000;

                .npc-img {
                    width: 76px;
                    // width: calc((100% - 50px) / 4);
                    height: 100px;
                    margin: 10px 10px;
                    // background-color: #8D6549;
                }
            }
        }

        .npc-area::-webkit-scrollbar {
            display: none;
        }
        .npc-area-img::-webkit-scrollbar {
            display: none;
        }
    }
</style>