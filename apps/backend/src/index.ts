import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { Elysia } from 'elysia';

const app = new Elysia()
	.use(cors())
	.use(swagger())
	.get('/', async () => {
		return {
			message: 'Hello World',
		};
	})
	.listen(3000);

export type App = typeof app;

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
