// const albums = [
//   {
//     id: 1,
//     name: "Did You Know That There's A Tunnel Under Ocean Blvd",
//     description:
//       "A dark, emotional journey through memories and lost loves, with Lana’s haunting vocals and nostalgic vibes in every track, blending melancholy with cinematic storytelling",
//     src: "images/pinky.jpg",
//   },
//   {
//     id: 2,
//     name: "Born To Die",
//     description:
//       "Dramatic and melancholic, Lana narrates stories of love, betrayal, and fate in a cinematic, poetic soundscape that defines her iconic style.",
//     src: "images/born-to-die-gold.jpg",
//   },
//   {
//     id: 3,
//     name: "Did You Know That There's A Tunnel Under Ocean Blvd",
//     description:
//       "A dark, emotional journey through memories and lost loves, with Lana’s haunting vocals and nostalgic vibes in every track, blending melancholy with cinematic storytelling",
//     src: "images/b-w.jpg",
//   },
//   {
//     id: 4,
//     name: "Born To Die",
//     description:
//       "Dramatic and melancholic, Lana narrates stories of love, betrayal, and fate in a cinematic, poetic soundscape that defines her iconic style.",
//     src: "images/BORN-TO-DIE.jpg",
//   },
//   {
//     id: 5,
//     name: "Lust For Life",
//     description:
//       "A contrast of joy and sorrow, this album captures romance, hope, and the American dream with Lana’s cinematic voice and poetic, introspective lyrics",
//     src: "images/hair-flower.jpg",
//   },
// ];

// const imgs = document.querySelectorAll(".all-imgs img");
// const currentImage = document.querySelector(".current-img");
// const titleImage = document.querySelector(".image-title");
// const descImage = document.querySelector(".image-desc");

// console.log(imgs);

// imgs.forEach((img, index) => {
//   img.src = albums[index].src;

//   img.addEventListener("click", () => {

//     imgs.forEach((i) => i.classList.remove("active"));

//     img.classList.add("active");

//     currentImage.src = albums[index].src;
//     titleImage.innerText = albums[index].name;
//     descImage.innerText = albums[index].description;
//   });
// });
// imgs[0].classList.add("active");
// currentImage.src = albums[0].src;
// titleImage.innerText = albums[0].name;
// descImage.innerText = albums[0].description;

"use strict";
const albums = [
  {
    id: 1,
    name: "Ocean Blvd",
    description: "Poetry and Pain",
    src: "images/pinky.jpg",
    audio: "musics/Margaret-Lana-Del-Rey-Bleachers-320.mp3",
  },
  {
    id: 2,
    name: "Born To Die",
    description: "Melancholy,Memory,Love",
    src: "images/BORN-TO-DIE.jpg",
    audio: "musics/Born-To-Die-Lana-Del-Rey.mp3",
  },
  {
    id: 3,
    name: "Lust For Life",
    description: "Hope wrapped in nostalgia",
    src: "images/hair-flower.jpg",
    audio: "musics/In-My-Feelings-Lana-Del-Rey-320.mp3",
  },
];

const albumsContainer = document.querySelector(".all-imgs");
const currentImg = document.querySelector(".current-img");
const title = document.querySelector(".image-title");
const description = document.querySelector(".image-desc");
// PROGRESS & BUTTONS
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
