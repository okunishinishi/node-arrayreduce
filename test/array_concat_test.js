/**
 * Test case for arrayConcat.
 * Runs with nodeunit.
 */
"use strict";

const arrayConcat = require('../lib/array_concat.js');

exports['Concat arrays.'] = function (test) {
    test.deepEqual(
        ['foo', 'bar', 'baz'],
        ['foo', ['bar', 'baz']].reduce(arrayConcat(), [])
    );
    test.done();
};

exports['Try invalid args.'] = function (test) {
    test.throws(() => {
        arrayConcat('foo', 'bar');
    });
    test.done();
};

