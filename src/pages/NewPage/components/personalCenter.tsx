import React, { useState } from 'react';
import { Button, Form, Input, Tabs } from 'antd';

// import Icon from '@ant-design/icons';
import imgURL from '../../../assets/image/123.png';
import './personalCenter.less';
import styles from './personalCenter.less';

import { Me, Lock, Security } from '@/svg/index';
import Icon from '@ant-design/icons';

// 表单

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 16 },
};
/* eslint-disable no-template-curly-in-string */
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

// 头像
const ImageAvatar = () => {
  return (
    <div className={styles.ImageAvatar}>
      <img className={styles.Avatar} src={imgURL}></img>
      {/* <Avatar size={64} icon={<UserOutlined />} /> */}
      <div className={styles.Avatarbtn}>
        <span
          className={styles.modify}
          onClick={() => {
            console.log('更换头像');
          }}
        >
          修改
        </span>
      </div>
    </div>
  );
};

const PersonalCenter = () => {
  const { TabPane } = Tabs;
  const [isColor, setColor] = useState(false);
  const [isColor1, setColor1] = useState(false);
  const [isColor2, setColor2] = useState(false);
  const [isColor3, setColor3] = useState(false);
  return (
    <>
      <Tabs tabPosition="left" animated={false}>
        <TabPane tab="基本设置" key="1" style={{ paddingLeft: '48px' }}>
          <ImageAvatar />
          <div className={styles.Information}>
            <span>基本信息</span>
          </div>
          <div className={styles.InformationBox}>
            <p>手机号码</p>
            <p>手机号码123</p>
          </div>
          <div className={styles.InformationBox}>
            <p>电子昵称</p>
            <p>手机号码123</p>
          </div>
          <div className={styles.InformationBox}>
            <p>用户昵称</p>
            <p>手机号码123</p>
          </div>
        </TabPane>
        <TabPane tab="修改密码" key="2" style={{ paddingLeft: '48px' }}>
          <div className={styles.Information}>
            <span>设置密码</span>
          </div>
          <Form
            {...layout}
            name="nest-messages"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              rules={[
                {
                  required: true,
                  message: '请输入手机号',
                },

                {
                  max: 11,
                  message: '最长11位!',
                },

                {
                  pattern: /^1[3|4|5|6|7|8|9]\d{9}$/,
                  message: '请输入正确的手机号',
                },
              ]}
              name="phone"
            >
              <Input
                onFocus={() => {
                  setColor1(!isColor1);
                }}
                onBlur={() => {
                  setColor1(!isColor1);
                }}
                placeholder="请输入手机号"
                prefix={
                  <Icon
                    component={Me}
                    style={{ color: isColor1 ? '#703BEB' : '#D9D9D9', fontSize: '21px' }}
                  ></Icon>
                }
                size="large"
                maxLength={11}
              />
            </Form.Item>

            <div className="input-affix-code-box">
              <Form.Item
                name="code"
                rules={[
                  { required: true, message: '请输入验证码' },
                  {
                    pattern: /^[1-9]\d*$/,
                    message: '请输入正确的验证码',
                  },
                  {
                    max: 6,
                    message: '最长6位!',
                  },
                ]}
              >
                <Input
                  onFocus={() => {
                    setColor2(!isColor2);
                  }}
                  onBlur={() => {
                    setColor2(!isColor2);
                  }}
                  placeholder="请输入验证码"
                  prefix={
                    <Icon
                      component={Security}
                      style={{ color: isColor2 ? '#703BEB' : '#D9D9D9', fontSize: '21px' }}
                    ></Icon>
                  }
                  className="ant-input-affix-code"
                  bordered
                  maxLength={6}
                  size="large"
                />
              </Form.Item>
              <button
                type="button"
                className="center-obtain-code"
                onClick={() => {
                  console.log(1123);
                }}
              >
                获取验证码
              </button>
            </div>
            <Form.Item rules={[{ required: true, message: '请输入新密码' }]} name="password">
              <Input.Password
                onFocus={() => {
                  setColor3(!isColor3);
                }}
                onBlur={() => {
                  setColor3(!isColor3);
                }}
                placeholder="请输入新密码"
                prefix={
                  <Icon
                    component={Lock}
                    style={{ color: isColor3 ? '#703BEB' : '#D9D9D9', fontSize: '21px' }}
                  ></Icon>
                }
                size="large"
              />
            </Form.Item>
            <Form.Item
              rules={[
                { required: true, message: '请再次输入新密码' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('两次输入密码不一致!'));
                  },
                }),
              ]}
              name="passwordto"
              dependencies={['password']}
            >
              <Input.Password
                onFocus={() => {
                  setColor(!isColor);
                }}
                onBlur={() => {
                  setColor(!isColor);
                }}
                placeholder="请再次输入新密码"
                prefix={
                  <Icon
                    component={Lock}
                    style={{ color: isColor ? '#703BEB' : '#D9D9D9', fontSize: '21px' }}
                  ></Icon>
                }
                size="large"
              />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: '362px',
                  height: '52px',
                  background: '#703beb',
                  borderRadius: '8px',
                }}
              >
                保持
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    </>
  );
};

export default PersonalCenter;
