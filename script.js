var videos = ["https://www.youtube.com/watch?v=JvmaMEfhQuE&list=PLnp0SSa5LpQeTzBw1iFxxI4b-N2805bFf&index=1",
    "https://www.youtube.com/watch?v=pb-6C9D05AM&list=PLnp0SSa5LpQeTzBw1iFxxI4b-N2805bFf&index=2&t=293s",
    "https://www.youtube.com/watch?v=L9Zm_8bJOCI&list=PLnp0SSa5LpQeTzBw1iFxxI4b-N2805bFf&index=3&t=11s",
    "https://www.youtube.com/watch?v=f0YWfZZyrYo&list=PLnp0SSa5LpQeTzBw1iFxxI4b-N2805bFf&index=4&t=26s",
    "https://www.youtube.com/watch?v=bDx94a9bPnw&list=PLnp0SSa5LpQeTzBw1iFxxI4b-N2805bFf&index=5&t=5s",
    "https://www.youtube.com/watch?v=BoILyA5xAFI&list=PLnp0SSa5LpQeTzBw1iFxxI4b-N2805bFf&index=6&t=1s",
    "https://www.youtube.com/watch?v=1NcK13W606M&list=PLnp0SSa5LpQeTzBw1iFxxI4b-N2805bFf&index=7",
    "https://www.youtube.com/watch?v=xs3w1B6Ys6k&list=PLnp0SSa5LpQeTzBw1iFxxI4b-N2805bFf&index=8&t=10s",
    "https://www.youtube.com/watch?v=86Wn91d6ZT4&list=PLnp0SSa5LpQeTzBw1iFxxI4b-N2805bFf&index=9&t=9s",
    "https://www.youtube.com/watch?v=EFswQ6uy59A&list=PLnp0SSa5LpQeTzBw1iFxxI4b-N2805bFf&index=10&t=30s"];

var leftBtn = document.querySelector(".leftBtn");
var leftVideo = document.getElementsByClassName("leftVideo");
var rightBtn = document.querySelector(".rightBtn");
var rightVideo = document.getElementsByClassName("rightVideo");


window.addEventListener("onload", function () {
    leftVideo.src = videos[0];
    rightVideo.src = videos[1];
});

leftBtn.addEventListener("click", () => {
    console.log("left");
    for (let i = videos.length - 1; i > 1; i--) {
        leftVideo.src = videos[i];
        videos.pop();
    }
});


rightBtn.addEventListener("click", () => {
    console.log("right");
    for (let i = videos.length - 1; i > 1; i--) {
        rightVideo.src = videos[i];
        videos.pop();
    }
});