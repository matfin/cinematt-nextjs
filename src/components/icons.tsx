import React from 'react';

interface Props {
  className?: string;
}

export const GridIcon = ({ className }: Props): JSX.Element => (
  <svg
    className={className}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
    xmlSpace="preserve"
  >
    <g id="layer1">
      <rect y="10" x="10" height="20" width="20" />
      <rect height="20" width="20" x="40" y="10" />
      <rect y="10" x="70" height="20" width="20" />

      <rect height="20" width="20" x="10" y="40" />
      <rect y="40" x="40" height="20" width="20" />
      <rect height="20" width="20" x="70" y="40" />

      <rect y="70" x="10" height="20" width="20" />
      <rect height="20" width="20" x="40" y="70" />
      <rect y="70" x="70" height="20" width="20" />
    </g>
  </svg>
);
