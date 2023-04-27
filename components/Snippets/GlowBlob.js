export default function GlowBlob({ className }) {
  return (
    <svg className={className} width="538" height="538" viewBox="0 0 538 538" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="269" cy="269" r="269" fill="url(#paint0_radial_1_33)" />
      <defs>
        <radialGradient id="paint0_radial_1_33" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(269 269) rotate(90) scale(269)">
          <stop stopColor="#222228" />
          <stop offset="1" stopColor="#222228" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
