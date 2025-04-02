const btns = document.querySelectorAll('.btn');
let activeBtn = null;

btns.forEach(btn => {
  btn.addEventListener('click', function() {
    if (activeBtn === btn) {
      // すでにactiveクラスが付いている場合は外す
      btn.classList.remove('active');
      activeBtn = null; // activeBtnをnullにリセット
    } else {
      // 他のボタンからactiveクラスを外し、新たにクリックされたボタンに追加
      activeBtn?.classList.remove('active');
      btn.classList.add('active');
      activeBtn = btn;
    }
  });
});
