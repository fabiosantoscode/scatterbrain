const helloFoo = require('#src/foo.js')

it('can load the foo module', () => {
  expect(helloFoo).toEqual('hello foo')
})
