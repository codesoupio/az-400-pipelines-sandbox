import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT ?? 4000;

app.get('/', (req: Request, res: Response) => {
  res.send(`Hello AZ-400`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
