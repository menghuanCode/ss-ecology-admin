export interface JsSDKResponseType {
  app_id: string;
  nonce_str: string;
  signature: string;
  timestamp: number;
}

export interface ReferTokenResponseType {
  accessToken: string;
  refreshToken: string;
}

export interface WechatLoginResponseType {
  accessToken: string;
  refreshToken: string;
}
