let scores, playerNumber, roundScores, gameOn;

// Peliohje popup//

function manual() {
    let popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
}

init();


document.getElementById('btn-heitto').addEventListener('click', function () {
    if (gameOn) {
        // Random number 1-14
        let random = Math.floor(Math.random() * 14) + 1;

        // Display the result
        let points = document.getElementById('sika-points');
        let roundPoints = document.getElementById('current-' + playerNumber);

        // Picture
        let sikaDOM = document.querySelector('.sika');
        sikaDOM.style.display = 'block';
        sikaDOM.src = 'sika-' + random + '.bmp';

        //Game logic

        if (random === 1) {
            let bigPoints = 5;
            points.textContent = bigPoints + ' pistettä';
            roundScores = roundScores + bigPoints;
            roundPoints.textContent = roundScores;

        } else if (random === 2) {
            let bigPoints = 10;
            points.textContent = bigPoints + ' pistettä';
            roundScores = roundScores + bigPoints;
            roundPoints.textContent = roundScores;

        } else if (random === 5) {
            let bigPoints = 1;
            points.textContent = bigPoints + ' piste';
            roundScores = roundScores + bigPoints;
            roundPoints.textContent = roundScores;

        } else if (random === 6) {
            let bigPoints = 1;
            points.textContent = bigPoints + ' piste';
            roundScores = roundScores + bigPoints;
            roundPoints.textContent = roundScores;

        } else if (random === 7) {
            let bigPoints = 15;
            points.textContent = bigPoints + ' pistettä';
            roundScores = roundScores + bigPoints;
            roundPoints.textContent = roundScores;

        } else if (random === 8) {
            let bigPoints = 20;
            points.textContent = bigPoints + ' pistettä';
            roundScores = roundScores + bigPoints;
            roundPoints.textContent = roundScores;

        } else if (random === 9) {
            let bigPoints = 10;
            points.textContent = bigPoints + ' pistettä';
            roundScores = roundScores + bigPoints;
            roundPoints.textContent = roundScores;

        } else if (random === 10) {
            let bigPoints = 5;
            points.textContent = bigPoints + ' pistettä';
            roundScores = roundScores + bigPoints;
            roundPoints.textContent = roundScores;

        } else if (random === 11) {
            let bigPoints = 40;
            points.textContent = bigPoints + ' pistettä';
            roundScores = roundScores + bigPoints;
            roundPoints.textContent = roundScores;

        } else if (random === 12) {
            let bigPoints = 10;
            points.textContent = bigPoints + ' pistettä';
            roundScores = roundScores + bigPoints;
            roundPoints.textContent = roundScores;

        } else if (random === 13) {
            let bigPoints = 15;
            points.textContent = bigPoints + ' pistettä';
            roundScores = roundScores + bigPoints;
            roundPoints.textContent = roundScores;

        } else if (random === 14) {
            let bigPoints = 60;
            points.textContent = bigPoints + ' pistettä';
            roundScores = roundScores + bigPoints;
            roundPoints.textContent = roundScores;

        } else if (random === 3) {
            // Round scores to 0 and player change
            points.textContent = 'Läskikortti';
            roundScores = 0;
            roundPoints.textContent = roundScores;

            setTimeout(function () { hide(); }, 1000);

            nextPlayer();

        } else if (random === 4) {
            // All scores to 0 and player change
            points.textContent = 'Pelkkää pekonia';
            roundScores = 0;
            roundPoints.textContent = roundScores;
            scores[playerNumber] = 0;

            // Show score 0
            let pisteet = document.getElementById('score-' + playerNumber);
            pisteet.textContent = scores[playerNumber];

            setTimeout(function () { hide(); }, 1000);

            nextPlayer();

        }
    }

})

document.getElementById('btn-ota').addEventListener('click', function () {
    if (gameOn) {

        // Storing scores to roundScores array 
        scores[playerNumber] = roundScores + scores[playerNumber];

        // Show result
        let pisteet = document.getElementById('score-' + playerNumber);
        pisteet.textContent = scores[playerNumber];

        // emty round scores
        roundScores = 0;
        let roundPoints = document.getElementById('current-' + playerNumber);
        roundPoints.textContent = roundScores;

        // winner or next player
        if (scores[playerNumber] >= 100) {
            // Anounce winner
            document.querySelector('.player-' + playerNumber).textContent = 'Voittaja!';
            document.querySelector('.player-' + playerNumber).classList.remove('on');
            document.querySelector('.player-' + playerNumber).classList.add('winner');

            hidePicture();

            // Make buttons dead
            gameOn = false;

        } else {
            nextPlayer();
            hidePicture();
        }
    }

})

// Hide Pig picture and points after 1s
function hide() {
    document.querySelector('.sika').style.display = 'none';
    document.getElementById('sika-points').textContent = '';
}

// Hide picture and points
function hidePicture() {
    document.querySelector('.sika').style.display = 'none';
    document.getElementById('sika-points').textContent = '';
}

// Player chance
function nextPlayer() {
    // Next player
    playerNumber === 0 ? playerNumber = 1 : playerNumber = 0;

    // change backround color
    document.querySelector('.box-0').classList.toggle('active');
    document.querySelector('.box-1').classList.toggle('active');

    //change player color
    document.querySelector('.player-0').classList.toggle('on');
    document.querySelector('.player-1').classList.toggle('on');
}


// Uusi peli button
document.getElementById('btn-uusi').addEventListener('click', init);

function init() {
    scores = [0, 0];
    playerNumber = 0;
    roundScores = 0;
    gameOn = true;

    // All numbers to 0 and remove points
    document.getElementById('sika-points').textContent = '';
    document.querySelector('.sika').style.display = 'none';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;

    // Text to Pelaaja 1 and Pelaaja 2
    document.querySelector('.player-0').textContent = 'Pelaaja 1';
    document.querySelector('.player-1').textContent = 'Pelaaja 2';

    // Remove background color
    document.querySelector('.box-0').classList.remove('active');
    document.querySelector('.box-1').classList.remove('active');

    // Make Pelaaja 1 the first player
    document.querySelector('.player-0').classList.remove('on');
    document.querySelector('.player-1').classList.remove('on');

    document.querySelector('.box-0').classList.add('active');
    document.querySelector('.player-0').classList.add('on');

    // Hide big picture
    document.querySelector('.sika').style.display = 'none';
}