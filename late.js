// start coding your function here!

function running_late(date) {
    let time = date.substr(text.length - 8, 8);
    if (date.getTime() < 10) {
        return "It is still early";
    } else {
        return "It is late!";
    }
}

module.exports = running_late;