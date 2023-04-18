import KoaRouter from 'koa-router'
import { db } from './db.js'

const router = new KoaRouter()

router.post('/api/entries', async function(ctx) {
	// console.log({ 'ctx.body': ctx.body })

	const members = await db.all('SELECT * FROM members LIMIT 20')
	// const addresses = await db.all('SELECT * FROM addresses')
	// console.log({ members, addresses })

	ctx.body = members
})

export const Router = router
