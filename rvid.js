var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("url");
var c2 = 'https://videoplayer2.rishabh.ml/rvideo/?url=https://v.redd.it/' + c + '/HLSPlaylist.m3u8'
if (Hls.isSupported()) {
  var video = document.getElementById('video');
  var hls = new Hls();
  // bind them together
  hls.attachMedia(video);
  hls.on(Hls.Events.MEDIA_ATTACHED, function () {
    console.log(c2);
    hls.loadSource(c2);
    hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
      console.log(
        'manifest loaded, found ' + data.levels.length + ' quality level'
      );
    });
  });
}
