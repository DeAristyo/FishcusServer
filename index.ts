import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
console.log(`Port: ${port}`);

app.get('/', (req: Request, res: Response) => {
	res.send('Jalan Bosq');
});

app.listen(port, () => {
	console.log(`⚡️[Fishcus]: Server is running at http://localhost:${port}`);
});
