# ✨ My Tasks — React To-Do List

A clean, minimal, and responsive task management web application built with **React and Vite**. Organize your day, track your progress, prioritize important tasks, and stay productive with a simple, distraction-free interface.

## 📸 Preview

<!-- Add a screenshot of your application here -->

<!-- Save your screenshot as screenshots/todo-preview.png -->

![My Tasks Preview](screenshots/todo-preview.png)

## 🚀 Features

* **➕ Add Tasks:** Quickly create tasks with a simple input interface.
* **✅ Task Completion:** Mark tasks as completed with a visual checkmark and strikethrough effect.
* **📋 Task Filtering:** Filter tasks by All, To Do, In Progress, and Done.
* **🚩 Priority Management:** Mark important tasks with priority flags.
* **🗑️ Delete Tasks:** Remove individual tasks when they are no longer needed.
* **📊 Progress Tracking:** View the total number of tasks and completed tasks.
* **📱 Responsive Design:** Works across desktop, tablet, and mobile screen sizes.
* **🎨 Minimal UI:** Clean typography, rounded task cards, subtle borders, and a modern layout.

## 🛠️ Tech Stack

| Technology        | Purpose                                 |
| ----------------- | --------------------------------------- |
| React             | Building the user interface             |
| JavaScript (ES6+) | Application logic                       |
| Vite              | Development server and build tooling    |
| CSS3              | Styling and responsive layouts          |
| Git & GitHub      | Version control and source code hosting |

## 📂 Project Structure

```text
react-todo-list/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

*Your actual folder structure may differ slightly depending on your Vite setup.*

## ⚙️ Getting Started

Follow these steps to run the project locally.

### Prerequisites

Install the following:

* [Node.js](https://nodejs.org/) — preferably an active LTS release.
* npm — included with Node.js.
* [Git](https://git-scm.com/) — optional if you download the project as a ZIP.

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/react-todo-list.git
```

Replace `YOUR_USERNAME` with your GitHub username and use your actual repository name.

### 2. Navigate to the Project

```bash
cd react-todo-list
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Application

Open the local URL displayed in your terminal. With the default Vite configuration, it is usually:

```text
http://localhost:5173/
```

You're ready to start managing your tasks!

## 💻 Available Commands

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Starts the local development server   |
| `npm run build`   | Creates an optimized production build |
| `npm run preview` | Previews the production build locally |

## 🧠 How It Works

The application uses React's `useState` hook to manage tasks and interface interactions.

* **Task creation:** New tasks are added to the task array.
* **Status updates:** Tasks can be marked as completed or moved between To Do and In Progress.
* **Filtering:** The selected tab determines which tasks are displayed.
* **Priority:** Each task can be flagged or unflagged.
* **Deletion:** Individual tasks can be removed from the list.

The application currently uses in-memory React state. Tasks reset to the initial sample list when the page is refreshed; persistent storage has not yet been implemented.

## 🔮 Future Improvements

Potential features for future versions include:

* [ ] Save tasks using `localStorage`.
* [ ] Add task editing functionality.
* [ ] Add due dates and reminders.
* [ ] Implement drag-and-drop task ordering.
* [ ] Add search and sorting.
* [ ] Add dark mode.
* [ ] Integrate a backend and database for persistent storage.
* [ ] Deploy the application publicly.

## 🤝 Contributing

Contributions, suggestions, and bug reports are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Commit your changes.
5. Open a pull request.

## 📄 License

This project is available for learning and personal use. Add an explicit license, such as the MIT License, if you want to grant others formal permission to use, modify, and distribute your code.

---

<p align="center">
  Built with ❤️ using React and Vite
</p>
