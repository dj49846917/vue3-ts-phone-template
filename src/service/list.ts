import request from '@/utils/request'
import { queryParams } from '@/utils/index';
import { commonListParam } from '@/types';

// get
export function getList(params?: commonListParam) {
  return request({
    url: `/api/get${queryParams(params)}`,
  });
}

// post
// export function loginService(params?: any) {
//   return request({
//     url: "/Login/DoLogin",
//     method: "post",
//     data: params
//   });
// }