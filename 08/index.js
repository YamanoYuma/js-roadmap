// const form = document.getElementById('form');
// form.addEventListener('submit', submitAlert);

// function submitAlert(e) {
//   e.preventDefault();
//   const intInput = document.getElementById('intInput').value;
//   console.log(`${intInput}が入力されたからコンソールに出すね`);
// }

const form = document.getElementById('form');
form.addEventListener('submit',submitAlert);

function submitAlert(e) {
  e.preventDefault();
  const intInput = document.getElementById('intInput').value;

  if(intInput <= 40 && Number.isInteger(intInput)) {
    console.log(intInput);
    alert(`${intInput}が入力されたよ`);
  } else {
    alert(`${intInput}が入力されたよ!0から40の範囲内の整数で入力してね!`);
  }
}