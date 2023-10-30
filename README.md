# Draggable_TaskBoard


Draggable Task Board is a web application that allows users to manage tasks through a draggable task board. Users can create multiple lists, drag tasks between lists, mark tasks as completed, and more. The application is built using Node.js, Express, React, and PostgreSQL with Sequelize.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication with secure password storage.
- Creation of multiple task lists.
- Drag-and-drop functionality for moving tasks between lists.
- Horizontal scrolling for multiple lists.
- Mark tasks as completed, removing them from the list.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sukanya-2000/Draggable_TaskBoard.git
   ```

2. Install dependencies:

   ```bash
   cd draggable-task-board
   npm install
   cd client
   npm install
   ```

3. Set up your PostgreSQL database and update the configuration in `server/config/config.json`.

4. Run the application:

   ```bash
   npm run dev
   ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to access the application.

## Usage

- Register and log in to access the task board.
- Create multiple lists and add tasks to them.
- Use drag-and-drop to move tasks between lists.
- Mark tasks as completed to remove them from the list.

## Technologies Used

- Node.js
- Express
- React
- PostgreSQL
- Sequelize
- HTML5 (for drag-and-drop)
- bcrypt (for password hashing)
- CORS (Cross-Origin Resource Sharing)

## Folder Structure

- **client**: Contains the React frontend code.
- **server**: Contains the Node.js backend code.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

Remember to replace placeholders like `your-username` and update URLs and paths based on your actual project details. This README provides a starting point, and you can expand or modify it as needed.
