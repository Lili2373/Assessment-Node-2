Test for Unauthorized Access:

it('should reject unauthorized access to protected routes', async () => {
  const res = await request(app).get('/users/protected');
  expect(res.status).toBe(401);
  expect(res.body.message).toBe('Unauthorized');
});


Test for Input Validation:
it('should reject invalid input', async () => {
  const res = await request(app)
    .post('/auth/login')
    .send({ username: '', password: 'short' });
  expect(res.status).toBe(400);
  expect(res.body.message).toContain('Invalid input');
});


Test for Error Handling:
it('should log and return proper error messages', async () => {
  const res = await request(app).get('/non-existent-route');
  expect(res.status).toBe(404);
  expect(res.body.message).toBe('Not Found');
});


Test for Correct Method Output:
it('should return correct user data', async () => {
  const res = await request(app).get('/users/1');
  expect(res.status).toBe(200);
  expect(res.body.username).toBe('existinguser');
  expect(res.body).toHaveProperty('email');
});

Server and Error Handling Setup:
const express = require('express');
const app = express();
const ExpressError = require("./helpers/expressError");

app.use(express.json());

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

app.use('/auth', authRoutes);
app.use('/users', userRoutes);

/** 404 handler */
app.use(function(req, res, next) {
  const err = new ExpressError("Not Found", 404);
  return next(err);
});

/** general error handler */
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  return res.json({
    status: err.status,
    message: err.message
  });
});

module.exports = app;


Test for Valid Input During Registration:
it('should reject invalid email during registration', async () => {
  const res = await request(app)
    .post('/auth/register')
    .send({ username: 'user', password: 'password123', first_name: 'First', last_name: 'Last', email: 'invalid-email', phone: '1234567890' });
  expect(res.status).toBe(400);
  expect(res.body.message).toContain('Invalid email');
});

Test for Password Hashing During Registration:
it('should hash password during registration', async () => {
  const res = await request(app)
    .post('/auth/register')
    .send({ username: 'user', password: 'password123', first_name: 'First', last_name: 'Last', email: 'user@example.com', phone: '1234567890' });
  expect(res.status).toBe(201);
  const user = await User.findOne({ username: 'user' });
  expect(user.password).not.toBe('password123'); // password should be hashed
});


Test for Awaiting Asynchronous Functions:
it('should handle async functions correctly during login', async () => {
  const res = await request(app)
    .post('/auth/login')
    .send({ username: 'nonexistentuser', password: 'password123' });
  expect(res.status).toBe(401);
  expect(res.body.message).toBe('Invalid username/password');
});


Test for User Existence Check During Login:
it('should return 401 for non-existent user during login', async () => {
  const res = await request(app)
    .post('/auth/login')
    .send({ username: 'nonexistentuser', password: 'password123' });
  expect(res.status).toBe(401);
  expect(res.body.message).toBe('Invalid username/password');
});

Registration Route:
router.post('/register', async function(req, res, next) {
  try {
    const { username, password, first_name, last_name, email, phone } = req.body;
    let user = await User.register({ username, password, first_name, last_name, email, phone });
    const token = createTokenForUser(username, user.admin);
    return res.status(201).json({ token });
  } catch (err) {
    return next(err);
  }
});

Login Route:
router.post('/login', async function(req, res, next) {
  try {
    const { username, password } = req.body;
    let user = User.authenticate(username, password); // Missing await
    const token = createTokenForUser(username, user.admin);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
});

