// 导航管理
// 导航启用请求
export interface NavEnableParams {
  id: number;
}
// 导航禁用请求
export interface NavDisableParams {
  id: number;
}
// 导航详情请求
export interface NavDetailParams {
  id: number;
}
// 导航详情数据
export interface NavDetailResponseData {
  id?: string;
  tag_name?: string;
  city?: string;
  city_id?: string;
  community_id?: string;
  residential_quarter_id?: string;
  state?: string;
  created_at?: string;
  updated_at?: string;
  img_url?: string;
  article_id?: string;
  row_index?: number;
  is_recommend?: boolean;
}
// 导航编辑请求
export interface NavEditParams {
  id: number;
}
// 导航编辑数据
export interface NavEditResponseData {
  name: string;
  city: string;
  city_id: string;
  community_id: string;
  residential_quarter_id: string;
  img_url: string;
}
//导航删除请求
export interface NavDeleteParams {
  id: number;
}
// 导航列表请求
export interface NavParams {
  page: number; // 页码第几页
  page_size?: number; // 每页加载的数据条数默认20 不超过100
  keyword?: string; // 搜索关键字
}
// 导航列表数据
export interface NavResponseData {
  id?: string;
  tag_name?: string;
  city?: string;
  city_id?: string;
  community_id?: string;
  residential_quarter_id?: string;
  state?: string;
  created_at?: string;
  updated_at?: string;
  img_url?: string;
  article_id?: string;
  row_index?: number;
  is_recommend?: boolean;
}
// 导航创建请求
export interface NavCreateParams {
  name?: string;
  city?: string;
  city_id?: string;
  community_id?: string;
  residential_quarter_id?: string;
  img_url?: string;
}
