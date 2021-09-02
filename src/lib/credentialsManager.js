import axios from "axios";
import {
    localAPIUrl
} from "../constants";

const REGISTER_URL = `${process.env.API_URL}/users/` || `${localAPIUrl}/users/`
const LOGIN_URL = `${process.env.API_URL}/users/login/` || `${localAPIUrl}/users/login/`

export const credentialsManager = async (credentials) => {
    switch (credentials.type_of) {
        case 'register':
            const register_res = await axios.post(REGISTER_URL, {
                password: credentials.password,
                email: credentials.email
            })
            const {
                account, message
            } = register_res.data

            if (message === 'created') {
                return {
                    ...account,
                    error: null
                }
            } else if (message === 'already_exists') {
                return {
                    error: {
                        message,
                        query: '⛔ Ya existe un usuario asociado a ese email.'
                    }
                }
            }
            break

        case 'login':
            const login_res = await axios.post(LOGIN_URL, {
                password: credentials.password,
                email: credentials.email
            })

            return false

        default:
            break;
    }
}