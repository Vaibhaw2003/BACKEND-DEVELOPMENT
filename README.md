# MERN Backend

A backend application built using the MERN stack technologies, providing RESTful APIs, server-side logic, middleware, and database connectivity.

## 🚀 Tech Stack

- **Node.js** — JavaScript runtime
- **Express.js** — Backend web framework
- **MongoDB** — NoSQL database
- **Mongoose** — MongoDB object modeling
- **JWT (JSON Web Token)** — Authentication
- **bcryptjs** — Password hashing
- **dotenv** — Environment variable management
- **CORS** — Cross-Origin Resource Sharing

## 📁 Project Structure

```text
backend/
├── config/
│   └── db.js
├── controllers/
│   └── authController.js
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

> The structure above is a suggested structure. Adjust it to match your actual project files.

## ⚙️ Prerequisites

Install the following before running the project:

- Node.js and npm
- MongoDB locally or a MongoDB Atlas account
- Visual Studio Code or another code editor
- Postman for API testing (optional)

## 📥 Installation

**1. Clone the repository**

```bash
git clone <YOUR_REPOSITORY_URL>
```

**2. Navigate to the backend directory**

```bash
cd backend
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create a `.env` file in the root of the backend directory.

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mern_db
JWT_SECRET=replace_with_a_long_random_secret
```

Replace the MongoDB connection string with your actual database URI if you use MongoDB Atlas.

Never commit your `.env` file or expose your JWT secret.

## ▶️ Run the Application

Start the server:

```bash
node server.js
```

For automatic restarts during development, if your project has Nodemon installed:

```bash
npx nodemon server.js
```

If your `package.json` includes the appropriate scripts, you can also use:

```bash
npm run dev
```

or:

```bash
npm start
```

The server will run at:

```text
http://localhost:5000
```

## 🔐 Middleware

Middleware processes requests before they reach the route handler.

Common middleware used in this project may include:

- **Authentication middleware:** Verifies JWT tokens.
- **Error-handling middleware:** Handles application errors.
- **JSON middleware:** Parses incoming JSON request bodies.
- **CORS middleware:** Configures cross-origin access.
- **Validation middleware:** Checks incoming request data.

Example:

```javascript
app.use(express.json());
```

## 🌐 API Endpoints

The following endpoints are examples. Update them to match your implemented routes.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check whether the server is running |
| POST | `/api/auth/register` | Register a user |
| POST | `/api/auth/login` | Log in a user |
| GET | `/api/auth/profile` | Get the authenticated user's profile |

### Example Request

**Register a user**

```http
POST /api/auth/register
Content-Type: application/json
```

Example JSON body:

```json
{
  "name": "Vaibhaw Singh",
  "email": "vaibhaw@example.com",
  "password": "your_test_password"
}
```

The actual response depends on your route and controller implementation.

## 🗄️ Database Configuration

This project uses MongoDB for data storage.

Example connection string for a local database:

```text
mongodb://127.0.0.1:27017/mern_db
```

Ensure MongoDB is running before starting the backend. For MongoDB Atlas, configure your cluster URI and database access permissions.

## 🧪 Testing

Use Postman or another API client to:

1. Send HTTP requests to your endpoints.
2. Test valid and invalid request bodies.
3. Verify authentication and authorization.
4. Check status codes and error responses.
5. Confirm database operations.

## 🔒 Security Best Practices

- Store credentials and secrets in environment variables.
- Hash passwords with bcrypt before saving them.
- Verify JWT signatures and expiration.
- Validate and sanitize user input.
- Configure CORS for trusted frontend origins.
- Never return password hashes in API responses.
- Use HTTPS in production.
- Keep dependencies updated.

## 🚀 Deployment

Before deploying:

1. Configure production environment variables.
2. Set up a MongoDB Atlas database or another hosted MongoDB instance.
3. Configure your frontend origin in CORS.
4. Add production start scripts.
5. Deploy to a Node.js hosting platform.
6. Test the deployed API endpoints.

## 👨‍💻 Author

**Vaibhaw Singh**

- GitHub: [Vaibhaw2003](https://github.com/Vaibhaw2003)
- LinkedIn: [Connect on LinkedIn](https://www.linkedin.com/in/05vaibhaw-singh/)

## 📄 License

This project is available for learning and development purposes. Add a specific license file if you intend to distribute it under a formal open-source license.
