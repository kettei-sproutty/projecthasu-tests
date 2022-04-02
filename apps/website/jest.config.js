const nextJest = require('next/jest')
const reactConfig = require('@hasu/jest/jest.react.cjs')

const withJest = nextJest({
  dir: './',
})

module.exports = withJest(reactConfig)
