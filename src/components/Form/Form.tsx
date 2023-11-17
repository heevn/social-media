import { AtSign, Lock } from 'lucide-react'
import Button from '../ui/button/Button'
import Field from '../ui/field/Field'
import styles from './Form.module.scss'
import { CustomFormProps } from './FormProps'

export default function Form({ type }: CustomFormProps) {
	return (
		<form className={styles.form}>
			<h1 className='text-center mb-6'>{type}</h1>
			<Field
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
			<Button>{type}</Button>
		</form>
	)
}
