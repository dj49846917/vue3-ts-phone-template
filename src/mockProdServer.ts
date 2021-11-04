//  mockProdServer.ts
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

// 逐一导入您的mock.ts文件
import userApi from '../mock/auction'
export function setupProdMockServer() {
  createProdMockServer([...userApi]);
}