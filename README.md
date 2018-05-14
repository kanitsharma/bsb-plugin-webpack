# BSB Plugin

Hassle free reasonmling with webpack

## Getting Started

1. Install bsb-plugin and bs-platform as dev dependencies
```
  npm i -s -D bsb-plugin bs-platform
```
2. Add it to your webpack.config
```javascript
  const path = require('path')
  const bsbPlugin = require('bsb-plugin')

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'build')
    },
    plugins: [
      new bsbPlugin({options: true})
    ]
  }
```
3. Freely import .re files within your javascript files, it will be compiled to javascript

### test.re
```reasonml
  let greet = name => "Hello " ++ name;
```

### index.js
```javascript
  import { greet } from './test'

  console.log(greet('Test'))
```