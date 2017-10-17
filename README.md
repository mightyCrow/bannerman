<h1 align="center">bannerman</h1>
<div align="center">
  <strong>Quick and dirty CLI util to add banner info to file(s) based on your <code>package.json</code></strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/bannerman">
    <img src="https://img.shields.io/npm/v/bannerman.svg?style=flat-square" alt="Package version" />
  </a>
  <a href="https://npmjs.org/package/bannerman">
  <img src="https://img.shields.io/npm/dm/bannerman.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/bannerman">
    <img src="https://img.shields.io/travis/tiaanduplessis/bannerman.svg?style=flat-square" alt="Travis Build" />
  </a>
  <a href="https://github.com/RichardLitt/standard-readme)">
    <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
  </a>
  <a href="https://badge.fury.io/gh/tiaanduplessis%2Fbannerman">
    <img src="https://badge.fury.io/gh/tiaanduplessis%2Fbannerman.svg?style=flat-square" alt="GitHub version" />
  </a>
  <a href="https://dependencyci.com/github/tiaanduplessis/bannerman">
    <img src="https://dependencyci.com/github/tiaanduplessis/bannerman/badge?style=flat-square" alt="Dependency CI" />
  </a>
  <a href="https://github.com/tiaanduplessis/bannerman/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/bannerman.svg?style=flat-square" alt="License" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
  <a href="https://www.paypal.me/tiaanduplessis/1">
    <img src="https://img.shields.io/badge/$-support-green.svg?style=flat-square" alt="Donate" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/bannerman/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/bannerman.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/bannerman/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/bannerman.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20bannerman!%20https://github.com/tiaanduplessis/bannerman%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/bannerman.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="tiaan.beer">Tiaan</a> and <a href="https://github.com/tiaanduplessis/bannerman/graphs/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>


## Install

[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/bannerman.svg)](https://greenkeeper.io/)

```sh
$ npm install --global bannerman
# OR
$ yarn global add bannerman
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

## Contributing
All Contributions are welcome! Please open up an issue if you would like to help out. :smile:

## License
Created with ♥ by [Tiaan du Plessis](https://github.com/tiaanduplessis). Licensed under the [MIT License](https://tiaan.mit-license.org/).
