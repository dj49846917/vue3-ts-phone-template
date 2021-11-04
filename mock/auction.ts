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