import { Alert, Space, message, Tabs, Form, Input, Button, Checkbox } from 'antd';
import React, { useState } from 'react';
import ProForm, { ProFormCaptcha, ProFormText } from '@ant-design/pro-form';
import { useIntl, Link, history, FormattedMessage, SelectLang, useModel } from 'umi';
import { login, getLoginCaptcha } from '@/services/sheshu/login';

import { Eye, ShutEye, Me, Lock, Security } from '@/svg/index';
import Icon from '@ant-design/icons';

import classnames from 'classnames';

import styles from './index.less';
import { useEffect } from 'react';
import _ from 'lodash';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

/** 此方法会跳转到 redirect 参数所在的位置 */
const goto = () => {
  if (!history) return;
  setTimeout(() => {
    const { query } = history.location;
    const { redirect } = query as { redirect: string };
    history.push(redirect || '/');
  }, 10);
};

const captchaCodeRender = (src) => {
  return <img src={src} alt="" className={styles.captchaCode} />;
};

const Login: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);

  const [userLoginState, setUserLoginState] = useState<API.LoginResult>(null);
  const [captchResult, setCaptchResult] = useState<API.captchResult>({});
  const [loginForm] = Form.useForm();
  const { initialState, setInitialState } = useModel('@@initialState');

  const errorCode = _.get(userLoginState, '')

  const fetchCaptcha = async () => {
    const result = await getLoginCaptcha();
    setCaptchResult(result);
  };

  useEffect(() => {
    fetchCaptcha();
  }, []);

  const handleSubmit = async (values: API.LoginParams) => {
    setSubmitting(true);
    try {
      // 登录
      const data = { ...values };
      data.captcha_id = _.get(captchResult, 'captcha_id', '');
      const msg = await login(data);
      if (msg.code === 0) {
        message.success('登录成功！');
        goto();
        return;
      }

    } catch (error) {
      // 如果失败去设置用户错误信息
      const { data } = error;
      setUserLoginState(data);
      await fetchCaptcha();
      message.error('登录失败，请重试！');
    }
    setSubmitting(false);
  };

  return (
    <div className={styles.container}>
      {/* 装饰 */}
      <div className={styles.decorate}>
        <div className={styles.decorateSquare}></div>
        <div className={styles.decorateTop}></div>
        <div className={styles.decorateMain}></div>
        <div className={styles.decorateBottom}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.box}>
          <div className={styles.header}>
            <Link to="/">
              <img alt="logo" className={styles.logo} src="/logo.svg" />
              <span className={styles.title}>云界生态管理平台</span>
            </Link>
          </div>

          <div className={styles.main}>
            <ProForm
              form={loginForm}
              initialValues={{}}
              submitter={{
                searchConfig: {
                  submitText: '登录',
                },
                render: (_, dom) => dom.pop(),
                submitButtonProps: {
                  loading: submitting,
                  className: styles.submitButton,
                },
              }}
              onFinish={async (values) => {
                handleSubmit(values as API.LoginParams);
              }}
            >
              <LoginMessage content="用户名或密码错误" />
              <LoginMessage content="验证码错误" />
              <ProFormText
                name="username"
                fieldProps={{
                  prefix: <Icon component={Me} className={styles.icon}></Icon>,
                  className: styles.input,
                }}
                placeholder="请输入用户名"
                rules={[
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  prefix: <Icon component={Lock} className={styles.icon} />,
                  iconRender: (visible) => (
                    <Icon component={visible ? Eye : ShutEye} className={styles.icon} />
                  ),
                  className: styles.input,
                }}
                placeholder="请输入密码"
                rules={[
                  {
                    required: true,
                    message: '请输入密码！',
                  },
                ]}
              />
              {/* <div className={styles.captchaInput}>
                <ProFormCaptcha
                  fieldProps={{
                    prefix: <Icon component={Security} className={styles.icon} />,
                    className: styles.input,
                  }}
                  placeholder="请输入验证码"
                  captchaTextRender={(timing, count) => {
                    if (timing) {
                      return `${count}s`;
                    }
                    return '获取验证码';
                  }}
                  name="captcha"
                  rules={[
                    {
                      required: true,
                      message: '请输入验证码！',
                    },
                  ]}
                  onGetCaptcha={async (phone) => {
                    const result = await getLoginCaptcha();
                    if (result === false) {
                      return;
                    }
                    message.success('获取验证码成功！验证码为：1234');
                  }}
                />
              </div> */}
              <div className={styles.captchaInput}>
                <ProFormCaptcha
                  fieldProps={{
                    prefix: <Icon component={Security} className={styles.icon} />,
                    className: styles.input,
                  }}
                  placeholder="请输入验证码"
                  captchaTextRender={(timing, count) => {
                    const captcha_image = _.get(captchResult, 'captcha_image');
                    return captchaCodeRender(captcha_image);
                  }}
                  name="captcha"
                  rules={[
                    {
                      required: true,
                      message: '请输入验证码！',
                    },
                  ]}
                  onGetCaptcha={async (phone) => {
                    const result = await getLoginCaptcha();
                    setCaptchResult(result);
                    setTimeout(function () {
                      loginForm.resetFields(['captcha']);
                    }, 0);
                  }}
                />
              </div>
            </ProForm>
            <div className={styles.footer}>
              <div className={styles.list}>
                <div className={styles.item}>
                  <Link to="/">帮助</Link>
                </div>
                <div className={styles.item}>
                  <Link to="/">隐私</Link>
                </div>
                <div className={styles.item}>
                  <Link to="/">条款</Link>
                </div>
              </div>
              <div className={styles.copyright}>Copyright &copy;169 2020 云界数阵科技有限公司</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
