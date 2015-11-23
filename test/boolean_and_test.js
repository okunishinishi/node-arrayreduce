/**
 * Test case for booleanAnd.
 * Runs with nodeunit.
 */
"use strict";

const booleanAnd = require('../lib/boolean_and.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Boolean and'] = function (test) {
    test.ok([true, true, true].reduce(booleanAnd(), true));
    test.ok(![true, false, true].reduce(booleanAnd(), true));
    test.done();
};

