const Player = require('./models/player');
const rollDice = require('./utils/dice');


const fight = async(playerA, playerB)=> {
    if(playerA.health == 0 || playerA.strength == 0)
      return playerB.name;
    if(playerB.health == 0 || playerB.strength == 0)
      return playerA.name;
    let turn = 0;
    while (playerA.health>0 && playerB.health>0) {
      const attacker = turn % 2 === 0 ? playerA : playerB;
      const defender = attacker === playerA ? playerB : playerA;
 
      const attackRoll = await rollDice();
      const defendRoll = await rollDice();
      console.log("attackRoll: " + attackRoll);
      console.log("defendRoll: " + defendRoll);
   
      const attackDamage = (attacker.attack * attackRoll);
      const defendStrength = (defender.strength * defendRoll);
      console.log("attackDamage: " + attackDamage);
      console.log("defendStrength: " + defendStrength);
 
      const damage = attackDamage - defendStrength > 0 ? attackDamage - defendStrength : 0;
      defender.takeDamage(damage);
 
      console.log(`${attacker.name} attacks with roll ${attackRoll} causing ${damage} damage. ${defender.name} health is now ${defender.health}.`);
     
      turn++;
      if(playerA.health == 0)
          return playerB.name;
      if(playerB.health == 0)
        return playerA.name;
    }
  }




const startGame = async(playerA, playerB) =>{
  const winner = await fight(playerA, playerB);
  console.log("winner: " + winner);
  return `${winner} wins the game!`;
}


module.exports = startGame;