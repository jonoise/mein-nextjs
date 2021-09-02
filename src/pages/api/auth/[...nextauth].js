import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import {
    credentialsManager
} from "../../../lib/credentialsManager"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default (req, res) => NextAuth(req, res, {
    // https://next-auth.js.org/configuration/providers
    providers: [
        Providers.Credentials({
            async authorize(credentials) {
                const user = await credentialsManager(credentials)
                if (user.error) {
                    if (user.error.message === "already_exists") {
                        return Promise.reject(`/register?error=${user.error.query}`)
                    }
                }
                return user
            },
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
            scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',

        }),
    ],

    secret: "elgauchocualtemrinosermaguajicarodereinamarilladeolor",

    session: {
        jwt: true,
    },

    jwt: {
        secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
    },
    callbacks: {
        async signIn(user, account, profile) {
            if (account.type === 'oauth') {
                if (account.provider === 'google') {
                    // TODO: POST REQUEST A GOOGLE ENDPOINT
                    return true

                }
            }

            if (account.type === 'credentials') {
                // custom credentials
                return true
            }
        },
        // async jwt(token, user, account, profile, isNewUser) { return token }
        async session(session, user) {
            return session
        },
    },

    // Enable debug messages in the console if you are having problems
    debug: false,
    pages: {
        error: '/auth/error/'
    }
})