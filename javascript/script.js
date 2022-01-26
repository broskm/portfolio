"use strict"

// start with middle box glow 2 sec
// light at the middle spot 
// mid box disappers 
// light search for the middle box 
// middle box glow for a sec  on a diffrent cornner then dissapers again
// light rush to the spot 
// light pass the middle to see the box in dark  
// light shrenk 
// box glow hard 
// light spread 
// box start building the 3D cards
const mainContainer = document.querySelector(".container")
const floor = document.querySelector(".floor");
console.log(floor);
const floorInner = document.querySelector(".floor-inner");
const middleBox = document.querySelector(".middle-box");
const middleBoxSides = document.querySelectorAll(".box-sides");
const cards = document.querySelectorAll(".card");
const card1BackgroundImg = document.querySelector(".card-1-background");
const cardContent = document.querySelectorAll(".card-content");
const style = document.createElement("style");
const skipBTN = document.querySelector(".skip-btn");
let keyframs = ""
let stopAnimation = false;
let currentCard = 1;
let currentAngel = -360;



skipAnimationHandler();
createLayers();
const layersContainer = document.querySelectorAll(".layers-container");
TogglehideCards(0);
animationPlayer();
rotateMainContainer();





function middleBoxop(value) {
    middleBoxSides.forEach(side => {
        side.style.opacity = ` ${value}`;
    });
}


function toggleMiddleBoxanimation(speed = null) {
    if (speed !== null) {
        middleBoxSides.forEach(side => {
            side.style.animation = `glowing ${speed}s ease-in-out infinite alternate `;

        });
    } else {
        middleBoxSides.forEach(side => {
            side.style.animation = `none`;

        });

    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createLayers() {
    card1BackgroundImg.style.opacity = "0";
    cards.forEach(card => {
        let layersContainer = document.createElement("div");
        layersContainer.classList.add(`layers-container`);
        for (let i = 0; i < 20; i++) {
            let innerLayer = document.createElement("div");
            innerLayer.classList.add(`layer`);
            innerLayer.classList.add(`layer-${i}`);
            layersContainer.appendChild(innerLayer);
        };
        card.appendChild(layersContainer);
    });
}

function rotateMainContainer() {
    for (let j = 1; j < cards.length + 1; j++) {
        cards[j - 1].addEventListener("click",
            function () {
                if (currentCard !== j) {
                    currentCard == ((j + 1) > 4 ? 1 : j + 1) ?
                     currentAngel += 90 : currentAngel -= 90;
                    mainContainer.style.transform =
                        `rotateY(${currentAngel}deg)`;
                    currentCard = j;
                }
            });
    };
}


function TogglehideCards(op) {
    for (let i = 0; i < layersContainer.length; i++) {
        for (let j = 0; j < layersContainer[i].children.length; j++) {
            layersContainer[i].children[j].style.opacity = `${op}`;
        };
    };

    for (let j = 0; j < cardContent.length; j++) {
        cardContent[j].style.opacity = `${op}`;
    };
    card1BackgroundImg.style.opacity = `${op}`;
}

function skipAnimationHandler() {
    skipBTN.addEventListener("click", function () {
        stopAnimation = true;
        layersAnimation(0);
        TogglehideCards(1);
        removeAnimationsEffects();
        expandLight(0);
        middleBoxop(1);
        middleBox.style.transform = "translate(-50%, 7rem)";
        skipBTN.classList.add("hidden");

    });
}
function layersAnimation(speed) {
    for (let i = 0; i < layersContainer.length; i++) {
        for (let j = 0; j < layersContainer[i].children.length; j++) {
            keyframs += `@keyframes cardTo3D${j} {
                20%{  
                    opacity:0.5;
                    width: 3rem; 
                    height: 4rem;
                    background-color: rgba(56, 55, 55, 0.253);
                }
                90%{
                    background-color: rgba(56, 55, 55, 0.753);
                } 
                100%{
                    transform: translateZ(-${j}px);
                    width:13rem;
                    height: 20rem;
                    background-color: rgb(0, 0, 0);
                    background-image:
                    radial-gradient(rgb(0 0 0 / 44%), #000000 100%), url(../resources/floorBlock.jpg);
                    opacity:1;
                }   
            }`
            style.innerHTML = keyframs;
            document.getElementsByTagName('head')[0].appendChild(style);
            layersContainer[i].children[j].classList.remove("hidden");
            layersContainer[i].children[j].style.animation = `cardTo3D${j} ${speed}s linear ${speed == 0 ? 0 : j / 2}s forwards`;
        };
    };
}

function removeAnimationsEffects() {
    stopAnimation = true;
    mainContainer.style.animation = "none"
    mainContainer.style.transform = `rotateY(-360deg)`;
    mainContainer.style.transition = "transform 0.01s ease-in-out";
    card1BackgroundImg.style.transition = "background 1s,filter 1s";
    setInterval(() => {
        mainContainer.style.transition = "transform 1.5s ease-in-out";
    }, 500);

}


function expandLight(speed) {
    floorInner.classList.add("hidden");
    floor.style.backgroundImage = `radial-gradient(rgba(10, 10, 10, 0.667), #111 25%),
    url('../resources/floorBlock.jpg')`;
    floor.style.animation = `floorexpand ${speed}s linear forwards`;
}

function animationPlayer() {
    let myInterval;
    let pos = 0;
    let helpvar1;
    let helpvar2;
    clearInterval(myInterval);
    myInterval = setInterval(frame, 500);
    function frame() {
        console.log("counter");
        if (stopAnimation) {
            clearInterval(myInterval);
        } else {
            pos += 0.5;
            pos == 1 ? toggleMiddleBoxanimation(1.5) : null;
            pos == 3 ? toggleMiddleBoxanimation(1) : null;
            pos == 5 ? toggleMiddleBoxanimation(0.5) : null;
            if (pos == 8) {
                floorInner.style.top = middleBox.getBoundingClientRect().top;
                floorInner.style.left = middleBox.getBoundingClientRect().left;
                floorInner.style.right = middleBox.getBoundingClientRect().right;
                floorInner.style.bottom = middleBox.getBoundingClientRect().bottom;
                floorInner.style.backgroundImage = `radial-gradient(rgba(87, 83, 83, 0.247), #111 25%)`;
            }
            pos == 8.5 ? middleBoxop(0) : null;
            if (pos == 9.5) {
                middleBox.style.transform = "translate(-50%, 7rem) translateX(-300px) translateZ(200px)";
                middleBoxop(1);
            } else if (pos == 10) {
                floorInner.style.transition = `1.5s `;
                floorInner.style.transform = `translate(-340px,150px)`;
            }
            pos == 11 ? middleBoxop(0) : null;
            if (pos == 12) {
                floorInner.style.transition = `0.5s`;
                floorInner.style.transform = `translate(-450px,150px)`;
            }
            pos == 12.5 ? floorInner.style.transform = `translate(-240px,100px)` : null;
            pos == 13 ? floorInner.style.transform = `translate(-350px,250px)` : null;
            if (pos == 14.5) {
                floorInner.style.transition = `1.5s ease-in-out`;
                floorInner.style.transform = `translate(-100px,450px)`;
            }
            pos == 16 ? floorInner.style.transform = `translate(250px,500px)` : null;
            pos == 17.5 ? floorInner.style.transform = `translate(300px,-150px)` : null;
            pos == 19 ? floorInner.style.transform = `translate(-150px,-50px)`:null;
            if (pos == 20.5) {
                middleBox.style.transform = "translate(-50%, 7rem)";
                middleBoxop(1);
                floorInner.style.transition = `1s ease-in-out`;
                floorInner.style.transform = `translate(-250px,-150px)`;
            } else if (pos == 21.5) {
                floorInner.style.transition = `0.2s ease-in-out`;
                floorInner.style.transform = `translate(0px,0px)`;
            } else if (pos == 23) {
                layersAnimation(2);
            } else if (pos == 23.5) {
                floorInner.style.transition = `0.5s ease-in-out`;
                floorInner.style.transform = `translate(-75px,0px)`;
            } else if (pos == 24) {
                floorInner.style.transition = `1s ease-in-out`;
                floorInner.style.transform = `translate(75px,0px)`;
            } else if (pos == 25) {
                floorInner.style.transition = `0.5s ease-in-out`;
                floorInner.style.transform = `translate(0px,75px)`;
            } else if (pos == 25.5) {
                floorInner.style.transition = `1s ease-in-out`;
                floorInner.style.transform = `translate(0px,0px)`;
                card1BackgroundImg.style.transition = "opacity 4s  ease-in-out";
                card1BackgroundImg.style.opacity = "1";
                for (let j = 0; j < cardContent.length; j++) {
                    cardContent[j].style.transition = "opacity 4s ease-in-out";
                    cardContent[j].style.opacity = "1";
                };

            } else if (pos == 26.5) {
                expandLight(3);
            }
            else if (pos == 29.5) {
                toggleMiddleBoxanimation();
                card1BackgroundImg.style.transition = "background 1s,filter 1s";
                mainContainer.style.animation = "rotate 15s linear forwards";
            } else if (pos > 47) {
                removeAnimationsEffects();

            }
        }
    }
}
