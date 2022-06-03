var url = new URL(window.location.href);
c = atob('aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tLw==')
document.getElementById("ideo").src = c + "uc?id=" + atob(url.searchParams.get("url"));
document.getElementById("my-video").poster = c + "thumbnail?id=" + atob(url.searchParams.get("url"));
document.getElementById("my-video").preload = url.searchParams.get("loading");
