import * as React from 'react';

const SvgGrzxMe = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="currentColor" fillRule="evenodd">
      <path fill="currentColor" d="M7 7h16v16H7z" />
      <circle fill="currentColor" cx={15} cy={15} r={15} />
      <circle stroke="#545469" strokeWidth={1.3} cx={14.5} cy={13.5} r={5.5} />
      <path
        d="M18 22c0-1.657-1.567-3-3.5-3S11 20.343 11 22"
        stroke="#545469"
        strokeWidth={1.3}
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export default SvgGrzxMe;
