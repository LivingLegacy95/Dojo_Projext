var videos = ["https://www.youtube.com/watch?v=JvmaMEfhQuE&list=PLnp0SSa5LpQeTzBw1iFxxI4b-N2805bFf&index=1",
    "https://www.youtube.com/embed/pb-6C9D05AM",
    "https://www.youtube.com/embed/EFswQ6uy59A",
    "https://www.youtube.com/embed/f0YWfZZyrYo",
    "https://www.youtube.com/watch?v=1NcK13W606M&list=PLnp0SSa5LpQeTzBw1iFxxI4b-N2805bFf&index=7",
    "https://www.youtube.com/embed/f0YWfZZyrYo",
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
        rightVideo.src = videos[i];
        videos.pop();
    }
});


rightBtn.addEventListener("click", () => {
    console.log("right");
    for (let i = videos.length - 1; i > 1; i--) {
        leftVideo.src = videos[i];
        videos.pop();
    }
});

new hoverEffect({
    parent: document.querySelector('.distortion'),
    intensity: 0.2,
    angle: Math.PI / 8,
    speedIn: 1,
    speedOut: 0.8,
    image1: '',
    image2: './Images/Hokages/Hashirama_Senju_Main.webp',
    displacementImage: 'Images\Hokages\Hashirama_Senju_Alt(1).jpg',
})