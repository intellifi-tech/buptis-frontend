import {
    helpers
} from "vuelidate/lib/validators";
export default helpers.regex('alpha', /^[A-Za-zwığüşöçĞÜŞÖÇİ ]+$/)