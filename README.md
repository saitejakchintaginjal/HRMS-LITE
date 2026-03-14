# HRMS Lite

A Full-Stack Human Resource Management System built with:

- FastAPI (Backend)
- React + Vite (Frontend)
- MongoDB (Database)
- Railway (Backend Deployment)
- Netlify (Frontend Deployment)

---

## 🚀 Live project demo

- Frontend : https://hrms-lite-application.netlify.app/
- Backend : https://hrms-lite-production-8edf.up.railway.app/docs

---

## Features

### 👨‍💼 Employee Management

- Add Employee
- Edit Employee
- Delete Employee
- Form Validation

### 📅 Attendance Management

- Mark Attendance
- Edit Attendance
- Delete Attendance
- Daily Attendance Stats

### 📊 Dashboard

- Total Employees
- Total Attendance Records
- Present Count (Current Date)
- Attendance Rate

---

## Project Structure

```
HRMS-lite/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── routes/
│   │   │   ├── employee.py
│   │   │   ├── attendance.py
│   │   ├── models/
│   │   └── __init__.py
│   │
│   ├── requirements.txt
│   ├── Procfile
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Employees.jsx
│   │   │   ├── Attendance.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── employeeApi.js
│   │   │   ├── attendanceApi.js
│   │   │
│   │   ├── components/
│   │   │   ├── Layout.jsx
│   │   │   ├── StatCard.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│
└── README.md
```

---

## Backend Setup

### 1️⃣ Go to backend folder

```
cd backend
```

### 2️⃣ Create virtual environment

```
python3 -m venv venv
source venv/bin/activate # Mac/Linux
venv\Scripts\activate # Windows
```

### 3️⃣ Install dependencies

```
pip3 install -r requirements.txt
```

### 4️⃣ Add Environment Variable

Create `.env` file:

```
MONGO_URL=your_mongodb_connection_string
```

### 5️⃣ Run server

```
uvicorn app.main:app --reload
```

---

## Frontend Setup

### 1️⃣ Go to frontend folder

```
cd frontend
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Start development server

```
npm run dev
```

## Tech Stack

- FastAPI
- React
- MongoDB
- Redux Toolkit Query
- Tailwind CSS
