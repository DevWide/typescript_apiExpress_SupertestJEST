import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [{ id: 1, name: 'Alice', email: 'alice@example.com' }];

app.get('/api/users', ((req, res) => {
    res.status(200).json(users);
  }) as express.RequestHandler);
  
  app.post('/api/users', ((req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Incomplete data' });
    }
    const newUser: User = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
  }) as express.RequestHandler);
  
  app.get('/api/users/:id', ((req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  }) as express.RequestHandler);
  

export default app;
