import { Result } from 'antd';
import React from 'react';
import styles from './error.less'

const UnauthorizedPage: React.FC = () => (
  <div className={styles.container}>
    <Result
    status="403"
    title="403"
    subTitle="抱歉，你没有权限呢～"
    />
  </div>
  
);

export default UnauthorizedPage;
