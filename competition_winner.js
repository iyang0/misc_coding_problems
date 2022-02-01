/**
 * given an array of arrays representing competitions and a second array
 * representing results where 0 equals away team wins, 1 equals home team won
 * return the name of the team that won the most
 * 
 * e.g:
 * input - 
 * competitions:[
 * [a,b],
 * [b,c],
 * [a,c]]
 * 
 * results: [0, 1, 1]
 * 
 * output - c
*/
function tournamentWinner(competitions, results) {
	let winnerFreq = {};
	let mostWins=0;
	let compWinner="";
	
	for(let i = 0; i<results.length; i++){
		const winnerIdx = (results[i]===1? 0:1 );
		const winner = competitions[i][winnerIdx];
		winnerFreq[winner] = (winnerFreq[winner]||0) + 1;
		if(winnerFreq[winner] > mostWins){
			mostWins = winnerFreq[winner];
			compWinner = winner;
		}
	}
	
  return compWinner;
}