const fs = require('fs');

const getLogos = (_req, res) => {
    const url = require.main.path + '\\images\\ekstraklasa.png';
    console.log(url);
    const rawData = fs.readFileSync(url);
    res.sendFile(url);
}

module.exports = {
    getLogos
}