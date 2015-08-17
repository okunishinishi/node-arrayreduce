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

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Array reducing utility.

<!-- Description End -->



<!-- Sections Start -->
<a name="sections"></a>

Installation
-----

```bash
npm install arrayreduce --save
```

Usage
-------


+ [Concat Array.](#concat-array-)

### Concat Array.

`arraysort.arrayConcat()` create a function which reduce entries as concatenated array.

```Javascript
var arrayreduce = require('arrayreduce');

// Define a reducing function.
var arrayConcat = arrayreduce.arrayConcat();

// Execute sorting.
var values = ['foo', ['bar', 'baz']].reduce(arrayConcat);
console.log(values); // -> ['foo', 'baz', 'bar']

```




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
