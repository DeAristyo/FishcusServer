import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
const cors = require('cors');

const envFile =
	process.env.NODE_ENV === 'production' ? '.env.production' : '.env.local';
dotenv.config({ path: envFile });

const app: Express = express();
const port = process.env.PORT;

app.use(
	cors({
		credentials: true,
		origin: process.env.API_URL,
	})
);

app.get('/', (req: Request, res: Response) => {
	res.send(`Jalan Bosq di ${envFile}`);
});

app.listen(port, () => {
	console.log(
		`⚡️[Fishcus]: Server is running at http://localhost:${port} ${envFile}`
	);
});
