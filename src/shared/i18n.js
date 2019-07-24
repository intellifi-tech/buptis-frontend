import Vue from 'vue';
import VueI18n from 'vue-i18n';
import i18nText from './i18nText'

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'TR', // set locale
    fallbackLocale: 'EN', // set fallback locale
    messages: i18nText, // set locale messages
});

export default i18n;