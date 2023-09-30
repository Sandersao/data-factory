const NameType = require("../enum/NameType")
const generateNewBableList = require("./generateNewBableList")
const generateNewInt = require("./generateNewInt")

module.exports = (nameType = false) => {
    if (!nameType) {
        nameType = NameType.bable
    }

    let nameList = []
    let nameListCount = 0

    let surnameList = []
    let surnameListCount = 0

    if (nameType == NameType.name) {
        nameList = nameBr.name
        nameListCount = nameBr.name.length

        surnameList = nameBr.surname
        surnameListCount = surnameList.length
    } else {
        nameList = generateNewBableList()
        nameListCount = nameList.length

        surnameList = generateNewBableList()
        surnameListCount = surnameList.length
    }

    let nameStructure = []
    nameStructure.push(nameList[generateNewInt(nameListCount)].fistToUpperCase())
    if (generateNewInt(2) <= 1) {
        nameStructure.push('de')
    }
    nameStructure.push(surnameList[generateNewInt(surnameListCount)].fistToUpperCase())
    if (generateNewInt(5) <= 1) {
        nameStructure.push('de')
    }
    nameStructure.push(surnameList[generateNewInt(surnameListCount)].fistToUpperCase())

    return nameStructure.join(' ')
}