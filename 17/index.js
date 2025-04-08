//レビュー前コード
// for (let i = 1; i <= 5; i++) { 
//   setInterval(dispMsg, 5000);
//   console.log(`${i}回目`);
// }

// function dispMsg() {
//   console.log("5秒に一回出力されるテキスト");
// }

let count = 0;
const intervalId = setInterval(() => {
  console.log("5秒に一回出力されるテキスト");
  count++;
  if(count >= 5) {
    clearInterval(intervalId);
  }
}, 5000);