var url = new URL(window.location.href);
console.log(url)
console.log("https://drive.google.com/uc?id=" + url.searchParams.get("url"))
document.getElementById("ideo").src = "https://drive.google.com/uc?id=" + url.searchParams.get("url");
document.getElementById("my-video").poster = "https://drive.google.com/thumbnail?id=" + url.searchParams.get("url");
document.getElementById("my-video").preload = url.searchParams.get("loading");
