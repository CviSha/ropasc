class Player {

	scores = 0;
	constructor(row){
		this.scoreRow = row;
	}
}

function genSign() {
	const signs = ['rock_op','paper_op','scis_op']
	return signs[Math.floor(Math.random()*3)]
}

function playRopasc(player_sign) {
	const opponentSign = genSign();

	let round_status = '';
	if (player_sign === opponentSign) {
		round_status = 'TIE'
	} else {
		switch (player_sign) {
			case 'Rock':
				if (opponentSign === 'Scissors') {
					round_status = 'You Win!'
				} else {
					round_status = 'You Loose!'
				}
				break;
			case 'Paper':
				if (opponentSign === 'Rock') {
					round_status = 'You Win!'
				} else {
					round_status = 'You Loose!'
				}
				break;
			case 'Scissors':
				if (opponentSign === 'Paper') {
					round_status = 'You Win!'
				} else {
					round_status = 'You Loose!'
				}
				break;
		} 
	}
	let ans = 
	console.log(`You show ${player_sign}, your opponents shows ${opponentSign}.${round_status}`)
	return ans
}

function playRopask2(sign) {
	signSelected(sign); // !
	const opponentSign = genSign();
	oppSignSelected(opponentSign); //!

	const winner = ropask(sign, opponentSign); //!

	updateWinnerScoreBar(winner);

}
function signSelected(_btnId) { //after player choose sign, all buttons go inactive less visible. selected sign is lighted up
	// in -> id of selected button
	playerSignButtons.forEach((btn) => {
		if (btn.id == _btnId) {
			btn.classList.toggle('selected');
		} else {
			btn.classList.toggle('low-opacity');
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
					return 'player';
				} else {return 'opponent'};
			case 'scisBtn' :
				if (opp === 'paper_op') {
					return 'player';
				} else {return 'opponent'};
			case 'paperBtn' :
				if (opp === 'rock_op') {
					return 'player';
				} else {return 'opponent'};
		}
	}
}
function updateWinnerScoreBar(winner) { //add score to winner score bar, and reset tasble. if someone got 5 scores, finish game. 
	return '';
}

function clickRock(_btn) {
	console.log('rock pic click');
	console.log(_btn.id)
	playRopasc('Rock');
}
function clickPaper() {
	console.log('paper pic click');
	playRopasc('Paper');
}
function clickScis() {
	console.log('scis pic click');
	playRopasc('Scissors');
}
function clickSign (btnId) {
	if (selectIsActive) {
		selectIsActive = false;
		console.log(`${btnId} was clicked`);
		signSelected(btnId);
		oppSign = genSign();

		oppSignSelected(oppSign);

		const winer = ropasc(btnId, oppSign);
		console.log(`${winer}`)
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
const oppScoreBoard = document.querySelector('#oppScoreBoard');
const playerScoreBoard = document.querySelector('#playerScoreBoard');
const opponent = new Player(oppScoreBoard);
const player = new Player(playerScoreBoard);





