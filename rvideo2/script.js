var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = ((url.searchParams.get("url"))?url.searchParams.get("url"):"vf4k6vipfmo81");

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
            default: '270'
          }
        }
};

var player = videojs("video_player", options);
player.src("https://v.redd.it/"+c+"/HLSPlaylist.m3u8");
