arrayreduce
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-arrayreduce
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-arrayreduce
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-arrayreduce.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-arrayreduce/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-arrayreduce
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-arrayreduce.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-arrayreduce.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-arrayreduce
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-arrayreduce.svg
[bd_npm_url]: http://www.npmjs.org/package/arrayreduce
[bd_npm_shield_url]: http://img.shields.io/npm/v/arrayreduce.svg?style=flat
[bd_bower_badge_url]: https://img.shields.io/bower/v/arrayreduce.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Array reducing utility.

<!-- Description End -->




<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/01.Installation.md.hbs" Start -->

<a name="section-doc-readme-01-installation-md"></a>
Installation
-----

```bash
npm install arrayreduce --save
```

<!-- Section from "doc/readme/01.Installation.md.hbs" End -->

<!-- Section from "doc/readme/02.Usage.md.hbs" Start -->

<a name="section-doc-readme-02-usage-md"></a>
Usage
-------


+ [Concat Array](#concat-array)
+ [Boolean And](#boolean-and)
+ [Boolean Or](#boolean-or)

### Concat Array

`arraysort.arrayConcat()` create a function which reduce entries as concatenated array.

```javascript
var arrayreduce = require('arrayreduce');

// Define a reducing function.
var arrayConcat = arrayreduce.arrayConcat();

// Execute sorting.
var values = ['foo', ['bar', 'baz']].reduce(arrayConcat, []);
console.log(values); // -> ['foo', 'baz', 'bar']

```

### Boolean And

`arraysort.booleanAnd()` create a function which reduce entries with and condition.

```javascript
var arrayreduce = require('arrayreduce');

// Define a reducing function.
var booleanAnd = arrayreduce.booleanAnd();

// Execute sorting.
var result = [true, false, true].reduce(booleanAnd, true);
console.log(result); // -> false

```

### Boolean Or

`arraysort.booleanOr()` create a function which reduce entries with and condition.

```javascript
var arrayreduce = require('arrayreduce');

// Define a reducing function.
var booleanOr = arrayreduce.booleanOr();

// Execute sorting.
var result = [true, false, true].reduce(booleanOr, true);
console.log(result); // -> true

```
<!-- Section from "doc/readme/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-arrayreduce/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [arrayfilter](https://github.com/okunishinishi/node-arrayfilter)
+ [arraysort](https://github.com/okunishinishi/node-arraysort)

<!-- Links End -->
