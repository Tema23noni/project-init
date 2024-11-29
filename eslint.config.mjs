import antfu from '@antfu/eslint-config';
import { FlatCompat } from '@eslint/eslintrc';
import query from '@tanstack/eslint-plugin-query';
import globals from 'globals';

const compat = new FlatCompat();

const config = antfu({
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
    )
    .append({
        name: 'feature-sliced/disables',
        files: ['src/app/index.ts'],
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
                { numbers: true },
            ],
            'style/member-delimiter-style': [
                'error',
                {
                    multiline: { delimiter: 'semi', requireLast: true },
                    singleline: { delimiter: 'semi', requireLast: false },
                    multilineDetection: 'brackets',
                },
            ],
            'vue/html-indent': [
                'error',
                4,
            ],
            'vue/quote-props': [
                'error',
                'as-needed',
            ],
            'vue/define-macros-order': [
                'error',
                { order: ['defineModel', 'defineProps', 'defineEmits', 'defineSlots'] },
            ],
            'vue/block-order': [
                'error',
                { order: ['template', 'script', 'style'] },
            ],
            'vue/component-name-in-template-casing': [
                'error',
                'kebab-case',
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
            'dot-notation': [
                'off',
            ],
            curly: [
                'error',
                'all',
            ],
            'no-template-curly-in-string': [
                'off',
            ],
            'no-console': [
                'error',
                { allow: ['warn', 'error', 'assert'] },
            ],
        },
    });

export default config;
