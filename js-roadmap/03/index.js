const form = document.getElementById('form');
form.addEventListener('submit', submitAlert);

function submitAlert(e) {
  e.preventDefault();
  const inputText = document.getElementById('textInput').value;
  alert(`${inputText}が入力されたよ`);
  // デバッグ用
  // console.log(text);
}