import Iframe from "./Iframe";
import PrintFrame from "./print-frame.vue";
import Vue from "vue";

export function print(id) {
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
    iframe.print(id, content); // 打印
  } catch (error) {
    console.error(error);
  }
}
