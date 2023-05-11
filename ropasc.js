class Player {

	scores = 0;
	constructor(row){
		this.scoresIcons = row;
	}
}

function genSign() {
	const signs = ['rock_op','paper_op','scis_op']
	return signs[Math.floor(Math.random()*3)]
}

function signSelected(_btnId) { //after player choose sign, all buttons go inactive less visible. selected sign is lighted up
	// in -> id of selected button
	playerSignButtons.forEach((btn) => {
		if (btn.id == _btnId) {
			btn.classList.add('selected');
		} else {
			btn.classList.add('low-opacity');
		}
	});
}
function oppSignSelected(sign) { //change '?' for oppSign 
	oppSignIcon.src = `./pics/${sign}.png`
	
}
function ropasc(pl, opp) { //ropask logic to find winner
	if (pl.slice(0,3) === opp.slice(0,3)) {
		return null;
		console.log('tie'); //TIE
	} else {
		switch(pl) {
			case 'rockBtn' :
				if (opp === 'scis_op') {
					return player;
				} else {return opponent};
			case 'scisBtn' :
				if (opp === 'paper_op') {
					return player;
				} else {return opponent};
			case 'paperBtn' :
				if (opp === 'rock_op') {
					return player;
				} else {return opponent};
		}
	}
}
function updateWinnerScoreBar(_winner) { //add score to winner score bar, and reset tasble. 
//										if someone got 5 scores, finish game. 
	_winner.scores++;
	for (let i = 0; i < _winner.scores; i++) {
		_winner.scoresIcons[i].classList.add('on');
		console.log('adding scores')
		}	
}
function resetSigns() {
	oppSignIcon.src = './pics/undentified_op.png';
	selectIsActive = true;
	playerSignButtons.forEach((btn) => {
		btn.classList.remove('selected');
		btn.classList.remove('low-opacity')
	})

}
function gameEnd(winner) {
	if (winner == player) {
		alert('You Won!');
	} else {
		alert('You Loose!');
	}
	resetSigns();
	resetPlayer(player);
	resetPlayer(opponent);
}

function resetPlayer(pl) {
	pl.scores = 0;
	pl.scoresIcons.forEach((icon) => {icon.classList.remove('on')})
}

function tie() {
	console.log('TIE')
}

function clickSign (btnId) { 
	if (selectIsActive) {
		selectIsActive = false;
		console.log(`${btnId} was clicked`);
		signSelected(btnId);
		oppSign = genSign();

		setTimeout(() => {oppSignSelected(oppSign);}, 500);

		const winner = ropasc(btnId, oppSign);

		setTimeout(() => {
			if (winner) {
				updateWinnerScoreBar(winner);
			} else {tie();}
		}, 1000);

		setTimeout(() => {
			resetSigns();
			if (winner && winner.scores >= 5) {
				gameEnd(winner);
				}
		}, 2000);
		
	}

}

let selectIsActive = true;
const container = document.querySelector('#container');
const compSign = document.querySelector('#oponent-hand');
const playerSignButtons = document.querySelectorAll('.player-sign img');
const oppSignIcon = document.querySelector('.comp-sign img');

//playerSignButtons.forEach((btn) => {btn.addEventListener('click', () => playRopasc(btn.id))});

//const rockBtn = document.querySelector('#rockBtn');

//rockBtn.addEventListener('click', clickRock());
const oppScores = document.querySelectorAll('#oppScoreBoard .score');
const playerScores = document.querySelectorAll('#playerScoreBoard .score');
const opponent = new Player(oppScores);
const player = new Player(playerScores);





