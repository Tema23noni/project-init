import antfu from '@antfu/eslint-config';

export default antfu({
    node: true,
    stylistic: {
        indent: 4, // 4, or 'tab'
        quotes: 'single', // or 'double'
    },
}).append({
    rules: {
        'style/semi': [
            'error',
            'always',
        ],
        'style/arrow-parens': [
            'error',
            'always',
        ],
        'style/brace-style': [
            'error',
            '1tbs',
        ],
        'style/operator-linebreak': [
            'error',
            'after',
            { overrides: { '?': 'before', ':': 'before' } },
        ],
        'style/quote-props': [
            'error',
            'as-needed',
        ],
        'style/member-delimiter-style': [
            'error',
            {
                multiline: { delimiter: 'comma', requireLast: true },
                singleline: { delimiter: 'comma', requireLast: false },
                multilineDetection: 'brackets',
            },
        ],
        'import/order': [
            'error',
            {
                groups: [['external', 'builtin'], ['internal'], ['parent', 'sibling', 'index']],
                pathGroups: [{ pattern: '@/**', group: 'internal' }],
                'newlines-between': 'always',
            },
        ],
        'ts/prefer-literal-enum-member': [
            'off',
        ],
        'unicorn/prefer-number-properties': [
            'off',
        ],
        'eslint-comments/no-unlimited-disable': [
            'off',
        ],
        'no-console': 'off',
        curly: [
            'error',
            'multi',
        ],
    },
});
