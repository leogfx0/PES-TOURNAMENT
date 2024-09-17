// script.js

// Sample data for players with positions for Hamid club
const players = {
    "Hamid": [
        {name: "Lamine Yamal", position: "RWF"},
        {name: "Mario Hermoso", position: "CB"},
        {name: "Dele Alli", position: "AMF"},
        {name: "Fermin López", position: "CMF"},
        {name: "Axel Witsel", position: "CB"},
        {name: "Ferland Mendy", position: "LB"},
        {name: "Pau Torres", position: "CB"},
        {name: "César Azpilicueta", position: "RB"},
        {name: "Ederson Moraes", position: "GK"},
        {name: "Nick Pope", position: "GK"},
        {name: "Enzo Fernández", position: "CMF"},
        {name: "Abdoulaye Doucouré", position: "AMF"},
        {name: "Ben White", position: "RB"},
        {name: "Sergio Reguilán", position: "LB"},
        {name: "Thomas Partey", position: "DMF"},
        {name: "Hakim Ziyech", position: "AMF"},
        {name: "Leon Bailey", position: "RMF"},
        {name: "Jean Mateta", position: "CF"},
        {name: "Stefan de Vrij", position: "CB"},
        {name: "Giovani Lo Celso", position: "AMF"},
        {name: "Keita Baldé", position: "CF"},
        {name: "Diogo Jota", position: "LWF"},
        {name: "Kingsley Coman", position: "LWF"},
        {name: "Daniel Ings", position: "CF"}
    ],
    // Add more clubs with players here if needed
};

// Function to show players for a club
function showPlayers(club) {
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = ''; // Clear previous list
    players[club].forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card', getPositionColorClass(player.position));
        playerCard.innerHTML = `<h3>${player.name}</h3><p>Position: ${player.position}</p>`;
        playerList.appendChild(playerCard);
    });
    playerList.style.display = 'flex';
}

// Function to determine the color class based on the position
function getPositionColorClass(position) {
    if (['CF', 'RWF', 'LWF', 'AMF'].includes(position)) return 'attacker';
    if (['CB', 'RB', 'LB'].includes(position)) return 'defender';
    if (['CMF', 'DMF', 'RMF', 'LMF'].includes(position)) return 'midfielder';
    if (position === 'GK') return 'goalkeeper';
    return ''; // Default class if no match
}

