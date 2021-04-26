// 圈子管理
// 圈子下移请求
export interface CommunityDownParams {
  id: number;
}
// 圈子下移数据
export interface CommunityDownResponseData {
  row_index?: number; //	行索引排序优先级,值越小优先级越高,排上面
}
// 圈子上移请求
export interface CommunityUpParams {
  id: number;
}
// 圈子上移数据
export interface CommunityUpResponseData {
  row_index?: number; //	行索引排序优先级,值越小优先级越高,排上面
}
// 圈子启用请求
export interface CommunityEnableParams {
  id: number;
}
// 圈子禁用请求
export interface CommunityDisableParams {
  id: number;
}
// 圈子详情请求
export interface CommunityDetailParams {
  id: number;
}
// 圈子详情数据
export interface CommunityDetailResponseData {
  id?: string;
  province?: string;
  city?: string;
  district?: string;
  name?: string;
  img_url?: string;
  state?: string;
  created_at?: string;
  updated_at?: string;
  user_id?: string;
  description?: string;
  row_index?: number;
}
// 圈子编辑请求
export interface CommunityEditParams {
  id: number;
}
// 圈子编辑数据
export interface CommunityEditResponseData {
  content?: string;
  img_url?: string;
  description?: string;
}
//圈子删除请求
export interface CommunityDeleteParams {
  id: number;
}
// 圈子列表请求
export interface CommunityParams {
  page: number; // 页码第几页
  page_size?: number; // 每页加载的数据条数默认20 不超过100
  keyword?: string; // 搜索关键字
  is_get_user_community?: string; // 是否获取用户自定义圈子,传字符串的true/false
  is_enabled?: string; // 是否展示所有已启用,传字符串的true/false
}
// 圈子列表数据
export interface CommunityResponseData {
  id?: string;
  province?: string;
  city?: string;
  district?: string;
  name?: string;
  img_url?: string;
  state?: string;
  created_at?: string;
  updated_at?: string;
  user_id?: string;
  description?: string;
  row_index?: number;
}
// 圈子创建请求
export interface CommunityCreateParams {
  content?: string;
  img_url?: string;
  description?: string;
}
