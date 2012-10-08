"use strict";

module.exports = function (node, event, fn) {
    if (node.addEventListener || !node.attachEvent) {
        node.addEventListener(event, fn);
    } else {
        node.attachEvent('on' + event, fn);
    }
};
