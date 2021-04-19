import type { ReducerStateWithoutAction, ReducerWithoutAction } from 'react';
import config from '@/config';
import CryptoJS from 'crypto-js';
import type { WechatLoginResponseType } from '@/types';
import type { HttpResponseData } from '@/types/reponse';
import storage from '@/utils/storage';

const WechatStateSecretKey = "ab$#2d"
const WechatStateFillString = "Love"

export interface WechatLayoutReducerActionType extends ReducerWithoutAction<any> {
  wechatTokens: HttpResponseData<WechatLoginResponseType>
}

export interface WechatLayoutReducerArgType {
  type: string
  wxCode?: string
}

const wechatAuthorization = (routeString: string) => {
  const state = CryptoJS.AES.encrypt(`${new Date().getTime()}${WechatStateFillString}${WechatStateSecretKey}`, WechatStateSecretKey)
  const stateText = encodeURIComponent(state.toString())
  const redirectURI = `${config.service}${routeString}`
  window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${config.appid}&redirect_uri=${redirectURI}&response_type=code&scope=snsapi_userinfo&state=${stateText}#wechat_redirect`
}

const wechatLogin = async (code: string): Promise<HttpResponseData<WechatLoginResponseType>> => {
  const result: HttpResponseData<WechatLoginResponseType> = await getWechatLogin({code})
  if (result && result.code === 0) {
    storage.set('accessToken', result.data.accessToken)
    storage.set('refreshToken', result.data.refreshToken)
  }
  return result
}

const validateWechatState = (state: string): boolean => {
  const stateString = CryptoJS.AES.decrypt(decodeURIComponent(state), WechatStateSecretKey).toString(CryptoJS.enc.Utf8)
  return stateString.split(WechatStateFillString).length === 2;
}


export const wechatLayoutReducer: ReducerStateWithoutAction<WechatLayoutReducerActionType> = async (state, action)  => {
  switch (action.type) {
    case 'wechatAuthorization':
      wechatAuthorization(action.routeString)
      break;
    case 'getAccessToken':
      if (validateWechatState(action.wxState)) {
        await wechatLogin(action.wxCode)
        state = {
           ...state,
          loaded: true
        }
      } else {
        state = {
          ...state,
          validatedWechatState: false
        }
      }
      break
  }
  return state
}
