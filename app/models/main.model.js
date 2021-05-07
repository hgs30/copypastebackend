const clipboard = require('../resources/clipboard');

exports.getAll = function () {
    return clipboard.get()
}

exports.add = function (item) {
    return clipboard.add(item)
}

exports.makeclean = function () {
    return clipboard.clear()
}