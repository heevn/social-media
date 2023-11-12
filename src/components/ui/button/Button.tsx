import Loader from '../loader/Loader';
import { ButtonProps } from './ButtonProps';
import styles from './Button.module.scss'

export default function Button({isLoading, children} : ButtonProps) {
	return <button className={styles.button}>{isLoading ? <Loader /> : children}</button>
}
