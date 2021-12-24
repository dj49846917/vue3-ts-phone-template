import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { UserConfigExport, ConfigEnv, loadEnv } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  // 获取根路径
  const root = process.cwd();
  // 获取环境变量文件的内容
  const envInfo = loadEnv(mode, root);
  return {
    plugins: [
      vue(),
      viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: true,
        //  这样可以控制关闭mock的时候不让mock打包到最终代码内
        injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
      }),
    ],
    base: envInfo.VITE_APP_BASE,
    resolve: {
      alias: {
        '@': resolve(__dirname, "src") //设置别名
      }
    },
    server: {
      host: '0.0.0.0',
      port: 8080,
      // port: Number(envInfo.VITE_APP_PORT), // 使用
      open: false,
      proxy: {
        '/text': {
          target: 'https://restapi.amap.com/v5/place/text',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/text/, '')
        },
        // '/bapi': {
        //   target: 'https://api.map.baidu.com/',
        //   changeOrigin: true,
        //   rewrite: path => path.replace(/^\/bapi/, '')
        // }
      }
    },
  };
};