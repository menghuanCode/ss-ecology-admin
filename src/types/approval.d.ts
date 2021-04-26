// 文章审核不通过 请求
export interface ApprovalFailedParams {
  path_article_id: string;
}
// 文章审核不通过 数据
export interface ApprovalFailedResponseData {
  content?: string;
  img_url?: string;
  description?: string;
}
// 文章审核通过 请求
export interface ApprovalPassedParams {
  path_article_id: string;
}
// 文章审核通过 数据
export interface ApprovalPassedResponseData {
  content?: string;
  img_url?: string;
  description?: string;
}
// 审核列表请求
export interface ApprovalParams {
  page: number; // 页码第几页
  page_size?: number; // 每页加载的数据条数默认20 不超过100
  keyword?: string; // 搜索关键字
  article_type?: string; // 文章类型 long长文 short短文
  article_state?: string; // 文章/评论状态枚举 pending - 待审核  passed - 已审核  failed - 审核不通过  invalid - 作废,后台下架  self_deleted - 作者自己删除
}
// 审核列表数据
export interface ApprovalResponseData {
  article_type?: number;
  article_id?: string;
  article_title?: string;
  article_content?: string;
  article_created_at?: string;
  article_tags?: string[];
  article_imgs?: string[];
  author_id?: string;
  author_username?: string;
  author_nickname?: string;
  author_avatar_url?: string;
  author_about?: string;
  like_count?: string;
  comment_count?: string;
  share_count?: string;
  is_like?: boolean;
  article_state?: string;
  article_adm_state?: string;
  approved_at?: string;
  approved_reason?: string;
  approved_inner_user_id?: string;
  community_id?: string;
  community_name?: string;
  community_img_url?: string;
  longitude?: string;
  latitude?: string;
  position_name?: string;
  report_count?: number;
}
// 审核详情请求
export interface ApprovalDetailParams {
  path_article_id: string;
}
// 审核详情数据
export interface ApprovalDetailResponseData {
  article_type?: number;
  article_id?: string;
  article_title?: string;
  article_content?: string;
  article_created_at?: string;
  article_tags?: string[];
  article_imgs?: string[];
  author_id?: string;
  author_username?: string;
  author_nickname?: string;
  author_avatar_url?: string;
  author_about?: string;
  like_count?: string;
  comment_count?: string;
  share_count?: string;
  is_like?: boolean;
  article_state?: string;
  article_adm_state?: string;
  approved_at?: string;
  approved_reason?: string;
  approved_inner_user_id?: string;
  community_id?: string;
  community_name?: string;
  community_img_url?: string;
  longitude?: string;
  latitude?: string;
  position_name?: string;
  report_count?: number;
}
