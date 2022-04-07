import { useState } from "react";
import { Modal } from "../../context/Modal";
import EditVideoPage from ".";
import { ButtonTwo } from "../StyledComponents/Button-style";

const EditVideoPageModal = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <ButtonTwo onClick={() => setModal(true)}>
        <i onClick={() => setModal(true)} className="fas fa-edit"></i>
      </ButtonTwo>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <EditVideoPage setModal={setModal} />
        </Modal>
      )}
    </div>
  );
};

export default EditVideoPageModal;
