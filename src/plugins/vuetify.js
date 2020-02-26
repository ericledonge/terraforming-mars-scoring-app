import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#D17E52'
      },
      dark: {
        primary: '#D17E52'
      }
    }
  }
});

export default vuetify;
