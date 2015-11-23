"use strict";

const arrayreduce = require('arrayreduce');

// Define a reducing function.
let booleanOr = arrayreduce.booleanOr();

// Execute sorting.
let result = [true, false, true].reduce(booleanOr, true);
console.log(result); // -> true
