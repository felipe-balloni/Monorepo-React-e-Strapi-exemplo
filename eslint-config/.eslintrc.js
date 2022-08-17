module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'standard',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'prettier/standard',
        'prettier/react',
        'next/core-web-vitals'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 11,
        sourceType: 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'prettier',
        'react-hooks',
        'next/core-web-vitals'
    ],
    rules: {
        'prettier/prettier': 'error'
    },
    settings: {
        'import/resolver': {
            typescript: {}
        },
        react: {
            version: 'detect'
        }
    }
};
