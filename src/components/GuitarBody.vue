<script setup>
defineProps({
  scaleLength: Number
});
</script>

<template>
  <svg class="guitar-body" :style="{ left: `${scaleLength * 10 - 270}px` }" width="489" height="359" viewBox="0 0 489 359" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_2_7" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="489" height="359">
      <path d="M2.00169 179.502C1.79593 129.845 20.3618 32.5173 96.5044 36.5038C131.466 38.3343 151.082 46.3968 166.343 52.6693C192.768 63.5305 206.136 69.0247 263.504 27.5038C354.004 -37.9962 487.004 30.0038 487.004 148.004V211C487.004 329 354.004 397 263.504 331.5C206.136 289.979 192.769 295.473 166.343 306.334C151.082 312.607 131.466 320.67 96.5044 322.5C20.3618 326.487 1.79593 229.159 2.00169 179.502Z" fill="#AA5514" stroke="#71390E" stroke-width="3"/>
    </mask>
    <g mask="url(#mask0_2_7)">
      <path d="M2.00169 179.502C1.79593 129.845 20.3618 32.5173 96.5044 36.5038C131.466 38.3343 151.082 46.3968 166.343 52.6693C192.768 63.5305 206.136 69.0247 263.504 27.5038C354.004 -37.9962 487.004 30.0038 487.004 148.004V211C487.004 329 354.004 397 263.504 331.5C206.136 289.979 192.769 295.473 166.343 306.334C151.082 312.607 131.466 320.67 96.5044 322.5C20.3618 326.487 1.79593 229.159 2.00169 179.502Z" fill="#662F05" stroke="#71390E" stroke-width="3"/>
      <g filter="url(#filter0_f_2_7)">
        <path d="M12.0016 179.5C11.8043 133.76 29.6044 44.11 102.606 47.782C136.126 49.4681 154.933 56.8947 169.565 62.6724C194.9 72.6768 207.716 77.7376 262.718 39.492C349.486 -20.8412 477 41.7948 477 150.487V208.513C477 317.205 349.486 379.841 262.718 319.508C207.716 281.262 194.9 286.323 169.565 296.328C154.933 302.105 136.126 309.532 102.606 311.218C29.6044 314.89 11.8043 225.24 12.0016 179.5Z" fill="#AA5514"/>
      </g>
      <g filter="url(#filter1_f_2_7)">
        <path d="M62.0013 179.5C61.8464 143.551 75.8185 73.0925 133.121 75.9785C159.432 77.3037 174.195 83.1405 185.68 87.6814C205.567 95.5442 215.627 99.5216 258.801 69.4631C326.908 22.0453 427 71.2729 427 156.697V202.303C427 287.727 326.908 336.955 258.801 289.537C215.627 259.478 205.567 263.456 185.68 271.319C174.195 275.86 159.432 281.696 133.121 283.021C75.8185 285.907 61.8464 215.449 62.0013 179.5Z" fill="#D37C39"/>
      </g>
      <g filter="url(#filter2_d_2_7)">
        <rect x="317" y="108" width="27" height="150" rx="10" fill="#141414"/>
      </g>
      <rect x="333" y="131" width="6" height="103" rx="1" fill="url(#paint0_radial_2_7)"/>
      <rect width="1" height="103" rx="0.5" transform="matrix(-1 0 0 1 322 131)" fill="url(#paint1_radial_2_7)"/>
    </g>
    <defs>
      <filter id="filter0_f_2_7" x="-35" y="-31" width="559" height="421" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="23.5" result="effect1_foregroundBlur_2_7"/>
      </filter>
      <filter id="filter1_f_2_7" x="15" y="4" width="459" height="351" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="23.5" result="effect1_foregroundBlur_2_7"/>
      </filter>
      <filter id="filter2_d_2_7" x="313" y="105" width="35" height="158" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_7"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_7" result="shape"/>
      </filter>
      <radialGradient id="paint0_radial_2_7" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(339 183) rotate(46.3119) scale(46.3276 198.76)">
        <stop stop-color="#E9DBDB"/>
        <stop offset="1" stop-color="#8E8585"/>
      </radialGradient>
      <radialGradient id="paint1_radial_2_7" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-1.75956e-06 52) rotate(108.939) scale(53.9189 25.0959)">
        <stop stop-color="#E7DBDB"/>
        <stop offset="1" stop-color="#998888"/>
      </radialGradient>
    </defs>
  </svg>

  <div class="hole" :style="{ left: `${scaleLength * 10 - 170}px` }"></div>
</template>

<style scoped>
.guitar-body {
  position: absolute;
  top: -142px;
  box-sizing: border-box;
  z-index: -400;
  transform: scale(1.16);
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, .3)) drop-shadow(inset 0 10px 2px rgba(0, 0, 0, 1));
}


.hole {
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: #000;
  background-image: radial-gradient(#603d20, #000, #000);
  background-position: -110px 20px;
  background-size: 420px 200px;
  background-repeat: no-repeat;
  top: -32px;
  box-sizing: border-box;
  border: 12px solid #9c7353;
}
</style>