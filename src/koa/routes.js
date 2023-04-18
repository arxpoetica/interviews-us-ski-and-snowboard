import KoaRouter from 'koa-router'
import { db } from './db.js'

const router = new KoaRouter()

router.post('/api/entries', async function(ctx) {
	// console.log({ 'ctx.body': ctx.body })

	const members = await db.all(`
		SELECT
			m.id, m.firstName, m.lastName, m.title, m.phone,
			m.company, m.department, m.url, m.image,

			a.address, a.city, a.state, a.zip
		FROM members m
		INNER JOIN addresses a
		ON m.id = a.memberId
		WHERE a.primaryAddress = 1
		LIMIT 10
	`)
	// const addresses = await db.all('SELECT * FROM addresses')
	// console.log({ members, addresses })

	ctx.body = members
})

export const Router = router
