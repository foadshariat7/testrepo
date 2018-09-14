function isNullOrEmpty(input) {

    // Returns true if the input is either undefined, null, or empty, false otherwise

    return (input === undefined || input === null || input === '');

}

// Export to make the function available to other packages

module.exports = isNullOrEmpty;
