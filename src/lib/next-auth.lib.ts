import { AuthFormState } from '@/screens/auth/auth.types'
import Credentials from 'next-auth/providers/credentials'

export const authOptions = {
	providers: [
		Credentials({
			name: 'Credentials',
			credentials: {
				email: {
					type: 'email',
				},
				password: { type: 'password' },
			},
			async authorize(credentials) {
				const { email, password } = credentials as AuthFormState

				const { user } = await grafbase.request(GetUserByUsername, {
					username,
				})

				if (!user) {
					const { userCreate } = await grafbase.request(CreateUserByUsername, {
						username,
						passwordHash: await hash(password, 12),
					})

					return {
						id: userCreate.id,
						username,
					}
				}

				const isValid = await compare(password, user.passwordHash)

				if (!isValid) {
					throw new Error('Wrong credentials. Try again.')
				}

				return user
			},
		}),
	],
}
