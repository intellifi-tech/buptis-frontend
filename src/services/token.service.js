const TokenService = {
    getToken() {
        return localStorage.getItem('a') == null || localStorage.getItem('a') == "" ? sessionStorage.getItem('a') : localStorage.getItem('a')
    },

    saveToken(accessToken, rememberMe) {
        !rememberMe ? sessionStorage.setItem('a', accessToken) : localStorage.setItem('a', accessToken)
    },

    removeToken() {
        sessionStorage.setItem('a', "")
        localStorage.setItem('a', "")
    }
}

export default TokenService