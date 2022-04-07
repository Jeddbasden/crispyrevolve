import { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";

const LoginFormModal = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
        <i onClick={() => setModal(true)} className="fas fa-sign-in-alt"></i>
      {modal && (
        <div>
          <Modal onClose={() => setModal(false)}>
            <LoginForm setModal={setModal} />
          </Modal>
        </div>
      )}
    </div>
  );
};

export default LoginFormModal;
