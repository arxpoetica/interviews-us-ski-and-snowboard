import KoaRouter from 'koa-router'
import { db } from './db.js'

const router = new KoaRouter()

router.post('/api/entries', async function(ctx) {

	let query = `
		SELECT
			m.id, m.firstName, m.lastName, m.title, m.phone,
			m.company, m.department, m.url, m.image,

			a.id AS address_id, a.address, a.city, a.state, a.zip
		FROM members m
		LEFT JOIN addresses a
		ON m.id = a.memberId
		WHERE a.primaryAddress != 0
	`
	const search = ctx.body?.search
	if (search) {
		query += `
			AND (
				m.firstName LIKE '%${search}%'
				OR m.lastName LIKE '%${search}%'
				OR m.title LIKE '%${search}%'
				OR m.phone LIKE '%${search}%'
				OR m.company LIKE '%${search}%'
				OR m.department LIKE '%${search}%'
				OR m.url LIKE '%${search}%'
				OR a.address LIKE '%${search}%'
				OR a.city LIKE '%${search}%'
				OR a.state LIKE '%${search}%'
				OR a.zip LIKE '%${search}%'
			)
		`
	}
	query += `
		LIMIT 10
	`

	ctx.body = await db.all(query)
})

export const Router = router
