import Koa from 'koa';
import { Router } from './routes.js';

const PORT = 3000;
const HOST = 'localhost';

process.on('uncaughtException', function(err) {
	console.log('UNHANDLED ERROR: ', err);
	process.exit(1);
});
process.on('unhandledRejection', function(err) {
	console.log('UNHANDLED PROMISE REJECTION: ', err);
	process.exit(1);
});

const app = new Koa();
app.use(Router.routes()).use(Router.allowedMethods());
app.listen(PORT, HOST, function(err) {
	if (err) throw err;
	console.log(`API server listening on port: ${HOST}:${PORT}`);
});

export const viteNodeApp = app;
