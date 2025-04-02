const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
  this.classList.toggle('active');
});

// または、アロー関数を使う場合は明示的にbtnを参照する
// btn.addEventListener('click', () => {
//   btn.classList.toggle('active');
// });