<template>
    <view class="drinks">
		<view class="drinks-tag">
			<view class="drink-tag" v-for="item in drinksTags" :key="item" @click="filterDrinks(item)">
				 • {{ item }}
				 <view v-if="drinksFilter.has(item)" class="drink-tag-select"></view>
			</view>
		</view>
		<view class="drinks-div">
			<view class="drinks-div-drink" v-for="item in npcDrinks" :key="item.name">
				<view class="drinks-div-drink-left">
                    <image :src="'/static/img/drink/' + item.name + '.png'" style="width: 40px; height: 40px;" mode="scaleToFill"/>
				</view>
				<view class="drinks-div-drink-middle">
					<view><span class="drinks-div-drink-middle-span">{{ item.chinese }}</span><span class="drinks-div-drink-middle-span-money"> ￥{{ item.money }}</span> - Lv {{ item.level }}</view>
					<!-- <view></view> -->
                    <view class="drinks-div-drink-middle-tag">
                        <view class="drink-tag" v-for="drink in item.tag.split(',')" :key="drink">{{ drink.trim() }}<view v-if="drinksFilter.has(drink.trim())" class="drink-tag-select"></view></view>
                    </view>
				</view>
			</view>
		</view>
    </view>
	<tab-bar :selected="2"></tab-bar>
</template>

<script setup>
    import { ref } from 'vue';
    import tabBar from '@/components/tab-bar/tabBar.vue'
    import { onShow } from '@dcloudio/uni-app'
    import { initCache } from '@/static/js/common.js'

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
            height: calc(100dvh - 230px);
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
				padding: 5px 5px;
				height: auto;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-radius: 10px;
				background-color: #FBEFCB;
				
				.drinks-div-drink-left {
					width: 50px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
				}
				
				.drinks-div-drink-middle {
					margin-left: 8px;
					font-size: 14px;
					width: calc(100vw - 55px);
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: space-between;
					
					.drinks-div-drink-middle-span {
						font-weight: bold;
                        font-size: 16px;
					}
					.drinks-div-drink-middle-span-money {
						font-weight: bold;
					}
					
                    .drinks-div-drink-middle-tag {
                        display: flex;
                        flex-wrap: wrap;
                    }
				}
			}
		}
    }
</style>