//宣告區
const
  btn = document.querySelector("button"),
  rabbits = document.getElementsByTagName("img");
let
  time = document.getElementById("time"),
  count = document.getElementById("count");



  // 遊戲開始
const gamestart = () => {
  //初始
  let sec = 60, count = 0;
  time.textContent = sec;
  count.textContent = count;
  btn.removeEventListener('click', gamestart);//避免觸發按鈕

  // 倒數至0
  const start = setInterval(() => {
    if (!sec) {
      clearInterval(start);
      btn.addEventListener('click', gamestart);
    }
    else {
      sec--;
      time.textContent = sec;
    }
  }, 1000);

  //圖片替換前置準備
  for (let i = 0; i < 100; i++) {
    const
      onTime = Math.floor(Math.random() * 55000),   // 0~54999 ms
      onSpace = Math.floor(Math.random() * 9),  // 0~8
      onDelay = Math.floor(Math.random() * 3) + 2;  // 2~4

    setTimeout(() => {
      showOn(i, onSpace, onDelay);
    }, onTime);
  }
}

//圖片替換出現作業
const showOn = (siwho, siwhere, sihow) => {
  // console.log(`編號${siwho}：位置${siwhere}、停留${sihow}`);
  rabbits[siwhere].src = "red.png";
  rabbits[siwhere].alt = siwho;
  rabbits[siwhere].style.backgroundColor = "red";


  setTimeout(() => { // 在sihow秒之後，將圖片改回黃色並清除style屬性
    rabbits[siwhere].src = "yellow.png";
    // rabbit[siwhere].style.backgroundColor = null;
    rabbits[siwhere].removeAttribute('style');
    rabbits[siwhere].removeAttribute('alt');x
    
  }, sihow*1000);
}

//事件
btn.addEventListener('click', gamestart);

for(let i=0;i<rabbits.length;i++){
  rabbits[i].addEventListener('click',getCount);
}

