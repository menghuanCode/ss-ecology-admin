import React, { useState } from 'react';
import { Button, Modal, Form, Input, Tabs,Upload } from 'antd';
import { UserOutlined, LockOutlined, SafetyOutlined } from '@ant-design/icons';
import imgURL from '../../assets/image/123.png';
import './index.less';

// 表单
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

// 头像
const ImageAvatar = () => {
  return (
    <div className="ImageAvatar-box">
      <img className="Image-Avatar" src={imgURL}></img>
      {/* <Avatar size={64} icon={<UserOutlined />} /> */}
      <div className="Image-Avatar-btn">
        <span
          className="Image-Avatar-btn-modify"
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
  const onFinish = (values: any) => {
    console.log(values, 'values');
  };

  return (
    <>
      <Tabs tabPosition="left" centered={true}>
        <TabPane tab="基本设置" key="1" style={{ paddingLeft: '48px' }}>
          <ImageAvatar />
          <div className="center-Basic-Information">
            <span>基本信息</span>
          </div>
          <Form name="nest-messages" onFinish={onFinish}>
            <Form.Item>
              <Input
                addonBefore="手机号码"
                placeholder="手机号码"
                style={{ width: '55%' }}
                size="large"
                bordered={false}
              />
            </Form.Item>
            <Form.Item>
              <Input
                addonBefore="用户昵称"
                placeholder="用户昵称"
                style={{ width: '55%' }}
                size="large"
                bordered={false}
              />
            </Form.Item>
            <Form.Item>
              <Input
                addonBefore="电子邮箱"
                placeholder="电子邮箱"
                style={{ width: '55%' }}
                size="large"
                bordered={false}
              />
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="修改密码" key="2" style={{ paddingLeft: '48px' }}>
          <div className="center-Basic-Information">
            <span>设置密码</span>
          </div>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item rules={[{ required: true }]}>
              <Input placeholder="请输入手机号" prefix={<UserOutlined />} size="large" />
            </Form.Item>
            <Form.Item>
              <Input
                placeholder="请输入验证码"
                prefix={<SafetyOutlined />}
                className="ant-input-affix-code"
                bordered
                size="large"
              />
              <button
                type="button"
                className="center-obtain-code"
                onClick={() => {
                  console.log(1123);
                }}
              >获取验证码</button>
            </Form.Item>
            <Form.Item
              
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input placeholder="请输入新密码" prefix={<LockOutlined />} size="large" />
            </Form.Item>
            <Form.Item >
              <Input placeholder="重新输入新密码" prefix={<LockOutlined />} size="large" />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <input type="submit" className="center-obtain-code-sub" value="保存"></input>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    </>
  );
};
interface Values {
  title: string;
  description: string;
  modifier: string;
}
interface CollectionCreateFormProps {
  visible: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}
const CollectionCreateForm: React.FC<CollectionCreateFormProps> = (
  { visible, onCancel },
  ...props
) => {
  return (
    <Modal
      visible={visible}
      title="个人中心"
      okText="Create"
      cancelText="Cancel"
      centered
      onCancel={onCancel}
      footer={
        [] // 设置footer为空，去掉 取消 确定默认按钮
      }
    >
      <PersonalCenter />
    </Modal>
  );
};

const NewPage = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        个人中心
      </Button>

      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default NewPage;
