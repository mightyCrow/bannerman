#! /usr/bin/env node
'use strict'

const path = require('path')
const fs = require('fs')
const argv = require('minimist')(process.argv.slice(2))
const pkg = require(path.join(process.cwd(), 'package.json'))

/**
 * Generate banner string based on provided arguments and package.json
 */
const generateBanner = (argv, pkg) => {
  let lines = ['/**', ' *']
  for (let key in argv) {
    // Check if arg exists in package.json
    if (key !== '_' && pkg[key]) {
      lines.push(` * @${key} ${pkg[key]}`)
    }
  }
  lines.push(' */\n\n')
  return lines.join('\n')
}

/**
 * Write content & banner to file
 */
const output = (file, argv, content) => {
  const output = generateBanner(argv, pkg) + content
  fs.writeFile(file, output, (err) => { if (err) { throw err } })
}

/**
 * Read argument file(s)
 */
if (argv) {
  argv._.forEach((file) => {
    const stream = fs.createReadStream(file)
    let body = ''
    stream.on('data', data => { body += data })
    stream.on('error', err => { throw err })
    stream.on('end', () => output(file, argv, body))
  })
} else {
  console.error('Please provide name for file(s) to add banner to.')
}
