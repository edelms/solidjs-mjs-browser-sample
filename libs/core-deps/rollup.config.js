import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default [
    {
        input: 'src/core-deps.ts',
        output: {
            file: '../../apps/tester/public/modules/core-deps.mjs',
            format: 'es'
        },
        plugins: [
            resolve(),
            commonjs(),
            typescript(),
        ]
    },
];