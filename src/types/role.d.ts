// 角色管理接口
// 角色启用请求
export interface RoleEnableParams {
  id: number;
}
// 角色禁用请求
export interface RoleDisableParams {
  id: number;
}
// 角色下面的用户列表请求
export interface RoleUserParams {
  id: number;
  page: number; // 页码第几页
  page_size?: number; // 每页加载的数据条数默认20 不超过100
  keyword?: string; // 搜索关键字
}
// 角色下面的用户列表数据
export interface RoleUserResponseData {
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
// 角色列表请求
export interface RoleParams {
  page: number; // 页码第几页
  page_size?: number; // 每页加载的数据条数默认20 不超过100
  keyword?: string; // 搜索关键字
}
// 角色列表数据
export interface RoleResponseData {
  id?: string;
  role_id?: string;
  parent_id?: string;
  name?: string;
  description?: string;
  state?: string;
  permissions?: {
    id?: string;
    id_path?: string;
    parent_id?: string;
    app_name?: string;
    mark?: string;
    children?: {}[];
    parent?: string;
    key?: string;
    name?: string;
    state?: string;
    is_component?: boolean;
    is_bind?: boolean;
  }[];
  children?: {}[];
  created_at?: string;
  updated_at?: string;
  role_user_count?: string;
}
// 角色创建请求
export interface RoleCreateParams {
  name: string;
  description?: string;
}
// 角色详情请求
export interface RoleDetailParams {
  id: number;
}
// 角色详情数据
export interface RoleDetailResponseData {
  id?: string;
  role_id?: string;
  parent_id?: string;
  name?: string;
  description?: string;
  state?: string;
  permissions?: {
    id?: string;
    id_path?: string;
    parent_id?: string;
    app_name?: string;
    mark?: string;
    children?: {}[];
    parent?: string;
    key?: string;
    name?: string;
    state?: string;
    is_component?: boolean;
    is_bind?: boolean;
  }[];
  children?: {}[];
  created_at?: string;
  updated_at?: string;
  role_user_count?: string;
}
// 角色编辑请求
export interface RoleEditParams {
  id: number;
}
// 角色编辑数据
export interface RoleEditResponseData {
  name?: string;
  description?: string;
}
// 角色删除请求
export interface RoleDeleteParams {
  id: number;
}
// 角色权限树 请求
export interface RoleAuthorityTreeParams {
  id: number;
}
// 角色权限树 数据
export interface RoleAuthorityTreeResponseData {
  id?: string;
  id_path?: string;
  parent_id?: string;
  app_name?: string;
  mark?: string;
  children?: {}[];
  parent?: string;
  key?: string;
  name?: string;
  state?: string;
  is_component?: boolean;
  is_bind?: boolean;
}
// 角色权设置 请求
export interface RoleAuthorityParams {
  id: number;
}
// 角色权设置 数据
export interface RoleAuthorityResponseData {
  data?: number[];
}
// 子角色创建 请求
export interface RoleUserCreateParams {
  id: number;
}
// 子角色创建 数据
export interface RoleUserCreateResponseData {
  name?: number;
  description?: string;
}
