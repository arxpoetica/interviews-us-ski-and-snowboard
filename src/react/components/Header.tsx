import { TYPES } from './constants'
import styled from 'styled-components'

const Title = styled.h2`
	margin: 0;
	font-weight: bold;
	font-size: inherit;
`
const Detail = styled.div`
	text-transform: uppercase;
`

export const Header = ({ title, detail, type = 'default' }) =>
	<>
		<Title>{title}:</Title>
		<Detail>
			{type === TYPES.DEFAULT &&
				detail
			}
			{type === TYPES.URL &&
				<a href={detail} target="_blank" rel="noopener noreferrer">{detail}</a>
			}
			{type === TYPES.ADDRESS &&
				<div dangerouslySetInnerHTML={{ __html: detail }} />
			}
		</Detail>
	</>
