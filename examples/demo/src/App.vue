<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <div v-html="content"></div>

    <!-- <div v-html="$xss(content)"></div> -->
    <!-- <iframe onload=alert('XSS-TEST')> 过滤后输出为：<iframe></iframe> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: '<iframe onload=alert("XSS-TEST")></iframe>',
      // content: '<iframe src=javascript:alert("XSS-TEST")></iframe>'
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
