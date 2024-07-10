const Player = require('./models/player');
const rollDice = require('./utils/dice');

const fight = async(playerA, playerB)=> {
    let turn = 0;
    while (playerA.isAlive() && playerB.isAlive()) {
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
    }
  }

function declareWinner(playerA, playerB) {
  const winner = playerA.isAlive() ? playerA : playerB;
  console.log(`${winner.name} wins the game!`);
  return `${winner.name} wins the game!`;
}

function startGame(playerA, playerB) {
  fight(playerA, playerB);
  return declareWinner(playerA, playerB);
}

module.exports = startGame;
