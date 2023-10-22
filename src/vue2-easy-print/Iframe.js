import { copyStyle } from "./utils";

export default class Iframe {
  constructor() {
    const iframe = document.createElement("iframe");
    iframe.style.width = "0px";
    iframe.style.display = "none";
    iframe.style.height = "0px";
    this.dom = iframe;
  }

  getDocument() {
    const dom = this.dom;
    return dom.contentDocument
      ? dom.contentDocument
      : dom.contentWindow
      ? dom.contentWindow.document
      : dom.document;
  }
  // 窗口
  getContentWindow() {
    return this.dom.contentWindow;
  }

  // 获取iframe标签
  getDom() {
    return this.dom;
  }

  // 复制HTML
  copyHTML(sourceBody) {
    // 复制body
    const node = sourceBody.cloneNode(true);
    // 初始化HTML
    const docType = "<!DOCTYPE html>";
    const head = `<head></head>`;
    const body = `<body>${node.outerHTML}</body>`;
    const HTML = `${docType}<html>${head}${body}</html>`;

    return HTML;
  }

  // 更新HTML
  updateHTML(html) {
    const doc = this.getDocument();
    doc.write(html);
  }

  // 打印
  print(id, content) {
    const iframeHTML = this.copyHTML(content);
    this.updateHTML(iframeHTML);

    const doc = this.getDocument();
    copyStyle(content, doc.getElementById(id)); // 复制样式
    const iframeWindow = this.getContentWindow();
    iframeWindow.focus();
    iframeWindow.print();
    this.dom.remove();
  }
}
