# FlashRemind

Welcome to **FlashRemind**! 👋

FlashRemind is a web-based flashcard application designed to help users create, manage, and review flashcards for effective learning and memory retention. The application allows users to sign up, log in, and manage their flashcard decks with ease.

---

## About

FlashRemind is built to provide a simple and effective tool for language learners and students to use digital flashcards for studying. Users can create an account, log in, and manage their personalized decks of flashcards. The application features secure user authentication and an intuitive user interface.

---

## Features

- **User registration and authentication** (Sign Up / Log In)
- **Create, edit, and delete flashcard decks**
- **Add, edit, and delete individual flashcards**
- **Simple, user-friendly interface**
- **Password encryption** for secure authentication

---

## Technologies Used

### Frontend:
- **React.js**: For building the user interface
- **CSS**: For styling the application

### Database:
- **JSON-Server**: For simulating a REST API with a local JSON file (development mode)

### Packages:
- **Axios**: For making HTTP requests to the backend
- **cryptojs**: For password hashing
- **React Router DOM**: For managing navigation within the app

---

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/flashremind.git
    cd flashremind
    ```

2. **Install the necessary dependencies**:
    ```bash
    cd dashboard
    npm install
    ```

3. **Install JSON-Server globally**:
    ```bash
    cd dashboard
    npm install -g json-server
    ```

---


## Setup

1. **Navigate to the dashboard directory** and start the JSON-Server to simulate the REST API:
    ```bash
    json-server --watch db.json --port 3001
    ```

2. **Start the React development server**:
    ```bash
    npm run start
    ```

---
## Routes
          

- Home "/"
- Create Category "/Createcategory/:userID"
- Categories "/Categories/:userID"
- Edit Category "/Categories/edit/:userID/:CategoryID" 
- Create Card "/Createcard/:userID/:CategoryID"
- Card "/card/:userID/:CategoryID"
- Edit Card "/card/edit/:userID/:CategoryID/:index"

## API Endpoints

http://localhost:3001/userData
http://localhost:3001/categories