import React, { useState } from 'react'
import Buttons from '../Buttons/buttons'
import Info from './Info/info'
import Contact from '../Contact/contact'
import Button from './Button/Button'
import Modal from './Modal/Modal'
import Hooks from '../Hooks/Hooks'
export default function App() {
	const [tab, setTab] = useState('info')
	const [isModal, setIsModal] = useState(false)
	function openModal() {
		setIsModal(current => setIsModal(!current))
	}
	function closeModal() {
		setIsModal(current => setIsModal(!current))
	}

	return (
		<>
			<Buttons active={tab} onChange={current => setTab(current)} />
			{tab === 'info' && <Info />}
			{tab === 'contact' && <Contact />}

			<Button onClick={openModal}>Открыть модальное окно</Button>

			<Modal open={isModal}>
				<h1>Modal</h1>
				<p>It is a modal</p>
				<Button onClick={closeModal}>Закрыть модальное окно</Button>
			</Modal>

			<Hooks />
		</>
	)
}
