class Player {
    constructor(name, health, strength, attack) 
    {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.attack = attack;
    }
  
    takeDamage(damage) 
    {
      this.health -= damage;
      if (this.health < 0) this.health = 0;
    }
  }
  
module.exports = Player;
  