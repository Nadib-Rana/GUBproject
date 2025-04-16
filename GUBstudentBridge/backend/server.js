const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Get order history
app.get('/order-history', (req, res) => {
  fs.readFile(path.join(__dirname, 'orderHistory.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read history file.' });
    }
    res.json(JSON.parse(data));
  });
});

// Place an order
app.post('/place-order', (req, res) => {
  const orderData = req.body;

  fs.readFile(path.join(__dirname, 'orderHistory.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read history file.' });
    }

    const orderHistory = JSON.parse(data);
    orderHistory.push(orderData);

    fs.writeFile(path.join(__dirname, 'orderHistory.json'), JSON.stringify(orderHistory, null, 2), 'utf8', (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to save order history.' });
      }
      res.status(200).json({ message: 'Order placed successfully!' });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
