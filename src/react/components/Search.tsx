import { useState } from 'react'
import styled from 'styled-components'
import { load } from './helpers'

const SearchContainer = styled.form`
	display: grid;
	grid-template-columns: 1fr auto;
	justify-content: center;
	align-items: stretch;
	gap: 10rem;
	margin: 0 auto 10rem;
	max-width: 400rem;
`
const Input = styled.input`
	min-width: 0;
	padding: 10rem;
	background-color: var(--gray);
	border: 4rem solid var(--white);
	font: 18rem/1 var(--font-family);
	::placeholder {
		color: var(--white);
	}
`
const Button = styled.button`
	padding: 0 20rem;
	background-color: var(--blue);
	border: none;
	border-radius: 5rem;
	color: var(--white);
	font: 18rem/1 var(--font-family);
`

export const Search = ({ setEntries }) => {
	const [value, setValue] = useState('')

	const handleSearch = async(event) => {
		event.preventDefault()
		// console.log(`Searching for: ${value}`)

		const search = value.trim()
		// if (!search) return

		const entries = await load({ url: '/api/entries', body: { search } })
		// console.log({ search, entries })

		setEntries(entries)
	}

	return (
		<SearchContainer onSubmit={handleSearch}>
			<Input
				type="text"
				value={value}
				placeholder="Refine results..."
				onChange={event => setValue(event.target.value)}
			/>
			<Button type="submit">Search</Button>
		</SearchContainer>
	)
}
