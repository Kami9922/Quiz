import React from 'react'
import styled from 'styled-components'
import { HistoryItem } from './history-item/history-item'

const HistoryContainer = ({ className }) => {
	return (
		<div className={className}>
			<h2>История прохождений</h2>
			<HistoryItem />
		</div>
	)
}

export const History = styled(HistoryContainer)`
	font-family: Arial, Helvetica, sans-serif;
`
