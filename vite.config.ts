import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import * as process from 'node:process';

export default (mode) => {
    const env = loadEnv(mode, process.cwd(), '');
    return defineConfig({
        plugins: [react()],
        define: {
            'process.env': env,
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
    });
};
