"use strict"

const floorInner = document.querySelector(".floor-inner");
const middelBoxTopSide = document.querySelectorAll(".box-sides");
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function moveFloorInnerFirstRound() {
    let myInterval ;  
    let pos = 15;
    let d = 60;
    clearInterval(myInterval);
    myInterval  = setInterval(frame, 30);
    function frame() {
        if (pos > 380) {
        floorInner.style.backgroundImage=
            `radial-gradient(rgba(87, 83, 83, 0.667), #111 15%)`;
        /* middelBoxTopSide.forEach(side =>{
            if (side.classList.contains("top")){
            side.classList.add("white-background");}}); */
        clearInterval(myInterval);
        } else {
            pos++;
            if (pos<60){
            floorInner.style.transform = `translate(${pos}%,${-pos}%)`;
            }else if (pos<180){
                d--;
                if (d>-35){
                    floorInner.style.transform = `translate(${d}%,-60%)`;
                }else{
                    floorInner.style.transform = `translate(${d}%,${-d-60}%)`;

                }
            }else if (pos<300){
                d++;
                if (d<0){
                    floorInner.style.transform = `translate(${d}%,${60+d}%)`;
                }else{
                    floorInner.style.transform = `translate(0,${60-d}%)`;
                    
                }
                
            }else if (pos<330){
                    floorInner.style.transform = `translate(${pos-300}%,${pos-300}%)`;

            }else{
                if((pos < 362)){
                floorInner.style.transform = `translate(${360-pos}%,${360-pos}%)`;
                pos++;
            }
                
            }  
        }
    }
}



  
moveFloorInnerFirstRound();

