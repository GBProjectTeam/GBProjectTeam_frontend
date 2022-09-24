const indentUnit = 4

module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: false,
    },
    plugins: [
        'react',
        'react-hooks',
        'import',
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'array-callback-return': 'off',
        'camelcase': 'off',
        'consistent-return': 'off',
        'eqeqeq': 'warn',
        'no-console': 'warn',
        'no-alert': 'warn',
        'no-plusplus': 'off',
        'no-restricted-syntax': 'off',
        'no-multi-spaces': 'error',
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'no-var': 'error',
        'radix': 'off',
        'no-use-before-define': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react/prop-types': 'warn',
        'react/jsx-indent': ['warn', indentUnit],
        'react/jsx-indent-props': ['warn', indentUnit],
        'indent': 'warn',
        'semi': [1, 'never'],
        'react/require-default-props': [
            'warn',
            {
                forbidDefaultForRequired: true,
                ignoreFunctionalComponents: true
            }
        ],
        'template-tag-spacing': ['error', 'never'],
        'react/jsx-tag-spacing': 'error',
        'quotes': ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-single'],
        'no-trailing-spaces': 'error',
        'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
        'max-len': ['warn', 150],
        'object-curly-spacing': ['error', 'always'],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}