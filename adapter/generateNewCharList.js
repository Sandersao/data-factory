module.exports = () => {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    return alphabet.concat(alphabet.map((char => char.toLowerCase()))).concat([' '])
}