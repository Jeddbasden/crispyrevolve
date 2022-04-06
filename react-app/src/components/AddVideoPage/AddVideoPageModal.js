import { useState } from "react";
import { Modal } from "../../context/Modal";
import AddVideoPage from ".";
import "./AddVideoPage.css"
import { Button } from "../StyledComponents/Button-style";

const AddVideoPageModal = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setModal(!modal)}>
        <i
          onClick={() => setModal(!modal)}
          className="fa-solid fa-square-plus"
        ></i>
      </Button>
      {modal && (
        <Modal onClose={() => setModal(!modal)}>
          <AddVideoPage setModal={setModal} />
        </Modal>
      )}
    </div>
  );
};

export default AddVideoPageModal;
