---
lastUpdated: false
---

# 常见面试汇总

## 移动端像素 1px 问题

- 因为设备物理像素的不同导致代码中的逻辑像素会映射变大,每个设备的屏幕尺寸不一样，就导致每个物理像素渲染出来的大小也不同

  - 使用 `transform:scale(0.5)`来解决

  ```javascript
  div {
      height:1px;
      background:#000;
      -webkit-transform: scaleY(0.5);
      -webkit-transform-origin:0 0;
      overflow: hidden;
  }
  ```

  - css 根据设备像素比媒体查询后解决

  ```javascript
  /* 2倍屏 */
  @media only screen and (-webkit-min-device-pixel-ratio: 2.0) {
      .border-bottom::after {
          -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
      }
  }

  /* 3倍屏 */
  @media only screen and (-webkit-min-device-pixel-ratio: 3.0) {
      .border-bottom::after {
          -webkit-transform: scaleY(0.33);
          transform: scaleY(0.33);
      }
  }
  ```
