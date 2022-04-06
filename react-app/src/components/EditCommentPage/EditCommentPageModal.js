import { useState } from "react";
import { Modal } from "../../context/Modal";
import EditCommentPage from ".";
import { ButtonTwo } from "../StyledComponents/Button-style";

const EditCommentPageModal = () => {
  const [modal, setModal] = useState(false);
  return (
    <ButtonTwo>
      <i onClick={() => setModal(true)} className="fas fa-edit"></i>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <EditCommentPage setModal={setModal} />
        </Modal>
      )}
    </ButtonTwo>
  );
};

export default EditCommentPageModal;
