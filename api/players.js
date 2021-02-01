const fs = require('fs');

const getPlayers = (_req, res) => {
    const url = require.main.path + '\\mockData\\players.json';
    const rawData = fs.readFileSync(url);
    const players = JSON.parse(rawData);
    res.send(players);
}



module.exports = {
    getPlayers
}