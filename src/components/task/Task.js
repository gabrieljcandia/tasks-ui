import {Col} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {selectTask} from "../../data/taskSlice";
import styles from "./Task.module.css";

const Task = ({uuid, title}) => {
  const dispatch = useDispatch();

  return (
    <Col sm={6}>
      <div className={styles.task} onClick={() => dispatch(selectTask(uuid))}>
        <p className={styles.title}>
          Task #{uuid}
        </p>
        <p className={styles.body}>
          {title}
        </p>
      </div>
    </Col>
  );
}

export default Task;