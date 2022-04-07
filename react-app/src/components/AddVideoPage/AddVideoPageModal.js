import { useState } from "react";
import { Modal } from "../../context/Modal";
import AddVideoPage from ".";
import "./AddVideoPage.css"
import { Button } from "../StyledComponents/Button-style";

const AddVideoPageModal = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setModal(true)}>
        Add Video
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
