// start coding your function here!
function find_max(arr) {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
}

exports.find_max = find_max;