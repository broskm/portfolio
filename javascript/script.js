"use strict"

/* const MarkWeight = 78;
const MarkHight = 1.69;
const MarkBMI = MarkWeight / MarkHight**2;
const JohnWeight = 92;
const JohnHight = 1.95;
const JohnkBMI = JohnWeight / JohnHight**2;
const markHigherBMI = MarkBMI > JohnkBMI;
console.log(JohnkBMI,MarkBMI)
console.log(markHigherBMI);
 */

/* who pick last loses */
/* while (true){
let PlayersCount = prompt (`How many players are you? `);
let StartNum = prompt(`Enter the start Num`);
console.log(StartNum);
console.log("here");

while (true){
    let i =1 ;
    while( i<=PlayersCount+1){
        console.log(PlayersCount);
        let choise = prompt(`Number remining = ${StartNum}
        Player ${i} Enter num`);
        StartNum -= choise;
        if (StartNum<1){
            prompt(`Player ${i} Loses`)
            i = PlayersCount +1 
        }
        i++;
        
    }break;   
}
} */

/* let x = function (){
    console.log("hello");
}
x();

let Ogj = {
    name : "Mike",
    birthday : 1989,
    job : "Programmer",
    calcAge : function (){
        this.age = 2022 - this.birthday;
        return this.age;
    }

};
console.log(Ogj.calcAge()); 
console.log(Ogj.age); */ 
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

/* for (let i = 0;i<10;i++){
    console.log(`${i}0%{transform: translate(${i}0%,${i}0%);}`);
} 

football game : 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) 
create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the 
original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the 
console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else
 statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/
/* const game = {
    team1 : "Bayern",
    team2 : "Austria",
    players:[
        [
            "1",
            "2","3","4","5","6","7","8","9","10","11",
        ],[
            "1q",
            "2q","3q","4q","5q","6q","7q","8q","9q","10q","1q1",
        ]
    ],
    score: "4:0",
    scored: ["2","3","5","8"],
    date: "november 9th, 2007",
    odds :{
        team1:1.33,
        x : 3.25,
        team2 : 6.5,

    }
}

let [players1,players2] = game.players; // each of player1, player2 is an an array now 
let [gk,...fieldplayers] = [...players1]; // gk is the firat element of players 1 and the reset are in an array under fieldplayers.
let [...allplayers] = [...players1,...players2];
let[...players1Final] = [...players1,"miso","diago","do"]
const {team1,x:draw,team2} = game.odds    // to change the variable name we need to pick the one form the object then : newvariable.
let printGoals = function(...arguments1){ // all pramentes will be added to an array called arguments1
    console.log(arguments1);
    console.log(arguments1.length);
}
printGoals(...game.scored); // since the function need values we turn the array into values

team1<team2 && console.log("Team 1 is more likely to win"); // if team1 <team2 the second argument will happen
team1>team2 && console.log("Team 2 is more likely to win"); // here nothing will happen since the first part is false 

team1<team2? console.log("Team 1 is more likely to win"):console.log("Team 2 is more likely to win"); // if the first part is true the next part will happen otherwise
                                                                                                        the second part will happen
let numtest = 6>3?4:5; // the valuse of numtest is either 4 or 5 base on weather the 6>3 is true or false.
console.log(numtest)

for(const player of allplayers) console.log(player);  // looping in an array .
for(const [index,aplayer] of allplayers.entries()) console.log(aplayer); // will give you the index and the player .

 */
