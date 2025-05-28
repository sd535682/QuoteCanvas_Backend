# Quote Canvas Backend 📜✨

_Craft Quotes, Keep Memories with QuoteCanvas!_

## 🌟 Overview

**QuoteCanvas Backend** is the Backend server powering the Quote Canvas app! 🚀

## 🎥 App in Action

https://quotecanvas-backend.onrender.com

https://quotecanvas-backend.onrender.com/api/v1/quotes/all

and many more...

## 🛠️ Tech Stack

- **Express JS** ⚛️: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **JavaScript** 📜: A versatile programming language used for building dynamic and interactive web content.
- **MongoDB** 🗄️: A NoSQL database that provides high performance, high availability, and easy scalability.
- **BCrypt JS** 🔐: A library for hashing passwords, ensuring secure storage of user credentials.
- **JSON Webtoken** 🔑: A compact, URL-safe means of representing claims to be transferred between two parties, used for securely transmitting information as a JSON object.


## 📋 Prerequisites

To run **QuoteCanvas Backend** locally, ensure you have the following installed:

- **Node.js** (v16 or higher) 🟢
- A code editor like **VS Code** 🖥️.

## 🚀 Getting Started

Follow these steps to set up and run **QuoteCanvas** locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/sd535682/QuoteCanvas_Backend.git
   cd QuoteCanvas_Backend
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:

   ```bash
   npm run dev
   ```


## 💾 FrontEnd

To set up the frontend, please visit - https://github.com/sd535682/QuoteCanvas

## 📂 Project Structure

Here’s the structure of the **QuoteCanvas** repository, with details on key files and their usage:

```
QuoteCanvas/
├── src/                    # main source directory
│   ├── config              # Environment Configs
│   ├── controllers         # API functions
│   ├── database            # MongoDB connection
│   ├── middlewares         # Middlewares for auth verification
│   ├── models              # Mongoose model Schema
│   ├── routes              # API routes
│   ├── utils               # Pagination
│   ├── app.hs              # entry point
|
├── package.json            # Project dependencies and scripts 📦
├── README.md               # This file! 📖
```

## ⚙️ Config setup

create .env.development.local in root dir
```
# PORT
PORT = 

# Database Connection
MONGODB_URI = ""

# JWT
JWT_SECRET = ""
JWT_EXPIRES_IN = ""

```


## 📜 License

This project is licensed under the GNU GENERAL PUBLIC LICENSE Version 3.0. See the LICENSE file for details (consider adding a `LICENSE` file to your repo).

## 🌐 Connect

- **Author**: Subhadeep Das (@sd535682) 👨‍💻
- **Email**: sd535682@gmail.com 📧
- **GitHub**: https://github.com/sd535682 ⭐
- **Project Link**: https://github.com/sd535682/QuoteCanvas_Backend 🔗

> **Star this repo** if you love spreading inspiration with **QuoteCanvas**! ⭐ Let’s make the world a more positive place! 😊
