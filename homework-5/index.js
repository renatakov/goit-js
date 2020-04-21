"use strict";

// Процедурный код

const test1 = 16;
// ============================
const test2 = 22;
// ============================
const test3 = 23;
// ============================
const score = (test1, test2, test3) => {
    return console.log(test1 + test2 + test3);
};

score(test1, test2, test3);

const totalScore = {
    test1: 16,
    test2: 22,
    test3: 23,
    toGetSum() {
        this.test1 + this.test2 + this.test3
    },
};
console.log(totalScore.toGetSum());

