<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <p>before</p>
    <div v-html="content"></div>

    <p>after</p>
    <div v-html="$xss(filterContent)"></div>
    <!-- <iframe onload=alert('after-XSS-TEST')> 过滤后输出为：<iframe></iframe> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: '<iframe onload=alert("before-XSS-TEST")></iframe>',
      filterContent: '<iframe src=javascript:alert("after-XSS-TEST")></iframe>'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
