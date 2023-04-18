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
const HeadersGroup = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: flex-start;
	gap: 20rem;
	@media (max-width: 1000px) {
		margin: 0 auto;
		gap: 6rem 20rem;
		grid-template-columns: auto 1fr;
	}
`
const Headers = styled.div`
	display: grid;
	gap: 6rem 20rem;
	grid-template-columns: auto 1fr;
	@media (max-width: 1000px) {
		display: contents;
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

export const Row = ({ entry }) => {
	const name = `${entry.firstName} ${entry.lastName}`
	const address = entry.address_id
		? `${entry.address}<br/>${entry.city}, ${entry.state} ${entry.zip}`
		: false

	return <RowContainer className="row">
		<HeadersGroup>
			<Headers className="headers">
				<Header title="Name" detail={name} />
				<Header title="Company" detail={entry.company} />
				<Header title="Title" detail={entry.title} />
				<Header title="Department" detail={entry.department} />
			</Headers>
			<Headers className="headers">
				<Header title="Phone" detail={entry.phone} />
				{address && <Header title="Address" detail={address} type="address" />}
				<Header title="Website" detail={entry.url} type="url" />
			</Headers>
		</HeadersGroup>
		<Column className="column">
			<Image src={entry.image} alt={entry.name} />
		</Column>
	</RowContainer>
}
