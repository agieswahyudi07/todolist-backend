📦 Backend – To-Do API (Express + MySQL + Sequelize)

🚀 Setup Project
# Clone repo
git clone [https://github.com/username/backend-todo-api.git](https://github.com/agieswahyudi07/todolist-backend.git)
cd backend-todo-api

# Install dependencies
npm install

# Buat file .env dan sesuaikan
cp .env.example .env
⚙️ Environment Variables
Isi file .env:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=todo_db
DB_DIALECT=mysql
JWT_SECRET=your_jwt_secret

🧬 Inisialisasi Database
sequelize.sync() yang akan otomatis membuat tabel saat server pertama kali dijalankan.
Pastikan database MySQL dengan nama sesuai .env (DB_NAME) sudah dibuat secara manual terlebih dahulu:
CREATE DATABASE todo_db;
Kemudian cukup jalankan server dengan cara dibawah 👇

▶️ Jalankan Server
nodemon server.js
Server akan berjalan di http://localhost:5000

📁 Struktur Proyek (Singkat)
backend/
├── controllers/      # Logic untuk auth & task
├── middleware/       # Auth middleware
├── models/           # Model Sequelize
├── routes/           # API Routes (auth & tasks)
├── config/           # DB config
├── app.js            # Inisialisasi Express
└── server.js         # Entry point

🧪 Fitur Utama
🔐 Registrasi, Login, Logout dengan JWT
📋 CRUD Tugas (Task)
✅ Update status task: completed / not completed
🔍 Filter berdasarkan status
🧾 RESTful API

🛠️ Teknologi
Express.js
MySQL
Sequelize
JWT
