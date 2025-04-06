for (let i = 1; i <= 40; i++) {
  if (i % 3 == 0) {
    console.log("世界のナベアツ");
  } else if (i.toString().includes('3')) {
    console.log(`世界のナベアツ：${i}回目`);
  } else {
    console.log(`処理回数：${i}回目`);
  }
}