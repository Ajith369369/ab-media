# AB Media

## Getting Started

Please note that I did not use APIs to populate the MongoDB database. Instead, I used a seeding script to insert the initial data directly into the database for testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v20 or higher)
- **MongoDB** (local or cloud via MongoDB Atlas)

---

### Installation

```bash
git clone https://github.com/Ajith369369/ab-media.git
cd ab-media
cd ab-backend
npm install
cd ..
cd ab-frontend
npm install
```

---

### Environment Variables

Create a `.env` file in the root directory (/ab-backend/.env). There's already an `env.example` file. Change it to `.env`:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
```

Replace the values with your actual credentials or secrets.

---

### Run the Server

```bash
cd ab-backend
npm start
```

Your server will start on `http://localhost:8000`.

---

### Run the Frontend

```bash
cd ab-frontend
npm run dev
```
