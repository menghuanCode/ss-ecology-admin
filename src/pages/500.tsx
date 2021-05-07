import { Result } from 'antd';
import React from 'react';
import styles from './error.less'

const InternalServerErrorPage: React.FC = () => (
  <div className={styles.container}>
    <Result
    status="500"
    title="500"
    subTitle="抱歉，服务器出错了～"
    />
  </div>
);

export default InternalServerErrorPage;
