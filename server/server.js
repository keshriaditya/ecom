// server/server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Sample endpoint for fetching product data
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 29.99 }
  ];
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
