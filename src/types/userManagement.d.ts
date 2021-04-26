// 用户管理接口
//获取图形验证码
export interface UserCaptchaParams {
  captcha_id?: string;
  captcha_image?: string;
  code?: number;
}
//检验图形验证码
export interface UserCaptchaParams {
  captcha_id?: string;
  captcha_value?: string;
}
//系统用户列表 请求
export interface UserParams {
  page: number;
  page_size?: number;
  keyword?: string;
  is_check_user?: boolean;
}
//系统用户列表 数据
export interface UserResponseData {
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
// 系统用户创建 请求
export interface UserCreateParams {
  username?: string;
  email?: string;
  nickname?: string;
  role_id?: string;
  password?: string;
  old_password?: string;
  phone?: string;
}
// 系统用户详情 请求
export interface UserDetailsParams {
  id: number;
}
// 系统用户详情 数据
export interface UserDetailsResponseData {
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
// 系统用户密码重置/系统用户编辑 请求
export interface UserResetParams {
  id: number;
}
// 系统用户密码重置/系统用户编辑 数据
export interface UserResetResponseData {
  username?: string;
  email?: string;
  nickname?: string;
  role_id?: string;
  password?: string;
  old_password?: string;
  phone?: string;
}
// // 系统用户编辑 请求
// export interface UserResetParams {
//   id: number;
// }
// // 系统用户编辑 数据
// export interface UserResetResponseData {
//   username?: string;
//   email?: string;
//   nickname?: string;
//   role_id?: string;
//   password?: string;
//   old_password?: string;
//   phone?: string;
// }
//系统用户删除 请求
export interface UserDeleteParams {
  id: number;
}
// 个人中心详情 数据
export interface UserProfileResponseData {
  user_id?: string;
  username?: string;
  email?: string;
  role_id?: string;
  created_at?: string;
  updated_at?: string;
  code: number;
}
// 个人中心密码重置/个人中心编辑  请求
export interface UserProfileResetParams {
  username?: string;
  email?: string;
  nickname?: string;
  role_id?: string;
  password?: string;
  old_password?: string;
  phone?: string;
}
// 个人中心密码重置/个人中心编辑  数据
export interface UserProfileResetResponseData {
  code?: number;
}
// 个人权限列表  数据
export interface UserProfileAuthorityResponseData {
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
// 系统用户禁用
export interface UserDisableParams {
  data: {
    user_id: string;
  }[];
}
// 系统用户启用
export interface UserEnableParams {
  data: {
    user_id: string;
  }[];
}
// 用户登录
export interface UserLoginParams {
  username: string;
  password: string;
  nonce: string;
  timestamp?: number;
  key?: string;
  captcha_id: string;
  captcha: string;
}
// 用户注册
export interface UserRegisterParams {
  phone: string;
  captcha: string;
}
