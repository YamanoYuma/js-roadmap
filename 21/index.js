const greetingText = document.getElementById('sayHello');

function sayHello(name) {
  hello = `こんにちは！${name}さん！`;
  greetingText.textContent = hello;
}

sayHello('takeっち');