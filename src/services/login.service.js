import ApiService from './api.service'
import TokenService from './token.service'

const LoginService = {

    login: async function (credential) {
        try {
            const response = await ApiService.post("/authenticate", credential)
            TokenService.saveToken(response.data.id_token, credential.rememberMe)
            ApiService.setHeader()
            return response
        } catch (error) {
            return error.response
        }
    },

    register: async function (credential) {
        try {
            const response = await ApiService.post("/register", credential)
            return response
        } catch (error) {
            return error.response
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }

    },

    activateUser: async function (key) {
        try {
            const response = await ApiService.get("/activate?key=" + key)
            return response
        } catch (error) {
            return error.response
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },

    rememberPasswordInit: async function(mail) {
        try {
            const response = await ApiService.sendMail("/account/reset-password/init", mail)
            return response
        } catch (error) {
            return error.response
        }
    },

    rememberPasswordFinish: async function(keyPassword) {
        try {
            const response = await ApiService.post("/account/reset-password/finish", keyPassword)
            return response
        } catch (error) {
            return error.response
        }
    },

    logout() {
        TokenService.removeToken()
        ApiService.removeHeader()
        store.commit('LOGOUT')
    }
}

export default LoginService