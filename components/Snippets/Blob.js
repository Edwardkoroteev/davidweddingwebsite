export default function Blob({ className, size = "s" }) {
  switch (size) {
    case "s":
      return (
        <svg className={className} width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_1_134)">
            <circle cx="52" cy="52" r="32" fill="url(#paint0_radial_1_134)" />
          </g>
          <defs>
            <filter id="filter0_f_1_134" x="0" y="0" width="104" height="104" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_1_134" />
            </filter>
            <radialGradient
              id="paint0_radial_1_134"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(47.4667 15.4666) rotate(87.7365) scale(67.5194 795.408)"
            >
              <stop stopColor="#494955" />
              <stop offset="1" stopColor="#141414" />
            </radialGradient>
          </defs>
        </svg>
      );
    case "m":
      return (
        <svg className={className} width="136" height="136" viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_1_133)">
            <circle cx="68" cy="68" r="48" fill="url(#paint0_radial_1_133)" />
          </g>
          <defs>
            <filter id="filter0_f_1_133" x="0" y="0" width="136" height="136" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_1_133" />
            </filter>
            <radialGradient
              id="paint0_radial_1_133"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(61.2 13.1999) rotate(87.7365) scale(101.279 1193.11)"
            >
              <stop stopColor="#494955" />
              <stop offset="1" stopColor="#141414" />
            </radialGradient>
          </defs>
        </svg>
      );
    case "l":
      return (
        <svg className={className} width="190" height="190" viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_1_135)">
            <circle cx="95" cy="95" r="65" fill="url(#paint0_radial_1_135)" />
          </g>
          <defs>
            <filter id="filter0_f_1_135" x="0" y="0" width="190" height="190" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_1_135" />
            </filter>
            <radialGradient
              id="paint0_radial_1_135"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(85.7917 20.7916) rotate(87.7365) scale(137.149 1615.67)"
            >
              <stop stopColor="#494955" />
              <stop offset="1" stopColor="#141414" />
            </radialGradient>
          </defs>
        </svg>
      );
  }
}
