import React, { useState, useEffect } from 'react'
import { Row } from './Row'
import styled from 'styled-components'

const TableContainer = styled.div`
	margin: 0 auto;
	max-width: 1000rem;
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
		<TableContainer className="table">
			{/* <div>{JSON.stringify(entries[0])}</div> */}
			{entries.map(entry => <Row key={entry.id} entry={entry} />)}
		</TableContainer>
	)
}
