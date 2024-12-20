import React, { useEffect } from 'react'
import styled from 'styled-components'
import { HistoryItem } from './history-item/history-item'
import { useDispatch, useSelector } from 'react-redux'
import { selectStorageData } from '../../../../selectors/main-selectors/storage-data-selector'
import { getLocalStorageData } from '../../../../actions/index'

const HistoryContainer = ({ className }) => {
	const dispatch = useDispatch()

	const storageData = useSelector(selectStorageData)

	useEffect(() => {
		const existingKeys = new Set(storageData.map((item) => item.date))

		for (let i = 0; i < localStorage.length; i++) {
			const date = localStorage.key(i)
			const stringData = localStorage.getItem(date)
			const data = JSON.parse(stringData)

			if (!existingKeys.has(date)) {
				dispatch(getLocalStorageData({ date, data }))
			}
		}
	}, [dispatch, storageData])

	return (
		<div className={className}>
			<h2 className='main-title'>История прохождений</h2>
			{storageData.map(({ date, data }) => (
				<HistoryItem
					key={date}
					date={date}
					data={data}
				/>
			))}
		</div>
	)
}

export const History = styled(HistoryContainer)`
	display: flex;
	flex-direction: column;
	gap: 15px;
`
