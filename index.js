// Set up middleware to allow cross-origin requests
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// // HTTP server
// const http = require('http');

// const server = http.createServer((req, res) => {

//   // Handle requests
//   if (req.method === 'GET' && req.url === '/users') {
//     // res.statusCode = 200;
//     res.end(JSON.stringify(users));
//   } else if (req.method === 'GET' && req.url.startsWith('/users/')) {
//     // Get a user by ID
//     const id = parseInt(req.url.substring('/users/'.length));
//     const user = users.find((u) => u.id === id);
//     if (user) {
//       res.statusCode = 200;
//       res.end(JSON.stringify(user));
//     } else {
//       res.statusCode = 404;
//       res.end(JSON.stringify({ error: 'User not found' }));
//     }
//   } else if (req.method === 'POST' && req.url === 'http://localhost:3000/users') {
//     // Create a new user
//     let body = '';
//     req.on('data', (chunk) => {
//       body += chunk.toString();
//     });
//     req.on('end', () => {
//       const user = JSON.parse(body);
//       user.id = users.length + 1;
//       users.push(user);
//       res.statusCode = 201;
//       res.end(JSON.stringify(user));
//     });
//   } else if (req.method === 'UPDATE' && req.url.startsWith('/users/')) {
//     // Update a user by ID
//     const id = parseInt(req.url.substring('/users/'.length));
//     const user = users.find((u) => u.id === id);
//     if (user) {
//       let body = '';
//       req.on('data', (chunk) => {
//         body += chunk.toString();
//       });
//       req.on('end', () => {
//         const updatedUser = JSON.parse(body);
//         user.name = updatedUser.name;
//         user.email = updatedUser.email;
//         res.statusCode = 200;
//         res.end(JSON.stringify(user));
//       });
//     } else {
//       res.statusCode = 404;
//       res.end(JSON.stringify({ error: 'User not found' }));
//     }
//   } else if (req.method === 'DELETE' && req.url.startsWith('/users/')) {
//     // Delete a user by ID
//     const id = parseInt(req.url.substring('/users/'.length));
//     const index = users.findIndex((u) => u.id === id);
//     if (index >= 0) {
//       users.splice(index, 1);
//       res.statusCode = 204;
//       res.end();
//     } else {
//       res.statusCode = 404;
//       res.end(JSON.stringify({ error: 'User not found' }));
//     }
//   } else {
//     // Invalid endpoint
//     res.statusCode = 404;
//     res.end(JSON.stringify({ error: 'Invalid endpoint' }));
//   }
// });

// // Start the server
// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Use the CORS middleware
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

let users = [
  { id: 1, name: 'Shreshth', email: 'shreshth@gmail.com' },
  { id: 2, name: 'Abhishek', email: 'Abhishek@gmail.com' },
  { id: 3, name: 'Samriddhi', email: 'Samriddhi@gmail.com' },
];


// API endpoints
app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

app.post('/users', (req, res) => {
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.status(201).json(user);
});

app.put('/users/:id', (req, res) => {
  const index = users.findIndex((user) => user.id === parseInt(req.params.id));
  if (index !== -1) {
    users[index] = { ...req.body, id: parseInt(req.params.id) };
    res.json(users[index]);
  } else {
    res.status(404).send('User not found');
  }
});

app.delete('/users/:id', (req, res) => {
  const index = users.findIndex((user) => user.id === parseInt(req.params.id));
  if (index !== -1) {
    users.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
