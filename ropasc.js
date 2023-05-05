

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
	let ans = `You show ${player_sign}, your opponents shows ${opponentSign}.${round_status}`;
	console.log(ans)
	return ans
}

function clickRock() {
	console.log('rock pic click');
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


const container = document.querySelector('#container');
const compSign = document.querySelector('#oponent-hand');
const playerSignButtons = document.querySelectorAll('.player-sign button');

playerSignButtons.forEach((btn) => {btn.addEventListener('click', () => playRopasc(btn.id))});

//const rockBtn = document.querySelector('#rockBtn');

//rockBtn.addEventListener('click', clickRock());
	




