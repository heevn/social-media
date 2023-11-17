import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Auth from '@/screens/auth/Auth'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Login',
	...NO_INDEX_PAGE,
}

export default function LoginPage() {
	return <Auth type='Login'/>
}
