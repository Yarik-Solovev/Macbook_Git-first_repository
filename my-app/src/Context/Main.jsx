import { useAlert } from './AlertContext'

export default function Main() {
	const response = useAlert()
	return <button onClick={response.Toggle}>Вызвать Alert</button>
}
