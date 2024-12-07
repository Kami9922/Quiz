import styled from 'styled-components'

const ButtonContainer = ({
	children,
	className,
	width,
	backgroundColor,
	...props
}) => {
	return (
		<button
			className={className}
			{...props}>
			{children}
		</button>
	)
}

export const Button = styled(ButtonContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	width: ${({ width = '100%' }) => width};
	background-color: ${({ backgroundColor = 'default' }) => backgroundColor};
	height: 60px;
	border: 1px solid #000;
	border-radius: 10px;
	cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`
