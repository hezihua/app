// rootFontSize.js

export function setRootFontSize() {
    var rem, rootWidth;
    var rootHtml = document.documentElement;
    // 限制展现页面的最小宽度
    rootWidth = rootHtml.clientWidth;
    rem = rootWidth / 320;
    // 动态写入样式
    rootHtml.style.fontSize = rem + 'px';
  }
    
  export function initRootFontSize() {
    setRootFontSize();
    window.addEventListener("resize", setRootFontSize, false);
    window.addEventListener("orientationchange", setRootFontSize, false);
  }
    