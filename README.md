# 记录vue3移动端开发的心得体会

# vite的使用
## 安装插件
  * npm init vite@latest
    - ![vite安装](/docs/vite安装.jpg)
    - npm install

  * 详细配置文档请看：https://cn.vitejs.dev/

## 在vite中使用vue-router
  1. 安装：
      - npm install --save vue-router@4
  2. 使用：
      - 在src下新建文件夹 router，在router下建立文件index.ts，并写入以下代码
        ```
          import { createRouter, createWebHistory } from 'vue-router';

          const routes = [
            {
              path: '/',
              name: 'Home',
              component: () => import('@/views/Home.vue'), //路由懒加载
            }
          ]

          const router = createRouter({
            history: createWebHistory("/"), //history模式使用HTML5模式
            routes,
          });

          export default router;
        ```
    
      - 在main.ts中引入
        ```
          import { createApp } from 'vue'
          import App from './App.vue'
          import router from '@/router'

          const app = createApp(App)
          app.use(router).mount('#app')
        ```

      - 在tsconfig.json中添加@对应的映射,目的是取消代码的校验错误
        ```
          "baseUrl": ".",
          "paths": {
            "@/*": ["src/*"]
          },
        ```

      - 在vite.config.ts中添加@对应的映射
        ```
          import { defineConfig } from 'vite'
          import vue from '@vitejs/plugin-vue'
          import { resolve } from 'path'

          // https://vitejs.dev/config/
          export default defineConfig({
            plugins: [vue()],
            resolve: {
              alias: {
                '@': resolve(__dirname, "src") //设置别名
              }
            },
            server: {
              host: 'localhost',
              port: 8080,
              open: true,
            },
          })
        ```
      - 根据提示，需要安装@type/node，执行命令：npm install --save-dev @type/node
      - 在src下新建views文件夹，并新建Home.vue

## 在vite中使用vuex
  1. 安装
      - npm install --save vuex@next

  2. 使用
      - 在store文件夹下，创建index.ts，并写入
        ```
          import { createStore } from "vuex";
          import user from '@/store/modules/user'
          export default createStore({
            modules: {
              user
            }
          });
        ```

      - 在store文件夹下新建modules文件夹，并新建user.ts,写入：
        ```
          const state = {
            num: 1
          }

          const mutations = {}

          const actions = {}

          export default {
            namespaced: true,
            state,
            mutations,
            actions,
          }
        ```

      - 在main.ts中引入stroe
        ```
          import { createApp } from 'vue'
          import App from './App.vue'
          import router from '@/router'
          import store from '@/store'

          const app = createApp(App)
          app.use(router).use(store).mount('#app')
        ```

      - 在页面中使用：
        ```
          <template>
            <div>
              {{ data.count }}
            </div>
          </template>

          <script>
            import { reactive } from 'vue';
            import { useStore } from "vuex";
            export default {
              setup () {
                const store = useStore()
                console.log('store',store.state.user.num)
                let data = reactive({
                  count: store.state.user.num
                })
                return {
                  data
                }
              }
            }
          </script>

          <style scoped></style>
        ```

## 在vite中使用sass、less、stylus
  1. 安装
      - npm install -D sass
  2. 使用
      ```
        <style scoped lang="ts"></style>
      ```

## 在vite中，使用mockjs
  1. 安装：
      - npm i  mockjs -S
      - npm i vite-plugin-mock -D

  2. 在vite.config.ts中写入：
      ```
        import { UserConfigExport, ConfigEnv } from 'vite';
        import { viteMockServe } from 'vite-plugin-mock';
        import vue from '@vitejs/plugin-vue';

        export default ({ command }: ConfigEnv): UserConfigExport => {
          return {
            plugins: [
              vue(),
              viteMockServe({
                // default
                mockPath: 'mock',
                localEnabled: command === 'serve',
              }),
            ],
          };
        };
      ```

  3. 在跟路径下新建mock文件夹，新建auction.ts并写入：
      ```
        import { MockMethod } from 'vite-plugin-mock';

        // 获取列表数据
        const getList = {
          url: '/api/get',
          method: 'get',
          response: ({ query }) => {
            return {
              code: 0,
              data: {
                name: 'vben',
              },
            };
          },
        };

        export default [
          getList,
        ] as MockMethod[];
      ```

  4. 在代码中使用mock
      ```
        // 初始化数据
        onMounted(()=>{
          axios.get("/api/get").then(res=>{
            console.log("res", res)
          }).catch(err=>{
            console.log("err", err)
          })
        })
      ```

### vite生产环境中使用Mock
  1. 在src下新建mockProdServer.ts(名字无所谓), 把mock文件逐一引入
    ```
      //  mockProdServer.ts
      import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

      // 逐一导入您的mock.ts文件
      import cartApi from '../mock/cart'
      import categoryApi from '../mock/cateogry'
      import goodsInfoApi from '../mock/goodsInfo'
      import goodsListApi from '../mock/goodsList'
      import homeApi from '../mock/home'
      import loginApi from '../mock/login'
      import miFamilyApi from '../mock/miFamily'

      export function setupProdMockServer() {
        createProdMockServer([...cartApi, ...categoryApi, ...goodsInfoApi, ...goodsListApi, ...homeApi, ...loginApi, ...miFamilyApi]);
      }
    ```
  2. 修改vite.config.ts，在plugins里面添加以下代码
    ```
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
    ```

## 在vite中使用多环境（非常重要！！）
  * 默认情况下，vite只支持`.env.development`和`.env.production`这两个环境文件(创建在根路径下)
  * 执行npm run dev时，`默认加载.env.development文件中的内容`，执行npm run build时，`默认加载.env.production文件中的内容`
  * 如果想配置其他环境，例如：配置sit环境，需要创建.env.sit文件后，在package.json中指定环境`--mode sit`
  * 在.env.xxx文件中的变量要想在views页面中使用，必须加上`VITE_`, 必须是大写，例如`VITE_NODE_NAME=dev`
  * .env文件，所有环境都有效

  * 具体代码如下：
      1. 在根路径下新建.env.development文件
          ```
            # 测试变量
            VITE_PROXY_URL=https://www.aiqiyi.com
          ```
      2. 在根路径下新建.env.production文件
          ```
            # 测试变量
            VITE_PROXY_URL=https://www.baidu.com
          ```
      3. 在根路径下新建.env.sit文件
          ```
            # 测试变量
            VITE_PROXY_URL=https://www.youku.com
          ```
      4. 修改package.json中的启动命令
          ```
            "scripts": {
              "dev": "vite",                      // 加载.env.development
              "dev:sit": "vite --mode sit",       // 加载.env.sit
              "build": "vite build",              // 加载.env.production
              "serve": "vite preview"
            },
          ```
      5. 在页面中使用环境变量：`import.meta.env.VITE_PROXY_URL`
          * 由于新添的`VITE_PROXY_URL`，在输入的时候没有代码提示，如果要配置代码提示，需要在src/vite-env.d.ts中设置以下代码：
            ```
              /// <reference types="vite/client" />

              // 加上这个接口就有代码提示了
              interface ImportMetaEnv {
                VITE_APP_PORT: number,
                VITE_PROXY_URL: string,
              }
            ```

      6. 在vite.config.ts中，使用环境变量
          ```
            import { loadEnv } from 'vite';

            export default ({ command, mode }: ConfigEnv): UserConfigExport => {
              // 获取根路径
              const root = process.cwd();
              // 获取环境变量文件的内容
              const envInfo = loadEnv(mode, root);

              server: {
                host: 'localhost',
                port: Number(envInfo.VITE_APP_PORT), // 使用
                open: true,
              },
            }
          ```

## 在vite中使用接口代理
  * 以`http://api.vikingship.xyz/api/columns?currentPage=1&pageSize=5`这个接口为例
      1. 修改vite.config.ts，添加proxy
          ```
            server: {
              host: 'localhost',
              port: Number(envInfo.VITE_APP_PORT),
              open: true,
              proxy: {
                '/api': {
                  target: 'http://api.vikingship.xyz/api',
                  changeOrigin: true,
                  rewrite: path => path.replace(/^\/api/, '')
                }
              }
            },
          ```
      2. 页面中使用：
          ```
            import axios from 'axios';

            onMounted(()=>{
              axios.get("/api/columns?currentPage=1&pageSize=5").then(res=>{
                console.log("res", res)
              }).catch(err=>{
                console.log("err", err)
              })
            })
          ```

## 在vite中使用vant ui
  * 安装
      - 执行命令：npm i vant@next -S
  * 使用
      - 在main.ts中引入
          ```
            import { createApp } from 'vue'
            import App from './App.vue'
            import router from '@/router'
            import store from '@/store'
            import Vant from 'vant';
            import 'vant/lib/index.css';

            const app = createApp(App)
            app.use(router).use(store).use(Vant).mount('#app')
          ```
  
# vant ui的rem适配
  1. 安装
      * 执行命令：
          ```
            npm install --save-dev postcss postcss-pxtorem amfe-flexible
          ```
  2. 在main.ts中引入
      ```
        import { createApp } from 'vue'
        import App from './App.vue'
        import router from '@/router'
        import store from '@/store'
        import Vant from 'vant';
        import 'vant/lib/index.css';
        import '@/assets/css/global.scss';
        import "amfe-flexible/index.js"

        const app = createApp(App)
        app.use(router).use(store).use(Vant).mount('#app')
      ```
  3. 在根路径下新建postcss.config.js
      ```
        module.exports = {
          plugins: {
            'postcss-pxtorem': {
              rootValue: 37.5,
              propList: ['*'],
            },
          },
        };
      ```
