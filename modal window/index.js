'use strict';

let modal = document.querySelector('.modal');
let btns = document.querySelectorAll('.bt');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    document.querySelectorAll(`.md`).forEach((cur) => {
      cur.classList.add('hidden');
    });

    document.querySelector(`.md${i + 1}`).classList.remove('hidden');
  });
}

document.querySelector('.close').addEventListener('click', function () {
  modal.classList.add('hidden');
});
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') {
    modal.classList.add('hidden');
  }
});
