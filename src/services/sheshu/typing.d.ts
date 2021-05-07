declare namespace API {
  // 登录
  type LoginParams = {
    captcha: string;
    captcha_id: string;
    password: string;
    username: string;
  };

  type LoginResult = {
    code: number;
    msg?: string;
    token?: string;
    request_id?: string;
    status_code?: number;
  };

  // 验证码
  type captchResult = {
    code?: string;
    captcha_id?: string;
    captcha_image?: string;
  };
}
