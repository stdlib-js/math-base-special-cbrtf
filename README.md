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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Cube Root

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [cube root][cube-root] of a single-precision floating-point number.



<section class="usage">

## Usage

```javascript
import cbrtf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cbrtf@v0.1.0-deno/mod.js';
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
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import cbrtf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cbrtf@v0.1.0-deno/mod.js';

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



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/cbrt`][@stdlib/math/base/special/cbrt]</span><span class="delimiter">: </span><span class="description">compute the cube root of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/sqrtf`][@stdlib/math/base/special/sqrtf]</span><span class="delimiter">: </span><span class="description">compute the principal square root of a single-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-cbrtf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-cbrtf

[test-image]: https://github.com/stdlib-js/math-base-special-cbrtf/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/math-base-special-cbrtf/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-cbrtf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-cbrtf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-cbrtf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-cbrtf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-cbrtf/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-cbrtf/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-cbrtf/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-cbrtf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-cbrtf/main/LICENSE

[cube-root]: https://en.wikipedia.org/wiki/Cube_root

<!-- <related-links> -->

[@stdlib/math/base/special/cbrt]: https://github.com/stdlib-js/math-base-special-cbrt/tree/deno

[@stdlib/math/base/special/sqrtf]: https://github.com/stdlib-js/math-base-special-sqrtf/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
