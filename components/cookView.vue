<template>
	<view class="cook-div">
	    <view class="cook-div-cook" v-for="item in props.cookShow" :key="item.chinese">
			<cook-bar :type="props.type" :cookItem="item" :cookFilter="cookFilter"></cook-bar>
	    </view>
	</view>
</template>

<script setup>
    import { ref } from 'vue'
	import cookBar from '@/components/cookBar.vue'
	
	const props = defineProps({
		// 类型：料理，饮料
		type: {
	        type: String,
			default: 'cook',
			require: true
		},
		// 展示料理
		cookShow: {
	        type: Object,
			default: true,
		},
		// tagFilter
		cookFilter: {
	        // type: Object,
			require: true,
		}
	})
</script>

<style lang="scss" scoped>
	.cook-div {
	    flex: 1;
	    margin: 5px;
	    overflow: scroll;
	    display: flex;
	    align-items: center;
	    flex-direction: column;
	    border-radius: 15px;
	    
	    .cook-div-cook {
	        width: 94%;
	        margin: 5px 2px;
	        padding: 5px 5px;
	        height: auto;
	        display: flex;
	        align-items: center;
	        justify-content: space-between;
	        border-radius: 10px;
	        background-color: #d4aa76;
			border: 2px solid rgb(165, 115, 66);
	    }
	}
	.cook-div::-webkit-scrollbar {
		display: none;
	}
</style>