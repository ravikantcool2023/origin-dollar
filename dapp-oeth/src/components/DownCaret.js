import React from 'react'

export default function DownCaret({ color = '#608fcf', size = '30' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20">
      <rect width="20" height="20" rx="10" fill="white" fill-opacity="0.1" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.001 11.7178L6.19946 7.71821C5.92902 7.43368 5.47957 7.4281 5.20569 7.7164C4.92979 8.00667 4.93252 8.4727 5.20741 8.76209L9.50508 13.2836C9.64275 13.4284 9.82204 13.5003 10.0013 13.5C10.1802 13.498 10.3606 13.4274 10.4973 13.2836L14.795 8.76209C15.0654 8.47756 15.0707 8.00455 14.7967 7.7164C14.5208 7.42613 14.0778 7.429 13.8029 7.71821L10.001 11.7178Z"
        fill="url(#paint0_linear_338_1488)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_338_1488"
          x1="2.10059"
          y1="10.5"
          x2="19.497"
          y2="10.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#8C66FC" />
          <stop offset="1" stop-color="#0274F1" />
        </linearGradient>
      </defs>
    </svg>
  )
}
