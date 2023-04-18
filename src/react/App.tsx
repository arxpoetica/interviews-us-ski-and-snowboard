import { useState, useEffect } from 'react'
import { Table } from './components/Table'
import { Search } from './components/Search'
import styled from 'styled-components'
import { load } from './components/helpers'

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

export const App = () => {
	const [entries, setEntries] = useState(false)

	useEffect(() => {
		// ...there are better ways of loading data, but for now...
		// console.log('fetching entries...')
		load({ url: '/api/entries' }).then(entries => setEntries(entries))
	}, [])

	return <>
		<MainHeader className="header">
			<img src="/images/logo.png" alt="U.S. Ski and Snowboard Coding Test" />
			<H1>U.S. Ski and Snowboard Coding Test</H1>
		</MainHeader>
		<Search setEntries={setEntries} />
		<Table entries={entries} />
	</>
}
