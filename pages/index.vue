<template>
    <div class="w-full h-full bg-gray-700">
        <section class="h-1/6 flex">
            <button class="mx-3 p-2 text-sm border bg-blue-400 rounded-md font-bold self-center"
                @click="konva.newGroup">新增元件</button>
        </section>
        <section class="p-1 h-5/6 flex flex-col-reverse md:flex-row">
            <div id="canvas" class=" mb-2 w-full h-5/6 border border-black md:ml-2 md:mr-2 md:w-4/5 md:h-full "></div>
            <SideList :konva="konva" />
        </section>
    </div>
</template>
  
<script setup lang="ts">
import { onMounted } from 'vue';
import useKonvaStore from '../store/modules/konva';
const { konva } = useKonvaStore()

onMounted(() => {
    konva.init()

    window.onresize = () => {
        konva.controller.onresize()
    }
})
</script>

<style scoped lang="scss">
#canvas {
    background-image: url('@/assets/images/bg-dragon.png');
    background-position: center;
    background-size: cover;
}
</style>
  