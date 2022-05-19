var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("url");
if (Hls.isSupported()) {
  var video = document.getElementById('video');
  var hls = new Hls();
  // bind them together
  hls.attachMedia(video);
  hls.on(Hls.Events.MEDIA_ATTACHED, function () {
    console.log('video and hls.js are now bound together !');
    hls.loadSource(c);
    hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
      console.log(
        'manifest loaded, found ' + data.levels.length + ' quality level'
      );
    });
  });
}
