const d = new Date();

console.log(d.toString());

const year = d.getFullYear();
const month = String(d.getMonth() + 1).padStart(2, '0');
const date = String(d.getDate() + 1).padStart(2, '0');
const dayofweek = d.getDay();


const dayName = ['日','月','火','水','木','金','土'];

const yyyymmdd = `${year}年${month}月${date}日(${dayName[dayofweek]})`

console.log(yyyymmdd);

// 今年度
const fiscalYear = month >= 4 ? year : year -1;

console.log(`今年度は${fiscalYear}年度`);

// 来年度
const nextFiscalYear = year + 1;
console.log(`来年度は${nextFiscalYear}年度`);