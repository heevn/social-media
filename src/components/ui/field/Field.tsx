import cn from 'clsx'
import { forwardRef } from 'react'
import { FieldProps } from './FieldProps'
import styles from './Field.module.scss'

const Field = forwardRef<HTMLInputElement, FieldProps>(
	({ error, style, Icon, className, ...rest }, ref) => {
		return (
			<div className={cn(styles.field, className)} style={style}>
				{Icon && (
					<div className={styles.icon}>
						<Icon />
					</div>
				)}
				<input ref={ref} {...rest} />
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
