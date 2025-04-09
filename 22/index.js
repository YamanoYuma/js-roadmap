const sumElement = document.getElementById('sum');

function sum (num1, num2) {
  // TODO: 引数が数値かどうかのバリデーションを追加する
  const result = num1 + num2;
  sumElement.textContent = result;
  return result;
}

sum(100,100);
