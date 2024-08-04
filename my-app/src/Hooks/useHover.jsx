import { useEffect, useState } from 'react'

export default function useHover(ref) {
	const [isHovering, setIsHovering] = useState(false)

	const on = () => {
		setIsHovering(true)
	}
	const off = () => {
		setIsHovering(false)
	}

	useEffect(() => {
		if (!ref.current) {
			return
		}
		const el = ref.current
		el.addEventListener('mouseenter', on)
		el.addEventListener('mousemove', on)
		el.addEventListener('mouseleave', off)

		return function () {
			el.removeEventListener('mouseenter', on)
			el.removeEventListener('mousemove', on)
			el.removeEventListener('mouseleave', off)
		}
	}, [])

	return isHovering
}
