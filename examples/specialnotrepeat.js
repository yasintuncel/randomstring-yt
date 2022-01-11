const randomstring = require("randomstring-yt");

const rs = randomstring({
    specialsCount: 4,
    canSpecialRepeat: false,
    specials: '_-!.'
});

console.log(rs);