const characters = require("../sample/characters")
const createCustomPrototype = require("./createCustomPrototype")
const generateNewInt = require("./generateNewInt")

module.exports = (syllableCount = false) => {
    if (!syllableCount) {
        syllableCount = generateNewInt(6, 2)
    }

    const consonant = characters.consonant()
    const consonantSize = characters.consonant().length
    const vogal = characters.vogal()
    const vogalSize = characters.vogal().length


    let word = ''
    for (let i = 0; i < syllableCount; i++) {
        word += consonant[generateNewInt(consonantSize)] + vogal[generateNewInt(vogalSize)]
    }

    return word.toLowerCase()
}