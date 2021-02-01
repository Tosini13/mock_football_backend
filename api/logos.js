// not needed because of static logos files


const getLogos = (_req, res) => {
    const url = require.main.path + '\\logos\\ekstraklasa.png';
    res.sendFile(url);
}

module.exports = {
    getLogos
}