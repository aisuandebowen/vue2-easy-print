<!--
 * @Author: cbw
 * @Date: 2023-10-22 10:42:19
 * @LastEditors: cbw
 * @LastEditTime: 2023-10-25 21:30:28
 * @Description: 
  -->
# vue2-easy-print
基于vue2的打印，开箱即用。

## To-Do List
+ 图片、src等异步资源加载
+ 打印定位异常

## Usage

```vue
<template>
  <div id="app">
    <div id="content">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    <button @click="onClick">点击</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import print from 'vue2-easy-print'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    onClick() {
      print('content')
    }
  }
}
</script>
```