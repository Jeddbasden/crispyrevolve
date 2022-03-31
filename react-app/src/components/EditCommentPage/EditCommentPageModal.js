import { useState } from "react";
import { Modal } from "../../context/Modal";
import EditCommentPage from ".";

const EditCommentPageModal = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <i onClick={() => setModal(!modal)} className="fas fa-edit"></i>
      {modal && (
        <Modal onClose={() => setModal(!modal)}>
          <EditCommentPage setModal={setModal} />
        </Modal>
      )}
    </div>
  );
};

export default EditCommentPageModal;
