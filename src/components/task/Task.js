import {Col} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {selectTask} from "../../data/taskSlice";

const Task = ({uuid, title, completed}) => {
  const dispatch = useDispatch();
  const completedText = completed === true ? 'Completed' : 'Pendant';

  return (
    <Col sm={6}>
      <span onClick={() => dispatch(selectTask(uuid))}>
        Task #{uuid} {title} - {completedText}
      </span>
    </Col>
  );
}

export default Task;