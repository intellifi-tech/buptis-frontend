import ApiService from './api.service'

const DefaultService = {

    REQUEST_URL: "",

    getAll: async function () {
        try {
            const response = await ApiService.get(REQUEST_URL)
            return response
        } catch (error) {
            return error.response
        }
    },

    delete: async function (id) {
        try {
            const response = await ApiService.delete(REQUEST_URL + '/' + id)
            return response
        } catch (error) {
            return error.response
        }
    },

    update: async function (data) {
        try {
            const response = await ApiService.put(REQUEST_URL, data)
            return response
        } catch (error) {
            return error.response
        }
    },

    insert: async function (data) {
        try {
            const response = await ApiService.post(REQUEST_URL, data)
            return response
        } catch (error) {
            return error.response
        }
    }
}

export default DefaultService