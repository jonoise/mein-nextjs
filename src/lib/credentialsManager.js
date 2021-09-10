import axios from "axios";
import {
    localAPIUrl
} from "../constants";

const REGISTER_URL = `${process.env.API_URL}/users/` || `${localAPIUrl}/users/`
const LOGIN_URL = `${process.env.API_URL}/users/login/` || `${localAPIUrl}/users/login/`

export const credentialsManager = async (credentials) => {

    if (credentials.type_of === 'login') {
        try {

            const login_res = await axios.post(LOGIN_URL, {
                password: credentials.password,
                email: credentials.email
            })
            let {
                account,
            } = login_res.data

            return {
                ...account,
                error: null
            }
        } catch (error) {
            return {
                error: {
                    message: 'invalid_credentials',
                    query: '⛔ Las credenciales no son válidas.'
                }
            }
        }

    }

    if (credentials.type_of === 'register') {

        const register_res = await axios.post(REGISTER_URL, {
            password: credentials.password,
            email: credentials.email
        })
        let {
            account,
            message
        } = register_res.data

        if (message === 'already_exists') {
            return {
                error: {
                    message,
                    query: '⛔ Ya existe un usuario asociado a ese email.'
                }
            }
        }
        return {
            ...account,
            error: null
        }
    }

}