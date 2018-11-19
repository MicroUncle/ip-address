module.exports = {
    root: true,
    // parser: 'babel-eslint',
    env: {
        browser: true,
        node: true
    },
    extends: 'standard',
    // required to lint *.vue files
    // add your custom rules here
    rules: {
        indent: 'off',
        'space-before-function-paren': 'off',
        semi: 'off',
        'no-new': 'off',
        'eol-last': 'off',
        'no-eval': 'off',
        'standard/computed-property-even-spacing': 'off',
        'no-unreachable': 'off',
        'one-var': 'off'
    },
    globals: {}
}
