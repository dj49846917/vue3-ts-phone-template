// 通用列表参数类型
export interface commonListParam {
  pageIndex: number,                // 页码
  pageSize: number,                 // 页数
  total?: number,                   // 总数
}

// 通用类型
export interface commonObj {
  [key: string]: any;
}