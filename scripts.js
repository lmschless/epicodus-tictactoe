class Player {
	constructor(name, marker) {
		this.name = name;
		this.marker = marker;
	}
}

$(document).ready(function() {
	$('#displayBoard').hide();
	$('.game-restart').hide();
	let board = [ '', '', '', '', '', '', '', '', '' ];
	let player1;
	let player2;
	let gameOver = false;

	const checkTie = () => {
		if (!board.includes('') && gameOver === false) {
			gameOver = true;
			$('.outcome').append(`The game is a tie!`);
			$('.game-restart').show();
			$('.cell').unbind('click');
		}
	};

	$('#player').keypress(function(e) {
		if (event.keyCode === 13) {
			player1 = $('#player').val().toUpperCase();
			if (player1 === 'X' || player1 === 'O') {
				startGame();
			}
			e.preventDefault();
		}
	});

	$('#start-game').click(function(e) {
		player1 = $('#player').val().toUpperCase();
		if (player1 === 'X' || player1 === 'O') {
			startGame();
		}
		e.preventDefault();
	});

	const playGame = () => {
		$('.cell').each(function(el) {
			$('#' + el).click(function() {
				if (board[el] == '') {
					$('#' + el).append(player1);
					board[el] = player1;
					console.log('player1 is ' + player1);
					console.log('player2 is ' + player2);
					checkWin();
					checkTie();
					// checkPlayer2Win();
					if (board.includes('') && gameOver == false) {
						setTimeout(function() {
							computerTurn();
						}, 500);
					}
				}
				console.log(board);
			});
		});
	};

	$('.game-restart').click(function(e) {
		document.location.reload(true);
		// $('.cell').each(function(el) {
		// 	div.innerText = '';
		// });
		// board = [ '', '', '', '', '', '', '', '', '' ];
		// gameOver = false;
		// startGame();
	});
	// $('cell').each(function(el){
	//   if(el == ''){

	const startGame = () => {
		$('#displayBoard').toggle();
		$('.intro').hide();
		// player1 = prompt('Please choose X or O').toUpperCase();
		if (player1 === 'X') {
			player2 = 'O';
		} else {
			player2 = 'X';
		}
		playGame();
	};

	const randomNo = () => {
		return Math.floor(Math.random() * 8 + 1); //R&&om no generat|| from 1-8.
	};

	const computerTurn = () => {
		let space = randomNo();
		while (board[space] !== '') {
			space = randomNo();
		}
		console.log(`space is ${space}`);
		$('#' + space).append(player2);
		board[space] = player2;
		checkWin();
		checkTie();
	};

	const checkWin = () => {
		if (
			(board[6] == player1 && board[7] == player1 && board[8] == player1) || // bottom row
			(board[3] == player1 && board[4] == player1 && board[5] == player1) || // across the middle
			(board[0] == player1 && board[1] == player1 && board[2] == player1) || // across the bottom
			(board[0] == player1 && board[3] == player1 && board[6] == player1) || // down the middle
			(board[1] == player1 && board[4] == player1 && board[7] == player1) || // down the middle
			(board[2] == player1 && board[5] == player1 && board[8] == player1) || // down the right side
			(board[0] == player1 && board[4] == player1 && board[8] == player1) || // diagonal
			(board[6] == player1 && board[4] == player1 && board[2] == player1) // bottom row
		) {
			$('.outcome').append(`${player1} has won!`);
			$('.game-restart').show();
			$('.cell').unbind('click');
			gameOver = true;
		} else if (
			(board[6] == player2 && board[7] == player2 && board[8] == player2) || // bottom row
			(board[3] == player2 && board[4] == player2 && board[5] == player2) || // across the middle
			(board[0] == player2 && board[1] == player2 && board[2] == player2) || // across the bottom
			(board[0] == player2 && board[3] == player2 && board[6] == player2) || // down the middle
			(board[1] == player2 && board[4] == player2 && board[7] == player2) || // down the middle
			(board[2] == player2 && board[5] == player2 && board[8] == player2) || // down the right side
			(board[0] == player2 && board[4] == player2 && board[8] == player2) || // diagonal
			(board[6] == player2 && board[4] == player2 && board[2] == player2)
		) {
			$('.outcome').append(`${player2} has won!`);
			$('.game-restart').show();
			$('.cell').unbind('click');
			gameOver = true;
		}
	};
});

// playGame = () => {
//   $('.cell').each(function(el){
//     $('#' + el).click(function(){
//       if(!board[el]){
//         $('#' + el).append(player1);
//         board[el] = player1;
//         console.log("player1 is " + player1);
//         console.log("player2 is " + player2);
//         if(board.includes('')){
//           computerTurn();
//         }
//      }
//         console.log(board);
//         })
//     })
//   }

// old class syntax
// class Player {
//   constructor(player1){
//     this.player1 = player1;
//   }

//   player1() {
//     console.log(this.player1);
//   }
// }

// class Space {
//   constructor(options){

//   }
// }
// // board logic
// class Board {
//   constructor(){
//   this.board = ['','','','','','','','',''];
//   };

//   drawBoard(){
//     $('.board').append(this.board);
//   }
// }

// class Game {
//   constructor(){
//     this.board = new Board();
//     this.players = [
//       new Player("x"),
//       new Player("o")
//     ]
//   }
// }

// old play syntax (before loop)

// $('#0').click(function(){
//   if(!board[0]){
//   $('#0').append(player1);
//   board[0] = player1;
//   console.log(player1);
//   console.log(player2);
//   computerTurn();
//   }
// })
// $('#1').click(function(){
//   if(!board[1]){
//   $('#1').append(player1);
//   board[1] = player1;
//   computerTurn();

//   }
// })
// $('#2').click(function(){
//   if(!board[2]){
//   $('#2').append(player1);
//   board[2] = player1;
//   computerTurn();

//   }
// })
// $('#3').click(function(){
//   if(!board[3]){
//   $('#3').append(player1);
//   board[3] = player1;
//   computerTurn();

//   }
// })
// $('#4').click(function(){
//   if(!board[4]){
//   $('#4').append(player1);
//   board[4] = player1;
//   computerTurn();

//   }
// })
// $('#5').click(function(){
//   if(!board[5]){
//   $('#5').append(player1);
//   board[5] = player1;
//   computerTurn();

//   }
// })
// $('#6').click(function(){
//   if(!board[6]){
//   $('#6').append(player1);
//   board[6] = player1;
//   computerTurn();

//   }
// })
// $('#7').click(function(){
//     if(!board[7]){
//     $('#7').append(player1);
//     board[7] = player1;
//     computerTurn();

//     }
//   })

//   $('#8').click(function(){
//     if(!board[8]){
//     $('#8').append(player1);
//     board[8] = player1;
//     computerTurn();

//     }

// else {
//   alert('err||')
// };
// });
//$("#header").click(function () {
//$(".board").append(`${board1.board[0]}${board1.board[1]} ${board1.board[2]}${board1.board[3]}${board1.board[4]}<br>${board1.board[5]}${board1.board[6]} ${board1.board[7]}${board1.board[8]}${board1.board[9]}<br>${board1.board[10]}${board1.board[11]} ${board1.board[12]}${board1.board[13]}${board1.board[14]}<br>

// });
