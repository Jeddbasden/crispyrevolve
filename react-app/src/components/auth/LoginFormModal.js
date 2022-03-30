import { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";

const LoginFormModal = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
        <i onClick={() => setModal(!modal)} className="fas fa-sign-in-alt"></i>
      {modal && (
        <Modal onClose={() => setModal(!modal)}>
          <LoginForm setModal={setModal} />
        </Modal>
      )}
    </div>
  );
};

export default LoginFormModal;
