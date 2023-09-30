module.exports = (max = 100, offset = 0) => {
    let endMax = parseInt(max) - parseInt(offset) + .99
    endMax = endMax > max ? max : endMax
    return parseInt(Math.random() * endMax) + parseInt(offset)
}