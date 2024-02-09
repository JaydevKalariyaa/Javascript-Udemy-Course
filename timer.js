let time = 1500;

let timer = setInterval(() => {
  let sec = time % 60;
  let min = Math.trunc(time / 60);
  console.log(`${min}:${sec}`);
  time--;
  if (time == 1490) clearInterval(timer);
}, 1000);
