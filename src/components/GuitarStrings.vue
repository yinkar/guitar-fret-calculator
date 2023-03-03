<script setup>
import { defineProps } from 'vue';

defineProps({
  scaleLength: Number
});
</script>

<template>
  <div class="strings" :style="{ width: `${scaleLength * 10 + 84}px` }">
    <div class="string string-6" style="top: 8px; height: 2px;"></div>
    <div class="string string-5" style="top: 20px; height: 1.8px;"></div>
    <div class="string string-4" style="top: 33.1px; height: 1.6px;"></div>
    <div class="string string-3" style="top: 45px; height: 1.4px;"></div>
    <div class="string string-2" style="top: 59px; height: 1.2px;"></div>
    <div class="string string-1" style="top: 71px; height: 1px;"></div>
  </div>
</template>

<style scoped>
.strings {
  position: relative;
}

.string {
  width: 100%;
  position: absolute;
  left: 0;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAKCAYAAADy491MAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAABOZJREFUeJw9U/1PYkcU5c/eblg3mhWCEIMEApSwlEBBKIEaqVaSJbIUKkYssAgrYkFAvr+faJomPT133PaHydx358y955w7T7d52oTWq/XH5+eXuKY9HU5Gkx+YO3x5efGsVmsHd/3L84tltVy7mLdpmuadTaffc9+Zz+bO0XBketKePmw2m8PJeHL0pGmHi/kiNp8vchtt83m5XGb5/bO21n6ZT2e/TSfTj8T8ulqussvl6sfn5+cs+9e4fmL93Hqt/UHsCfc7rhk5fOFZh9gFe+TIscl8/UnbXDDX1A0HAwwHQwweB+i0OxgNh1guliA5LOZzzKYzjHgu8Xg4Qr/3CJIgvo/7uyYG/QFIHL2HDoYqHjPuqvtT5hu1usKvlyv1LXmSV1iJSQ4PrZaqQYGKBwWDYvj92n+5WLD3GBSm8JPxlPkp606gu72pqwt0CuViSYlZ8rvVbCnwer3GfeNOYeRCk/F/4lrNeyWo03rAZf4ClVIJvU4X7fuW2hfEddsP6HV7rLnEhCRUnnfFAMEJuXazicp1CTMK7fd6qFdvMBmNMSaXfCaLR97vttpo1G/Ze6YM6rCuiNKJclkCErXTyexb4SUJLFRzISmYfq+vyItLpeK1yreIrZYr6q4Ur5TKynEhI6KkhhghRomj4qIIl3oyCRE/FwyNkmnyaYBPBfVKla9hzLym+klfmUq33cVQvZIV7mp30D1QWT6bw/VVERIXLy5RLBTUWK8YiwPiepkOXRUuFZGbchVH8TjSqZRyLpNOo35TgzzH7Kf0q4MkWKUYcUsmUaPI3kOPBDUUKUyekIjp0gCNAlc0rFGtKSz/KQwfX881Chv2X18F/zu0GvfKYKnfvG1Clzo5RfY8g5A/iPPUJ7pWQCwcwVnyBKdccp48OsJxPIHjRALnJBgOBhEOhXAUiyPDb9kj/E6fpbiHEQmGVP7k6Jh1/TjlLph4JKoMyabPUaBpJRoiOBF9XbhiLo/K1TVuKSSfyaFBs8o0VurelCo0pqZMrfCpy9SrNFInBcKBADxuD1IknIhGEWMjERAlGa/Hi4DPB7fDgaDPr8QFSSpGnOQ9LheXG36vF26nk+JCcBFrMe3x3A+b1QqzyYSA16cwBxaL2qMUbNvfR4i9kzTGTtwZzUqfnqnzDEXm0hnFQfJiZCIaQ/HyCp+ICfoDKOTz0MUjMTZ0wuv2qt1kMLKADw6bHbs7OxTggWVvDzvvtxVxj9MFw4dd+NjE65YzM7yMTQYD8R/gpyghLnfkruCtZovCy5IzmV6cExEzFMHkmSIncSKWQJLTTnJq0XCUEwyoiadTaUSDYcXt5Dip6gS8fujEebNxD1Y647Q78E6vV7sIMOzu4oDO2BnvGU3wcRr7JHOwb1XnEu+bzUro9tZ7mIxGJcjKcyfP9W/eYEv/Tk3RtGtQJohRPs+rkNTxCdzfeiUoSKZ2YD3ABZ/P9tYWa1kQC0X+N1VeyLu3ek4tSLER6L97Cx0vfKajXQI63MtsMqGztyTRJtGp/cD2p8loagkxjm1IFzt+r/8fvvVnkm/Ybba/HXb7lPihg2ScDmePa8ip/OV2utZcI8YT1ipT8FerZb/nsjsvWbdIYU3W/Z1P8Cu/G8ZdQzboD94wrphNe5fhUHhMwTn2zLB3jecx3vnMml+2328fcgKFfwHJXBiZWMDY7gAAAABJRU5ErkJggg==');
  background-size: 10px 100%;
  z-index: 100;
  box-shadow: inset 0px 0px 1px rgba(0, 0, 0, .8);
  filter: drop-shadow(0 2px 1px rgba(0, 0, 0, .7));
}
</style>