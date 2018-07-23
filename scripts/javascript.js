"use strict"

let playChoice = prompt("Do you want to play a game?");
let check = playChoice.toLocaleLowerCase().trim();
let checker = check.replace(/\./g,'');

if(checker === 'yes' || check === 'y' || check === 'yeah' || check === 'sure' || check === 'ye'){
    let userName = prompt("What is your name?")
    let grantHealth = 10; 
    let userHealth = 40; 
    let wins = 0; 
    let youAdjective = ""; 
    let grantAdjective = "";
   
    while(userHealth > 0){
        let yourHit = (Math.ceil(Math.random() * 2));
        let grantHit = (Math.ceil(Math.random() * 2));
        grantHealth = grantHealth - yourHit;
        userHealth = userHealth - grantHit; 
      
        if(yourHit === 2){
            youAdjective = "mighty"; 
        } 
        else{
            youAdjective = "glancing";
        }
        if(grantHit === 2){
            grantAdjective = "mighty";
        }
        else{
            grantAdjective = "glancing";
        }

        console.log(`Grant hit ${userName} with a ${grantAdjective} blow doing ${grantHit} damage, ${userName} has ${userHealth} left.`);
        console.log(`${userName} hit Grant with a ${youAdjective} blow doing ${yourHit} damage, Grant has ${grantHealth} life, he has come back to life ${wins} times`);
        
        if(grantHealth <= 0){
            wins++;
            grantHealth = 10;  
        }
        if(wins === 3){
            console.log("You win Grant is defeated!!!!"); 
            break; 
        }
        if(userHealth <= 0){
            console.log("You are defeated Grant wins :(");
            break; 
        }
}

    }
