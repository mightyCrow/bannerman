#! /usr/bin/env node
'use strict'

const fs = require('fs')
const args = require('get-them-args')(process.argv.slice(2))
const readPkgUp = require('read-pkg-up')

const generateBanner = (args, pkg) => {
  let lines = ['/**', ' *']
  for (let key in args) {
    if (key !== '_' && pkg[key]) {
      lines.push(` * @${key} ${pkg[key]}`)
    }
  }
  lines.push(' */\n\n')
  return lines.join('\n')
}

const output = (file, args, content, pkg) => {
  const output = generateBanner(args, pkg) + content
  fs.writeFile(file, output, (err) => {
    if (err) { throw err }
  })
}

readPkgUp({
  cwd: process.cwd()
}).then(({pkg}) => {
  if (args) {
    args.unknown.forEach((file) => {
      const stream = fs.createReadStream(file)
      let body = ''
      stream.on('data', data => {
        body += data
      })
      stream.on('error', err => {
        throw err
      })
      stream.on('end', () => output(file, args, body, pkg))
    })
  } else {
    console.error('Please provide name for file(s) to add banner to.')
  }
}).catch(console.error)
