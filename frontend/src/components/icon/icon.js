import styled from 'styled-components'

const IconContainer = ({ className, id, inactive, ...props }) => (
	<div
		className={className}
		{...props}>
		<i
			className={`fa ${id}`}
			aria-hidden='true'></i>
	</div>
)

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '24px' }) => size};
	margin: ${({ margin = '0' }) => margin};
	color: ${({ disabled }) => (disabled ? '#ccc' : '#000')};
	cursor: ${({ inactive }) => (inactive ? 'default' : 'pointer')};
`
