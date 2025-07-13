"use strict";
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Set your verify token here or use an environment variable
const verifyToken = process.env.VERIFY_TOKEN || "my_verify_token";

app.get('/webhook', (req, res) => {
  const { 'hub.mode': mode, 'hub.challenge': challenge, 'hub.verify_token': token } = req.query;

  if (mode === 'subscribe' && token === verifyToken) {
    console.log('WEBHOOK VERIFIED');
    res.status(200).send(challenge);
  } else {
    res.status(403).end();
  }
});

app.post('/webhook', express.json(), (req, res) => {
  console.log(req.body); // process leadgen_id
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 