// 运营推广相关接口
// 推广配置详情 请求
export interface OpPromotionDetailsParams {
  id: number;
}
//  推广配置详情 数据
export interface OpPromotionDetailsResponseData {
  id?: string;
  name?: string;
  description?: string;
  img_url?: string;
  bg_url?: string;
  activity_url?: string;
  state?: string;
  updated_at?: string;
  created_at?: string;
  row_index?: number;
  option_type?: number;
  vote_state?: string;
  end_time?: string;
  items?: {
    key_idx?: number;
    value?: string;
    id?: number;
  }[];
  mark?: string;
}
// 推广配置编辑 请求
export interface OpPromotionEditIDParams {
  id: number;
}
// 推广配置编辑 请求
export interface OpPromotionEditParams {
  name?: string;
  activity_url?: string;
  img_url?: string;
  bg_url?: string;
  description?: string;
  option_type?: number;
  end_time?: string;
  items?: {
    key_idx?: number;
    value?: string;
    id?: number;
  }[];
  mark?: string;
  remarks?: string;
}
// 推广配置删除 请求
export interface OpPromotionDeleteParams {
  id: number;
}
// 推广配置禁用 请求
export interface OpPromotionDisableParams {
  id: number;
}
// 推广配置启用 请求
export interface OpPromotionEnableParams {
  id: number;
}
// 推广配置列表 请求
export interface OpPromotionParams {
  page: number;
  page_size?: number;
  keyword?: string;
  is_enabled?: string;
}
// 推广配置列表 数据
export interface OpPromotionResponseData {
  id?: string;
  name?: string;
  description?: string;
  img_url?: string;
  bg_url?: string;
  activity_url?: string;
  state?: string;
  updated_at?: string;
  created_at?: string;
  row_index?: number;
  option_type?: number;
  vote_state?: string;
  end_time?: string;
  items?: {
    key_idx?: number;
    value?: string;
    id?: number;
  }[];
  mark?: string;
}
// 推广配置编辑 请求
export interface OpPromotionCreateParams {
  name?: string;
  activity_url?: string;
  img_url?: string;
  bg_url?: string;
  description?: string;
  option_type?: number;
  end_time?: string;
  items?: {
    key_idx?: number;
    value?: string;
    id?: number;
  }[];
  mark?: string;
  remarks?: string;
}
// 推广配置排序 请求
export interface OpPromotionSortParams {
  id?: string;
  value?: string;
  row_index?: number;
}
