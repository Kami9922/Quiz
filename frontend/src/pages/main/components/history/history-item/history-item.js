import React from 'react'
import styled from 'styled-components'
import { SuccessRate, TestDate, QuestionsSum } from './components/index'

const HistoryItemContainer = ({ className }) => {
	return (
		<div className={className}>
			<TestDate />
			<QuestionsSum />
			<SuccessRate />
		</div>
	)
}

export const HistoryItem = styled(HistoryItemContainer)`
	border: 1px solid black;
	border-radius: 10px;
	width: 1000px;
	height: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 20px;
	padding: 0px 10px;
`
