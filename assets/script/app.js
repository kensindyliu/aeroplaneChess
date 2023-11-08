'use stricted'

document.addEventListener("DOMContentLoaded", () => {
    const board = document.querySelector(".board");
    const rollDiceBtn = document.getElementById("rollDiceBtn");
    let humanDepartured = false;
    let computerDepartured = false;
    let humanCurrentStep = 0;
    let computerCurrentStep = 0;
    let autoRunID = 0;
    let isHumanRound = true;
    let humanTargetStep = 0;
    let computerTargetStep = 0;
  
    // Create cells for the game board
    for (let i = 0; i < 60; i++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.id = `cell${i}`;
      cell.innerText = i + 1;
    //set the color for every cell
      if (i % 4 == 1) {
        cell.classList.add("airport1");
      } else if (i % 4 == 2) {
        cell.classList.add("airport2");
      } else {
        cell.classList.add("airportNone");
      }
      board.appendChild(cell);
    }
  
    // Function to roll the dice and move the player
    rollDiceBtn.addEventListener("click", () => {
        isHumanRound = true;
        startARound();
    });

    function startARound(){
        //human round
        const diceNumber = document.querySelector('.diceNumber');
        const dice = rollDice();
        diceNumber.innerText = dice;
        const lastHumanDIce = document.querySelector('#lastHumanDIce');
        lastHumanDIce.innerText = `Last dice number: ${dice}`;
        if(dice == 6 && !humanDepartured){
            humanDepartured = true;
            const humanPlaneState = document.querySelector('#humanPlaneState');
            humanPlaneState.innerText = 'Plane departured: Yes';
        } else if (humanDepartured) {
            if(humanTargetStep !==0)
                removeBckImg(humanTargetStep);
            humanTargetStep += dice;
            const currenHumanSteps = document.querySelector('#currenHumanSteps');
            currenHumanSteps.innerText = `Current steps: ${humanTargetStep}`;
            if(humanTargetStep >= 59){
                alert('Human wins!')
                humanTargetStep = 59;
            }
            setBckImg(`#cell${humanTargetStep}`, 'url("./assets/Images/plane1.png")');
        }

        //computer round
        isHumanRound = false;
        const dice2 = rollDice();
        const computerDice = document.querySelector('#computerDice');
        computerDice.innerText = dice2;                
        const lastComputerDic = document.querySelector('#lastComputerDic');
        lastComputerDic.innerText = `Last dice number: ${dice2}`;  
        if(dice2 ==6 && !computerDepartured){
            computerDepartured = true;
            const computerPlaneState = document.querySelector('#computerPlaneState');
            computerPlaneState.innerText = 'Plane departured: Yes';                
        } else if(computerDepartured) {
            if(computerTargetStep !==0)
                removeBckImg(computerTargetStep);
            computerTargetStep += dice2;
            const currenComputerSteps = document.querySelector('#currenComputerSteps');
            currenComputerSteps.innerText = `Current steps: ${computerTargetStep}`;
            if(computerTargetStep >= 59){
                computerTargetStep = 59;
                alert('Computer wins!');
            }
            setBckImg(`#cell${computerTargetStep}`, 'url("./assets/Images/plane2.png")');
        }

    }
  
    function rollDice() {
      return Math.floor(Math.random() * 6) + 1;
    }

    function removeBckImg(divID){
        const myDiv = document.querySelector(`#cell${divID}`);
        myDiv.style.backgroundImage = "url('')";
    }

    function setBckImg(divID, url){
        const myDiv = document.querySelector(divID);
        myDiv.style.backgroundImage = url;
        myDiv.style.backgroundSize = "cover"; 
        myDiv.style.backgroundRepeat = "no-repeat"; 
        myDiv.style.backgroundPosition = "center";        
    }

  });
  