// script.js

// Sample data for players
const players = {
    "Hamid": [
        {name: "Player 1", position: "attacker", coins: 20},
        {name: "Player 2", position: "defender", coins: 15},
        {name: "Player 3", position: "midfielder", coins: 10},
        {name: "Player 4", position: "goalkeeper", coins: 18}
    ],
    "Yacine": [
        {name: "Player 5", position: "attacker", coins: 25},
        {name: "Player 6", position: "defender", coins: 13},
        {name: "Player 7", position: "midfielder", coins: 8},
        {name: "Player 8", position: "goalkeeper", coins: 20}
    ],
    // Add more clubs with players
};

// Function to show players for a club
function showPlayers(club) {
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = ''; // Clear previous list
    players[club].forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card', player.position);
        playerCard.innerHTML = `<h3>${player.name}</h3><p>Coins: ${player.coins}</p>`;
        playerList.appendChild(playerCard);
    });
    playerList.style.display = 'flex';
}
