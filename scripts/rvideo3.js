var url = new URL(window.location.href);
var options = {
  controls: true,
  preload: 'metadata',
  liveui: true,
  playbackRates: [0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0],
  controlBar: {
    children: ['playToggle', 'volumePanel', 'currentTimeDisplay', 'timeDivider', 'durationDisplay', 'progressControl', 'remainingTimeDisplay', 'Spacer', 'captionsButton', 'qualitySelector', 'playbackRateMenuButton', 'fullscreenToggle']
  },
  plugins: {
          httpSourceSelector: {
            displayCurrentQuality: true,
            default: '270p'
          }
        }
};

var player = videojs("video_player", options);
player.src(atob("aHR0cHM6Ly92LnJlZGQuaXQv")+((url.searchParams.get("url"))?url.searchParams.get("url"):"vf4k6vipfmo81")+atob("L0hMU1BsYXlsaXN0Lm0zdTg="));
