<template>
    <view class="drinks">
		<view class="drinks-tag">
			<view class="drink-tag" v-for="item in drinksTags" :key="item" @click="filterDrinks(item)">
				 • {{ item }}
				 <view v-if="drinksFilter.has(item)" class="drink-tag-select"></view>
			</view>
		</view>
		<view class="drinks-div" :style="{ height: drinkHeight - 65 + 'px' }">
			<view class="drinks-div-drink" v-for="item in npcDrinks" :key="item.name">
				<cook-bar :type="'drink'" :cookItem="item" :cookFilter="drinksFilter"></cook-bar>
			</view>
		</view>
    </view>
	<tab-bar :selected="2"></tab-bar>
</template>

<script setup>
    import { ref, nextTick } from 'vue';
    import tabBar from '@/components/tab-bar/tabBar.vue'
	import cookBar from '@/components/cookBar.vue'
    import { onShow, onLoad } from '@dcloudio/uni-app'
    import { initCache } from '@/static/js/common.js'

    const drinkTagHeight = ref(0)
    const drinkHeight = ref('')
    nextTick(() => {
		uni.createSelectorQuery().selectAll('.drinks-tag').boundingClientRect(data => {
			drinkTagHeight.value = data[0].height
			drinkHeight.value = uni.getSystemInfoSync().windowHeight - drinkTagHeight.value
		}).exec()
    })
    onShow(() => {
		if (!!drinksTags) {
			drinksTags.value = uni.getStorageSync('drinkTagData')
		}
		if (!!drinks) {
			drinks.value = uni.getStorageSync('drinksData')
		}
        filterDrinks('')
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
</script>

<style lang="scss" scoped>
    .drinks {
        width: 100vw;
        background-color: #8D6549;
		
		.drinks-tag {
			width: 96%;
			padding: 10px;
			display: flex;
			flex-wrap: wrap;
		}
		
		.drinks-div {
			width: 98vw;
			padding: 4px;
            border-radius: 10px;
			overflow: auto;
			// display: flex;
			// flex-direction: row;
			// flex-wrap: wrap;
			// align-content: flex-start;
			// justify-content: flex-start;
			// align-items: flex-start;
			
			.drinks-div-drink {
				// width: 45%;
				margin: 5px 2px;
				padding: 0px 5px;
				height: auto;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-radius: 10px;
				background-color: #d4aa76;
				border: 2px solid rgb(165, 115, 66);
			}
		}
    }
</style>