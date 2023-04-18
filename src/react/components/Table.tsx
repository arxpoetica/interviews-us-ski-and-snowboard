import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const TableContainer = styled.div`
	display: grid;
	gap: 20rem;
`
const Row = styled.div`
`

export const Table = () => {

	const [entries, setEntries] = useState([])

	useEffect(() => {
		console.log('fetching entries...')
		fetch('/api/entries', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: 'POST THIS WORLD' }),
		})
			.then(response => response.json())
			.then(entries => setEntries(entries))
	}, [])


	return (
		<TableContainer>
			{/* <div>{JSON.stringify(entries[0])}</div> */}
			{entries.map(entry => (
				<Row key={entry.id}>
					{entry.lastName}, {entry.firstName}
				</Row>
			))}
		</TableContainer>
	)
}
