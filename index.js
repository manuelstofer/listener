"use strict";

module.exports = function (node, event, fn) {
    if (node.addEventListener) {
        node.addEventListener(event, fn);
    } else if (node.attachEvent) {
        node.addEventListener(event, fn);
    }
};
