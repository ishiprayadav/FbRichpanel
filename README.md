# FB Helpdesk

This is a Proof of Concept (POC) application designed to provide a unified platform for managing Facebook Messenger messages. The application allows clients to connect their Facebook accounts, listen to their messenger messages, and reply to them within the application. The aim is to streamline communication for businesses receiving a large volume of messages by providing a user-friendly interface for managing conversations.

## Features
- User registration and authentication system.
- Ability to connect and manage Facebook pages.
- Real-time listening to messenger messages and processing them into the database.
- Conversation management where messages from one customer are grouped together.
- Agent interface for replying to messages.

## How It Works
1. Users can register for a new account and subsequently log in.
2. Users can manage their connected Facebook pages, including creating and deleting connections.
3. The application listens to messenger messages and organizes them into conversations.
4. Conversations are displayed in a user-friendly interface, allowing agents to reply to messages efficiently.

## Reference UI

### Login and Register
Clients use this screen to sign in or register their FB accounts.

![Login and Register](path/to/login-register.png)

### Connect Your FB Page
Clients manage their FB page connections through this screen.

![Connect Your FB Page](path/to/connect-page.png)

### Delete/Disconnect Page
Allows clients to disconnect their FB page from the application.

![Delete/Disconnect Page](path/to/delete-disconnect-page.png)

### Agent Screen
Agents interact with conversations and reply to messages through this interface.

![Agent Screen](path/to/agent-screen.png)


## Technologies Used
- React
- Vite
- Tailwind CSS
- Postgres
- Knex.js

## Getting Started
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up the database and configure environment variables.
4. Run the application using `npm start`.

