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



// const express = require('express');
// const cors = require('cors');

// const app = express();
// const port = 3000;

// // Use the CORS middleware
// app.use(cors());

// Parse incoming JSON requests
// app.use(express.json());

// const http = require('http');

// const server = http.createServer((req, res) => {
//   const { method, url } = req;

//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

//   if (url === '/users' && method === 'GET') { // READ operation
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(users));
//   } 
//   if (url === '/users' && method === 'POST') { // CREATE operation
//     let body = '';
//     req.on('data', chunk => {
//       body += chunk.toString();
//     });
//     req.on('end', () => {
//       const newRecord = JSON.parse(body);
//       data.push(newRecord);
//       res.writeHead(201, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify(newRecord));
//     });
//   } 
//   if (url === '/users' && method === 'PUT') { // UPDATE operation
//     let body = '';
//     req.on('data', chunk => {
//       body += chunk.toString();
//     });
//     req.on('end', () => {
//       const updatedRecord = JSON.parse(body);
//       const index = data.findIndex(record => record.id === updatedRecord.id);
//       data[index] = updatedRecord;
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify(updatedRecord));
//     });
//   } 
//   if (url.startsWith('/users/') && method === 'DELETE') { // DELETE operation
//     const id = url.split('/')[2];
//     const index = data.findIndex(record => record.id === id);
//     data.splice(index, 1);
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ message: `Record with id ${id} deleted successfully` }));
//   } else {
//     res.writeHead(404, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ message: 'Endpoint not found' }));
//   }
// });

// server.listen(3000, () => {
//   console.log('Server started on port 3000');
// });

const http = require('http');

let users = [
  { id: 1, name: 'Shreshth' },
  { id: 2, name: 'Abhishek'},
  { id: 3, name: 'Samriddhi' },
];

// fetch("https://jsonplaceholder.typicode.com/users",{
//   method : "GET",
//   headers : {
//     "Content-Type" : "application/json"
//   }
// })
// .then(function(res){
//   return res.json();
// }).then(function(data){
//   console.log(data);
// })


// fetch("https://jsonplaceholder.typicode.com/users",{
//   method : "POST",
//   body : JSON.stringify(users),
//   headers : {
//     "Content-Type" : "application/json"
//   }
// })
// .then(function(res){
//   return res.json();
// }).then(function(data){
//   console.log(data);
// })

// server.listen(3000, () => {
//   console.log('Server started on port 3000');
// });

// API endpoints
// app.get('/users', (req, res) => {
//   res.json(users);
// });

// app.get('/users/:id', (req, res) => {
//   const user = users.find((user) => user.id === parseInt(req.params.id));
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).send('User not found');
//   }
// });

// app.post('/users', (req, res) => {
//   const user = req.body;
//   user.id = users.length + 1;
//   users.push(user);
//   res.status(201).json(user);
// });

// app.put('/users/:id', (req, res) => {
//   const index = users.findIndex((user) => user.id === parseInt(req.params.id));
//   if (index !== -1) {
//     users[index] = { ...req.body, id: parseInt(req.params.id) };
//     res.json(users[index]);
//   } else {
//     res.status(404).send('User not found');
//   }
// });

// app.delete('/users/:id', (req, res) => {
//   const index = users.findIndex((user) => user.id === parseInt(req.params.id));
//   if (index !== -1) {
//     users.splice(index, 1);
//     res.status(204).send();
//   } else {
//     res.status(404).send('User not found');
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  
  if (req.method === 'GET' && req.url === '/') {
    res.end(JSON.stringify(users));
  } else if (req.method === 'GET' && req.url.startsWith('/')) {
    // Get a user by ID
    const id = parseInt(req.url.substring('/users/'.length));
    const user = users.find((u) => u.id === id);
    if (user) {
      res.statusCode = 200;
      res.end(JSON.stringify(user));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: 'User not found' }));
    }
  } else if (req.method === 'POST' && req.url === 'http://13.126.67.127:3000/users') {
    // Create a new user
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const user = JSON.parse(body);
      user.id = users.length + 1;
      users.push(user);
      res.statusCode = 201;
      res.end(JSON.stringify(user));
    });
  } else if (req.method === 'PUT' && req.url.startsWith('/')) {
    // Update a user by ID
    const id = parseInt(req.url.substring('/'.length));
    const user = users.find((u) => u.id === id);
    if (user) {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const updatedUser = JSON.parse(body);
        user.name = updatedUser.name;
        res.end(JSON.stringify(user));
      });
    } 
  } else if (req.method === 'DELETE' && req.url.startsWith('/')) {
    // Delete a user by ID
    const id = parseInt(req.url.substring('/'.length));
    const index = users.findIndex((u) => u.id === id);
    if (index >= 0) {
      users.splice(index, 1);
      res.statusCode = 204;
      res.end();
    }
  } else {
    // Invalid endpoint
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Invalid endpoint' }));
  }
})

server.listen(3000, () => {
  console.log('Server is running on 3000')
})