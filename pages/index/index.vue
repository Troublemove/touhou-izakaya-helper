<template>
	<view class="content">
        <npc></npc>
	</view>
</template>

<script setup>
    import tabBar from '@/components/tab-bar/tabBar.vue'
    import npc from '@/pages/npc.vue'
    import { ref } from "vue"
    import { npcData } from '@/static/js/npc.js'
    import { locationData } from '@/static/js/location.js'
    import { drinksData } from '@/static/js/drinks.js'
    import { cookData } from '@/static/js/cook.js'
    import { drinkTagData, cookTagData } from '@/static/js/tag.js'
    
	const initCache = () => {
		// 读取缓存数据
		const npcDatas = uni.getStorageSync('npcData')
		if (!npcDatas) {
		    uni.setStorageSync('npcData', npcData())
		}
		const locationDatas = uni.getStorageSync('locationData')
		if (!locationDatas) {
		    uni.setStorageSync('locationData', locationData())
		}
		const drinksDatas = uni.getStorageSync('drinksData')
		if (!drinksDatas) {
		    uni.setStorageSync('drinksData', drinksData())
		}
		const cookDatas = uni.getStorageSync('cookData')
		if (!cookDatas) {
		    uni.setStorageSync('cookData', cookData())
		}
		const drinkTagDatas = uni.getStorageSync('drinkTagData')
		if (!drinkTagDatas) {
		    uni.setStorageSync('drinkTagData', drinkTagData())
		}
		const cookTagDatas = uni.getStorageSync('cookTagData')
		if (!cookTagDatas) {
		    uni.setStorageSync('cookTagData', cookTagData())
		}
	}
	
	// 重新加载缓存
	const clearCache = () => {
		uni.clearStorageSync()
		initCache()
	}
	clearCache()
	initCache()
</script>

<style lang="scss">
	.content {
        height: 100%;
        background-color: #8D6549;
	}
    
    :deep(.uv-tabbar__content) {
        background-color: #8D6549;
    }
    
</style>
