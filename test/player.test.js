const Player = require('../src/models/player');


describe('Player Model', () => {
  test('should initialize a player with correct attributes', () => {
    const player = new Player('Player A', 50, 5, 10);


    expect(player.name).toBe('Player A');
    expect(player.health).toBe(50);
    expect(player.strength).toBe(5);
    expect(player.attack).toBe(10);
  });


  test('should reduce health when damage is taken', () => {
    const player = new Player('Player A', 50, 5, 10);
    player.takeDamage(20);


    expect(player.health).toBe(30);
  });


  test('should not reduce health below zero', () => {
    const player = new Player('Player A', 50, 5, 10);
    player.takeDamage(60);


    expect(player.health).toBe(0);
  });


  test('should return true if player is alive', () => {
    const player = new Player('Player A', 50, 5, 10);


    expect(player.isAlive()).toBe(true);
  });


  test('should return false if player is not alive', () => {
    const player = new Player('Player A', 0, 5, 10);


    expect(player.isAlive()).toBe(false);
  });
});
