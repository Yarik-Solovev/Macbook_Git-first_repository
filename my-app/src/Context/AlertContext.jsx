import React, { useContext, useState } from 'react'

const AlertContext = React.createContext()

export const useAlert = () => {
	return useContext(AlertContext)
}

export default function AlertProvider(props) {
	const [alert, setAlert] = useState(false)

	const Toggle = () => {
		setAlert(prev => !prev)
	}
	return (
		<AlertContext.Provider
			value={{
				visible: alert,
				Toggle,
			}}
		>
			{props.children}
		</AlertContext.Provider>
	)
}
