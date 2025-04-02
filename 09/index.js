
const form = document.getElementById('form');
form.addEventListener('submit', submitAlert);

function submitAlert(e) {
  e.preventDefault();
  
  // 入力値を取得
  const inputValue = document.getElementById('intInput').value;
  
  // 入力が数値として有効かチェック
  if (isNaN(inputValue)) {
    alert(`${inputValue}は数値ではありません！1から40の範囲内の整数で入力してね！`);
    return;
  }
  
  // 少数かどうかをチェック（小数点が含まれているかで判定）
  if (inputValue.includes('.')) {
    alert(`${inputValue}は整数ではありません！1から40の範囲内の整数で入力してね！`);
    return;
  }
  
  // 文字列を数値に変換
  const intInput = parseInt(inputValue);
  
  // 範囲内かどうかをチェック
  if (intInput >= 1 && intInput <= 40) {
    console.log(intInput);
    if (intInput % 2 == 1) {
      alert(`${intInput}は奇数だよ！`);
    } else if (intInput % 2 == 0) {
      alert(`${intInput}は偶数だよ`);
    }
  } else {
    alert(`${inputValue}は1から40の範囲内ではありません！1から40の範囲内の整数で入力してね！`);
  }
}