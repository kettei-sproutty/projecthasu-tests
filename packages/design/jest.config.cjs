const nextJest = require('next/jest')
const base = require('@hasu/jest/jest.react.cjs')

const withNextJest = nextJest({
  dir: './',
})

const config = {
  ...base,
  name: 'hasu-components',
  displayName: 'Hasu Components',
}

module.exports = withNextJest(config)
