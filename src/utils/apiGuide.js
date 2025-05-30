export const apiGuide = `
🌟 Welcome to Quote Canvas API guide 🌟

📌 Base URL: https://quotecanvas-backend.onrender.com/

📁 STEP 2: Prefix all routes with
└─ 👉 /api/v1

🧭 Example:
└─ GET https://quotecanvas-backend.onrender.com/api/v1/quotes


📂 AUTH ROUTES
├─ 🔐 POST   /auth/login         - Login user
├─ 📝 POST   /auth/register      - Register user
└─ 🚪 POST   /auth/logout        - Logout user

📂 QUOTE ROUTES
├─ 📚 GET    /quotes             - Get all quotes (auth required)
├─ 🌍 GET    /quotes/all         - Get all public quotes
├─ 🔍 GET    /quotes/:id         - Get quote by ID (auth required)
├─ ➕ POST   /quotes             - Create new quote (auth required)
├─ ✏️ PUT    /quotes/:id         - Update a quote (auth required)
└─ ❌ DELETE /quotes/:id         - Delete a quote (auth required)

📂 USER ROUTES
├─ 👥 GET    /users              - Get all users (auth required)
└─ 🧍 GET    /users/:id          - Get user by ID (auth required)

🛡️ TOKEN ROUTE
└─ 🔑 GET    /verifytoken        - Verify auth token

🧭 Quick Tip:
Use Authorization header with Bearer token for protected routes.

✨ Happy Building!

👨‍💻 Author: Subhadeep Das
📩 Email: sd535682@gmail.com
`;
