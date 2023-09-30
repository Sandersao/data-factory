const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'X', 'Z']
const vogal = ['A', 'E', 'I', 'O', 'U', 'Y']
const alteratorIntra = ['H', 'L']
const alteratorSufix = ['A', 'O', 'U', 'L', 'N', 'M', 'S', 'R', 'X']
const match = [{ C: 'S' }, { S: 'C' }, { V: 'W' }, { W: 'V' }, { K: 'C' }, { C: 'K' }]
module.exports = {
    alphabet: () => alphabet,
    alteratorIntra: () => alteratorIntra,
    alteratorSufix: () => alteratorSufix,
    vogal: () => vogal,
    match: () => match,
    consonant: () => {
        return alphabet.filter((c) => !vogal.includes(c))
    }
}