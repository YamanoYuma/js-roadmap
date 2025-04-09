const greetingElement = document.getElementById('sayHello');

// TODO: 現在の時刻を取得して昼ならこんにちは、夜ならこんばんはになるようにする関数を追加

function sayHello(name) {
  const greetingMessage = `こんにちは！${name}さん！`;
  greetingElement.textContent = greetingMessage;
}

sayHello('takeっち');