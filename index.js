const createCustomPrototype = require("./adapter/createCustomPrototype");
const generateNewBable = require("./adapter/generateNewBable");
const generateNewBableList = require("./adapter/generateNewBableList");
const generateNewCharList = require("./adapter/generateNewCharList");
const generateNewCompleteName = require("./adapter/generateNewCompleteName");
const generateNewInt = require("./adapter/generateNewInt");
const NameType = require("./enum/NameType");
const nameBr = require("./sample/nameBr");

createCustomPrototype()

module.exports = class Creator {
    /**
     * 
     * @param {number} max 
     * @param {number} offset 
     * @returns {int}
     */
    int(max = 100, offset = 0) {
        return generateNewInt(max, offset)
    }

    /**
     * 
     * @param {float} max 
     * @param {float} offset 
     * @returns {float}
     */
    float(max = 1, offset = 0) {
        return generateNewFloat(max, offset)
    }

    /**
     * 
     * @param {int} size 
     */
    string(size = 10) {
        const charList = generateNewCharList()
        const charListSize = charList.length
        let text = ''
        for (let i = 0; i < size; i++) {
            text += charList[generateNewInt(charListSize)];
        }
        return text
    }

    name(nameType = false) {
        return generateNewCompleteName(nameType)
    }

    bable(syllableCount = false) {
        return generateNewBable(syllableCount)
    }
}