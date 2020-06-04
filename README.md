# fast-b64
Quickly Convert between B64 and Binary Strings

# install
```bash
npm install fast-b64
```

# usage
## converting from a string of bits to base64
```javascript
const bitstobase64 = require('fast-b64/bits-to-base64');

const bits = '000011110000000000010111000000000001100000000000000010';

const base64 = bitstobase64(bits);
// base64 is 'DwAXABgAC==='
```

## converting from a base64 string to a string of bits
```javascript
const base64tobits = require('fast-b64/base64-to-bits');

const base64 = 'DwAXABgAC===';

const bits = base64tobits(base64);
// bits is '000011110000000000010111000000000001100000000000000010'
```

# support
Post an issue at https://github.com/danieljdufour/fast-b64