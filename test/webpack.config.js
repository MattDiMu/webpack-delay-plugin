const DelayPlugin = require('../index')

module.exports = {
    entry: './input.js',
    output: {
        filename: 'output.js'
    },
    plugins: [
        new DelayPlugin()
    ]
}
