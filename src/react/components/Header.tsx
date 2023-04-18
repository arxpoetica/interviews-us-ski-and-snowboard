import { TYPES } from './constants'
import styled from 'styled-components'

const Title = styled.h2`
	margin: 0;
	font-weight: bold;
	font-size: inherit;
	@media (max-width: 1000px) { order: 1 !important; }
`
const Detail = styled.div`
	text-transform: uppercase;
	@media (max-width: 1000px) { order: 1 !important; }
`

export const Header = ({ title, detail, type = 'default', order = 1 }) =>
	<>
		<Title style={{ order }}>{title}:</Title>
		<Detail style={{ order }}>
			{/* {JSON.stringify(TYPES)} */}
			{type === TYPES.DEFAULT && detail}
			{type === TYPES.URL &&
				<a href={detail} target="_blank" rel="noopener noreferrer">{detail}</a>
			}
			{/* {type === TYPES.ADDRESS && detail.split(',').map((line, i) => <div key={i}>{line}</div>)} */}
		</Detail>
	</>
