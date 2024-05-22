import { cors } from '@elysiajs/cors';
import { staticPlugin } from '@elysiajs/static';
import { swagger } from '@elysiajs/swagger';
import { db } from 'db';
import { Elysia, t } from 'elysia';

const app = new Elysia()
	.use(cors())
	.use(swagger())
	.use(
		staticPlugin({
			prefix: '',
		})
	)
	.get('/', async () => {
		const test = await db.test.findMany();
		return {
			message: 'Hello WOrld',
			data: test,
		};
	})

	.listen(3000);

export type App = typeof app;

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
