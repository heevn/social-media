import Chat from '@/screens/chats/Chat'
import ChatsList from '@/screens/chats/ChatsList'
import CurrentUser from '@/screens/chats/CurrentUser'

export default function ChatsPage() {
	return (
		<div
			className='grid h-full'
			style={{
				gridTemplateColumns: '.7fr 3fr',
			}}
		>
			<div className='border-r border-border'>
				<CurrentUser />
				<ChatsList />
			</div>
			<div>
				<Chat />
			</div>
		</div>
	)
}
