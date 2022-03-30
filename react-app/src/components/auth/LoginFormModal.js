import { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";

const LoginFormModal = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <i onClick={() => {
        console.log("!!!!!! SET MODAL !!!!!", modal)
        setModal(true)
        console.log("!!!!!! SET MODAL !!!!!", modal)
      }} className="fas fa-sign-in-alt"></i>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <LoginForm setModal={setModal} />
        </Modal>
      )}
    </div>
  );
};

export default LoginFormModal;
