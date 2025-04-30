# Portfolio API

A collection of RESTful APIs built with Node.js, Express, and MongoDB that showcase different functionalities:

- **Todo API**: Manage a simple todo list with CRUD operations
- **Humor API**: Store and retrieve humor entries with moderation capabilities
- **Contact API**: Handle contact form submissions with email notifications

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Email**: Nodemailer
- **Other**: CORS for cross-origin requests

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB (local or remote)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd Portfolio-API
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure environment variables:
   - Create a `config` folder with your email configuration for the contact API

4. Start the server:
   ```
   npm start
   ```

The server will run on port 4000 by default.

## API Documentation

### Todo API

Endpoint: `/todo`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/todo/` | Get all todos, sorted by most recent |
| POST   | `/todo/` | Create a new todo |
| PATCH  | `/todo/:id` | Update a specific todo by ID |
| DELETE | `/todo/:id` | Delete a specific todo by ID |

#### Request/Response Examples:

**Get all todos**
```
GET /todo/
```
Response:
```json
{
  "todos": [
    {
      "id": "1234567890",
      "text": "Complete project documentation"
    },
    ...
  ]
}
```

**Create todo**
```
POST /todo/
```
Body:
```json
{
  "text": "New todo item"
}
```
Response:
```json
{
  "message": "Added todo successfully!",
  "createdTodo": {
    "id": "1234567890",
    "text": "New todo item"
  }
}
```

### Humor API

Endpoint: `/humor`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/humor/` | Get all pending humor entries |
| GET    | `/humor/all` | Get all humor entries |
| GET    | `/humor/random` | Get a random humor entry |
| POST   | `/humor/new/add-humor` | Submit a new humor entry |
| POST   | `/humor/store/:id` | Approve a pending humor entry |
| DELETE | `/humor/delete/pending/:id` | Delete a pending humor entry |

#### Request/Response Examples:

**Get random humor**
```
GET /humor/random
```
Response:
```json
{
  "humor": "Why don't programmers like nature? It has too many bugs."
}
```

**Add new humor**
```
POST /humor/new/add-humor
```
Body:
```json
{
  "title": "Why don't programmers like nature? It has too many bugs."
}
```
Response:
```json
{
  "message": "Humor added successfully!"
}
```

### Contact API

Endpoint: `/contact-us`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/contact-us` | Submit a contact form message |

#### Request/Response Example:

**Submit contact form**
```
POST /contact-us
```
Body:
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'd like to discuss a potential project.",
  "sendTo": "your-email@example.com"
}
```
Response:
```json
{
  "message": "Message sent successfully!",
  "status": "success"
}
```

## Project Structure

```
Portfolio-API/
│
├── app.js                  # Entry point
├── package.json            # Dependencies and scripts
│
├── config/                 # Configuration files
│   └── mailer.js           # Email configuration
│
├── controllers/            # Route handlers
│   ├── contact.controller.js
│   ├── humor.controller.js
│   └── todo.controller.js
│
├── data/                   # Database connection
│   └── database.js
│
├── middlewares/            # Custom middleware
│   └── error-handler.js
│
├── models/                 # Database models
│   ├── humor.model.js
│   └── todo.model.js
│
├── public/                 # Static files
│
├── routes/                 # API routes
│   ├── contact.routes.js
│   ├── humor.routes.js
│   └── todo.routes.js
│
└── views/                  # EJS templates
```

## License

ISC

## Author

DevChi
