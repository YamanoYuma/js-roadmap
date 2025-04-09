const timeText = document.getElementById('time');
const dateText = document.getElementById('date');
const nextFiscalYearText = document.getElementById('nextFiscalYear');

const d = new Date();

// 現在時刻:hh時mm分ss秒
const hour = d.getHours();
const minutes = d.getMinutes();
const seconds = d.getSeconds();

const hhmmss = `${hour}時${minutes}分${seconds}秒`;

timeText.textContent = hhmmss;

// 今日の日付(yyyy年mm月dd日)
// 応用として曜日も表示
const year = d.getFullYear();
const month = String(d.getMonth() + 1).padStart(2, '0');
const date = String(d.getDate() + 1).padStart(2, '0');
const dayofweek = d.getDay();

const dayName = ['日','月','火','水','木','金','土'];

const yyyymmdd = `${year}年${month}月${date}日(${dayName[dayofweek]})`

dateText.textContent = yyyymmdd;

// 来年の年度(yyyy年)
// 今年度
const fiscalYear = month >= 4 ? year : year -1;

// 来年度
const nextFiscalYear = `${fiscalYear + 1}年`;

nextFiscalYearText.textContent = nextFiscalYear;