# Welcome to MD-5 Hash for file!

Create Md5 hash for given file. This module uses native crypto module of node.js

## Installation

```sh
npm install --save hash-for-file
```

## Usage

### As a module

```js
const md5HashForFile = require("hash-for-file");

/* Async usage */
md5HashForFile("test.txt", (err, hash) => {
    if (err) throw err;

    console.log(`The MD5 hash of test.txt is: ${hash}`);
});
```
