/**
 * 复制样式
 * @param {DOM} sourceEl 源DOM
 * @param {DOM} targetEl 目标DOM
 * @param {Boolean} isDeep 是否深度复制（包含孩子）
 */
export function copyStyle(sourceEl, targetEl, isDeep = true) {
  const sourceStyle = window.getComputedStyle(sourceEl); // 获取样式
  // 复制样式
  for (let i = 0; i < sourceStyle.length; i++) {
    const property = sourceStyle[i];
    const value = sourceStyle.getPropertyValue(property);
    targetEl.style.setProperty(property, value);
  }
  // 深度复制
  if (isDeep) {
    const sourceChild = sourceEl.children;
    const targetChild = targetEl.children;

    for (let i = 0; i < targetChild.length; i++) {
      copyStyle(sourceChild[i], targetChild[i], isDeep);
    }
  }
}

/**
 * 复制DOM（包括样式）
 * @param {DOM} dom
 * @returns
 */
export function copyDom(dom) {
  const newDom = dom.cloneNode(true);
  copyStyle(dom, newDom);
  return newDom;
}
