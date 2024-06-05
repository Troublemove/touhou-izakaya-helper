<template>
    <view class="drinks" :style="{ height: drinkHeight - 55 + 'px' }">
		<view class="drinks-tag">
			<view class="drink-tag" v-for="item in drinksTags" :key="item" @click="filterDrinks(item)">
				 {{ item }}
				 <view v-if="drinksFilter.has(item)" class="drink-tag-select"></view>
			</view>
		</view>
		<cook-view :type="'drink'" :cookShow="npcDrinks" :cookFilter="drinksFilter"></cook-view>
    </view>
	<tab-bar :selected="2"></tab-bar>
</template>

<script setup>
    import { ref, nextTick } from 'vue';
    import tabBar from '@/components/tab-bar/tabBar.vue'
	import cookView from '@/components/cookView.vue'
    import { onShow, onLoad } from '@dcloudio/uni-app'
    import { initCache } from '@/static/js/common.js'

    const drinkHeight = ref('')
    nextTick(() => {
		drinkHeight.value = uni.getSystemInfoSync().windowHeight
    })
    onShow(() => {
		// if (!!drinksTags) {
		// 	drinksTags.value = uni.getStorageSync('drinkTagData')
		// }
		// if (!!drinks) {
		// 	drinks.value = uni.getStorageSync('drinksData')
		// }
    })
    
    const drinksTags = ref(uni.getStorageSync('drinkTagData'))
    const drinks = ref(uni.getStorageSync('drinksData'))
    const npcDrinks = ref([])
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
</script>

<style lang="scss" scoped>
    .drinks {
        width: 100vw;
        display: flex;
        flex-direction: column;
        background-color: #8D6549;
		
		.drinks-tag {
			width: 96%;
			height: 170px;
			margin: 10px;
			display: flex;
			flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            
            .drink-tag {
                width: 60px;
                height: 20px;
                margin: 3px 2px;
                justify-content: center;
                font-size: 15px;
            }
		}
    }
</style>