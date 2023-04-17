

function genSign() {
	const signs = ['Rock','Papper','Scissors']
	return signs[Math.floor(Math.random()*3)]
}

function playRopasc(player_sign) {
	const opponentSign = genSign()
	let round_status = ''
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
			case 'Papper':
				if (opponentSign === 'Rock') {
					round_status = 'You Win!'
				} else {
					round_status = 'You Loose!'
				}
				break;
			case 'Scissors':
				if (opponentSign === 'Papper') {
					round_status = 'You Win!'
				} else {
					round_status = 'You Loose!'
				}
				break;
		} 
	}
	let ans = `You show ${player_sign}, your opponents shows ${opponentSign}.${round_status}`
	return ans
}

