var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("url");
var c2 = 'https://v.redd.it/' + c + '/HLSPlaylist.m3u8'
document.getElementById("vid1").src = c2;
var player = videojs('my_video_1');
