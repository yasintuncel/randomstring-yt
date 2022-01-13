# Simple Random String
 Simple, random string generator

## Installation
```bash
$npm i randomstring-yt
```

## Features

  * Lower characters
  * Upper characters
  * Numbers
  * Customizable special characters
  * Repeatable or not, special characters

## default.js
### default options
```js
const defaults = {
    lowersCount: 3,
    uppersCount: 3,
    numbersCount: 3,
    specialsCount: 1,
    specials: '_',
    canSpecialRepeat: true
};
```
### usage
```js
const randomstring = require("randomstring-yt");

const rs = randomstring();

console.log(rs);
// 10 characters
// output: x4I_Op03sI
```



## optional.js

```js
const randomstring = require("randomstring-yt");

const rs = randomstring({
    lowersCount: 4,
    uppersCount: 2,
    numbersCount: 2,
    specialsCount: 2,
    specials: '_-!.'
});

console.log(rs);
// output: Yw-W6o_hZ4q
```

## specialnotrepeat.js

```js
const randomstring = require("randomstring-yt");

const rs = randomstring({
    specialsCount: 4,
    canSpecialRepeat: false,
    specials: '_-!.'
});

console.log(rs);
// output: 4-d13.M_gDz!Z
```
---
***|`NOTE`|***
if all options are set to 0 then the output will be 'yoo'

## License

  [MIT](LICENSE)