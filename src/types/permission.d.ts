// 权限列表请求
export interface PermissionParams {
  mark: string; // 接口标记枚举
}
// 权限列表数据
export interface PermissionResponseData {
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
// 权限列表请求
export interface PermissionDetailsParams {
  id: number; // 接口标记枚举
}
// 权限列表数据
export interface PermissionDetailsResponseData {
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

// api管理接口
// api列表 请求
export interface InterfacesParams {
  page: number;
  page_size?: number;
  keyword?: string;
  method?: string;
  mark?: string;
}

// api列表 数据
export interface InterfacesResponseData {
  id?: string;
  app_name?: string;
  children_key?: string;
  parent_key?: string;
  name?: string;
  state?: string;
}
