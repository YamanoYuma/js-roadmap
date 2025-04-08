let count = 1;
const MAX_COUNT = 40;

const intervalId = setInterval(() => {
  if (count % 3 === 0) {
    console.log("世界のナベアツ");
  } else if (count.toString().includes('3')) {
    console.log(`世界のナベアツ${count}回目`);
  } else {
    console.log(`処理回数：${count}回目`);
  }
  count++;
}, 1000);