const {
    singles
} = require("../challenges/exercise001");

// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 

// Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.

// More examples in the test cases below.

// Good luck!

describe("singles", () => {
    test("returns the sum of single values only", () => {
        expect(singles([4,5,7,5,4,8])).toBe(15);
        expect(singles([9, 10, 19, 13, 19, 13])).toBe([19]);
        expect(singles([16, 0, 11, 4, 8, 16, 0, 11])).toBe([12]);
        expect(singles([5, 17, 18, 11, 13, 18, 11, 13])).toBe([22]);
        expect(singles([5, 10, 19, 13, 10, 13])).toBe([24]);
    });

    test("returns 0 if no singles are provided", () => {
        expect(capitalize([6, 6, 7, 8, 7, 8])).toBe(0);
    });
});