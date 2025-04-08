let count = 1;
const MAX_COUNT = 5;

const intervalId = setInterval(() => {
  console.log(`表示回数：${count}`);
  if (count === MAX_COUNT) {
    clearInterval(intervalId);
  }
  count++;
}, 5000);