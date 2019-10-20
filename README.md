# vue-xss

![npm](https://img.shields.io/npm/v/vue-xss)
![NPM](https://img.shields.io/npm/l/vue-xss)

> 一个Vue.js插件，可通过简单的方式防止XSS攻击

有任何问题欢迎发布 issue，我会在看到后第一时间回复大家。如果觉得还不错的话，不要吝啬你的 star 哦~

## 安装

推荐使用npm安装

```bash
npm i vue-xss
```

## 使用

```js
// main.js
import VueXss from 'vue-xss'
Vue.use(VueXss)
```

```html
<!-- *.vue -->
<div v-html="$xss(content)"></div>
```

## 自定义配置项

> 支持 js-xss 的自定义规则，可通过 options 对象形式传入实例， 具体请点击 [js-xss](https://github.com/leizongmin/js-xss) 查看

## 示例

```js
// mani.js
var options = {
  // 默认白名单参考 xss.whiteList
  whiteList: {
    a: ['href', 'style'],
    img: ['src', 'alt'],
    ...
  },
  stripIgnoreTagBody: ['script', 'style'],
  onTagAttr: function () {
    // todo
  },
  ...
}

import VueXss from 'vue-xss'
Vue.use(VueXss, options)
```

```js
<!-- *.vue -->

<template>
  <div v-html="$xss(content)"></div>
<template>

<script>

export default {
  data () {
    return{
      content: '<h1>Hello World</h1>'
    }
  },
  ...
}

</script>
```

## 鸣谢

感谢 js-xss 作者的支持 @ [leizongmin](https://github.com/leizongmin)

## LICENSE

[MIT](./LICENSE)
