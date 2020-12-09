const { execSync } = require('child_process');
const test = require('ava');
const base64tobits = require('./base64-to-bits');
const bitstobase64 = require('./bits-to-base64');
// const arraybuffertobase64 = require('./arraybuffer-to-base64');

const bits = '000011110000000000010111000000000001100000000000000010000011';
const base64 = 'DwAXABgACD==';

const validate = b64 => {
  try {
    execSync('base64 --decode', { input: b64 });
  } catch (error) {
    console.error("b64 is invalid:", b64);
    throw error;
  }
}
validate(base64);

test('converting from base64 to a string of bits', t => {
  t.is(base64tobits(base64), bits);
});

test('converting from bits to a base64 string', t => {
  t.is(bitstobase64(bits), base64);
});

// test('on varying lengths', t => {
//   const manybits = bits.repeat(10);
//   for (let i = 24; i < manybits.length; i++) {
//     const result = bitstobase64(manybits.slice(0, i));
//     validate(result);
//   }
// });

/*
test('converting array buffer to a base64 string', t => {
  const nums = [];
  for (let i = 0; i < 100; i++) nums.push(Math.random());
  const float64array = new Float64Array(nums);
  console.log({float64array});
  const arrayBuffer = float64array.buffer;
  console.log("arrayBuffer:", arrayBuffer);
  t.is(arraybuffertobase64(arrayBuffer), base64);
});
*/
