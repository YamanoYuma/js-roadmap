const greetingElement = document.getElementById('greeting');

// TODO: 現在の時刻を取得して昼ならこんにちは、夜ならこんばんはになるようにする関数を追加
function getGreetingByTime() {
  const d = new Date();
  const hour = d.getHours();
  if (hour >= 6 && hour < 12) {
    return "おはようございます！";
  } else if (hour >= 12 && hour < 18) {
    return "こんちにちは！";
  } else {
    return "こんばんは！";
  }
}

function dispayGreeting(name) {
  const greeting = getGreetingByTime();
  const greetingMessage = `${greeting}${name}さん！`;
  greetingElement.textContent = greetingMessage;
}

dispayGreeting('takeっち');