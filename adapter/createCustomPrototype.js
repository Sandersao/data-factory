module.exports = () => {
    String.prototype.fistToUpperCase = function () {
        return this.charAt(0).toUpperCase() +
            this.slice(1).toLowerCase();
    }
}