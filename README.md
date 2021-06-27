<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Cube Root

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Compute the [cube root][cube-root] of a single-precision floating-point number.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-cbrtf
```

</section>

<section class="usage">

## Usage

```javascript
var cbrtf = require( '@stdlib/math-base-special-cbrtf' );
```

#### cbrtf( x )

Computes the [cube root][cube-root] of a single-precision floating-point number.

```javascript
var v = cbrtf( 64.0 );
// returns 4.0

v = cbrtf( 27.0 );
// returns 3.0

v = cbrtf( 0.0 );
// returns 0.0

v = cbrtf( -0.0 );
// returns -0.0

v = cbrtf( -9.0 );
// returns ~-2.08

v = cbrtf( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var cbrtf = require( '@stdlib/math-base-special-cbrtf' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*200.0) - 100.0;
    console.log( 'cbrt(%d) = %d', x, cbrtf( x ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-cbrtf
```

</section>

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/cbrtf.h"
```

#### stdlib_base_cbrtf( x )

Computes the cube root of a single-precision floating-point number.

```c
float y = stdlib_base_cbrtf( 27.0f );
// returns 3.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_cbrtf( const float x );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/cbrtf.h"
#include <stdio.h>

int main() {
    float x[] = { 3.14f, 9.00f, 0.0f, 0.0f/0.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_cbrtf( x[ i ] );
        printf( "cbrt(%f) = %f\n", x[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-cbrtf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-cbrtf

[test-image]: https://github.com/stdlib-js/math-base-special-cbrtf/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-cbrtf/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-cbrtf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-cbrtf?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-cbrtf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-cbrtf/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-cbrtf/main/LICENSE

[cube-root]: https://en.wikipedia.org/wiki/Cube_root

</section>

<!-- /.links -->
