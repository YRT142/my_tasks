import { useState } from 'react';
import './App.css';

function App() {
const [tasks, setTasks] = useState([
{ id: 1, text: 'Reply to emails', time: '9:00 AM', status: 'todo', priority: false },
{ id: 2, text: 'Prepare presentation', time: '11:30 AM', status: 'todo', priority: false },
{ id: 3, text: 'Team stand-up', time: '1:00 PM', status: 'progress', priority: false },
{ id: 4, text: 'Review report', time: '3:30 PM', status: 'todo', priority: false },
{ id: 5, text: 'Workout', time: '7:00 AM', status: 'done', priority: true },
]);

const [activeTab, setActiveTab] = useState('all');
const [input, setInput] = useState('');
const [showInput, setShowInput] = useState(false);

const today = new Date().toLocaleDateString('en-US', {
month: 'long',
day: 'numeric',
year: 'numeric',
});

const filteredTasks = tasks.filter((task) => {
if (activeTab === 'all') return true;
if (activeTab === 'todo') return task.status === 'todo';
if (activeTab === 'progress') return task.status === 'progress';
if (activeTab === 'done') return task.status === 'done';
return true;
});

function addTask(event) {
  event.preventDefault();

  const text = input.trim();

  if (!text) return;

  const newTask = {
    id: crypto.randomUUID(),
    text,
    time: new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    }),
    status: 'todo',
    priority: false,
  };

  setTasks((previousTasks) => [...previousTasks, newTask]);

  setInput('');
  setShowInput(false);
  setActiveTab('all');
}

function toggleTask(id) {
setTasks((previousTasks) =>
previousTasks.map((task) =>
task.id === id
? {
...task,
status: task.status === 'done' ? 'todo' : 'done',
}
: task
)
);
}

function togglePriority(id) {
setTasks((previousTasks) =>
previousTasks.map((task) =>
task.id === id
? { ...task, priority: !task.priority }
: task
)
);
}

function deleteTask(id) {
setTasks((previousTasks) =>
previousTasks.filter((task) => task.id !== id)
);
}

return ( <main className="page"> <section className="todo-app"> <header className="top-bar"> <button className="icon-button menu-button" aria-label="Menu"> <svg viewBox="0 0 24 24" aria-hidden="true"> <path d="M4 6h16M4 12h16M4 18h16" /> </svg> </button>

      <button
        className="icon-button more-button"
        aria-label="More options"
        onClick={() => {
          if (window.confirm('Delete all tasks?')) {
            setTasks([]);
          }
        }}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="5" cy="12" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="19" cy="12" r="1.5" />
        </svg>
      </button>
    </header>

    <div className="heading">
      <h1>My Tasks</h1>
      <p>{today}</p>
    </div>

    <nav className="tabs" aria-label="Filter tasks">
      {[
        { id: 'all', label: 'All' },
        { id: 'todo', label: 'To Do' },
        { id: 'progress', label: 'In Progress' },
        { id: 'done', label: 'Done' },
      ].map((tab) => (
        <button
          key={tab.id}
          className={`tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>

    <div className="task-list">
      {filteredTasks.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">✓</div>
          <h3>All clear!</h3>
          <p>No tasks here. Enjoy the breathing room.</p>
        </div>
      ) : (
        filteredTasks.map((task) => (
          <article
            className={`task-card ${task.status === 'done' ? 'is-done' : ''}`}
            key={task.id}
          >
            <button
              className={`check-button ${task.status === 'done' ? 'checked' : ''}`}
              onClick={() => toggleTask(task.id)}
              aria-label={
                task.status === 'done'
                  ? 'Mark task incomplete'
                  : 'Mark task complete'
              }
            >
              {task.status === 'done' && (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m5 12 4 4L19 6" />
                </svg>
              )}
            </button>

            <button
              className="task-content"
              onClick={() => {
                if (task.status !== 'done') {
                  setTasks((previousTasks) =>
                    previousTasks.map((item) =>
                      item.id === task.id
                        ? {
                            ...item,
                            status:
                              item.status === 'progress'
                                ? 'todo'
                                : 'progress',
                          }
                        : item
                    )
                  );
                }
              }}
              aria-label={`Change status of ${task.text}`}
            >
              <span className="task-title">{task.text}</span>

              <span className="task-time">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                {task.time}
                {task.status === 'progress' && (
                  <span className="progress-label">In Progress</span>
                )}
              </span>
            </button>

            <button
              className={`flag-button ${task.priority ? 'priority' : ''}`}
              onClick={() => togglePriority(task.id)}
              aria-label={
                task.priority
                  ? 'Remove priority'
                  : 'Mark as priority'
              }
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 21V4m0 1c5-4 9 4 14 0v12c-5 4-9-4-14 0" />
              </svg>
            </button>

            <button
              className="delete-task"
              onClick={() => deleteTask(task.id)}
              aria-label={`Delete ${task.text}`}
            >
              ×
            </button>
          </article>
        ))
      )}
    </div>

    {showInput ? (
      <form className="add-task-form" onSubmit={addTask}>
        <input
          autoFocus
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="What do you need to do?"
          aria-label="New task"
        />

        <button type="submit" className="save-button">
          Add
        </button>

        <button
          type="button"
          className="cancel-button"
          onClick={() => {
            setShowInput(false);
            setInput('');
          }}
        >
          ×
        </button>
      </form>
    ) : (
      <button
        className="add-task-trigger"
        onClick={() => setShowInput(true)}
      >
        <span className="plus-icon">+</span>
        <span>Add a new task...</span>
      </button>
    )}

    <footer className="app-footer">
      {tasks.filter((task) => task.status === 'done').length} of{' '}
      {tasks.length} tasks completed
    </footer>
  </section>
</main>

);
}

export default App;
