🧠 INTRODUCTION

Intelligent Code Snippet Search application that helps developers quickly search, discover, and reuse code snippets, enhanced with AI-powered suggestions for better relevance and productivity.

✨ FEATURES

Search code snippets using keywords

Store and retrieve snippets from MongoDB

AI-powered suggestions to improve search accuracy

Fast search using indexed database queries

Clean REST API architecture

Simple and intuitive user interface

🛠 TECH STACK

Frontend

React.js

TailwindCSS

Axios API

Backend

Node.js

Express.js

Nodemon

Express Router

Database

MongoDB

Mongoose

AI Integration

OpenAI API

🏗️ ARCHITECTURE OVERVIEW
flowchart LR
    U[User / Developer] -->|Search Query| FE[Frontend - React.js]
    
    FE -->|Axios REST API| BE[Backend - Node.js + Express.js]
    
    BE -->|Query Snippets| DB[(MongoDB)]
    
    DB -->|Matched Snippets| BE
    
    BE -->|Contextual Prompt| AI[OpenAI API]
    
    AI -->|AI Suggestions| BE
    
    BE -->|Combined Results| FE
    
    FE -->|Display Snippets + AI Suggestions| U


🧑‍💻 LOCAL INSTALLATION & SETUP

⚠️ Make sure to set up the .env file.
.env file must contain MONGO_URI, OPENAI_API_KEY, and PORT
Kindly note: If you want to run on your own backend, update the API base URL in the frontend accordingly.

cd backend        # Move to backend folder
npm install       # Install required dependencies
node server.js    # Start backend server on specified PORT in .env file (http://localhost:PORT)

cd ..             # Move back to root folder
cd frontend       # Move to frontend folder
npm install       # Install required dependencies
npm start         # Start frontend on port 3000 (http://localhost:3000)

📝 DESCRIPTION

Users can search for code snippets using keywords.

The backend retrieves relevant snippets from MongoDB using optimized queries.

AI integration enhances search results by providing contextual suggestions.

Snippets are displayed with relevant details such as title, language, and code.

The system is designed to be fast, simple, and developer-friendly.
