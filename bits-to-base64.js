const bits2char = require('./bits-to-char.json');

function bitstobase64 (bits) {
  var base64 = "";

  for (let i = 0; i < bits.length; i+=6) {
    base64 += bits2char[bits.substring(i, i + 6).padEnd(6, '0')];
  }

  const padding = 4 - (base64.length % 4);
  for (let i = 0; i < padding; i++) {
    base64 += "=";
  }

  return base64;
}

module.exports = bitstobase64;
