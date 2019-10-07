import Vue from 'vue';
import VueI18n from 'vue-i18n';
import i18nText from './i18nText'

Vue.use(VueI18n);

const messages = {
    'TR': {
        landing: {
            navbar: {
                nasilKullanilir: 'NASIL KULLANILIR?',
                appsGallery: 'GALERİ',
            },
        }
    }
}

const i18n = new VueI18n({
    locale: 'TR', // set locale
    fallbackLocale: 'EN', // set fallback locale
    messages, // set locale messages
});

export default i18n;