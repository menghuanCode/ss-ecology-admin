// 写手人员详情请求
export interface WriterDetailsParams {
  id: number;
}
// 写手人员详情数据
export interface WriterDetailResponseData {
  id?: number;
  phone?: string;
  username?: string;
  captcha?: string;
  created_at?: string;
  usage?: string;
  end_at?: string;
  state?: string;
}
// 写手人员编辑请求
export interface WriterEditParams {
  id: number;
}
// 写手人员编辑数据
export interface WriterEditResponseData {
  phone?: string;
  username?: string;
  captcha?: string;
  usage?: string;
  end_at?: string;
}

// 写手人员列表请求
export interface WriterParams {
  page: number; // 页码第几页
  page_size?: number; // 每页加载的数据条数默认20 不超过100
  keyword?: string; // 搜索关键字
  order_by?: string; // 排序字段名称
  sort_by?: string; // 排序方向 asc升序 desc降序
}
// 写手人员列表数据
export interface WriterResponseData {
  id?: number;
  phone?: string;
  username?: string;
  captcha?: string;
  created_at?: string;
  usage?: string;
  end_at?: string;
  state?: string;
}

// 创建写手人员请求
export interface WriterCreateParams {
  captcha?: string;
  end_at?: string; // 结束时间
  phone?: string; // 手机号
  usage?: string; // 用途
  username?: string;
}
// 删除写手人员请求
export interface WriterDeleteParams {
  id: number;
}
