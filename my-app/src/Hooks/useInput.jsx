import { useState } from 'react'

export default function useInput(initial) {
	const [value, setValue] = useState(initial)

	function onChange(e) {
		setValue(e.target.value)
	}

	return { value, onChange }
}
