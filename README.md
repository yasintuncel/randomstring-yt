# Simple Random String
 Simple, random string generator

## Features

  * Lower characters
  * Upper characters
  * Numbers
  * Customizable special characters
  * Repeatable or not, special characters

## default.js

```js
const randomstring = require("../randomstring");

const rs = randomstring();

console.log(rs);
// output: x4I_Op03sI
```



## optional.js

```js
const randomstring = require("../randomstring");

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
const randomstring = require("../randomstring");

const rs = randomstring({
    specialsCount: 4,
    canSpecialRepeat: false,
    specials: '_-!.'
});

console.log(rs);
// output: 4-d13.M_gDz!Z
```