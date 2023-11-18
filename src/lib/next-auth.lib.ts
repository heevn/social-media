import userService from '@/app/services/user.service'
import NextAuth from 'next-auth/next'
import Credentials from 'next-auth/providers/credentials'

export default NextAuth({
	providers: [
		Credentials({
			name: 'Sign in with Email',
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				if (credentials == null) return null

				try {
					const { user, jwt } = await userService.signIn({
						email: credentials.email,
						password: credentials.password,
					})
					return { ...user, jwt }
				} catch (error) {
					console.log(error)
					return null
				}
			},
		}),
	],
	callbacks: {
		session: async ({ session, token }) => {
			session.id = token.id
			session.jwt = token.jwt
			return Promise.resolve(session)
		},
		jwt: async ({ token, user }) => {
			const isSignIn = user ? true : false
			if (isSignIn) {
				token.id = user.id
				token.jwt = user.jwt
			}
			return Promise.resolve(token)
		},
	},
})
