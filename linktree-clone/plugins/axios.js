import axios from "axios"

export default defineNuxtPlugin((NuxtApp)=> {
    axios.deafults.baseURL = 'http://localhost:8000'
    axios.deafults.withCrendetials = true;

    return{
        provide:{
            axios: axios
        },
    }
})