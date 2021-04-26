// [common]获取上传签名请求
export interface ArticleUploadParams {
  upload_type: string; // community-圈子社区 tag-话题标签 op_promotion-运营推广  op_game-运营游戏 op_game_vote-运营游戏投票
}
// [common]获取上传签名数据
export interface ArticleUploadResponseData {
  key?: string;
  signature?: string;
  acl?: string;
  success_action_status?: string;
  ak?: string;
  host?: string;
  policy?: string;
  callback?: string;
  exp?: number;
  code?: number;
}
// 文章编辑请求
export interface ArticleEditParams {
  path_article_id: string;
}
// 文章编辑数据
export interface ArticleEditResponseData {
  article_type?: string; // 文章类型 long长文 short短文
  longitude?: string; // 纬度
  latitude?: string; // 经度
  title?: string; // 标题
  content?: string; // 内容
  tag_ids?: {
    id?: string;
    value?: string;
  }[];
  community_id?: string; // 社区id
  residential_quarter_id?: string; // 小区id
  article_id?: string; // 文章id有已存在草稿情况下需要传
  is_stash?: boolean; // 是否暂存,草稿功能
  imgs?: string[]; // 图片数组
}

// 文章详情请求
export interface ArticleDetailParams {
  path_article_id: string;
}
// 文章详情数据
export interface ArticleDetailResponseData {
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
// 文章列表请求
export interface ArticleParams {
  page: number; // 页码第几页
  page_size?: number; // 每页加载的数据条数默认20 不超过100
  keyword?: string; // 搜索关键字
  article_type?: string; // 文章类型 long长文 short短文
  article_state?: string; // 文章/评论状态枚举 pending - 待审核  passed - 已审核  failed - 审核不通过  invalid - 作废,后台下架  self_deleted - 作者自己删除
}
// 文章列表数据
export interface ArticleResponseData {
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
// 文章创建请求
export interface ArticleCreateParams {
  article_type?: string; // 文章类型 long长文 short短文
  longitude?: string; // 纬度
  latitude?: string; // 经度
  title?: string; // 标题
  content?: string; // 内容
  tag_ids?: {
    id?: string;
    value?: string;
  }[];
  community_id?: string; // 社区id
  residential_quarter_id?: string; // 小区id
  article_id?: string; // 文章id有已存在草稿情况下需要传
  is_stash?: boolean; // 是否暂存,草稿功能
  imgs?: string[]; // 图片数组
}
// 文章禁用/下架请求
export interface ArticleDisableParams {
  path_article_id: string;
}
// 文章禁用/下架数据
export interface ArticleDisableResponseData {
  content?: string;
  img_url?: string;
  description?: string;
}
// 文章启用/上架请求
export interface ArticleEnableParams {
  path_article_id: string;
}
