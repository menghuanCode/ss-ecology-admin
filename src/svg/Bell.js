import * as React from 'react';

const SvgBell = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fillRule="nonzero" fill="currentColor">
      <path fill="currentColor" d="M0 0h40v40H0z" />
      <path
        d="M20 11.875c4.91 0 8.889 4.119 8.889 9.2V27.4h.278c.46 0 .833.386.833.862 0 .477-.373.863-.833.863H24.12C23.441 30.863 21.811 32 20 32c-1.811 0-3.441-1.137-4.121-2.875h-5.046c-.46 0-.833-.386-.833-.863 0-.476.373-.862.833-.862h.278v-6.325c0-5.081 3.98-9.2 8.889-9.2zm2.222 17.25h-4.444A2.743 2.743 0 0020 30.275c.874 0 1.698-.425 2.222-1.15zM20 13.6c-3.932 0-7.13 3.252-7.22 7.298l-.002.177V27.4h14.444v-6.325c0-4.129-3.233-7.475-7.222-7.475zm.883 2.884a.85.85 0 01.446-.472.807.807 0 01.638-.007c2 .832 3.311 2.839 3.31 5.07 0 .476-.372.862-.833.862-.46 0-.833-.386-.833-.862 0-1.527-.897-2.9-2.265-3.47a.873.873 0 01-.463-1.121zM21.736 9c.576 0 1.042.386 1.042.862 0 .477-.467.863-1.042.863h-3.472c-.576 0-1.042-.386-1.042-.863 0-.476.467-.862 1.042-.862h3.472z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default SvgBell;
