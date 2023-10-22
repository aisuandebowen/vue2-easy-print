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
