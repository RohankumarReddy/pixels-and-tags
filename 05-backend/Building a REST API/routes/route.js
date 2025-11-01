const express = require('express');
const router = express.Router();
const users = require('../MOCK_DATA.json');

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// show users in HTML
router.get('/', (req, res) => {
  const html = `
    <ul>
      ${users.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>
  `;
  res.send(html);
});

// get all users (API)
router.get('/api', (req, res) => {
  res.send(users);
});

// get single user
router.get('/api/:id', (req, res) => {
  const id = req.params.id;
  const finding = users.find(u => u.id == id);
  if (finding) res.send(finding);
  else res.send('Error finding user');
});

// add user
router.post('/api', (req, res) => {
  const body = req.body;
  users.push({
    id: users.length + 1,
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    job_title: body.job_title
  });
  res.send('data has been added');
});

// delete user
router.delete('/api/:id', (req, res) => {
  const id = req.params.id;
  const delid = users.find(u => u.id == id);
  if (delid) {
    users.splice(users.indexOf(delid), 1);
    res.send('user deleted');
  } else {
    res.send('user not found');
  }
});

module.exports = router;
