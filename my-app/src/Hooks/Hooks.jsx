import { useState, useEffect, useRef } from 'react'

export default function Hooks() {
	const [value, setValue] = useState('')
	// useEffect(() => {
	// 	console.log('Компонент отрисовался')//вызывается только один раз когда компонент отрисовался
	// }, [])
	// useEffect(() => {
	// 	console.log('Компонент перерисовался')//вызывается когда компонент перерисововается
	// })

	const renderCount = useRef(1) //Когда состояние изменяется компонент не перерисовается
	const input = useRef(null)
	useEffect(() => {
		renderCount.current++
		console.log(renderCount.current, input.current.value)
	})

	useEffect(() => {
		console.log('Состояние изменилось')
	}, [value])
	return (
		<>
			<h1>Value:{value} </h1>
			<input
				ref={input}
				type='text'
				value={value}
				onChange={e => {
					setValue(e.target.value)
				}}
			/>
		</>
	)
}
