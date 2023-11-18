import { AuthFormState } from '@/screens/auth/auth.types'
import { $host } from './axios.config'

class UserService {
	async signIn({ email, password }: AuthFormState) {
		const result = await $host.post(`/auth/local`, {
			identifier: email,
			password
		})
		return result.data
	}
}

export default new UserService()
