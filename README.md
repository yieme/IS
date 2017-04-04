# IS test harness

Just copy/paste a tiny 79 byte line. No dependencies or a need for require, grunt, gulp, webpack, etc.

## Install

Copy and paste:

```js
function IS(r,i){if(!r)throw Error(i)}IS.NT=function(r,i){if(r)throw Error(i)};
```

#### If you must use NPM:

```sh
npm i istest --save-dev
```

and

```js
var IS=require('istest')
```

## Usage

Throws a provided error if any fail

```js
IS(true,    'Oops')
IS('Truth', 'Oops')
IS(1,       'Oops')
IS(3.1,     'Oops')
IS(IS,      'Oops')
IS([],      'Oops')
IS({},      'Oops')

IS.NT(false,     'My Bad')
IS.NT(0,         'My Bad')
IS.NT(0.0,       'My Bad')
IS.NT(undefined, 'My Bad')
IS.NT(null,      'My Bad')

// Example errors thrown
IS(false,   'Oops')    // Error: Oops
IS.NT(true, 'My Bad')  // Error: My Bad
```

## TLWW; To Lazy Won't Write messages

If you want it even easier and can spare 43 more copy/paste bytes, see [TL-IS](//github.com/yieme/TL-IS) with the same basic and compatible API.

## Please &#9733; Star it

Please <button>**[&#9733; Star](//github.com/yieme/IS)**</button> this now.

## License MIT

Enjoy &#9786;
