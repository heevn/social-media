import { User } from '@/types/user.types'
import { $host } from './axios.config'

class UserService {
	async signIn({ email, password }: User) {
		const data = await $host.post(`/api/auth/local`, {
			identifier: email,
			password,
		})

		return data
	}
}

export default new UserService()
