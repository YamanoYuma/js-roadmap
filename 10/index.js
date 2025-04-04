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

  //3で割り切れるかチェック
  if(num % 3 === 0) {
    alert("世界のナベアツ");
  } else {
    alert(`${num}が入力されたよ！`)
  }
}