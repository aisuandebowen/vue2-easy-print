/*
 * @Author: cbw
 * @Date: 2023-10-25 20:14:01
 * @LastEditors: cbw
 * @LastEditTime: 2023-10-30 19:15:47
 * @Description:
 */
import Iframe from "./Iframe";
import PrintFrame from "./print-frame.vue";
import Vue from "vue";
import { copyDom } from "./utils";

/**
 * 打印
 * @param {String} id
 */
export default function print(options) {
  const { id } = options;
  try {
    const Frame = Vue.extend(PrintFrame);
    const content = document.getElementById(id);
    const vm = new Frame({
      propsData: {
        ...options,
        renderContent() {
          return copyDom(content);
        },
      },
    });
    vm.$mount();

    // 初始化iframe
    const iframe = new Iframe();
    document.body.appendChild(iframe.dom);
    iframe.print(id, vm.$el); // 打印
  } catch (error) {
    console.error(error);
  }
}
