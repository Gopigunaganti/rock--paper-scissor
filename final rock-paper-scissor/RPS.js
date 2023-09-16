let score={
  wins:0,
  loses:0,
  ties:0
}




function playGame(playermove){
  const computermove = pickComputerMove();
  let result = '';

  if (playermove === 'scissor') {
    if (computermove === 'rock'){
      result = 'you lose';
    } else if (computermove === 'paper') {
      result = 'you win';
    } else if (computermove === 'scissor'){
      result = 'tie';
    }
  } else if(playermove === 'paper') {
    if (computermove === 'rock'){
      result = 'you win';
    } else if (computermove === 'paper') {
      result = 'tie';
    } else if (computermove === 'scissor'){
      result = 'you lose';
    }
  } else if (playermove === 'rock') {
    if (computermove === 'rock') {
      result = 'tie';
    } else if (computermove === 'paper') {
      result = 'you lose';
    } else if (computermove === 'scissor') {
      result = 'you win';
    }
  }
  if (result==='you win'){
    score.wins+=1;
  }
  else if (result==='you lose'){
    score.loses+=1
  }
  else if (result==='tie'){
    score.ties+=1
  }
  
    document.querySelector('.result').innerHTML=` ${result}`;
    computerpickup= pickComputerMove();
    document.querySelector('.moves').innerHTML=`you picked, ${playermove} - computer picked,${computerpickup} `;


 function updateScore(){
  document.querySelector('.js-score')
 .innerHTML=`wins:${score.wins},  loses:${score.loses},  ties:${score.ties } `;

 }
 updateScore();

  
  
}

function pickComputerMove(){
  let randomNum = Math.random();
  let computermove = '';

  if (randomNum >= 0 && randomNum < 1/3){
    computermove = 'rock';
  } else if (randomNum >= 1/3 && randomNum < 2/3) {
    computermove = 'paper';
  } else if (randomNum >= 2/3 && randomNum < 1) {
    computermove = 'scissor';
  }

  return computermove;
  
}

