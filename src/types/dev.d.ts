// 开发者接口

// 获取系统用户信息 请求
export interface DevProfileParams {
  token?: string;
  user_id?: number;
  operation_id?: string;
  app_name?: string;
}
// 获取系统用户信息 数据
export interface DevProfileResponseData {
  id?: string;
  user_id?: string;
  username?: string;
  nickname?: string;
  avatar_url?: string;
  role_id?: string;
  role_name?: string;
  phone?: string;
  email?: string;
  state?: string;
  created_at?: string;
  updated_at?: string;
  is_used?: boolean;
}
// 创建操作资源 请求
export interface DevOperationParams {
  operation_id?: string;
  uri?: string;
  permission_key?: string;
  method?: string;
  summary?: string;
  mark?: string;
}
// 创建权限 请求
export interface DevPermissionParams {
  app_name?: string;
  children?: string;
  parent?: string;
  name?: string;
  mark?: string;
}
// 检查用户是否有权限 请求
export interface DevUserPermissionParams {
  token?: string;
  user_id?: number;
  operation_id?: string;
  app_name?: string;
}
// 检查用户是否有权限 数据
export interface DevProfileResponseData {
  is_ok?: boolean;
}
// 检查角色是否有权限 请求
export interface DevCheckParams {
  query_id?: number;
  permission_key?: string;
}
// 推送日志 请求 
export interface DevLogParams {
  user_id?: number;
  username?: string;
  device?: string;
  operation_type?: string;
  role_name?: string;
  role_id?: number;
  op_time?: string;
  client_ip?: string;
  log_body?: string;
}