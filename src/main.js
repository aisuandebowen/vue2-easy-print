/*
 * @Author: cbw
 * @Date: 2023-10-22 10:42:01
 * @LastEditors: cbw
 * @LastEditTime: 2023-10-22 10:50:25
 * @Description:
 */
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
