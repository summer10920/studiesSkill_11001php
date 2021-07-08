//宣告區
const
  btn = document.querySelector("button"),
  rabbits = document.getElementsByTagName("img");
let
  timeNode = document.getElementById("time"),
  countNode = document.getElementById("count"),
  sec = 60, count = 0;


// function
const
  // 遊戲開始
  gamestart = () => {
    //初始
    timeNode.textContent = sec;
    countNode.textContent = count = 0;
    btn.removeEventListener('click', gamestart);//避免觸發按鈕

    // 倒數至0
    const start = setInterval(() => {
      if (!sec) {
        clearInterval(start);
        btn.addEventListener('click', gamestart);
      }
      else {
        sec--;
        timeNode.textContent = sec;
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
  },

  //圖片替換出現作業
  showOn = (siwho, siwhere, sihow) => {
    // console.log(`編號${siwho}：位置${siwhere}、停留${sihow}`);
    rabbits[siwhere].src = "red.png";
    rabbits[siwhere].alt = siwho;
    rabbits[siwhere].style.backgroundColor = "red";


    setTimeout(() => { // 在sihow秒之後，將圖片改回黃色並清除style屬性
      rabbits[siwhere].src = "yellow.png";
      // rabbit[siwhere].style.backgroundColor = null;
      rabbits[siwhere].removeAttribute('style');
      rabbits[siwhere].removeAttribute('alt');

    }, sihow * 1000);
  },

  //得分計算
  getCount = (item) => {
    const ri = rabbits[item];
    if (ri.style.backgroundColor == "red") {
      ri.style.backgroundColor = "green";
      ri.src = "green.png";

      // count++;
      // countNode.textContent = count;
      countNode.textContent = ++count;

      setTimeout(() => {
        ri.src = "yellow.png";
        ri.removeAttribute('style');
        ri.removeAttribute('alt');
      }, 1000);
    }
  };


//event 規劃
//按鈕
btn.addEventListener('click', gamestart);

//滑鼠
for (let i = 0; i < rabbits.length; i++) {
  rabbits[i].addEventListener('click', function () {
    // Array.prototype.indexOf.call(rabbits, this);
    getCount(i);
  });
}

