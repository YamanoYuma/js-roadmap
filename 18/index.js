let count = 1;
const intervalId = setInterval(() => {
  console.log(`表示回数：${count}`);
  count++;
  if (count > 5) {
    clearInterval(intervalId);
  }
},5000);