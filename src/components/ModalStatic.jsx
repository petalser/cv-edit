import { Modal, Button } from "react-bootstrap";

const ModalStatic = ({ show, onHide, id, modalType }) => {
  console.log("modal static fired");
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          {/* {modalType === "json" ? "Edit JSON" : "Edit module"} */}
          Title
        </Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary">Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalStatic;
