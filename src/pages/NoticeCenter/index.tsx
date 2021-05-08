import React, { useState } from 'react';
import styles from './index.less';
import menuIconArry from './icon';
import UserIcon from '../NewPage/index';
import { Tooltip } from 'antd';
// import { aiaccountUser } from '@/services/test/api';
import _ from 'lodash'
import { Ask, Colour,Inform } from '@/svg/index';
import Icon from '@ant-design/icons';

const LogoSvg = () => (
  <svg width="34px" height="34px" viewBox="0 0 34 34" version="1.1">
    <defs>
      <path
        d="M0.0490609533,1.48221717 C1.14434877,2.65347089 2.35468167,3.70940374 3.6618347,4.63004022 L3.6618347,4.63004022 C4.27440504,3.90185697 4.80325446,3.09662528 5.2328429,2.23029201 L5.2328429,2.23029201 C4.31956065,1.58629131 3.46005831,0.867088652 2.66255339,0.0815806959 L2.66255339,0.0815806959 C1.82485592,0.603713936 0.951928944,1.07154398 0.0490609533,1.48221717"
        id="path-1"
      ></path>
      <linearGradient
        x1="28.647983%"
        y1="36.3349757%"
        x2="100.000183%"
        y2="50.0002662%"
        id="linearGradient-3"
      >
        <stop stopColor="#5858FF" offset="0%"></stop>
        <stop stopColor="#8E63F2" offset="100%"></stop>
      </linearGradient>
      <path
        d="M21.4030239,2.05160343 L21.4027798,2.04346214 C17.6887925,6.4583039 12.2125975,9.25277846 6.101295,9.25277846 L6.101295,9.25277846 C4.53728388,9.25277846 3.01517391,9.06846652 1.55302732,8.72208428 L1.55302732,8.72208428 L0.0349854227,9.90441686 C0.34773883,10.4975555 0.707600515,11.060563 1.10960743,11.5877321 L1.10960743,11.5877321 C2.71714693,11.9537542 4.38709065,12.1482217 6.101295,12.1482217 L6.101295,12.1482217 C12.1152078,12.1482217 17.5902637,9.77230984 21.6959251,5.88253891 L21.6959251,5.88253891 C21.3980609,8.28304249 20.5297715,10.1839063 19.06494,11.9221123 L19.06494,11.9221123 C19.7052546,12.3734079 20.368269,12.7929778 21.0527629,13.1771289 L21.0527629,13.1771289 C23.0405044,10.694541 24.116835,7.78843854 24.116835,4.31697849 L24.116835,4.31697849 C24.116835,2.82108061 23.8944742,1.37889841 23.4828666,0.0229130967 L23.4828666,0.0229130967 C23.1079531,0.284441336 22.66494,0.704095122 21.4030239,2.05160343"
        id="path-4"
      ></path>
      <linearGradient
        x1="-0.000219300913%"
        y1="50.0001445%"
        x2="100.000036%"
        y2="50.0001445%"
        id="linearGradient-6"
      >
        <stop stopColor="#5858FF" offset="0%"></stop>
        <stop stopColor="#8F64F2" offset="100%"></stop>
      </linearGradient>
      <path
        d="M9.24461319,0.0741947893 C9.02420503,6.51193565 5.39719303,12.1409197 0,15.4244588 L0,15.4244588 C0.392487626,16.2314531 0.886921147,16.9855709 1.46767916,17.6725442 L1.46767916,17.6725442 C7.66310936,13.9275538 11.8240965,7.47319461 12.0524781,0.0927434866 L12.0524781,0.0927434866 C11.5650417,0.0340758874 11.0682487,0.00369295331 10.5638077,0.00369295331 L10.5638077,0.00369295331 C10.1176215,0.00369295331 9.67770018,0.0282846652 9.24461319,0.0741947893"
        id="path-7"
      ></path>
      <linearGradient
        x1="39.4020473%"
        y1="50%"
        x2="73.2652035%"
        y2="50.0002491%"
        id="linearGradient-9"
      >
        <stop stopColor="#8E63F2" offset="0%"></stop>
        <stop stopColor="#4848FF" offset="100%"></stop>
      </linearGradient>
      <path
        d="M1.36882501,0.0317258262 C0.92752051,0.0317258262 0.4921554,0.055646092 0.063706014,0.100632978 L0.063706014,0.100632978 C0.0636246525,0.12530862 0.0626483151,0.149732471 0.0626483151,0.174492044 L0.0626483151,0.174492044 C0.0626483151,5.01780031 1.75691911,9.48912747 4.61856397,13.0959678 L4.61856397,13.0959678 C5.51484168,12.76612 6.3798766,12.3782759 7.20862431,11.9368841 L7.20862431,11.9368841 C4.49139603,8.70034621 2.86945556,4.61543627 2.86945556,0.174492044 L2.86945556,0.174492044 C2.86945556,0.157034447 2.87018781,0.139744711 2.87018781,0.122287113 L2.87018781,0.122287113 C2.3786833,0.0626962756 1.8776595,0.0317258262 1.36882501,0.0317258262 Z"
        id="path-10"
      ></path>
      <linearGradient
        x1="35.0403177%"
        y1="49.9996016%"
        x2="61.1558998%"
        y2="61.5030662%"
        id="linearGradient-12"
      >
        <stop stopColor="#8F64F2" offset="0%"></stop>
        <stop stopColor="#5858FF" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g id="Dashboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="云界生态管理平台-灯塔中心" transform="translate(-11.000000, -21.000000)">
        <g id="侧栏2">
          <g id="侧栏">
            <g id="侧边栏1">
              <g id="-mockplus-" transform="translate(11.000000, 21.000000)">
                <g id="yunjie_34_logo">
                  <g>
                    <g>
                      <rect
                        id="LOGO"
                        fillOpacity="0"
                        fill="#FFFFFF"
                        x="0"
                        y="0"
                        width="34"
                        height="34"
                      ></rect>
                      <g id="编组" transform="translate(5.000000, 7.000000)">
                        <g transform="translate(14.889145, 12.977625)">
                          <mask id="mask-2" fill="white">
                            <use xlinkHref="#path-1"></use>
                          </mask>
                          <g id="Clip-2"></g>
                          <path
                            d="M0.0490609533,1.48221717 C1.14434877,2.65347089 2.35468167,3.70940374 3.6618347,4.63004022 L3.6618347,4.63004022 C4.27440504,3.90185697 4.80325446,3.09662528 5.2328429,2.23029201 L5.2328429,2.23029201 C4.31956065,1.58629131 3.46005831,0.867088652 2.66255339,0.0815806959 L2.66255339,0.0815806959 C1.82485592,0.603713936 0.951928944,1.07154398 0.0490609533,1.48221717"
                            id="Fill-1"
                            fill="url(#linearGradient-3)"
                            mask="url(#mask-2)"
                          ></path>
                        </g>
                        <g transform="translate(0.325446, 6.179234)">
                          <mask id="mask-5" fill="white">
                            <use xlinkHref="#path-4"></use>
                          </mask>
                          <g id="Clip-4"></g>
                          <path
                            d="M21.4030239,2.05160343 L21.4027798,2.04346214 C17.6887925,6.4583039 12.2125975,9.25277846 6.101295,9.25277846 L6.101295,9.25277846 C4.53728388,9.25277846 3.01517391,9.06846652 1.55302732,8.72208428 L1.55302732,8.72208428 L0.0349854227,9.90441686 C0.34773883,10.4975555 0.707600515,11.060563 1.10960743,11.5877321 L1.10960743,11.5877321 C2.71714693,11.9537542 4.38709065,12.1482217 6.101295,12.1482217 L6.101295,12.1482217 C12.1152078,12.1482217 17.5902637,9.77230984 21.6959251,5.88253891 L21.6959251,5.88253891 C21.3980609,8.28304249 20.5297715,10.1839063 19.06494,11.9221123 L19.06494,11.9221123 C19.7052546,12.3734079 20.368269,12.7929778 21.0527629,13.1771289 L21.0527629,13.1771289 C23.0405044,10.694541 24.116835,7.78843854 24.116835,4.31697849 L24.116835,4.31697849 C24.116835,2.82108061 23.8944742,1.37889841 23.4828666,0.0229130967 L23.4828666,0.0229130967 C23.1079531,0.284441336 22.66494,0.704095122 21.4030239,2.05160343"
                            id="Fill-3"
                            fill="url(#linearGradient-6)"
                            mask="url(#mask-5)"
                          ></path>
                        </g>
                        <g transform="translate(0.000000, 0.136220)">
                          <mask id="mask-8" fill="white">
                            <use xlinkHref="#path-7"></use>
                          </mask>
                          <g id="Clip-6"></g>
                          <path
                            d="M9.24461319,0.0741947893 C9.02420503,6.51193565 5.39719303,12.1409197 0,15.4244588 L0,15.4244588 C0.392487626,16.2314531 0.886921147,16.9855709 1.46767916,17.6725442 L1.46767916,17.6725442 C7.66310936,13.9275538 11.8240965,7.47319461 12.0524781,0.0927434866 L12.0524781,0.0927434866 C11.5650417,0.0340758874 11.0682487,0.00369295331 10.5638077,0.00369295331 L10.5638077,0.00369295331 C10.1176215,0.00369295331 9.67770018,0.0282846652 9.24461319,0.0741947893"
                            id="Fill-5"
                            fill="url(#linearGradient-9)"
                            mask="url(#mask-8)"
                          ></path>
                        </g>
                        <g transform="translate(9.193844, 0.052289)">
                          <mask id="mask-11" fill="white">
                            <use xlinkHref="#path-10"></use>
                          </mask>
                          <g id="Clip-8"></g>
                          <path
                            d="M1.36882501,0.0317258262 C0.92752051,0.0317258262 0.4921554,0.055646092 0.063706014,0.100632978 C0.0636246525,0.12530862 0.0626483151,0.149732471 0.0626483151,0.174492044 C0.0626483151,5.01780031 1.75691911,9.48912747 4.61856397,13.0959678 C5.51484168,12.76612 6.3798766,12.3782759 7.20862431,11.9368841 C4.49139603,8.70034621 2.86945556,4.61543627 2.86945556,0.174492044 C2.86945556,0.157034447 2.87018781,0.139744711 2.87018781,0.122287113 C2.3786833,0.0626962756 1.8776595,0.0317258262 1.36882501,0.0317258262 Z"
                            id="Fill-7"
                            fill="url(#linearGradient-12)"
                            mask="url(#mask-11)"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const LogoIcon = (props) => <Icon component={LogoSvg} {...props} />;


const NoticeCenter = () => {
  const [isKey, setKey] = useState(0);
  const [isDisplay, setDisplay] = useState(false);

  const handleClass = (key) => {
    setKey(key);
  };

  const text = <span>prompt text</span>;

  // const fetchUserInfo = async () => {
  //   console.log(123123);
  //   const aiList = await aiaccountUser();
  //   console.log(aiList, 123123);
  // };

  return (
    <div className={styles.customize} style={{ backgroundColor: isDisplay ? '#33333A' : '' }}>
      <div className={styles.box}>
        <div className={styles.logo}>
          <LogoIcon />
        </div>
        <div className={isDisplay ? styles.iconMenuYellow : styles.iconMenu}>
          {menuIconArry.map((item, key) => {
            return (
              <>
                <Tooltip placement="right" title={text}>
                  <div
                    key={key}
                    onClick={() => handleClass(key)}
                    className={
                      isKey === key ? (isDisplay ? styles.yellowActive : styles.active) : ''
                    }
                  >
                    {item}
                  </div>
                </Tooltip>
              </>
            );
          })}
        </div>
      </div>
      <div className={styles.footer}>
        <div>
          <Tooltip placement="right" title={'模块选择'}>
            <Icon component={Colour} style={{ fontSize: '40px' }}></Icon>
          </Tooltip>
        </div>
        <div>
          <Tooltip placement="right" title={'常见问题'}>
            <Icon component={Ask} style={{ fontSize: '40px' }}></Icon>
          </Tooltip>
        </div>
        <div>
          <Tooltip placement="right" title={'通知中心'}>
            <Icon component={Inform} style={{ fontSize: '40px' }}></Icon>
          </Tooltip>
        </div>
        <div
          className={styles.user}
          onClick={(e) => {
            e.nativeEvent.stopImmediatePropagation();
            setDisplay(!isDisplay);
            console.log(_.map,123);
          }}
        ></div>
      </div>
      <UserIcon setDisplay={setDisplay} isDisplay={isDisplay} />
    </div>
  );
};

export default NoticeCenter;
