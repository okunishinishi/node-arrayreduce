/**
 * Test case for booleanOr.
 * Runs with nodeunit.
 */
"use strict";

const booleanOr = require('../lib/boolean_or.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Boolean or'] = function (test) {
    test.ok([false, true, false].reduce(booleanOr(), false));
    test.ok(![false, false, false].reduce(booleanOr(), false));
    test.done();
};

