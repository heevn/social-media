'use client'

import Form from '@/components/Form/Form'

interface AuthProps {
	type?: 'Login' | 'Register'
}

export default function Auth({ type }: AuthProps) {
	return (
		<div
			style={{
				display: 'flex',
				width: '100vw',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
			}}
		>
			<Form type={type}></Form>
		</div>
	)
}
