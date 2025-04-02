// const form = document.getElementById('form');
// form.addEventListener('submit', submitAlert);

// function submitAlert(e) {
//   e.preventDefault();
//   const intInput = document.getElementById('intInput').value;
//   console.log(`${intInput}が入力されたからコンソールに出すね`);
// }

// const form = document.getElementById('form');
// form.addEventListener('submit',submitAlert);

// function submitAlert(e) {
//   e.preventDefault();
//   const intInput = document.getElementById('intInput').value;

//   if(intInput <= 40 && Number.isInteger(intInput)) {
//     console.log(intInput);
//     alert(`${intInput}が入力されたよ`);
//   } else {
//     alert(`${intInput}が入力されたよ!0から40の範囲内の整数で入力してね!`);
//   }
// }


const form = document.getElementById('form');
form.addEventListener('submit', submitAlert);

function submitAlert(e) {
  e.preventDefault();
  
  // 入力値を取得して数値に変換
  const inputValue = document.getElementById('intInput').value;
  const intInput = parseInt(inputValue, 10);
  
  // 数値かどうかをチェック
  if (isNaN(intInput)) {
    alert(`${inputValue}は数値ではありません！1から40の範囲内の整数で入力してね！`);
    return;
  }
  
  // 整数かどうかをチェック
  // if (!Number.isInteger(intInput)) {
  //   alert(`${inputValue}は整数ではありません！1から40の範囲内の整数で入力してね！`);
  //   return;
  // }
  
  // 範囲内かどうかをチェック
  if (intInput >= 1 && intInput <= 40) {
    console.log(intInput);
    alert(`${intInput}が入力されたよ！`);
  } else {
    alert(`${inputValue}は1から40の範囲内ではありません！1から40の範囲内の整数で入力してね！`);
  }
}