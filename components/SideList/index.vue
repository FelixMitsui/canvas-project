
<template>
    <div
        class="p-1 h-1/6 flex flex-row border border-black overflow-x-scroll bg-gray-200 md:ml-2 md:w-1/5 md:h-full md:flex-col md:overflow-x-hidden md:overflow-y-scroll md:h-full">
        <div v-if="konva?.groupList.length" v-for="(item, index) in konva.groupList" :key="item.group._id"
            class="p-1 mx-1 text-sm min-w-36 shadow border border-black flex self-center md:m-1 md:min-w-28 md:w-full"><span
                class="grow self-center text-center">{{
                    `元件${item.count}` }}</span>
            <button class="p-1 justify-self-end bg-red-500  shadow text-white rounded-md md:p-2"
                @click="konva?.controller.deleteTargetGroup(index)">刪除</button>
        </div>
        <div v-else class="p-1 mx-1 text-sm flex justify-center"><span>畫布目前沒有元件</span>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import KonvaJS from '~/utils/konva';

const { konva } = defineProps({
    konva: KonvaJS
})
</script>
    
<style></style>