# Mini-Linkedin
# 🧑‍💼 LinkedIn-Lite Community Platform

A simple LinkedIn-like full-stack community web app where users can register, log in, and share text-based posts on a public feed.

---

## 🚀 Features

- ✅ User Authentication (Register/Login)
- 📝 Create & View Posts
- 🧑‍🤝‍🧑 Public Feed with Author Name
- 🕒 Timestamps for all posts
- 🔐 Protected Routes using JWT
- 🌐 Fully responsive frontend using React + Vite

---

## 🛠️ Tech Stack

| Frontend          | Backend         | Database  |
|-------------------|------------------|------------|
| React + Vite      | Node.js + Express| MongoDB    |

---

## 📂 Folder Structure
project/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
└── frontend/
├── src/
│ ├── components/
│ ├── pages/
│ ├── api.js
│ └── App.jsx


---

## 🔐 API Routes

### Auth

- `POST /api/auth/register` – Register new user  
- `POST /api/auth/login` – Login and receive JWT

### Posts

- `GET /api/posts` – Fetch all posts  
- `POST /api/posts` – Create a new post (auth required)

### Profile

- `GET /api/users/profile` – Get current user profile and their posts

---

## 🧪 How to Run Locally

### 1. Clone the repo


git clone https://github.com/your-username/linkedin-lite.git
cd linkedin-lite

**Setup Backend**

cd backend
npm install
touch .env

**add to env**

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

**Setup Frontend**

cd ../frontend
npm install
npm run dev


