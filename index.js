const exec = require('child_process').execSync

function bsbPlugin(options) {
  // Setup the plugin instance with options...
}

bsbPlugin.prototype.apply = function(compiler) {
  compiler.hooks.run.tapPromise('BSB-plugin', compiler => {
    return new Promise(resolve => {
      exec("bsb -make-world")
      console.log('Compiled Reason -> Javascript')
      resolve('_')
    })
  })
}

module.exports = bsbPlugin