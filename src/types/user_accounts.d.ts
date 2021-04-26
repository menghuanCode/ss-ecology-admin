// 前台用户详情请求
export interface User_accountsDetailParams {
  path_user_id: string; //前台用户id;
}
// 前台用户详情数据
export interface User_accountsDetailResponseData {
  user_id?: string;
  username?: string;
  nickname?: string;
  about?: string;
  sex?: string;
  tags?: string;
  belong_community_id?: string;
  belong_community_name?: string;
  belong_xq_id?: string;
  belong_xq_name?: string;
  avatar_url?: string;
  wechat_nickname?: string;
  wechat_id?: string;
  phone?: string;
  register_time?: string;
  last_login_time?: string;
  total_login_count?: number;
  last_view_time?: string;
  carrier?: string;
  phone_province?: string;
  phone_city?: string;
  is_followed?: boolean;
  del_time?: string;
  state?: string;
  code?: number;
}
// 前台用户列表请求
export interface User_accountsParams {
  page: number;
  page_size?: number;
  keyword?: string;
}
// 前台用户列表数据
export interface User_accountsResponseData {
  user_id?: string;
  username?: string;
  nickname?: string;
  about?: string;
  sex?: string;
  tags?: string;
  belong_community_id?: string;
  belong_community_name?: string;
  belong_xq_id?: string;
  belong_xq_name?: string;
  avatar_url?: string;
  wechat_nickname?: string;
  wechat_id?: string;
  phone?: string;
  register_time?: string;
  last_login_time?: string;
  total_login_count?: number;
  last_view_time?: string;
  carrier?: string;
  phone_province?: string;
  phone_city?: string;
  is_followed?: boolean;
  del_time?: string;
  state?: string;
  code?: number;
}
