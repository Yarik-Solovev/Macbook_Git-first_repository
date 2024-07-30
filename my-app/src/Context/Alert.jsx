import { useAlert } from './AlertContext'

export default function Alert() {
	const response = useAlert()

	if (!response.visible) return null
	return (
		<div
			style={{
				width: 500,
				height: 50,
				backgroundColor: 'red',
				marginTop: 50,
				marginBottom: 30,
			}}
		>
			Какое то важное сообщение
		</div>
	)
}
