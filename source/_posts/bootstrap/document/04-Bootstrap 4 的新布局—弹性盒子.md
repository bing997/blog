---
title: 04-Bootstrap 4 的新布局—弹性盒子
date: 2024-08-15T20:38:08+08:00
tags:
    - bootstrap
    - 教程
categories: bootstrap
cover:  https://bing997.github.io/blog/images/cover04.png
index_enable: true # 是否显示文章封面
aside_enable: true 
archives_enable: true 
position: both  # 封面显示的位置 三个值可配置left , right , both 
default_cover:   # 当没有设置cover时，默认的封面显示
sticky: false  # 设置为 true 即可置顶
description: "bootstrap"
---
## Bootstrap 4 的新布局—弹性盒子

本章内容集中讲解了Bootstrap 4引入的弹性盒子布局（Flexbox），这是一个强大的CSS布局模型，能够在复杂的网页布局中提供更灵活和高效的解决方案

### 定义弹性盒子
+ **弹性盒子（Flexbox）**：是CSS3的布局模型，旨在通过提供更灵活的方式来排列和对齐容器内的元素。Bootstrap 4 利用 Flexbox 实现了更灵活和响应式的布局。
+ **基础结构**：通过为父元素应用 `d-flex` 类来激活 Flexbox 布局，容器内的直接子元素即为弹性盒项目。

```html
```

### 排列方向

#### 水平方向排列
+ `flex-direction: row;`：设置子元素沿水平方向（行）排列，这是 Flexbox 的默认行为。
#### 垂直方向排列
+ `flex-direction: column;`：将子元素设置为沿垂直方向（列）排列。

### 内容排列
+ **`justify-content` 属性**：控制子元素在主轴（通常是水平方向）上的排列方式。常见的选项有：
    + `flex-start`: 子元素从容器的起始位置开始排列。
    + `flex-end`: 子元素从容器的结束位置开始排列。
    + `center`: 子元素在容器内居中排列。
    + `space-between`: 子元素之间均匀分布，第一个元素与最后一个元素分别贴齐容器的两端。
    + `space-around`: 子元素之间及子元素与容器两端均匀分布空白。

### 项目对齐
+ **`align-items` 属性**：控制子元素在交叉轴（通常是垂直方向）上的对齐方式。常见的选项有：
    + `flex-start`: 子元素与容器的起始位置对齐。
    + `flex-end`: 子元素与容器的结束位置对齐。
    + `center`: 子元素在容器内居中对齐。
    + `baseline`: 子元素的基线对齐。
    + `stretch`: 子元素被拉伸以适应容器的高度（如果未设置固定高度）。

### 自动对齐
+ **自动对齐**：使用 `auto` 和 `align-self` 属性，可以为单个项目设置不同于其他项目的对齐方式。

+ **`align-self` 属性**：用于覆盖单个项目的对齐方式，使其与其他项目不同。选项与 `align-items` 类似。

### 自动相等
+ **自动相等（Equal Widths）**：通过 `flex-grow` 属性，所有项目可以自动均匀地分布在可用空间内，使每个项目的宽度相等。

+ **`flex-grow`: 1;**：为所有项目均分容器中的可用空间。

### 等宽变换
+ **等宽变换（Equal Width Transformation）**：通过将子元素设置为 `flex-grow: 1`;，使其均匀分布可用空间。这种变换特别适用于导航栏、按钮组等需要等宽的元素。


### 自动浮动

#### 水平方向浮动
+ **水平方向浮动**：在 Flexbox 中，可以通过 `auto margins` 实现自动对齐和浮动效果。将 `margin-left: auto`; 应用于子元素，可以使其自动浮动到容器的右侧。

#### 垂直方向浮动
+ **垂直方向浮动**：类似的，通过设置 `margin-top: auto`; 可以将子元素浮动到容器的底部。

### 弹性布局—包裹
+ **弹性包裹（Flex Wrap）**：控制当子元素超出容器宽度时，是否换行显示。
    + `flex-wrap: nowrap`;：不换行，所有项目将在一行内显示，可能会超出容器范围。
    + `flex-wrap: wrap`;：允许换行，子元素将在新行中继续排列。

### 排列顺序
+ **排列顺序（Order）**：通过 `order` 属性，可以重新排列子元素的显示顺序，而不改变HTML结构中的顺序。

+ **order 属性**：默认值为 0，可以设置为正数、负数或其他值，数值越小，排列越靠前。

### 对齐内容
+ **对齐内容（Align Content）**：当存在多行或多列时，`align-content` 属性用于控制整个内容的垂直对齐方式。
    + `flex-start`: 各行/列从容器的顶部开始排列。
    + `flex-end`: 各行/列从容器的底部开始排列。
    + `center`: 各行/列在容器内居中排列。
    + `space-between`: 各行/列在容器内均匀分布，第一行和最后一行贴齐容器两端。
    + `space-around`: 各行/列在容器内均匀分布，包括行/列与容器边界之间的空间。
