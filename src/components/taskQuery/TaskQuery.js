import {useDispatch} from "react-redux";
import {getTasks} from "../../data/taskSlice";
import {useState} from "react";
import {Form, Button, Col, Row} from "react-bootstrap";

const TaskQuery = () => {
  const [taskCount, setTaskCount] = useState(3);
  const dispatch = useDispatch();

  const handleTaskCountChange = (e) => setTaskCount(parseInt(e.target.value));
  const handleShowTasks = () => dispatch(getTasks({quantity: taskCount}))

  return (
    <Col sm={6}>
      <Form>
        <Row>

          <Form.Group as={Row}>
            <Form.Label column>Tasks to show</Form.Label>
            <Col>
              <Form.Control type="number" value={taskCount} onChange={handleTaskCountChange}/>
            </Col>
          </Form.Group>

          <Button onClick={handleShowTasks}>
            Show tasks
          </Button>

        </Row>
      </Form>
    </Col>
  );
}

export default TaskQuery;
