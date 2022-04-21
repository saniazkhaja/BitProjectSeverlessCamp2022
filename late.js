// start coding your function here!
// late function
function running_late(date) {
    let time = date.substr(date.length() - 8, 2);
    if (time < 22) {
        return "It is still early!";
    } else {
        return "It is late!";
    }
}
exports.running_late = running_late;