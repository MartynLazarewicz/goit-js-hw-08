const _ = require('lodash');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  _.throttle(function (currentTime) {
    seconds: currentTime;
    let timeUpdate = Math.round(currentTime.seconds);

    localStorage.setItem('videoplayer-current-time', `${timeUpdate}`);
  }, 1000),
);

let newTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(newTime);
