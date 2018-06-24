
# bannerman
[![package version](https://img.shields.io/npm/v/bannerman.svg?style=flat-square)](https://npmjs.org/package/bannerman)
[![package downloads](https://img.shields.io/npm/dm/bannerman.svg?style=flat-square)](https://npmjs.org/package/bannerman)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/bannerman.svg?style=flat-square)](https://npmjs.org/package/bannerman)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/bannerman.svg)](https://greenkeeper.io/)

> Quick and dirty CLI util to add banner info to file(s) based on your package.json

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install bannerman
$ # OR
$ yarn add bannerman
```

## Usage

You should be in the root directory of the project (Same as the `package.json` file).
Just list the files you would like to add banners to followed by `--[name of property]` for all the properties of your `package.json` you would like to add a banner.
If you flag a property that doesn't exist it will just be ignored.

For example:
```
$ bannerman file1.js file2.css --name --version
```

Will generate at the top of `file1.js` and `file2.css`:
```js
/**
 *
 * @name awesome-project
 * @version 1.0.0
 */
```

It can easily be used as a `npm` script:
```js
"script": {
  "banner": "bannerman dist/awesome.js --name --version --author --license"
}
```

**Note:** - There is no support for nested properties in the `package.json`


## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    