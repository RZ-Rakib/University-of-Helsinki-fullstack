const express = require('express');
const winston = require('./loggers');
const app = express();

app.use(express.json());

const contacts = [
  {
    id: '1',
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: '2',
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: '3',
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: '4',
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
];

app.get('/api/persons', (req, res) => {
  try {
    res.json(contacts);
    winston.info(`'GET api/persons' - Fetch contacts from server`);
  } catch (error) {
    winston.error(
      `'GET api/persons' - Failed to fetch data from server, ${error.message}`
    );
    res.status(500).end();
  }
});
app.get('/info', (req, res) => {
  try {
    const countPersons = contacts.length;
    const date = new Date();

    res.send(`
      <p>Phonebook has info for ${countPersons} people</p>
      <p>${date}</P>
    `);
    winston.info(`'GET /info' fetched info sucessfully`);
  } catch (error) {
    winston.error(
      `'GET /info' Failed to fetch data from server, ${error.message}`
    );
    res.status(500).end();
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
