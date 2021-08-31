const capitalize = (string) => {
    if (typeof string !== 'string') throw new Error('Capitalize only takes a string as an argument');
    return string[0].toUpperCase() + string.slice(1);
}

module.exports = capitalize;