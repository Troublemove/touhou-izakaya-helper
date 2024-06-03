<template>
    <view class="npc" :style="{ height: screenHeight - 44 + 'px' }">
        <view class="tag-filter">
            <view class="touhou-tag" @click="selectLocation('全部')">
                全部
                <view v-if="locationFilter.has('全部')" class="touhou-tag-select"></view>
            </view>
            <uv-scroll-list class="tag-scroll" :indicator="false" >
                <view class="touhou-tag" v-for="item in locations" :key="item" @click="selectLocation(item)">
                    {{ item }}
                    <view v-if="locationFilter.has(item)" class="touhou-tag-select"></view>
                </view>
            </uv-scroll-list>
        </view>
        <view class="npc-area">
            <view class="npc-area-img" :style="{ height: screenHeight - 95 + 'px' }">
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
    import { ref, nextTick } from "vue";
    import tabBar from '@/components/tab-bar/tabBar.vue'
    import { onPageScroll } from '@dcloudio/uni-app'
    import { onShow } from '@dcloudio/uni-app'
    import { initCache } from '@/static/js/common.js'

	const screenHeight = ref('')
	nextTick(() => {
	    screenHeight.value = uni.getSystemInfoSync().windowHeight
	})
    onShow(() => {
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

    initCache()
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
    .npc {
        background-color: #8D6549;
        
        .tag-filter {
            // left: 0;
            // right: 0;
            // top: 0;
            // background-color: #8d6549;
            // position: fixed;
        }

        .npc-area {
            padding: 2px 5px;
            background-color: #8D6549;

            .npc-area-img {
                overflow: auto;
                display: grid;
                justify-content: space-evenly;
                justify-items: center;
                grid-template-columns: repeat(auto-fill, 80px);
                grid-template-rows: repeat(auto-fill, 110px);
                border-radius: 15px;
                box-shadow: inset 0px 0px 10px 1px #000000;

                .npc-img {
                    width: 76px;
                    height: 100px;
                    margin: 10px 10px;
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
	:deep(.uv-tabbar__placeholder) {
		display: none;
	}
</style>