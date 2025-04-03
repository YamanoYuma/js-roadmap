document.getElementById('form').addEventListener('submit', submitAlert);

function submitAlert(e) {
  e.preventDefault();

  // 入力値を取得し、前後の空白を削除
  const inputValue = document.getElementById('intInput').value.trim();

  // 空文字チェック
  if (inputValue === '') {
    alert('入力が空です！1から40の範囲内の整数で入力してね！');
    return;
  }

  // 数値に変換
  const num = Number(inputValue);

  // 数値判定
  if (isNaN(num)) {
    alert(`${inputValue}は数値ではありません！1から40の範囲内の整数で入力してね！`);
    return;
  }

  // 整数チェック
  if (!Number.isInteger(num)) {
    alert(`${inputValue}は整数ではありません！1から40の範囲内の整数で入力してね！`);
    return;
  }

  // 範囲チェック
  if (num < 1 || num > 40) {
    alert(`${num}は1から40の範囲内ではありません！1から40の範囲内の整数で入力してね！`);
    return;
  }

  // 奇数・偶数判定
  if (num % 2 === 1) {
    alert(`${num}は奇数だよ！`);
  } else {
    alert(`${num}は偶数だよ`);
  }

  console.log(num);
}
