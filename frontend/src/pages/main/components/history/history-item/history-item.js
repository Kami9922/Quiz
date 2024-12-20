import styled from 'styled-components'

const HistoryItemContainer = ({ className, data, date }) => {
	return (
		<div className={className}>
			<div className='date'>
				<span>{date}</span>
			</div>
			<div className='history-questions'>
				<span>{`Всего вопросов: ${data.questionsLength}`}</span>
			</div>
			<div className='history-result'>
				<span>{`Верно: ${data.answers.length} из ${data.questionsLength}`}</span>
			</div>
		</div>
	)
}

export const HistoryItem = styled(HistoryItemContainer)`
	border: 1px solid black;
	border-radius: 10px;
	height: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 20px;
	padding: 0px 10px;

	& .date {
		display: flex;
		font-size: 15px;
		padding-bottom: 5px;
		width: 200px;
		font-weight: bold;
		justify-content: center;
		border: 1px solid #000;
		border-radius: 15px;
		padding: 10px;
		align-self: center;
	}
	& .history-questions {
		display: flex;
		justify-content: center;
		width: 200px;
		border: 1px solid #000;
		padding: 10px;
		border-radius: 15px;
		border-radius: 15px;
	}
	& .history-result {
		display: flex;
		width: 200px;
		justify-content: center;
		border: 1px solid #000;
		padding: 10px;
		border-radius: 15px;
	}
`
