import { Table } from './components/Table'
import styled from 'styled-components'

const MainHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 50rem;
	margin: 0 0 50rem;
	@media (max-width: 600px) {
		flex-direction: column;
		gap: 20rem;
		margin: 0 0 20rem;
		text-align: center;
	}
`
const H1 = styled.h1`
	margin: 0;
`

export const App = () => <>
	<MainHeader className="header">
		<img src="/images/logo.png" alt="U.S. Ski and Snowboard Coding Test" />
		<H1>U.S. Ski and Snowboard Coding Test</H1>
	</MainHeader>
	<Table />
</>
