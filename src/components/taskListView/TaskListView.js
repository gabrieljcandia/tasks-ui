import {Container, Row} from "react-bootstrap";
import React from "react";
import Task from "../task/Task";
import {useSelector} from "react-redux";
import {selectTasks} from "../../data/taskSlice";
import TaskQuery from "../taskQuery/TaskQuery";
import styles from "./TaskListView.module.css"

const TaskListView = () => {
  const tasks = useSelector(selectTasks);
  const completedTasks = tasks.filter(task => task.completed);
  const pendantTasks = tasks.filter(task => !task.completed);

  return (
    <Container>
      <TaskQuery/>

      <TaskList
        tasks={pendantTasks}
        title={'Pendant tasks'}
      />

      <TaskList
        tasks={completedTasks}
        title={'Completed tasks'}
      />
    </Container>
  );
}

const TaskList = ({title, tasks}) => {
  return (
    <div>
      <Row>
        <span className={styles.title}>
          {title}
        </span>
      </Row>

      <Row>
        {tasks.map(task => (
          <Task
            key={task.uuid}
            uuid={task.uuid}
            title={task.title}
          />
        ))}
      </Row>
    </div>
  );
}

export default TaskListView;