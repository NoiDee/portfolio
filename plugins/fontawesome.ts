import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faEnvelope,
  faMobile,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faEnvelope, faMobile, faAngleUp);

// Register the component globally
export const defineNuxtPlugin = (nuxtApp: any) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
};

export default defineNuxtPlugin;
