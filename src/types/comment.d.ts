// 文章评论禁用/下架 请求
export interface CommentDisableParams {
  id: number;
}
// 文章评论禁用/下架 数据
export interface CommentDisableResponseData {
  content?: string;
  img_url?: string;
  description?: string;
}
// 文章评论启用/下架 请求
export interface CommentEnableParams {
  id: number;
}
// 文章评论启用/下架 数据
export interface CommentEnableResponseData {
  content?: string;
  img_url?: string;
  description?: string;
}
// 回复列表请求
export interface CommentReplyParams {
  page: number; // 页码第几页
  page_size?: number; // 每页加载的数据条数默认20 不超过100
  keyword?: string; // 搜索关键字
}
// 回复列表数据
export interface CommentReplyResponseData {
  id?: string;
  comment_id?: string;
  content?: string;
  article_id?: string;
  user_id?: string;
  username?: string;
  avatar_url?: string;
  created_at?: string;
  approved_at?: string;
  approved_inner_user_id?: string;
  approved_inner_user_name?: string;
  approved_reason?: string;
  state?: string;
  is_comment?: CommentReplyParams;
  report_count?: number;
}
// 文章评论列表请求
export interface CommentParams {
  page: number; // 页码第几页
  page_size?: number; // 每页加载的数据条数默认20 不超过100
  keyword?: string; // 搜索关键字
}
// 文章评论列表数据
export interface CommentResponseData {
  id?: string;
  comment_id?: string;
  content?: string;
  article_id?: string;
  user_id?: string;
  username?: string;
  avatar_url?: string;
  created_at?: string;
  approved_at?: string;
  approved_inner_user_id?: string;
  approved_inner_user_name?: string;
  approved_reason?: string;
  state?: string;
  is_comment?: boolean;
  report_count?: number;
}
