import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';

export default [
    {
        external: ['solid-js', 'solid-js/web', '@tanstack/solid-query', 'clsx'],

        input: 'src/index.ts',
        output: {
            file: '../../apps/tester/public/modules/core-lib.mjs',
            format: 'es',
            paths: {
                'solid-js': './core-deps.mjs',
                'solid-js/web': './core-deps.mjs',
                '@tanstack/solid-query': './core-deps.mjs',
                'clsx': './core-deps.mjs',
            },
        },
        plugins: [
            resolve(),
            commonjs(),
            typescript(),
            babel({
                babelrc: false,
                babelHelpers: 'bundled',
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                exclude: 'node_modules/**',
                presets: [
                    ["@babel/preset-env", { "targets": "> 0.25%, not dead" }],
                    'solid',
                    "@babel/preset-typescript"
                ],
            }),
        ]
    },
];