const _merge = require('lodash.merge')

const defaultOptions = {
    delay: 10000,
    lifecycleEvents: ['run', 'watch-run'],
    verbose: false
}

module.exports = class DelayPlugin {

    constructor(options = {}) {
        this.options = _merge({}, defaultOptions, options)
    }

    apply(compiler) {

        this.options.lifecycleEvents.forEach((lifecycleEvent) => {
            compiler.plugin(lifecycleEvent, (compiler, cb) => {
                if(this.options.verbose) console.log('[DelayPlugin] delay start') // eslint-disable-line no-console

                setTimeout(() => {
                    if(this.options.verbose) console.log('[DelayPlugin] delay end') // eslint-disable-line no-console
                    cb()
                }, this.options.delay)
            })
        })
    }
}
