const generateNewBable = require("./generateNewBable")
const generateNewInt = require("./generateNewInt")

module.exports = () => {
    let bableList = []
    for (let i = 0; i < 500; i++) {
        bableList.push(generateNewBable(generateNewInt(3, 2)))
    }
    return bableList
}