<script setup>
import { defineProps } from 'vue';

defineProps({
  frets: Array,
  scaleLength: Number,
});
</script>

<template>
  <div class="guitar-fretboard" :style="{ width: `${scaleLength * 10}px` }">
    <div class="background"></div>

    <svg class="guitar-head" width="202" height="145" viewBox="0 0 202 145" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.6752 21.055V16.5578L24.6752 15.3313C23.5085 14.9225 21.3752 13.2872 22.1752 10.0165C23.1752 5.92821 26.6752 0.613397 35.6752 1.02223V1.04446C44.6752 0.635624 48.1752 5.95044 49.1752 10.0388C49.9752 13.3094 47.8418 14.9447 46.6752 15.3536L40.6752 16.5801V21.0772L37.5 31.6624H35.6752L30.6752 21.055Z" fill="url(#paint0_radial_5_60)" stroke="url(#paint1_linear_5_60)"/>
      <path d="M29.6752 124.445V128.942L23.6752 130.169C22.5085 130.577 20.3752 132.213 21.1752 135.483C22.1752 139.572 25.6752 144.887 34.6752 144.478V144.456C43.6752 144.864 47.1752 139.55 48.1752 135.461C48.9752 132.191 46.8418 130.555 45.6752 130.146L39.6752 128.92V124.423L36.5 113.838H34.6752L29.6752 124.445Z" fill="url(#paint2_radial_5_60)" stroke="url(#paint3_linear_5_60)"/>
      <path d="M80.6752 22.6903V18.1932L74.6752 16.9667C73.5085 16.5578 71.3752 14.9225 72.1752 11.6519C73.1752 7.56354 76.6752 2.24873 85.6752 2.65756V2.67979C94.6752 2.27095 98.1752 7.58577 99.1752 11.6741C99.9752 14.9447 97.8418 16.5801 96.6752 16.9889L90.6752 18.2154V22.7126L87.5 33.2977H85.6752L80.6752 22.6903Z" fill="url(#paint4_radial_5_60)" stroke="url(#paint5_linear_5_60)"/>
      <path d="M79.6752 122.81V127.307L73.6752 128.533C72.5085 128.942 70.3752 130.577 71.1752 133.848C72.1752 137.936 75.6752 143.251 84.6752 142.842V142.82C93.6752 143.229 97.1752 137.914 98.1752 133.826C98.9752 130.555 96.8418 128.92 95.6752 128.511L89.6752 127.285V122.787L86.5 112.202H84.6752L79.6752 122.81Z" fill="url(#paint6_radial_5_60)" stroke="url(#paint7_linear_5_60)"/>
      <path d="M133.675 24.3257V19.8285L127.675 18.602C126.509 18.1932 124.375 16.5578 125.175 13.2872C126.175 9.19887 129.675 3.88406 138.675 4.29289V4.31512C147.675 3.90628 151.175 9.2211 152.175 13.3094C152.975 16.5801 150.842 18.2154 149.675 18.6242L143.675 19.8507V24.3479L140.5 34.9331H138.675L133.675 24.3257Z" fill="url(#paint8_radial_5_60)" stroke="url(#paint9_linear_5_60)"/>
      <path d="M132.675 121.174V125.671L126.675 126.898C125.509 127.307 123.375 128.942 124.175 132.213C125.175 136.301 128.675 141.616 137.675 141.207V141.185C146.675 141.594 150.175 136.279 151.175 132.191C151.975 128.92 149.842 127.285 148.675 126.876L142.675 125.649V121.152L139.5 110.567H137.675L132.675 121.174Z" fill="url(#paint10_radial_5_60)" stroke="url(#paint11_linear_5_60)"/>
      <path d="M0 27.0498C0 23.09 3.28182 19.9185 7.2393 20.0539L162.841 25.3765C163.932 25.4138 164.999 25.7057 165.957 26.2289L194.855 42.0115C197.102 43.2387 198.5 45.5947 198.5 48.155V97.8332C198.5 100.379 197.117 102.725 194.89 103.958L169.473 118.025C168.505 118.561 167.423 118.86 166.317 118.897L7.23433 124.225C3.27871 124.357 0 121.187 0 117.229V27.0498Z" fill="url(#paint12_radial_5_60)"/>
      <path d="M0 27.0498C0 23.09 3.28182 19.9185 7.2393 20.0539L163.958 25.4147C164.319 25.427 164.678 25.4672 165.032 25.5349L195.813 31.4139C199.113 32.0441 201.5 34.93 201.5 38.2896V105.449C201.5 108.701 199.261 111.524 196.095 112.265L168.672 118.683C168.225 118.788 167.769 118.848 167.311 118.863L7.23433 124.225C3.27871 124.357 0 121.187 0 117.229V27.0498Z" fill="url(#paint13_radial_5_60)"/>
      <rect x="190" y="34" width="11" height="77" rx="3" fill="#1D1D1D"/>
      <rect x="194" y="37" width="3" height="71" rx="1.5" fill="url(#paint14_radial_5_60)"/>
      <mask id="mask0_5_60" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="20" width="202" height="105">
        <path d="M0 27.2435C0 23.2837 3.28182 20.1123 7.2393 20.2476L163.958 25.6084C164.319 25.6207 164.678 25.6609 165.032 25.7286L195.813 31.6076C199.113 32.2379 201.5 35.1237 201.5 38.4833V105.643C201.5 108.894 199.261 111.718 196.095 112.459L168.672 118.877C168.225 118.981 167.769 119.042 167.311 119.057L7.23433 124.419C3.27871 124.551 0 121.38 0 117.423V27.2435Z" fill="url(#paint15_radial_5_60)"/>
      </mask>
      <g mask="url(#mask0_5_60)">
        <path d="M201.5 64.5L85 47.5L36 33" stroke="#EEEEEE" stroke-width="1.4"/>
        <path d="M201.5 78L85.5 105.5L37 112" stroke="#EEEEEE" stroke-width="1.6"/>
        <path d="M201.5 90.5L138 105L88 108.5" stroke="#EEEEEE" stroke-width="1.2"/>
        <path d="M202 41L136.5 38.5" stroke="#EEEEEE" stroke-width="2"/>
        <path d="M202 53L134.5 41L84 38.5" stroke="#EEEEEE" stroke-width="1.8"/>
        <path d="M201.5 102.5L138 107" stroke="#EEEEEE" stroke-width="1.1"/>
      </g>
      <circle cx="35" cy="42" r="10" fill="url(#paint16_radial_5_60)"/>
      <circle cx="35" cy="42" r="10" fill="url(#paint17_radial_5_60)"/>
      <circle cx="35" cy="42" r="10" fill="url(#paint18_radial_5_60)"/>
      <circle cx="35" cy="42" r="5" fill="url(#paint19_radial_5_60)"/>
      <circle cx="35" cy="42" r="5" fill="url(#paint20_radial_5_60)"/>
      <circle cx="35" cy="42" r="5" fill="url(#paint21_radial_5_60)"/>
      <circle cx="86" cy="44" r="10" fill="url(#paint22_radial_5_60)"/>
      <circle cx="86" cy="44" r="10" fill="url(#paint23_radial_5_60)"/>
      <circle cx="86" cy="44" r="10" fill="url(#paint24_radial_5_60)"/>
      <circle cx="86" cy="44" r="5" fill="url(#paint25_radial_5_60)"/>
      <circle cx="86" cy="44" r="5" fill="url(#paint26_radial_5_60)"/>
      <circle cx="86" cy="44" r="5" fill="url(#paint27_radial_5_60)"/>
      <circle cx="137" cy="47" r="10" fill="url(#paint28_radial_5_60)"/>
      <circle cx="137" cy="47" r="10" fill="url(#paint29_radial_5_60)"/>
      <circle cx="137" cy="47" r="10" fill="url(#paint30_radial_5_60)"/>
      <circle cx="137" cy="47" r="5" fill="url(#paint31_radial_5_60)"/>
      <circle cx="137" cy="47" r="5" fill="url(#paint32_radial_5_60)"/>
      <circle cx="137" cy="47" r="5" fill="url(#paint33_radial_5_60)"/>
      <circle cx="35" cy="103" r="10" fill="url(#paint34_radial_5_60)"/>
      <circle cx="35" cy="103" r="10" fill="url(#paint35_radial_5_60)"/>
      <circle cx="35" cy="103" r="10" fill="url(#paint36_radial_5_60)"/>
      <circle cx="35" cy="103" r="5" fill="url(#paint37_radial_5_60)"/>
      <circle cx="35" cy="103" r="5" fill="url(#paint38_radial_5_60)"/>
      <circle cx="35" cy="103" r="5" fill="url(#paint39_radial_5_60)"/>
      <circle cx="86" cy="100" r="10" fill="url(#paint40_radial_5_60)"/>
      <circle cx="86" cy="100" r="10" fill="url(#paint41_radial_5_60)"/>
      <circle cx="86" cy="100" r="10" fill="url(#paint42_radial_5_60)"/>
      <circle cx="86" cy="100" r="5" fill="url(#paint43_radial_5_60)"/>
      <circle cx="86" cy="100" r="5" fill="url(#paint44_radial_5_60)"/>
      <circle cx="86" cy="100" r="5" fill="url(#paint45_radial_5_60)"/>
      <circle cx="137" cy="98" r="10" fill="url(#paint46_radial_5_60)"/>
      <circle cx="137" cy="98" r="10" fill="url(#paint47_radial_5_60)"/>
      <circle cx="137" cy="98" r="10" fill="url(#paint48_radial_5_60)"/>
      <circle cx="137" cy="98" r="5" fill="url(#paint49_radial_5_60)"/>
      <circle cx="137" cy="98" r="5" fill="url(#paint50_radial_5_60)"/>
      <circle cx="137" cy="98" r="5" fill="url(#paint51_radial_5_60)"/>
      <defs>
        <radialGradient id="paint0_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28 9.17664) rotate(9.86904) scale(23.853 49.8217)">
          <stop offset="0.0240273" stop-color="#F4F4F4"/>
          <stop offset="1" stop-color="#565656"/>
        </radialGradient>
        <linearGradient id="paint1_linear_5_60" x1="26" y1="6.72365" x2="55.6395" y2="22.5826" gradientUnits="userSpaceOnUse">
          <stop stop-color="#ECECEC"/>
          <stop offset="1" stop-color="#323131"/>
        </linearGradient>
        <radialGradient id="paint2_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27 136.323) rotate(-9.86904) scale(23.853 49.8217)">
          <stop offset="0.0240273" stop-color="#F4F4F4"/>
          <stop offset="1" stop-color="#565656"/>
        </radialGradient>
        <linearGradient id="paint3_linear_5_60" x1="25" y1="138.776" x2="54.6395" y2="122.917" gradientUnits="userSpaceOnUse">
          <stop stop-color="#ECECEC"/>
          <stop offset="1" stop-color="#323131"/>
        </linearGradient>
        <radialGradient id="paint4_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(78 10.812) rotate(9.86904) scale(23.853 49.8217)">
          <stop offset="0.0240273" stop-color="#F4F4F4"/>
          <stop offset="1" stop-color="#565656"/>
        </radialGradient>
        <linearGradient id="paint5_linear_5_60" x1="76" y1="8.35898" x2="105.639" y2="24.2179" gradientUnits="userSpaceOnUse">
          <stop stop-color="#ECECEC"/>
          <stop offset="1" stop-color="#323131"/>
        </linearGradient>
        <radialGradient id="paint6_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(77 134.688) rotate(-9.86904) scale(23.853 49.8217)">
          <stop offset="0.0240273" stop-color="#F4F4F4"/>
          <stop offset="1" stop-color="#565656"/>
        </radialGradient>
        <linearGradient id="paint7_linear_5_60" x1="75" y1="137.141" x2="104.639" y2="121.282" gradientUnits="userSpaceOnUse">
          <stop stop-color="#ECECEC"/>
          <stop offset="1" stop-color="#323131"/>
        </linearGradient>
        <radialGradient id="paint8_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(131 12.4473) rotate(9.86904) scale(23.853 49.8217)">
          <stop offset="0.0240273" stop-color="#F4F4F4"/>
          <stop offset="1" stop-color="#565656"/>
        </radialGradient>
        <linearGradient id="paint9_linear_5_60" x1="129" y1="9.99431" x2="158.639" y2="25.8532" gradientUnits="userSpaceOnUse">
          <stop stop-color="#ECECEC"/>
          <stop offset="1" stop-color="#323131"/>
        </linearGradient>
        <radialGradient id="paint10_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(130 133.053) rotate(-9.86904) scale(23.853 49.8217)">
          <stop offset="0.0240273" stop-color="#F4F4F4"/>
          <stop offset="1" stop-color="#565656"/>
        </radialGradient>
        <linearGradient id="paint11_linear_5_60" x1="128" y1="135.506" x2="157.639" y2="119.647" gradientUnits="userSpaceOnUse">
          <stop stop-color="#ECECEC"/>
          <stop offset="1" stop-color="#323131"/>
        </linearGradient>
        <radialGradient id="paint12_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(99.25 72.1368) rotate(90) scale(52.3305 165.867)">
          <stop stop-color="#C4664C"/>
          <stop offset="1" stop-color="#663714"/>
        </radialGradient>
        <radialGradient id="paint13_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(99.25 72.1368) rotate(90) scale(52.3305 165.867)">
          <stop stop-color="#C4664C"/>
          <stop offset="1" stop-color="#663714"/>
        </radialGradient>
        <radialGradient id="paint14_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(194 67.5) rotate(90) scale(62 109.775)">
          <stop stop-color="#E6E6E6"/>
          <stop offset="1" stop-color="#A8A8A8" stop-opacity="0.81"/>
        </radialGradient>
        <radialGradient id="paint15_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(99.25 72.3305) rotate(90) scale(52.3305 165.867)">
          <stop stop-color="#C4664C"/>
          <stop offset="1" stop-color="#663714"/>
        </radialGradient>
        <radialGradient id="paint16_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25 35.5) rotate(47.7263) scale(22.2991)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint17_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25 35.5) rotate(47.7263) scale(22.2991)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint18_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25 35.5) rotate(47.7263) scale(22.2991)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint19_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30 38.75) rotate(47.7263) scale(11.1496)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint20_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30 38.75) rotate(47.7263) scale(11.1496)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint21_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30 38.75) rotate(47.7263) scale(11.1496)">
          <stop offset="0.463542" stop-color="#E8E7E7"/>
          <stop offset="1" stop-color="#878787"/>
        </radialGradient>
        <radialGradient id="paint22_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76 37.5) rotate(47.7263) scale(22.2991)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint23_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76 37.5) rotate(47.7263) scale(22.2991)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint24_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76 37.5) rotate(47.7263) scale(22.2991)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint25_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(81 40.75) rotate(47.7263) scale(11.1496)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint26_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(81 40.75) rotate(47.7263) scale(11.1496)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint27_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(81 40.75) rotate(47.7263) scale(11.1496)">
          <stop offset="0.463542" stop-color="#E8E7E7"/>
          <stop offset="1" stop-color="#878787"/>
        </radialGradient>
        <radialGradient id="paint28_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(127 40.5) rotate(47.7263) scale(22.2991)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint29_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(127 40.5) rotate(47.7263) scale(22.2991)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint30_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(127 40.5) rotate(47.7263) scale(22.2991)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint31_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(132 43.75) rotate(47.7263) scale(11.1496)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint32_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(132 43.75) rotate(47.7263) scale(11.1496)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint33_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(132 43.75) rotate(47.7263) scale(11.1496)">
          <stop offset="0.463542" stop-color="#E8E7E7"/>
          <stop offset="1" stop-color="#878787"/>
        </radialGradient>
        <radialGradient id="paint34_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25 96.5) rotate(47.7263) scale(22.2991)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint35_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25 96.5) rotate(47.7263) scale(22.2991)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint36_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25 96.5) rotate(47.7263) scale(22.2991)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint37_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30 99.75) rotate(47.7263) scale(11.1496)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint38_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30 99.75) rotate(47.7263) scale(11.1496)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint39_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30 99.75) rotate(47.7263) scale(11.1496)">
          <stop offset="0.463542" stop-color="#E8E7E7"/>
          <stop offset="1" stop-color="#878787"/>
        </radialGradient>
        <radialGradient id="paint40_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76 93.5) rotate(47.7263) scale(22.2991)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint41_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76 93.5) rotate(47.7263) scale(22.2991)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint42_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76 93.5) rotate(47.7263) scale(22.2991)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint43_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(81 96.75) rotate(47.7263) scale(11.1496)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint44_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(81 96.75) rotate(47.7263) scale(11.1496)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint45_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(81 96.75) rotate(47.7263) scale(11.1496)">
          <stop offset="0.463542" stop-color="#E8E7E7"/>
          <stop offset="1" stop-color="#878787"/>
        </radialGradient>
        <radialGradient id="paint46_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(127 91.5) rotate(47.7263) scale(22.2991)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint47_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(127 91.5) rotate(47.7263) scale(22.2991)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint48_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(127 91.5) rotate(47.7263) scale(22.2991)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint49_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(132 94.75) rotate(47.7263) scale(11.1496)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint50_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(132 94.75) rotate(47.7263) scale(11.1496)">
          <stop stop-color="#404040"/>
          <stop offset="1" stop-color="#E8E7E7"/>
        </radialGradient>
        <radialGradient id="paint51_radial_5_60" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(132 94.75) rotate(47.7263) scale(11.1496)">
          <stop offset="0.463542" stop-color="#E8E7E7"/>
          <stop offset="1" stop-color="#878787"/>
        </radialGradient>
      </defs>
    </svg>


    <div 
      class="dot" 
      v-for="(fret, index) in frets" 
      v-show="[3, 5, 7, 9, 12].includes(index + 1) && fret.length * 8 > 10" 
      :style="{ left: `${fret.position * 10 - fret.length * 10 / 2 - 4}px` }" 
      :class="{ double: index + 1 === 12 }"
    ></div>
    <div class="fret" v-for="fret in frets" :style="{ left: `${fret.position * 10 - 2}px` }"></div>

    <div class="strings" :style="{ width: `${scaleLength * 10 + 84}px` }">
      <div class="string string-6" style="top: 6px; height: 2px;"></div>
      <div class="string string-5" style="top: 18px; height: 1.8px;"></div>
      <div class="string string-4" style="top: 30px; height: 1.6px;"></div>
      <div class="string string-3" style="top: 43px; height: 1.4px;"></div>
      <div class="string string-2" style="top: 56px; height: 1.2px;"></div>
      <div class="string string-1" style="top: 68px; height: 1px;"></div>
    </div>

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
  </div>
</template>

<style scoped>
.guitar-fretboard {
  height: 80px;
  position: relative;
  margin: 0 auto; 
  box-sizing: border-box;
}

.guitar-fretboard .background {
  background-color: sienna;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, .8);
  border-top: 2px solid rgba(0, 0, 0, .4);
  box-sizing: border-box;
  border-bottom: 2px solid rgba(0, 0, 0, .4);
  background-image: url('data:image/jpeg;base64,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');
  position: absolute;
  left: 0;
  top: 0;
  width: calc(100% - 100px);
  height: 100%;
}

.guitar-fretboard .fret {
  position: absolute;
  top: 0;
  width: 4px;
  height: 100%;
  border-radius: 5px;
  background: radial-gradient(#fff, #666);
  box-shadow: inset 0 0 3px rgb(0 0 0 / 50%), 5px 0 5px rgb(0 0 0 / 30%);
}

.guitar-fretboard .dot {
  position: absolute;
  top: calc(100% / 2 - 5px);
  width: 8px;
  height: 8px;
  left: 0;
  border-radius: 50%;
  background: radial-gradient(#fff, #ddd);
}

.guitar-fretboard .dot.double {
  top: calc(100% / 2 + 8px);
}

.guitar-fretboard .dot.double::before {
  position: absolute;
  top: calc(100% / 2 - 28px);
  width: 8px;
  height: 8px;
  left: 0;
  border-radius: 50%;
  background: radial-gradient(#fff, #ddd);
  content: '';
}

.guitar-fretboard .hole {
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: #000;
  top: -32px;
  box-sizing: border-box;
  border: 12px solid #9c7353;
}

.guitar-body {
  position: absolute;
  top: -142px;
  box-sizing: border-box;
  z-index: -100;
  transform: scale(1.16);
}

.strings {
  position: relative;
}

.string {
  width: 100%;
  position: absolute;
  left: 0;
  background-color: #eee;
  z-index: 100;
}

.guitar-head {
  position: absolute;
  left: -201px;
  top: -34px;
  z-index: -200;
}
</style>