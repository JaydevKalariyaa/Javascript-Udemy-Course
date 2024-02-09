let box = document.querySelector('.box');

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach((elem, i) => {
  let html = `
      <h2>${elem}</h2>
    `;
  box.insertAdjacentHTML('beforeend', html);
});
