const Player = require('./models/player');
const Dice = require('./utils/dice');

function fight(playerA, playerB) 
{
  while (playerA.isAlive() && playerB.isAlive()) {
    const attacker = playerA.health <= playerB.health ? playerA : playerB;
    const defender = attacker === playerA ? playerB : playerA;

    const attackRoll = Dice.roll();
    const defendRoll = Dice.roll();

    const attackDamage = attacker.attack * attackRoll;
    const defendStrength = defender.strength * defendRoll;

    const damage = attackDamage - defendStrength > 0 ? attackDamage - defendStrength : 0;
    defender.takeDamage(damage);

    console.log(`${attacker.name} attacks with roll ${attackRoll} causing ${damage} damage. ${defender.name} health is now ${defender.health}.`);
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
