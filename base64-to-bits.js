const char2bits = require('./char-to-bits.json');

function base64tobits (base64) {
  var binary = "";
  for (let i = 0; i < base64.length; i++) {
    var char = base64[i];
    if (char === "=") break;
    binary += char2bits[char];
  }
  return binary;
}

module.exports = base64tobits;
