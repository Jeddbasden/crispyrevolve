import { useState } from "react";
import { Modal } from "../../context/Modal";
import SignUpForm from "./SignUpForm";

const SignupFormModal = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <i onClick={() => setModal(true)} className="fas fa-user-plus"></i>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <SignUpForm setModal={setModal} />
        </Modal>
      )}
    </div>
  );
};

export default SignupFormModal;
