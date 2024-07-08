<template>
	<view class="cook-bar" v-if="props.type === 'cook'"  @click="openItem(props.cookItem)">
		<view class="cook-bar-left">
			<image :src="'/static/img/cook/' + props.cookItem.name + '.png'" :style="props.imgSize" mode="scaleToFill" lazy-load="true"/>
			<image :src="'/static/img/common/' + props.cookItem.cooker + '.png'" :style="props.imgSize" mode="scaleToFill" lazy-load="true"/>
		</view>
		<view class="cook-bar-middle">
			<view>
				<span class="cook-bar-middle-span">{{ props.cookItem.chinese }}</span>
				<span class="cook-bar-middle-span-money"> ￥{{ props.cookItem.money }}</span>
				<span class="cook-bar-middle-span-from"> - Lv {{ props.cookItem.level }} ({{ props.cookItem.from }}) </span>
			</view>
			<view>
				<span class="cook-bar-middle-span-from">({{ props.cookItem.time }}s) {{ props.cookItem.material }}
					<text class="npc-item-tab-div-cook-div-cook-middle-material" v-if="!!props.recommandCook">* {{ props.recommandCook }}</text>
				</span>
			</view>
			<view class="cook-bar-middle-tag">
				<view class="touhou-tag" v-for="tag in props.cookItem.tag.split(',')" :key="tag">
					{{ tag.trim() }}
					<view v-if="!props.isRecommand && props.cookFilter.has(tag.trim())" class="touhou-tag-select"></view>
					<view v-if="props.isRecommand && props.cookFilter.includes(tag.trim())" class="touhou-tag-select"></view>
					<view v-if="!!props.cookNoFilter && props.cookNoFilter.includes(tag.trim())" class="touhou-tag-left-noselect"></view>
				</view>
			</view>
			<view class="cook-bar-middle-tag" v-if="!!props.cookItem.withNo"><view class="touhou-notag-left" v-for="tag in props.cookItem.withNo.split(',')" :key="tag">{{ tag.trim() }}</view></view>
		</view>
	</view>
	<view class="cook-bar" v-if="props.type === 'drink'" @click="openItem(props.cookItem)">
		<view class="cook-bar-left">
			<image :src="'/static/img/drink/' + props.cookItem.name + '.png'" style="width: 40px; height: 40px;" mode="scaleToFill" lazy-load="true"/>
		</view>
		<view class="cook-bar-middle">
			<view>
				<span class="cook-bar-middle-span">{{ props.cookItem.chinese }}</span>
				<span class="cook-bar-middle-span-money"> ￥{{ props.cookItem.money }}
				</span> - Lv {{ props.cookItem.level }}
			</view>
			<view class="cook-bar-middle-tag">
				<view class="drink-tag" v-for="drink in props.cookItem.tag.split(',')" :key="drink">
					{{ drink.trim() }}
					<view v-if="!props.isRecommand && props.cookFilter.has(drink.trim())" class="touhou-tag-select"></view>
					<view v-if="props.isRecommand && props.cookFilter.includes(drink.trim())" class="touhou-tag-select"></view>
				</view>
			</view>
		</view>
	</view>
	
	<uv-modal ref="itemModal" :showConfirmButton="false">
	    <view class="modal-div">
	        <view>{{ chooseItem.chinese }}</view>
	        <view>Lv {{ chooseItem.level }}</view>
	        <view>￥{{ chooseItem.money }}</view>
	        <view class="modal-div-tag" v-if="!!chooseItem.tag">
	            <view class="touhou-tag" v-for="item in chooseItem.tag?.split(',')" :key="item"> • {{ item.trim() }} </view>
	        </view>
	        <view class="modal-div-tag" v-if="!!chooseItem.withNo">
	            <view class="touhou-notag-left" v-for="item in chooseItem.withNo?.split(',')" :key="item">{{ item.trim() }}</view>
	        </view>
	        <view class="modal-div-tag" v-if="!chooseItem.material">
	            <view class="drink-tag" v-for="item in chooseItem.material?.split(',')" :key="item"> • {{ item.trim() }} </view>
	        </view>
	    </view>
	</uv-modal>
</template>

<script setup>
    import { ref } from 'vue'
	
	const props = defineProps({
		// 类型：料理，饮料
		type: {
	        type: String,
			default: 'cook',
			require: true
		},
		// 是否推荐料理
		isRecommand: {
	        type: Boolean,
			default: false,
		},
		// 推荐料理加料
		recommandCook: {
	        type: String,
		},
		imgSize: {
			type: Object,
			default: {width: '40px', height: '40px'}
		},
	    cookItem: {
	        type: Object,
			require: true,
	    },
		// 喜好tag
		cookFilter: {
	        // type: Object,
			require: true,
		},
		// 推荐料理的厌恶tag
		cookNoFilter: {
			default: ''
		}
	})
	
	const itemModal = ref('')
	const chooseItem = ref('')
	const openItem = (item) => {
	    // chooseItem.value = item
	    // itemModal.value.open()
	}
</script>

<style lang="scss" scoped>
	
	@keyframes masked-animation {
	    0% {
	        background-position: 200% 0;
	    }
	    100% {
	        background-position: 0 0;
	    }
	}
	.tag-animation {
	    background: linear-gradient(to right, #d3aa76 0%, #d37535 19%, #830000 42%, #e6a06b 79%, #a57342 100%);
	    background-size: 200%;
	    animation-name: masked-animation;
	    animation-duration: 2s;
	    animation-timing-function: ease-in-out;
	    animation-iteration-count: infinite;
	}
	.npc-item-tab-div-cook-div-cook-middle-material {
	    background: linear-gradient(to right, #d3aa76 0%, #d37535 19%, #830000 42%, #e6a06b 79%, #a57342 100%);
	    color: transparent;
	    -webkit-background-clip: text;
	    background-size: 200% 100%;
	    animation-name: masked-animation;
	    animation-duration: 2s;
	    animation-timing-function: ease-in-out;
	    animation-iteration-count: infinite;
	}
	
	.cook-bar {
	    width: 90vw;
	    // width: 90%;
	    margin: 2px 0px;
	    height: auto;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    border-radius: 10px;
	    background-color: #d3aa76;
	    
	    .cook-bar-left {
	        width: 50px;
	        display: flex;
	        flex-direction: column;
	        justify-content: space-between;
	    }
	    
	    .cook-bar-middle {
	        margin: 0 5px;
	        font-size: 14px;
	        width: calc(100vw - 55px);
	        display: flex;
	        flex-direction: column;
	        align-items: flex-start;
	        justify-content: space-between;
	        
	        .cook-bar-middle-span {
	            font-weight: bold;
	            font-size: 16px;
	        }
	        .cook-bar-middle-span-money {
	            font-weight: bold;
	        }
			.cook-bar-middle-span-from {
	            font-size: 12px;
			}
	        
	        .cook-bar-middle-tag {
	            display: flex;
	            flex-wrap: wrap;
	        }
	    }
	}
        
	.modal-div {
		width: 100%;
		// background-color: #fbefcb;
		
		.modal-div-tag {
			padding: 5px 5px;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
		}
	}
    :deep(.uv-modal) {
        background-color: #fbefcb;
    }
</style>