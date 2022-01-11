const randomstring = require("randomstring-yt");

const rs = randomstring({
    lowersCount: 4,
    uppersCount: 2,
    numbersCount: 2,
    specialsCount: 2,
    specials: '_-!.'
});

console.log(rs);