document.getElementById('game-form').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const playerA = {
      name: document.getElementById('playerA-name').value,
      health: parseInt(document.getElementById('playerA-health').value),
      strength: parseInt(document.getElementById('playerA-strength').value),
      attack: parseInt(document.getElementById('playerA-attack').value)
    };
  
    const playerB = {
      name: document.getElementById('playerB-name').value,
      health: parseInt(document.getElementById('playerB-health').value),
      strength: parseInt(document.getElementById('playerB-strength').value),
      attack: parseInt(document.getElementById('playerB-attack').value)
    };
  
    const response = await fetch('/api/start-game', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ playerA, playerB })
    });
  
    const result = await response.json();
    document.getElementById('game-result').innerText = result.result;
  });
  