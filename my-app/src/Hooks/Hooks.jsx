import { useState, useEffect, useRef, useMemo } from 'react'
import useInput from './useInput'
export default function Hooks() {
	const [number, setNumber] = useState(52)
	const [color, setColor] = useState(false)
	// useEffect(() => {
	// 	console.log('Компонент отрисовался')//вызывается только один раз когда компонент отрисовался
	// }, [])
	// useEffect(() => {
	// 	console.log('Компонент перерисовался')//вызывается когда компонент перерисововается
	// })

	// const renderCount = useRef(1) //Когда состояние изменяется компонент не перерисовается
	// const input = useRef(null)
	// useEffect(() => {
	// 	renderCount.current++
	// 	console.log(renderCount.current, input.current.value)
	// })
	const style = useMemo(() => {
		return { color: color ? 'red' : 'black' }
	})

	function calculateRes(number) {
		console.log('a') //при изменении цвета  log не вызывается из за useMemo
		return (number * 1231) / 422
	}

	const res = useMemo(() => calculateRes(number), [number])

	useEffect(() => {
		console.log('Styled Changed') //при изменении number   не вызывается log из за useMemo
	}, [style])

	const userName = useInput('')
	return (
		<>
			<h1>Value:{userName.value} </h1>
			<input
				// ref={input}
				{...userName}
				type='text'
			/>
			<p style={style}>{res}</p>
			<button onClick={() => setNumber(current => ++current)}>увеличить</button>
			<button onClick={() => setNumber(current => --current)}>уменьшить</button>
			<button onClick={() => setColor(current => !current)}>
				изменить цвет
			</button>
		</>
	)
}
