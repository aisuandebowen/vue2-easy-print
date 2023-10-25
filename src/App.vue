<!--
 * @Author: cbw
 * @Date: 2023-10-22 10:42:01
 * @LastEditors: cbw
 * @LastEditTime: 2023-10-25 19:11:38
 * @Description: 
-->
<template>
  <div id="app">
    <div id="content">
      <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    <button @click="onCLick">点击</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import print from './vue2-easy-print/index'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    onCLick(){
      print('content')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
