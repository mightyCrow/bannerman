const generateBanner = require('../')

test('should generate banner', () => {
  const result = generateBanner({'name': true, 'version': true}, {name: 'test', version: '1.0.0'})
  expect(result).toMatch(/.*@name test/g)
  expect(result).toMatch(/.*@version 1.0.0/g)
})
