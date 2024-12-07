import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/button/button'
import { History } from './components/history/history'

const MainContainer = ({ className }) => {
	return (
		<div className={className}>
			<div className='main-buttons'>
				<Button className='main-button'>Запустить тест</Button>
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
