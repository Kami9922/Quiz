import React from 'react'
import styled from 'styled-components'
import { History } from './components/history/history'
import { MainButtons } from './components/main-buttons'

const MainContainer = ({ className }) => {
	return (
		<div className={className}>
			<MainButtons />
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
