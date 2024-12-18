import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/button/button'
import { History } from './components/history/history'
import { useNavigate } from 'react-router-dom'

const MainContainer = ({ className }) => {
	const navigate = useNavigate()

	return (
		<div className={className}>
			<div className='main-buttons'>
				<Button
					className='main-button'
					onClick={() => navigate('/test')}>
					Запустить тест
				</Button>
				<Button className='main-button'>Редактировать тест</Button>
			</div>
			<History />
		</div>
	)
}

export const Main = styled(MainContainer)`
	& .main-buttons {
		display: flex;
		gap: 10px;
	}
`
