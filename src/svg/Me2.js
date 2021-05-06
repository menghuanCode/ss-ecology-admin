import * as React from 'react';

const SvgMe2 = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 13 16" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g transform="translate(-1)" fill="currentColor" fillRule="evenodd">
      <path fill="currentColor" d="M0 0h16v16H0z" />
      <circle stroke="#545469" strokeWidth={1.3} cx={7.5} cy={6.5} r={5.5} />
      <path
        d="M11 15c0-1.657-1.567-3-3.5-3S4 13.343 4 15"
        stroke="#545469"
        strokeWidth={1.3}
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export default SvgMe2;
