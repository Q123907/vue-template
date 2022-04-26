const windowHeight = window.innerHeight;
export default function (el) {
  el.addEventListener("blur", function () {
    // console.log("window.innerHeight",window.innerHeight)
    // console.log("window.innerHeight",windowHeight)
    let windowFocusHeight = window.innerHeight;
    if (windowHeight == windowFocusHeight) {
      return;
    }
    let currentPosition;
    let speed = 1; //页面滚动距离
    currentPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    currentPosition -= speed;
    window.scrollTo(0, currentPosition); //页面向上滚动
    currentPosition += speed; //speed变量
    window.scrollTo(0, currentPosition); //页面向下滚动
  });
}
