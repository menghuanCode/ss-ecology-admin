import React from 'react';
import styles from './error.less'

const InternalServerErrorPage: React.FC = () => (
    <div className={styles.container}>
      <img src={require('../assets/image/500.png')} alt="" />
      <span>抱歉，服务器出错了～</span>
    </div> 
);

export default InternalServerErrorPage;
