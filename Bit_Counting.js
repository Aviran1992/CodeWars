// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
//  You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// my solution

const countBits = function (n) {
  const result =
    n.toString(2).match(/1/g) != null ? n.toString(2).match(/1/g).length : 0;
  return result;
};

// Best Practices

countBits = (n) => n.toString(2).split('0').join('').length;

function countBits(n) {
  for (bits = 0; n; n >>= 1) bits += n & 1;
  return bits;
}

const countBits = function (n) {
  return n.toString(2).replace(/0/g, '').length;
};

const countBits = function (n) {
  return n
    .toString(2)
    .split('')
    .reduce((a, b) => Number(a) + Number(b), 0);
};
