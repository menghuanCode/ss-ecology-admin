// 热门话题取消推荐请求
export interface TagUnRecommednParams {
  id: number;
}
// 热门话题推荐请求
export interface TagRecommednParams {
  id: number;
}
// 热门话题下移请求
export interface TagDownParams {
  id: number;
}
// 热门话题下移数据
export interface TagDownResponseData {
  row_index?: number; //	行索引排序优先级,值越小优先级越高,排上面
}
// 热门话题上移请求
export interface TagUpParams {
  id: number;
}
// 热门话题上移数据
export interface TagUpResponseData {
  row_index?: number; //	行索引排序优先级,值越小优先级越高,排上面
}
// 热门话题启用请求
export interface TagEnableParams {
  id: number;
}
// 热门话题禁用请求
export interface TagDisableParams {
  id: number;
}
//用户自定义话题详情请求
export interface TagUserParams {
  id: number;
}
//用户自定义话题详情数据
export interface TagUserResponseData {
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
//用户自定义话题删除请求
export interface TagUserDeleteParams {
  id: number;
}
// 用户自定义话题列表请求
export interface TagUserListParams {
  page: number; // 页码第几页
  page_size?: number; // 每页加载的数据条数默认20 不超过100
  keyword?: string; // 搜索关键字
}
// 用户自定义话题列表数据
export interface TagUserListResponseData {
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
// 热门话题详情请求
export interface TagDetailParams {
  id: number;
}
// 热门话题详情数据
export interface TagDetailResponseData {
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
// 热门话题编辑请求
export interface TagEditParams {
  id: number;
}
// 热门话题编辑数据
export interface TagEditResponseData {
  name?: string;
  city?: string;
  city_id?: string;
  community_id?: string;
  residential_quarter_id?: string;
  img_url?: string;
}
//热门话题删除请求
export interface TagDeleteParams {
  id: number;
}
// 热门话题列表请求
export interface TagParams {
  page: number; // 页码第几页
  page_size?: number; // 每页加载的数据条数默认20 不超过100
  keyword?: string; // 搜索关键字
  is_enabled?: string; // 是否展示所有已启用,传字符串的true/false
}
// 热门话题列表数据
export interface TagResponseData {
  id: string;
  tag_name: string;
  city: string;
  city_id: string;
  community_id: string;
  residential_quarter_id: string;
  state: string;
  created_at: string;
  updated_at: string;
  img_url: string;
  article_id: string;
  row_index: number;
  is_recommend: boolean;
}
// 热门话题创建请求
export interface TagCreateParams {
  name?: string;
  city?: string;
  city_id?: string;
  community_id?: string;
  residential_quarter_id?: string;
  img_url?: string;
}