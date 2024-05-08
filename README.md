# 📊 Maxi Kanban Board

This is a sample project of a Kanban board developed using Angular. This board allows users to manage tasks using the Kanban method, which involves visualizing the workflow in columns (To Do, In Progress, and Done).

### 🎒 Features

- **➕ Task creation**: Users can create new tasks and assign them to different columns on the board.
- **🧒 Sub task creation**: Create sub tasks related to a parent task.
- **🔄 Drag and Drop**: Drag and drop functionality allows users to move tasks between columns to reflect their progress.
- **🕋 Data persistence**: NGRX and ngrx-store-persist are used to to persistently store tasks in the user's browser.
- **🌙 Dark / Light mode**: Users can switch betweeen dark and light mode.

### 🌎 Live

**You can visit [fernandoox.github.io/maxi-kanban/](https://fernandoox.github.io/maxi-kanban/) to view the demo**
### 📸 Screenshots

- App
  ![image](https://github.com/fernandoox/maxi-kanban/assets/43055981/5a43a0cb-2dc6-43a5-b54a-ebeab2c5d23e)
  ![image](https://github.com/fernandoox/maxi-kanban/assets/43055981/390f9205-f5d9-4474-80c3-a7f957973292)
  ![image](https://github.com/fernandoox/maxi-kanban/assets/43055981/a79bf6de-f000-4f52-83ef-089eef82d1c6)

- Unit Tests
![image](https://github.com/fernandoox/maxi-kanban/assets/43055981/09f22ad2-1304-44f3-950c-0d4ac2b2078e)

### ⚙️ Installation

1. Clone this repository to your local machine using Git:

   ```bash
   git clone https://github.com/fernandoox/maxi-kanban.git
   ```

2. Navigate to the project directory:

   ```bash
   cd maxi-kanban
   ```

3. Install dependencies using npm:

   ```bash
   npm install
   ```

### 🚀 Usage

1. Start the application by running the following command:

   ```bash
   ng serve
   ```

2. Open your web browser and navigate to `http://localhost:4200/`.

3. Explore the Kanban board! You can create new tasks, drag them between columns.

### 📦️ Dependencies

The project utilizes the following dependencies and tools:

- **@ngrx/store**: A state management library that implements the Redux pattern in Angular.
- **@ngrx/store-devtools**: Development tools for debugging and visualizing the state of the Angular application.
- **angular-cli-ghpages**: A tool for deploying the Angular application to GitHub Pages easily.
- **Jasmine and Karma**: Testing tools used to write and execute unit tests in the Angular application.

You can refer to the `package.json` file for more details about the specific versions used.

### 🫂 Contribution

If you would like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/name-feat`).
3. Make your changes and commit them (`git commit -am 'feat(scope): description'`).
4. Push to the branch (`git push origin feature/name-feat`).
5. Create a new Pull Request following the **PULL_REQUEST_TEMPLATE.md**.

### 📧 Contact

If you have any questions or suggestions, feel free to contact the development team at [luis.fernan.fz@gmail.com](mailto:email@example.com).
