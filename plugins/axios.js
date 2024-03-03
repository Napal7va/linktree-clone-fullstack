import axios from "axios"

export default defineNuxtPlugin((NuxtApp) => {
    axios.default.baseURL = 'http://localhost:3000/'
    axios.default.withCredentials = true;

    return {
        provide: {
            axios: axios
        }
    }
})