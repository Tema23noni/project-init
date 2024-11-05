import antfu from '@antfu/eslint-config';
import query from '@tanstack/eslint-plugin-query';
import { FlatCompat } from '@eslint/eslintrc';
import globals from 'globals';

const compat = new FlatCompat();

const config = antfu({
    react: true,
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },
    },
})
    .append(
        compat.extends('plugin:@conarti/feature-sliced/rules').map((plugin) => ({
            ...plugin,
            name: 'feature-sliced/rules',
        })),
    ).append({
        name: 'feature-sliced/disables',
        files: ['src/src/resources.ts'],
        rules: {
            '@conarti/feature-sliced/public-api': 'off',
        },
    })
    .append(
        query.configs['flat/recommended'].map((plugin) => ({
            ...plugin,
            name: 'query/rules',
        })),
    )
    .append({
        rules: {
            'style/quotes': [
                'error',
                'single',
            ],
            'style/indent': [
                'error',
                4,
            ],
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
            'import/order': [
                'error',
                {
                    groups: [['external', 'builtin'], ['internal'], ['parent', 'sibling', 'index']],
                    pathGroups: [{ pattern: '@/**', group: 'internal' }],
                    'newlines-between': 'always',
                },
            ],
        },
    });

export default config;
