import React from 'react'
import styled from 'styled-components'
import { Button } from '../../../components/button/button'
import { useNavigate } from 'react-router-dom'

const MainButtonsContainer = ({ className }) => {
	const navigate = useNavigate()

	return (
		<div className={className}>
			<Button
				className='main-button'
				onClick={() => navigate('/test')}>
				Запустить тест
			</Button>
			<Button className='main-button'>Редактировать тест</Button>
		</div>
	)
}

export const MainButtons = styled(MainButtonsContainer)`
	display: flex;
	gap: 10px;
	margin-bottom: 45px;
`
