
const Player = require('../src/models/player');
const startGame = require('../src/game');


describe('Magical Arena Game', () => {
  test('should declare the player with higher attributes as the winner', async () => {
    const playerA = new Player('Player A', 50, 5, 10);
    const playerB = new Player('Player B', 100, 10, 5);


    const result = await startGame(playerA, playerB);
    expect(result).toBe('Player B wins the game!');
  });


  test('should declare the player with higher attack and lower health as the winner', async () => {
    const playerA = new Player('Player A', 20, 5, 50);
    const playerB = new Player('Player B', 100, 10, 5);


    const result = await startGame(playerA, playerB);
    expect(result).toBe('Player A wins the game!');
  });


  test('should declare the player with higher strength and lower health as the winner', async () => {
    const playerA = new Player('Player A', 30, 50, 5);
    const playerB = new Player('Player B', 100, 10, 5);


    const result = await startGame(playerA, playerB);
    expect(result).toBe('Player A wins the game!');
  });


  test('should declare the player with equal attributes and lower health as the loser', async () => {
    const playerA = new Player('Player A', 50, 5, 10);
    const playerB = new Player('Player B', 50, 5, 10);


    const result = await startGame(playerA, playerB);
    expect(result).toMatch(/Player (A|B) wins the game!/);
  });


  test('should declare the player with health at zero at the start as the loser', async () => {
    const playerA = new Player('Player A', 0, 5, 10);
    const playerB = new Player('Player B', 100, 10, 5);


    const result = await startGame(playerA, playerB);
    expect(result).toBe('Player B wins the game!');
  });


  test('should declare the player with zero attack value as the loser', async () => {
    const playerA = new Player('Player A', 50, 5, 0);
    const playerB = new Player('Player B', 50, 5, 10);


    const result = await startGame(playerA, playerB);
    expect(result).toBe('Player B wins the game!');
  });


  test('should declare the player with zero strength value as the loser', async () => {
    const playerA = new Player('Player A', 50, 0, 10);
    const playerB = new Player('Player B', 50, 5, 10);


    const result = await startGame(playerA, playerB);
    expect(result).toBe('Player B wins the game!');
  });


  test('should declare the player with zero health, attack and strength as the loser', async () => {
    const playerA = new Player('Player A', 0, 0, 0);
    const playerB = new Player('Player B', 50, 5, 10);


    const result = await startGame(playerA, playerB);
    expect(result).toBe('Player B wins the game!');
  });
});
