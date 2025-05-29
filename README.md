
---

````md
# 📦 To-Do API – Express + MySQL + Sequelize

A simple and clean RESTful API for a To-Do List application built with **Express.js**, **MySQL**, **Sequelize**, and **JWT** for authentication.

---

## 🚀 Setup Project

```bash
# Clone this repo
git clone https://github.com/agieswahyudi07/todolist-backend.git
cd todolist-backend

# Install dependencies
npm install

# Copy .env template and configure
cp .env.example .env
````

---

## ⚙️ Environment Variables

Edit the `.env` file with your configuration:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=todo_db
DB_DIALECT=mysql
JWT_SECRET=your_jwt_secret
```

---

## 🧬 Initialize Database

Create the database manually in MySQL before starting the server:

```sql
CREATE DATABASE todo_db;
```

The database schema will be auto-created via `sequelize.sync()` on first run.

---

## ▶️ Start the Server

```bash
nodemon server.js
```

Server will run at: [http://localhost:5000](http://localhost:5000)

---

## 📁 Project Structure

```
backend/
├── controllers/      # Logic for auth & tasks
├── middleware/       # JWT auth middleware
├── models/           # Sequelize models
├── routes/           # API routes (auth & tasks)
├── config/           # DB configuration
├── app.js            # Express app setup
└── server.js         # App entry point
```

---

## 🧪 Features

* 🔐 **User Authentication**

  * Register
  * Login
  * Logout with JWT
* 📋 **Task Management**

  * Create / Read / Update / Delete
  * Toggle complete status
  * Filter by status
* 🧾 **RESTful API** architecture

---

## 🛠️ Built With

* [Express.js](https://expressjs.com/)
* [MySQL](https://www.mysql.com/)
* [Sequelize ORM](https://sequelize.org/)
* [JSON Web Token](https://jwt.io/)

---

```

---
```
