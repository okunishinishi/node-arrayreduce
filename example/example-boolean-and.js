"use strict";

const arrayreduce = require('arrayreduce');

// Define a reducing function.
let booleanAnd = arrayreduce.booleanAnd();

// Execute sorting.
let result = [true, false, true].reduce(booleanAnd, true);
console.log(result); // -> false
