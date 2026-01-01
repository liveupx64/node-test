const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'XHost Full-Stack Deploy Test Success!',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ healthy: true });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
