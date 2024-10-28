# Todo DnD (Drag-and-Drop Todo App)

A sleek, interactive task management application built with React, featuring drag-and-drop functionality to help you organize tasks effortlessly. Save and retrieve tasks from local storage, update their status dynamically, and enjoy smooth, instant feedback using `react-hot-toast`.

## Features

- **Task Creation**: Add tasks with ease, including validation for task names (3–100 characters).
- **Drag-and-Drop**: Organize tasks into categories like "Todo", "In Progress", and "Complete" using a smooth drag-and-drop interface powered by `react-dnd`.
- **Real-time Feedback**: Visual notifications for actions such as task creation, status change, and deletion using `react-hot-toast`.
- **Local Storage Persistence**: Saves tasks in local storage to keep your progress even after a page refresh.

## Tech Stack

- **React**: Frontend library for building UI components
- **React DnD**: Drag-and-drop framework
- **React Hot Toast**: Toast notifications for smooth user feedback
- **UUID**: Generate unique IDs for tasks

## Live Demo

Check out the live version of the app here: [Vercel Link](https://todo-dnd-omega.vercel.app/)

## Installation

1. **Clone the repository:**

   ```bash
   https://github.com/AmanKumarWeb19/React_DnD.git
   
2. **Install dependencies:**
     npm install

3. **Run the app:**
     npm run dev

## Dependencies
1. **react**: Core React library
2. **react-dnd and react-dnd-html5-backend**: For drag-and-drop functionality
3. **react-hot-toast**: For notification toasts
4. **uuid**: To generate unique IDs for tasks   

## Components Overview
**App.jsx**
=> The main component that initializes tasks from local storage and manages state. It integrates all major components (CreateTask, ListTasks) and provides drag-and-drop backend support.

**CreateTask.jsx**
=> A form component that enables users to create new tasks with unique IDs, validates task names, and displays notifications on successful creation or validation errors.

## ListTasks.jsx
=> Organizes tasks based on their status ("Todo", "In Progress", "Complete") and maps them to their respective sections. Tasks can be dragged between sections to update their status, with each change saved to local storage.

## Section.jsx
=> A helper component within ListTasks.jsx that represents each section (Todo, In Progress, Complete) and handles the dropping of tasks to update status.

## Header.jsx
=> Displays the title and task count for each section, dynamically styled based on the section status.

## SingleTask.jsx
=> Renders individual tasks, enabling dragging, and includes a button for task deletion.

## Live Demo
You can view the live project at https://todo-dnd-omega.vercel.app/.

## Conclusion
This project is a fully functional Todo application with drag-and-drop capabilities, built using React. We hope this README helps you get started quickly. For any questions or contributions, feel free to reach out!





