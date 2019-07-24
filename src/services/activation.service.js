import ApiService from './api.service'

const ActivationService = {

    activateUser: async function (key) {
        try {
            const response = await ApiService.get("/activate?key=" + key)
            return response
        } catch (error) {
            return error.response
        }
    }
}

export default ActivationService