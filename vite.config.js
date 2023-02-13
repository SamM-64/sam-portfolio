const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env
import { resolve } from 'path'

export default {
    root: 'src/',
    publicDir: '../static/',
    base: './',
    server:
    {
        host: true,
        open: !isCodeSandbox // Open if it's not a CodeSandbox
    },
    build: {
        rollupOptions: {
            input: {
              main: resolve(__dirname, 'src/index.html'),
              about: resolve(__dirname, 'src/about.html'),
              projets: resolve(__dirname, 'src/projets.html')
            }
          }
      }
}