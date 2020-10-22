const {
    pigLatin
} = require("../challenges/exercise004");

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

describe("rowWeights", () => {
    test("returns the string as pig latin", () => {
        expect(pigLatin('Pig latin is cool'),'igPay atinlay siay oolcay')
        expect(pigLatin('This is my string'),'hisTay siay ymay tringsay')
    });
    test("leaves punctuation marks untouched", () => {
        expect(pigLatin('Pig latin is cool!!'),'igPay atinlay siay oolcay!!')
    });
});
