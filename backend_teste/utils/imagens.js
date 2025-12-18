const fs = require("fs/promises")

const filePath = './database/jogadores.json'
const choice = require("./random");


async function getPlayer() {
    const file = await fs.readFile(filePath, 'utf-8');
    const json = JSON.parse(file);

    //console.log(keys)
    const player = choice(json);
    console.log(player);
    return player
}

module.exports = getPlayer;