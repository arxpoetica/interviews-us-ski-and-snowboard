import { Row } from './Row'
import styled from 'styled-components'

const TableContainer = styled.div`
	margin: 0 auto;
	max-width: 1000rem;
`
const Text = styled.div`
	display: flex;
	justify-content: center;
	padding: 50rem;
	font: bold 24rem/1 var(--font-family);
	letter-spacing: 4rem;
`

export const Table = ({ entries }) => {

	return (
		<TableContainer className="table">
			{entries === false && <Text className="no-results"><p>...no results...</p></Text>}
			{entries?.length === 0 && <Text className="loader"><p>...loading...</p></Text>}
			{entries?.length > 0 && entries.map(entry => <Row key={entry.id} entry={entry} />)}
		</TableContainer>
	)
}
