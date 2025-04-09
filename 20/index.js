const timeText = document.getElementById('time');
const dateText = document.getElementById('date');
const nextFiscalYearText = document.getElementById('nextFiscalYear');

const d = new Date();

// 時刻フォーマット関数
const formatTime = (date) => {
  const hour = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');
  return  `${hour}時${minutes}分${seconds}秒`;
}

timeText.textContent = formatTime(d);

// 日付フォーマット関数
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const dayNames = ['日','月','火','水','木','金','土'];
  const dayOfWeek = dayNames[date.getDay()];
  return `${year}年${month}月${day}日(${dayOfWeek})`;
}

dateText.textContent = formatDate(d);

// 年度計算用関数
const getNextFiscalYear = (date) => {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const fiscalYear = month >= 4 ? year : year - 1;
    return `${fiscalYear + 1}年`;
};

nextFiscalYearText.textContent = getNextFiscalYear(d);