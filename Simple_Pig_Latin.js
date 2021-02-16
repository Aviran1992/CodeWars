/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! */

// my solution

function pigIt(str) {
  return str
    .split(' ')
    .map((x) => (/[a-zA-Z]+/.test(x) ? `${x.slice(1) + x[0]}ay` : x))
    .join(' ');
}

// Best Ptactices

function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, '$2$1ay$3');
}
