// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigLatin(str){
    // You code here!
    var words = str.split(' ');
    var newwords = [];

    for (var i = 0; i<words.length; i++) {
        wordparts = words[i].match(/([a-z]+)([^a-z]*)/i)
        var newword = wordparts[1].slice(1) + wordparts[1].slice(0,1) + 'ay' + wordparts[2];
        newwords[i] = newword;
    }
    return newwords.join(' ');
}

//console.log(pigLatin('hello world bla!!'));

module.exports = {
    pigLatin
};
