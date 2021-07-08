//宣告區
const btn = document.querySelector("button");
let
  time = document.getElementById("time"),
  count = document.getElementById("count");

//事件
btn.addEventListener('click', gamestart);


const gamestart = () => {
  let sec = 60, count = 0;

  //初始化 seconds and counts
  time.textContent = sec;
  count.textContent = count;

  setInterval(() => {
    sec--;
    time.textContent = sec;
  }, 1000);
}




