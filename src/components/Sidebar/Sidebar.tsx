'use client'

import cn from 'clsx'
import { Sun } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { MENU } from './Sidebar.data'
import styles from './Sidebar.module.scss'
import { usePathname } from 'next/navigation'

const isVisible = false

export default function Sidebar() {
	const pathname = usePathname()

	if(!isVisible) return null

	return (
		<div className={styles.sidebar}>
			<Image priority src='/logo.svg' alt='' width={40} height={40} />
			<div>
				{MENU.map(item => (
					<Link
						href={item.url}
						key={item.url}
						className={cn({
							[styles.active]: pathname === item.url
						})}
					>
						<item.Icon size={27} />
					</Link>
				))}
			</div>
			<Sun size={27} />
		</div>
	)
}
