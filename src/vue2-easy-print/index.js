/*
 * @Author: cbw
 * @Date: 2023-10-22 10:46:52
 * @LastEditors: cbw
 * @LastEditTime: 2023-10-25 19:09:45
 * @Description:
 */
import Iframe from "./Iframe";
import PrintFrame from "./print-frame.vue";
import Vue from "vue";

export default function print(id) {
  try {
    const Frame = Vue.extend(PrintFrame);
    const content = document.getElementById(id);

    const vm = new Frame({
      propsData: {
        renderContent() {
          return content;
        },
      },
    });
    vm.$mount();

    // 初始化iframe
    const iframe = new Iframe();
    document.body.appendChild(iframe.dom);
    // iframe.print(id, vm.$el); // 打印
    iframe.print(id, content); // 打印
  } catch (error) {
    console.error(error);
  }
}
