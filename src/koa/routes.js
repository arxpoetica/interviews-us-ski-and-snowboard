import KoaRouter from 'koa-router';

const router = new KoaRouter();

router.get('/api/hello-world', async function(ctx) {
	ctx.body = 'Hello World';
});

export const Router = router;
