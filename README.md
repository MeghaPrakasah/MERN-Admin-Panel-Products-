# MERN Admin Panel

## 📌 Project Overview
This is a **MERN stack-based Admin Panel** that allows users to manage products. Users can **add, edit, delete, and view** products, with proper form validation on both frontend and backend.

## 🛠️ Tech Stack
- **Frontend:** React, Bootstrap
- **Backend:** Node.js, Express.js, MongoDB
- **Validation:** express-validator

## 📂 Folder Structure
```
mern-admin-panel/
│-- backend/
│   │-- models/
│   │   └── Product.js
│   │-- routes/
│   │   └── productRoutes.js
│   │-- server.js
│   │-- .env
│-- frontend/
│   │-- src/
│   │   ├── components/
│   │   │   ├── ProductForm.js
│   │   │   ├── ProductList.js
│   │   ├── api.js
│   │   ├── App.js
│   │-- public/
│   │-- index.js
│-- README.md
```

---

## 🚀 Installation & Setup

### 🔹 Prerequisites
- **Node.js** installed
- **MongoDB** running locally or on a cloud database

### 🔹 Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install express mongoose dotenv cors express-validator
   ```
3. Create a `.env` file in `backend/` with:
   ```sh
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the server:
   ```sh
   node server.js
   ```
   Backend runs on **port 5000**.

### 🔹 Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install react-bootstrap axios
   ```
3. Start React app:
   ```sh
   npm start
   ```
   Frontend runs on **port 3000**.

---

## 🎯 Features
✔ **Add, Edit, Delete Products**
✔ **Form Validations** (Title, Subtitle, Price, Rating)
✔ **Bootstrap UI** for a clean look
✔ **MERN Stack** (MongoDB, Express, React, Node.js)

---

## 📌 API Routes

### 🟢 Get All Products
```http
GET /products
```

### 🟢 Add Product
```http
POST /products
```
**Body:**
```json
{
  "title": "Shoes",
  "subtitle": "Best quality",
  "price": 50,
  "rating": 4.5
}
```

### 🟡 Update Product
```http
PUT /products/:id
```

### 🔴 Delete Product
```http
DELETE /products/:id
```

---

## 🛠 Future Enhancements
- ✅ Authentication (Login / Register)
- ✅ Pagination
- ✅ Sorting & Filtering

---

## 🤝 Contributing
Feel free to contribute by submitting a **pull request**!

---

## 📜 License
This project is **MIT Licensed**.

---

### 🎉 Happy Coding! 🚀

