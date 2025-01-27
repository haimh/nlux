import {RollupOptions} from 'rollup';
import dts from 'rollup-plugin-dts';
import alias from '@rollup/plugin-alias';

export const generateDts = (
    fileName: string,
    isProduction: boolean,
    sourceFile = './src/index.ts',
): RollupOptions => {
    const folder = isProduction ? 'prod' : 'dev';
    const path = `../../../dist/${folder}/${fileName}`;
    return {
        input: sourceFile,
        logLevel: 'silent',
        plugins: [
            alias({
                entries: [
                    {find: /^@shared\/(.*)/, replacement: `../../../packages/shared/src/$1.ts`},
                ],
            }),
            dts(),
        ],
        output: {
            file: `${path}/${fileName}.d.ts`,
        },
    };
};
