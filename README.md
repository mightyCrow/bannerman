# bannerman [![npm](https://img.shields.io/npm/v/bannerman.svg?style=flat-square)]()
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

A modest cli tool to add banner to file based on info from the `package.json`.

## Installation

Install the package globally using `npm install -g bannerman`. 

## Usage
You should be in the root directory of the project (Same as the `package.json` file).
Just list the files you would like to add banners to followed by `--[name of property]` for all the properties of your `package.json` you would like to the banner.
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

## Issues

- No support for nested properties in the `package.json`.

## Contributing
All Contributions are welcome! Please open up an issue if you would like to help out. :smile:

## License
Created with ♥ by [Tiaan du Plessis](https://github.com/mightyCrow). Licensed under the [MIT License](https://tiaan.mit-license.org/).
