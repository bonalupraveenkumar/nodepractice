
// Module - Encapsulated code (only share minimum)
//CommonJs - every file is module (by defualt)
const names = require ('./4-names')
console.log(names)

const sayHi = require('./5-utils')
const obj = require('./6-alternative-flavor')
require('./7-mind-grenade')

console.log(obj)


sayHi('sussan')
sayHi(names.john)
sayHi(names.peter)