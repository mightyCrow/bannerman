module.exports = function generateBanner (args, pkg) {
  let lines = ['/**', ' *']
  for (let key in args) {
    console.log(key)
    if (key !== '_' && pkg[key]) {
      lines.push(` * @${key} ${pkg[key]}`)
    }
  }
  lines.push(' */\n\n')
  return lines.join('\n')
}

