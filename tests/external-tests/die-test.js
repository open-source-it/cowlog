const cowlog = require('../../index')()

cowlog.log('bla-bla-bla', 'bla-bla-bla', 'bla-bla-bla')

cowlog.log('abc', 'barvalue1')('lasts')
cowlog.log('abc', 'barvalue2')('lasts')('die')

console.log('yay')
