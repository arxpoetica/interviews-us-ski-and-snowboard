import React, { useState } from 'react'
import { Header } from './Header'
import styled from 'styled-components'

const RowContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 30%;
	align-items: flex-start;
	gap: 20rem;
	padding: 20rem;
	background-color: var(--white);
	color: var(--black);
	&:nth-child(even) {
		background-color: var(--off-white);
	}
	@media (max-width: 1000px) {
		grid-template-columns: auto;
	}
`
const Headers = styled.div`
	display: grid;
	gap: 6rem 20rem;
	grid-template-columns: auto 1fr auto 1fr;
	@media (max-width: 1000px) {
		margin: 0 auto;
		grid-template-columns: auto 1fr;
	}
`
const Column = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`
const Image = styled.img`
	width: 100%;
	max-width: 150rem;
`

const temp = {
	url: 'https://glass-tandem.info',
	image: 'https://loremflickr.com/640/480',
}

export const Row = ({ entry }) =>
	<RowContainer className="row">
		<Headers className="headers">
			<Header title="Name" detail={`${entry.firstName} ${entry.lastName}`} order={1} />
			<Header title="Company" detail={entry.company} order={3} />
			<Header title="Title" detail={entry.title} order={4} />
			<Header title="Department" detail={entry.department} order={7} />

			<Header title="Phone" detail={entry.phone} order={2} />
			<Header title="Address" detail={entry.address} order={3} />
			<Header title="Website" detail={entry.url} type="url" order={4} />
		</Headers>
		<Column className="column">
			<Image src={entry.image} alt={entry.name} />
		</Column>
	</RowContainer>
