import './index.css'

export default function Button({ children, ...props }) {
	return (
		<button className='button' onClick={props.onClick}>
			{children}
		</button>
	)
}
