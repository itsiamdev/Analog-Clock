let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");

// refs
const clockEl = document.querySelector('.clock');

// radii
const borderOuter = 160; // half of (320px)
const borderWidth = 15; // from CSS
const faceInner = borderOuter - borderWidth; // 145
const tickRadius = faceInner + 3; // where tick starts (outer end), +3 for visual
const hourTickLength = 16;
const minuteTickLength = 10;

// remove any numbers (leave only lines)
Array.from(clockEl.querySelectorAll('.number')).forEach(n => n.remove());

// ticks
Array.from(clockEl.querySelectorAll('.tick')).forEach(t => t.remove());
for (let m = 0; m < 60; m++) {
  const isHour = m % 5 === 0;
  const deg = m * 6; // 360 / 60
  const tick = document.createElement('div');
  tick.className = 'tick' + (isHour ? ' hour' : '');
  const length = isHour ? hourTickLength : minuteTickLength;
  tick.style.transform = `translate(-50%, -50%) rotate(${deg}deg) translate(0, -${tickRadius}px)`;
  tick.style.height = length + 'px';
  clockEl.appendChild(tick);
}

let set_clock = setInterval(() => {
  let date_now = new Date();

  let hr = date_now.getHours();
  let min = date_now.getMinutes();
  let sec = date_now.getSeconds();

  let calc_hr = hr * 30 + min / 2;
  let calc_min = min * 6 + sec / 10;
  let calc_sec = sec * 6;
  hour.style.transform = `rotate(${calc_hr}deg)`;
  minute.style.transform = `rotate(${calc_min}deg)`;
  seconds.style.transform = `rotate(${calc_sec}deg)`;
}, 1000);