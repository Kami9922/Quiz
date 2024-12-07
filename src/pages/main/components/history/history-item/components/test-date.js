import styled from 'styled-components'

const TestDateContainer = ({ className }) => {
	return (
		<div className={className}>
			<div>12.12.2024</div>
			<div className='time'>12:12:12</div>
		</div>
	)
}

export const TestDate = styled(TestDateContainer)`
	& .time {
		font-size: 15px;
	}
`
