'use client'

import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import { AtSign, Lock } from 'lucide-react'

interface AuthProps {
	type?: 'login' | 'register'
}

export default function Auth({ type }: AuthProps) {
	return (
		<div style={{display: 'flex', width: '100vw', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
			<form className='m-auto block w-96'>
				<Field placeholder='Enter email: ' type='email' Icon={AtSign} />
				<Field placeholder='Enter password: ' type='email' Icon={Lock} />
				<Button isLoading={true}>{type}</Button>
			</form>
		</div>
	)
}
