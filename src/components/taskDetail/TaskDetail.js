import React from "react";
import {Modal, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {completeTask, editTask, selectCurrentTask, unselectTask} from "../../data/taskSlice";

const TaskDetail = () => {
  const dispatch = useDispatch();
  const selectedTask = useSelector(selectCurrentTask);

  const showModal = selectedTask !== null;
  const taskStatus = selectedTask?.status === true ? 'completed' : 'pendant';

  const handleClose = () => dispatch(unselectTask());
  const handleComplete = () => {
    dispatch(completeTask());
    dispatch(editTask());
    handleClose();
  };

  return (
    <div>
      {selectedTask &&
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Task Detail</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Task #{selectedTask.uuid}</p>
            <p>{selectedTask.title}</p>
            <p>Status: {taskStatus}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={handleComplete}>
              Complete
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </div>
  );
}

export default TaskDetail;