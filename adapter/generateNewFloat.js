module.exports = (max = 1, offset = 0) => {
    let endMax = max - offset
    endMax = endMax > max ? max : endMax
    return Math.random() * endMax + offset
}