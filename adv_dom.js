//create element
let bt = document.createElement('div');
bt.textContent = 'hello,this is created div.';
bt.classList.add('bt');
bt.style.color = 'red';
document.querySelector('body').append(bt);
console.log(document.querySelector('body').contains(bt));
document.querySelector('.btt').addEventListener('click', () => {
  window.scrollBy(100, 0);
  if (document.querySelector('body').contains(bt)) bt.remove();
  else document.querySelector('body').append(bt);
});

console.log(document.querySelector('.btt').style.color); //to get inline css
console.log(getComputedStyle(document.querySelector('.btt')).color); //to change or get internalor external css

// Get the navbar
const navbar = document.querySelector('.nav');

// Get the offset position of the navbar
const sticky = navbar.offsetTop;
console.log(sticky);
// Add the sticky class to the navbar when you reach its scroll position. Remove the sticky class when you leave the scroll position.
let randomm = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let randColor = () => {
  return `rgb(${randomm(0, 255)},${randomm(0, 255)},${randomm(0, 255)})`;
};
document.querySelector('.div1').addEventListener('click', function (e) {
  console.log(randColor());
  this.style.backgroundColor = randColor();
});
document.querySelector('.div2').addEventListener('click', function (e) {
  this.style.backgroundColor = randColor();
});
document.querySelector('.div3').addEventListener('click', function (e) {
  this.style.backgroundColor = randColor();
  e.stopPropagation();
});

let navbarr = document.querySelector('.navbar');
navbarr.addEventListener('mouseover', function (e) {
  let links = this.children;
  links = [...links];
  links.forEach((en) => {
    if (en !== e.target) en.style.opacity = 0.5;
  });
});

navbarr.addEventListener('mouseout', function (e) {
  let links = this.children;
  links = [...links];
  links.forEach((en) => {
    if (en !== e.target) en.style.opacity = 1;
  });
});

let section1 = document.querySelector('.section1');
// let intialCords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function (e) {
//   if (window.scrollY > intialCords.top) {
//     navbarr.classList.add('sticky');
//   } else {
//     navbarr.classList.remove('sticky');
//     navbarr.style.backgroundColor = 'black';
//   }
// });
const callback = (entries) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    navbarr.classList.add('sticky');
  } else {
    navbarr.classList.remove('sticky');
  }
};
const options = {
  root: null,
  threshold: 1,
};
const newObserver = new IntersectionObserver(callback, options);
newObserver.observe(section1);

const callback2 = (entries) => {
  const [entry] = entries;

  if (entry.isIntersecting) {
    entry.target.classList.remove('temp');
  } else {
    entry.target.classList.add('temp');
  }
};
const options2 = {
  root: null,
  threshold: 0.7,
};
const newObserver2 = new IntersectionObserver(callback2, options2);
let boxes = document.querySelectorAll('.boxes');
boxes.forEach((box) => {
  newObserver2.observe(box);
  box.classList.add('temp');
});

//slider
let leftbutton = document.querySelector('.btleft');
let rightbutton = document.querySelector('.btright');
let slider1 = document.querySelector('.slider1');
let slider2 = document.querySelector('.slider2');
let slider3 = document.querySelector('.slider3');
let slides = document.querySelectorAll('.slide');
let curSlide = 0;
rightbutton.addEventListener('click', (e) => {
  curSlide++;
  if (curSlide === slides.length) curSlide = 0;
  slides.forEach((slide, i) => {
    console.log(slide);

    slide.style.transform = `translateX(${(i - curSlide) * 100}%)`;
  });
});
