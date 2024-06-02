<template>
    <view class="tab-bar">
        <uv-tabbar :value="props.selected" @change="changeTab">
            <uv-tabbar-item v-for="item in tabBarList" :key="item.id">
                <template v-slot:active-icon>
                    <image :src="item.selectedIconPath" style="border-radius: 30px; width: 60px; height: 60px;" mode="scaleToFill"/>
                </template>
                <template v-slot:inactive-icon>
                    <image :src="item.iconPath" style="border-radius: 30px; width: 50px; height: 50px;" mode="scaleToFill"/>
                </template>
            </uv-tabbar-item>
        </uv-tabbar>
    </view>
</template>

<script setup>
    import {
        ref
    } from 'vue'

    const props = defineProps({
        selected: {
            type: Number,
            default: 0
        }
    })
    const tabBarList = ref([{
        "id": 0,
        "pagePath": "/pages/npc",
        "iconPath": "/static/img/common/npc-1.png",
        "selectedIconPath": "/static/img/common/npc-0.png",
        "text": ""
    }, {
        "id": 1,
        "pagePath": "/pages/cook",
        "iconPath": "/static/img/common/food-1.png",
        "selectedIconPath": "/static/img/common/food-0.png",
        "text": ""
    }, {
        "id": 2,
        "pagePath": "/pages/drinks",
        "iconPath": "/static/img/common/drinks-1.png",
        "selectedIconPath": "/static/img/common/drinks-0.png",
        "text": ""
    }, {
        "id": 3,
        "pagePath": "/pages/setting",
        "iconPath": "/static/img/common/setting-1.png",
        "selectedIconPath": "/static/img/common/setting-0.png",
        "text": ""
    }])
    
    const changeTab = (index) => {
        uni.switchTab({ url: tabBarList.value[index].pagePath })
    }

    // 隐藏原生tabBar
    uni.hideTabBar()
</script>

<style lang="scss" scoped>
    :deep(.uv-tabbar__content) {
        background-color: #8D6549;
    }
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
</style>