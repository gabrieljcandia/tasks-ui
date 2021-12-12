import React from 'react';
import TaskListView from "./components/taskListView/TaskListView";
import TaskDetail from "./components/taskDetail/TaskDetail";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.main}>
      <TaskListView/>
      <TaskDetail/>
    </div>
  );
}

export default App;
