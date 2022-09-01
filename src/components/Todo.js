import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteHandler = () => {
    setModalIsOpen(true);
  };

  const closeHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="container mx-auto card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeHandler} onConfirm={closeHandler} />}
      {modalIsOpen && <Backdrop onClick={closeHandler} />}
    </div>
  );
};

export default Todo;
