class Player {

	scores = 0;
	constructer(row){
		this.scoreRow = row;
	}
}

function genSign() {
	const signs = ['Rock','Paper','Scissors']
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
		};
		btn.classList.toggle('disabled');
	});
}
function oppSignSelected(sign) { //change '?' for oppSign 
	return '';
}
function ropask(plSign, oppSign) { //ropask logic to find winner
	return '';
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
	console.log(`${btnId} was clicked`);
	signSelected(btnId);

}


const container = document.querySelector('#container');
const compSign = document.querySelector('#oponent-hand');
const playerSignButtons = document.querySelectorAll('.player-sign img');

//playerSignButtons.forEach((btn) => {btn.addEventListener('click', () => playRopasc(btn.id))});

//const rockBtn = document.querySelector('#rockBtn');

//rockBtn.addEventListener('click', clickRock());
const oppScoreBoard = document.querySelector('#oppScoreBoard');
const playerScoreBoard = document.querySelector('#playerScoreBoard');
const opponent = new Player(oppScoreBoard);
const player = new Player(playerScoreBoard);





