const test = require('ava');
const base64tobits = require('./base64-to-bits');
const bitstobase64 = require('./bits-to-base64');

const bits = '000011110000000000010111000000000001100000000000000010';
const base64 = 'DwAXABgAC===';

test('converting from base64 to a string of bits', t => {
  t.is(base64tobits(base64), bits);
});

test('converting from bits to a base64 string', t => {
  t.is(bitstobase64(bits), base64);
});
