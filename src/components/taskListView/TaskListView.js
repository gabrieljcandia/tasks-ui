import {Container, Row} from "react-bootstrap";
import React from "react";
import Task from "../task/Task";
import {useSelector} from "react-redux";
import {selectTasks} from "../../data/taskSlice";

const TaskListView = () => {
  const tasks = useSelector(selectTasks);

  return (
    <Container>
      <Row>
        {tasks.map(task => (
          <Task
            key={task.uuid}
            uuid={task.uuid}
            title={task.title}
            completed={task.completed}
          />
        ))}
      </Row>
    </Container>
  );
}

export default TaskListView;