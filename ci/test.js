#!/usr/bin/env node

/**
 * Run test
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    apeTesting = require('ape-testing');

apeTasking.runTasks('test', [
    (callback) => {
        apeTesting.runNodeunit('test/**/*_test.js', callback);
    }
], true);