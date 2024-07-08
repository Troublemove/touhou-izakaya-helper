// 通用js
import { npcData } from './npc.js'
import { locationData } from './location.js'
import { drinksData } from './drinks.js'
import { cookData } from './cook.js'
import { materialData } from './material.js'
import { drinkTagData, cookTagData } from './tag.js'
    
// 初始化缓存
export const initCache = () => {
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
    const materialDatas = uni.getStorageSync('materialData')
    if (!materialDatas) {
        uni.setStorageSync('materialData', materialData())
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
