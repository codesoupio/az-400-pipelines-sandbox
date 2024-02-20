import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT ?? 4000;
const testEnvVariable = process.env.TEST || 'default value';

app.get('/', (req: Request, res: Response) => {
  res.send(`Hello AZ-400`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Test env variable: ${testEnvVariable}`);
});
