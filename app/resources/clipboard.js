clipboard = []

exports.add = function (item) {
    clipboard.push(item)
    return clipboard
}

exports.clear = function () {
    clipboard = []
    return clipboard
}

exports.get = function () {
    return clipboard
}