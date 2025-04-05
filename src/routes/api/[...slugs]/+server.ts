import { Elysia, t } from 'elysia';

const key: string = 'thisIsVerySecreet';

const app = new Elysia({ prefix: '/api' })
  .get('/', () => ({ status: 'ok', message: 'hello SvelteKit' }))
  .post('/', ({ body }) => body, {
    body: t.Object({
      name: t.String()
    })
  })
  .get('/test-secreet', () => {
    console.log(key);
    return { status: 'ok' };
  });

type RequestHandler = (v: { request: Request }) => Response | Promise<Response>;

export const GET: RequestHandler = ({ request }) => app.handle(request);
export const POST: RequestHandler = ({ request }) => app.handle(request);
export type App = typeof app;
