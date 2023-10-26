import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function FormComponent() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const inputElementEmail = React.useRef("");
  const inputElementPassword = React.useRef("");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputElementPassword.current?.value === "") {
      alert("Fill Form Completely");
    } else {
      alert("Submitted Successfully");
      closeModal();
    }
  };
  return (
    <React.Fragment>
      <button className="btn btn-violet" onClick={openModal}>
        Bootstrap form
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <form className="w-100" onSubmit={handleSubmit}>
            <h5 class="modal-title my-3" id="exampleModalLabel">
              Bootstrap Forms
            </h5>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                ref={inputElementEmail}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                ref={inputElementPassword}
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </React.Fragment>
  );
}

export default FormComponent;
