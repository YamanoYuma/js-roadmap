const form = document.getElementById('form');
form.addEventListener('submit', submitAlert);

function submitAlert(e) {
  e.preventDefault();
  const inputText = document.getElementById('textInput').value;
  console.log(`${inputText}が入力されたからコンソールに出すね`);
}