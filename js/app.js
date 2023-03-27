'use strict';


let theme = localStorage.getItem('theme-color');
let secNav = document.querySelectorAll('.sec-bar .colors div');
let body = document.querySelector('body');

if(theme) {
    document.querySelectorAll('.sec-bar .colors div');
    body.style.color = theme ;
    secNav.forEach(div => {
        if(div.dataset.color == theme){
            div.classList.add('selected');
        }
    });
}

secNav.forEach(div => {   
    div.addEventListener('click', (e) => {
        localStorage.setItem('theme-color',e.target.dataset.color);
            body.style.color = e.target.dataset.color;
            secNav.forEach(div => {
                div.classList.remove('selected');
            });
            div.classList.toggle('selected');
        });
    });





let icon = document.querySelector('.sec-bar .icon');
icon.addEventListener('click', () => {
    console.log(icon.parentElement);
         icon.parentElement.classList.toggle('show');
});









// "use strict";

// let colors = document.querySelectorAll(".options .colors span");

// if (localStorage.getItem("theme-color")) {
//   document
//     .querySelector("html")
//     .style.setProperty("--main-color", localStorage.getItem("theme-color"));
//   colors.forEach((span) => {
//     if (span.dataset.color == localStorage.getItem("theme-color")) {
//       colors.forEach((span) => {
//         span.classList.remove("selected");
//       });
//       span.classList.toggle("selected");
//     }
//   });
// }

// let x = document.querySelectorAll(".abo-refat ul li");

// x.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     x.forEach((li) => {
//       if (li.className == "selected") {
//         li.classList.toggle("selected");
//       }
//     });
//     li.classList.toggle("selected");
//   });
// });

// let icon = document.querySelector(".icon");
// let options = document.querySelector(".options");

// icon.onclick = function () {
//   icon.parentElement.classList.toggle("show");
// };

// colors.forEach((span) => {
//   span.onclick = function (e) {
//     console.log(e);
//     colors.forEach((span) => {
//       if (span.classList.contains("selected")) {
//         span.classList.toggle("selected");
//       }
//     });
//     span.classList.toggle("selected");
//     let html = document.querySelector("html");
//     html.style.setProperty("--main-color", e.target.dataset.color);
//     localStorage.setItem("theme-color", e.target.dataset.color);
//   };
// });

// let images = document.querySelectorAll(".images img");

// images.forEach((img) => {
//   img.onclick = function (e) {
//     let body = document.querySelector("body");
//     let overlay = document.createElement("div");
//     overlay.classList.add("overlay");
//     body.appendChild(overlay);
//     let modal = document.createElement("div");
//     modal.classList.add("modal");
//     overlay.appendChild(modal);
//     let x = document.createElement("img");
//     x.src = img.src;
//     x.alt = img.alt;
//     modal.appendChild(x);
//     let k = document.createElement("h1");
//     k.textContent = x.alt;
//     modal.appendChild(k);
//     overlay.onclick = function () {
//       overlay.remove();
//     };
//   };
// });
// var conut;
// function israndom(state) {
//   let img = document.querySelector(".carosel img");
//   if (state == "yes") {
//     conut = setInterval(() => {
//       console.log(conut);
//       console.log("meow");
//       img.src = `./assets/l${Math.floor(Math.random() * 6 + 1)}.jpg`;
//     }, 2000);
//   } else if (state == "no") {
//     clearInterval(conut);
//     img.src = `./assets/batata.png`;
//   }
// }

// let random = document.querySelectorAll(".random button");

// random[0].onclick = function () {
//   israndom("yes");
// };

// random[1].onclick = function () {
//   israndom("no");
// };

// let skillsArea = document.querySelector(".skills");

// window.onscroll = function (e) {
//   let skillsOffsetTop = skillsArea.offsetTop;
//   let skillsOffsetHighet = skillsArea.offsetHeight;
//   let windowHeight = window.innerHeight;
//   let scrollSpot = window.pageYOffset;
//   console.log(skillsOffsetTop);
//   console.log(skillsOffsetHighet);
//   console.log(windowHeight);
//   console.log(scrollSpot);

//   if (scrollSpot > skillsOffsetTop + skillsOffsetHighet - windowHeight) {
//     let skills = document.querySelectorAll(".skills div span");
//     skills.forEach((span) => {
//       span.style.width = `${span.parentElement.dataset.progress}%`;
//     });
//   }
// };

// let spans = document.querySelectorAll(".scrol span");

// spans.forEach((span) => {
//   span.onclick = function () {
//     let view = document.querySelector(`.${span.dataset.view}`);
//     view.scrollIntoView();
//   };
// });


// let button = document.querySelector('button');
// console.log(button);

// button.onclick = function (){
//   localStorage.clear();
// }