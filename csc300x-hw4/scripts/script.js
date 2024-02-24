'use strict';
(function () {
    // Declare global variables and initalize them
    const playerRock = document.getElementById("player-option-rock");
    const playerPaper = document.getElementById("player-option-paper");
    const playerScissors = document.getElementById("player-option-scissors");
    const computerOptionDiv = document.getElementById("computer-option-id");
    const computerOptionElement = document.querySelector("#computer-option-id img");
    const gameDecisionOutput = document.querySelector("#game-results-div h2");
    const resetPlayBtn = document.getElementById("play-btn");
    let timerCount = 0;
    let intervalId;

    /**
     * Declare btnClick() function to add event listeners to elements
     */
    function btnClick() {

        playerRock.addEventListener("click", eventListenerRock);
        playerPaper.addEventListener("click", eventListenerPaper);
        playerScissors.addEventListener("click", eventListenerScissors);


        resetPlayBtn.addEventListener("click", resetGame);
    }

    /**
     * Declare eventListener function so disableBtnClick() function works properly
     */
    function eventListenerRock() {
        playerSelected(1);
    }

    /**
     * Declare eventListener function so disableBtnClick() function works properly
     */
    function eventListenerPaper() {
        playerSelected(2);
    }

    /**
     * Declare eventListener function so disableBtnClick() function works properly
     */
    function eventListenerScissors() {
        playerSelected(3);
    }

    /**
     * Declare playerSelected() function with one parameter that'll call the other functions
     * @param {*} playerOption - This parameter determines if the user selected rock, paper, or scissors
     */
    function playerSelected(playerOption) {
        disableBtnClick();
        timerCount = 0;
        highlightPlayerOption(playerOption);
        runComputerSelect(playerOption);
    }

    /**
     * Declare disableBtnClick() function which removes the eventListeners to the three elements
     */
    function disableBtnClick() {
        playerRock.removeEventListener("click", eventListenerRock);
        playerPaper.removeEventListener("click", eventListenerPaper);
        playerScissors.removeEventListener("click", eventListenerScissors);
    }

    /**
     * Declare highlightPlayerOption() function that'll style the elements based on their click
     * @param {*} playerOption - This parameter determines if the user selected rock, paper, or scissors
     */
    function highlightPlayerOption(playerOption) {
        if (playerOption == 1) {
            playerRock.classList.add('option-div-player');
            playerPaper.classList.remove('option-div-player');
            playerScissors.classList.remove('option-div-player');
        } else if (playerOption == 2) {
            playerRock.classList.remove('option-div-player');
            playerPaper.classList.add('option-div-player');
            playerScissors.classList.remove('option-div-player');
        } else if (playerOption == 3) {
            playerRock.classList.remove('option-div-player');
            playerPaper.classList.remove('option-div-player');
            playerScissors.classList.add('option-div-player');
        }
    }

    /**
     * Declare runComputerSelect() function that'll call the setInterval method every 0.5 with the 
     * changingComputerImages() function being called and passing the playerOption parameter along
     * @param {*} playerOption - This parameter determines if the user selected rock, paper, or scissors
     */
    function runComputerSelect(playerOption) {
        intervalId = setInterval(changingComputerImages, 500, playerOption);
    }

    /**
     * Declare changingComputerImages() function that'll shuffle through the images of rock, paper, and scissors to
     * be displayed.
     * @param {*} playerOption - This parameter determines if the user selected rock, paper, or scissors
     */
    function changingComputerImages(playerOption) {
        timerCount++;

        if (timerCount === 7) {
            clearInterval(intervalId);
            displayComputerThrow(playerOption);
        } else {
            if (timerCount % 3 === 1) {
                computerOptionElement.src = "images/rock.PNG";
            } else if (timerCount % 3 === 2) {
                computerOptionElement.src = "images/paper.PNG";
            } else if (timerCount % 3 === 0) {
                computerOptionElement.src = "images/scissors.PNG";
            }
        }

        //console.log(timerCount + " | " + computerOptionElement.src);

    }

    /**
     * Declare displayComputerThrow() function that'll randomly pick an option for the computer to play
     * against the player. There is logic to determine whether the game is tied, the player wins, or loses. 
     * @param {*} playerOption - This parameter determines if the user selected rock, paper, or scissors
     */
    function displayComputerThrow(playerOption) {
        let computerOption = Math.floor(Math.random() * 3);
        let gameDecision;

        console.log(computerOption);

        if (computerOption % 3 === 1) {
            computerOptionElement.src = "images/rock.PNG";
        } else if (computerOption % 3 === 2) {
            computerOptionElement.src = "images/paper.PNG";
        } else if (computerOption % 3 === 0) {
            computerOptionElement.src = "images/scissors.PNG";
        }

        computerOptionDiv.classList.add('option-div-computer');

        if (playerOption === computerOption) {
            gameDecision = "Tie!";
        } else if (playerOption === 1 && computerOption === 3 || playerOption === 2 && computerOption === 1 || playerOption === 3 && computerOption === 2) {
            gameDecision = "You win!";
        } else {
            gameDecision = "You lose!";
        }

        gameDecisionOutput.textContent = "Results: " + gameDecision;

    }

    /**
     * Declare resetGame() function that'll reset the game
     */
    function resetGame() {
        playerRock.classList.remove('option-div-player');
        playerPaper.classList.remove('option-div-player');
        playerScissors.classList.remove('option-div-player');
        computerOptionDiv.classList.remove('option-div-computer');
        gameDecisionOutput.textContent = "Results: ?";
        computerOptionElement.src = "images/question-mark.PNG";
        btnClick();
    }

    // Calls the function btnClick() to start the call backs
    btnClick();
})();