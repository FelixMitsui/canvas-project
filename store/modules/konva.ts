import { defineStore } from 'pinia'
import type { IKonvaState } from './types/konva'
import KonvaJS from '@/utils/konva/index'
const useKonvaStore = defineStore('GraphStore', {
  state: (): IKonvaState => {
    return {
      konva: new KonvaJS('canvas'),
    }
  },
})

export default useKonvaStore
