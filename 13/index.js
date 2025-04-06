document.getElementById('form').addEventListener('submit', submitAlert);

function submitAlert(e) {
  e.preventDefault();

  const inputValue = document.getElementById('intInput').value.trim();

  // 空文字チェック
  if (inputValue === '') {
    alert('入力が空です！1から40の範囲内の整数で入力してね！');
    return;
  }

  // 数値に変換
  const num = Number(inputValue);
  
  //数値チェック
  if(isNaN(num)) {
    alert(`${inputValue}は数値ではありません！1から40の範囲内の整数で入力してね！`);
    return;
  }

  //整数チェック
  if(!Number.isInteger(num)) {
    alert(`${inputValue}は整数ではありません！1から40の範囲内の整数で入力してね！`);
    return;
  }

  //範囲チェック1から40
  if(num < 1 || num > 40) {
    alert(`${num}は1から40の範囲内ではありません！1から40の範囲内の整数で入力してね！`);
    return;
  }

  text = document.getElementById('text');
  text.classList.remove("text-red","text-blue")

  if(num % 2 == 0) {
  //偶数の場合にtext-redクラスを付与
  text.classList.add("text-red");
} else if(num % 2 == 1) {
  //奇数の場合にtext-blueクラスを付与
  text.classList.add("text-blue");
}
}