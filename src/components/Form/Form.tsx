import { AuthFormState } from '@/screens/auth/auth.types'
import { AtSign, Lock } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '../ui/button/Button'
import Field from '../ui/field/Field'
import styles from './Form.module.scss'
import { CustomFormProps } from './FormProps'

export default function Form({ type }: CustomFormProps) {
	const { register, handleSubmit } = useForm<AuthFormState>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<AuthFormState> = async data => {
		if (type === 'Login') {
			const result = await signIn('credentials', {
				redirect: false,
				...data,
			})
		}
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<h1 className='text-center mb-6'>{type}</h1>
			<Field
				{...register('email', {
					required: true,
				})}
				placeholder='Enter email: '
				type='email'
				Icon={AtSign}
				className='mb-4'
			/>
			<Field
				placeholder='Enter password: '
				type='password'
				Icon={Lock}
				className='mb-4'
			/>
			<Button type='submit'>{type}</Button>
		</form>
	)
}
