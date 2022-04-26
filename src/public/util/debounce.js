//防抖
export default function debounce(func, wait, immediate = true) {
  let timer;
  // 延迟执行函数
  const later = (context, args) =>
    setTimeout(() => {
      timer = null; // 倒计时结束
      if (!immediate) {
        func.apply(context, args);
        //执行回调
        context = args = null;
      }
    }, wait);
  let debounced = function (...params) {
    let context = this;
    let args = params;
    if (!timer) {
      timer = later(context, args);
      if (immediate) {
        //立即执行
        func.apply(context, args);
      }
    } else {
      clearTimeout(timer);
      //函数在每个等待时延的结束被调用
      timer = later(context, args);
    }
  };
  debounced.cancel = function () {
    clearTimeout(timer);
    timer = null;
  };
  return debounced;
}
