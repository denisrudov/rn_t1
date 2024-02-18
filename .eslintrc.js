module.exports = {
    root: true,
    extends: ['universe/native'],
    rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        'no-console': 'error',
        'react-hooks/exhaustive-deps': 'error',
        '@next/next/no-img-element': 'off',
    },
}
