import { $host } from '@/app/services/axios.config'
import { User } from '@/types/user.types'
import NextAuth from 'next-auth/next'
import Credentials from 'next-auth/providers/credentials'

export default NextAuth({
	providers: [
		Credentials({
			credentials: {
				email: {
					type: 'email',
				},
				password: { type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials.password) return null

				const { data } = await $host.get<User[]>(
					`/users?filters[email][$eq]=${credentials.email}`
				)
				console.log(data)

				return null
				// if (!data) {
				// 	const { userCreate } = await grafbase.request(CreateUserByUsername, {
				// 		username,
				// 		passwordHash: await hash(password, 12),
				// 	})

				// 	return {
				// 		id: userCreate.id,
				// 		username,
				// 	}
				// }

				// const isValid = await compare(password, user.passwordHash)

				// if (!isValid) {
				// 	throw new Error('Wrong credentials. Try again.')
				// }

				// return user
			},
		}),
	],

	callbacks: {
		session({ session, token, user }) {
			return session
		},
	},
})
