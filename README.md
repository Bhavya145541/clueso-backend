# Clueso Backend (Clone)

Backend API for a Clueso.io clone built using Node.js, Express, MongoDB, and JWT authentication.

---

## 🚀 Features

- User Registration & Login
- JWT-based Authentication
- Protected API routes
- MongoDB integration using Mongoose
- Clean MVC-style folder structure

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs

---

## 📁 Project Structure

clueso-backend/
│── controllers/
│── middleware/
│── models/
│── routes/
│── server.js
│── package.json
│── .gitignore
│── README.md

yaml
Copy code

---

##  Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/Bhavya145541/clueso-backend.git
cd clueso-backend
2. Install dependencies
bash
Copy code
npm install
3. Create .env file
env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
4. Run the server
bash
Copy code
node server.js
Server will start on:

arduino
Copy code
http://localhost:5000
🔐 API Endpoints
Register
POST /api/auth/register

Login
POST /api/auth/login

Protected Route
GET /api/protected
Header:

makefile
Copy code
Authorization: Bearer <JWT_TOKEN>
Design Decisions
JWT used for stateless authentication

Middleware-based route protection

Separate folders for scalability and maintainability

✅ Status
Backend authentication and protected routes implemented successfully.

sql
Copy code

Then:

```bash
git add README.md
git commit -m "Update README with setup and API details"
git push
