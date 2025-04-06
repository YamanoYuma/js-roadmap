document.getElementById('form').addEventListener('submit', submitAlert);

function submitAlert(e) {
  e.preventDefault();
  const inputText = document.getElementById('textInput').value.trim();

  if (inputText === '') {
    alert('入力が空です！');
    return; 
  }
  alert(`入力された値：${inputText}`);
}