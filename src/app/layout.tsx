import LayoutClient from '@/components/Layout/LayoutClient'
import type { Metadata } from 'next'
import { Viewport } from 'next'
import { SessionProvider } from 'next-auth/react'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Social Media App',
	description: 'My attempt to create a social media app',
	icons: '/logo.svg',
}

export const viewport: Viewport = {
	themeColor: '#0E0B18',
	colorScheme: 'dark',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<SessionProvider>
					<LayoutClient>{children}</LayoutClient>
				</SessionProvider>
			</body>
		</html>
	)
}
