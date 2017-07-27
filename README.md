# Webpack Delay Plugin [![Build Status][ci-img]][ci] [![Code Climate](https://codeclimate.com/github/MattDiMu/webpack-delay-plugin/badges/gpa.svg)](https://codeclimate.com/github/MattDiMu/webpack-delay-plugin)

[ci-img]:  https://travis-ci.org/MattDiMu/webpack-delay-plugin.svg
[ci]:      https://travis-ci.org/MattDiMu/webpack-delay-plugin


## Options and Usage
All Options are optional, the default values are as followed:
```js
const DelayPlugin = require('webpack-delay-plugin')

/* webpack config object */
module.exports = {
    ...
    plugins: [
        new DelayPlugin({
            delay: 3000, // delay in ms
            lifecycleEvents: ['run', 'watch-run'], // array of strings, which must match available webpack lifecycle events
            verbose: false // enable debug logging
        })
    ]
}
```
