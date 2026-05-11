# Connect with MongoDB

A clean, full-stack **Node.js + MongoDB** user management application with a modern responsive UI and a REST API.

## Features

- **Add users** via a sleek web form
- **View all users** in a modern list layout with avatars
- **Edit & Delete** users inline
- **Dark mode** toggle with persistent preference
- **REST API** at `/api/users` for CRUD operations
- **MongoDB** integration with Mongoose
- **Responsive design** — works on mobile and desktop

## Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Node.js, Express |
| Database | MongoDB, Mongoose |
| Templating | EJS |
| Styling | Custom CSS (no framework) |
| Dev Tool | Nodemon |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Ream111222333/connect-with-mongoDB.git
cd mongo-connect

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env and add your MongoDB URI
```

### Environment Variables

Create a `.env` file in the root:

```env
PORT=5500
MONGODB_URI=your_mongodb_connection_string
```

### Run the App

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

Visit: [http://localhost:5500](http://localhost:5500)

## Project Structure

```
mongo-connect/
├── config/
│   └── db.js              # MongoDB connection
├── controllers/
│   └── userController.js  # View + API logic
├── models/
│   └── User.js            # Mongoose schema
├── public/css/
│   └── style.css          # Global styles
├── routes/
│   ├── apiRoutes.js       # REST API routes
│   └── userRoutes.js      # View (HTML) routes
├── views/
│   ├── index.ejs          # Home / Add user page
│   └── users.ejs          # User list page
├── app.js                 # Express entry point
├── package.json
└── .env
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/users` | List all users |
| `GET` | `/api/users/:id` | Get a single user |
| `POST` | `/api/users` | Create a new user |
| `PUT` | `/api/users/:id` | Update a user |
| `DELETE` | `/api/users/:id` | Delete a user |

### Example Request

```bash
curl -X GET http://localhost:5500/api/users
```

### Example Response

```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "_id": "664f2e8c1d2a3b4c5d6e7f8a",
      "name": "Ream Khorn",
      "email": "reamkhorn@gmail.com"
    }
  ]
}
```

## Screenshots

| Home Page | Users List |
|-----------|------------|
| Add user form | Modern list with avatars & actions |

## License

This project is open-source and available under the [MIT License](LICENSE).

## Author

**Ream Khorn** — [@Ream111222333](https://github.com/Ream111222333)
