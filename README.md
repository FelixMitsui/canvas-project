# Canvas 作業

![首頁](https://github.com/FelixMitsui/canvas-project/blob/main/assets/images/canvas動畫.gif?raw=true)


## 簡介

使用了konvajs套件完成這次試題，組件只要呼叫在pinia實例化的konva，
就能操作畫布相關功能。

## 需求

1.拖曳元件

關鍵在目標屬性的draggable屬性必須為true，那麼該對象就能在畫布內移動。

2.點擊兩下元件顯示alter提示

點擊元件的同時利用selectTarget指向該對象，並監聽該對象的dblclick事件，
只要觸發了事件，就更新對象內文字的內容。

3.側欄顯示元件清單，點擊刪除鈕清除當前元件

利用groupList陣列存取新增的元件，如此，就能在組件上顯示。刪除時，依照索引刪除groupList內的元件。
