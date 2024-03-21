import { Modal, Button } from "react-bootstrap";
import { useState, useEffect, useCallback } from "react";

const ModalComp = ({ show, onHide, dataProps, modalType }) => {
  const [contentBody, setContentBody] = useState(null);

  const renderContent = useCallback(
    async (prop) => {
      let module;
      switch (modalType) {
        case "static":
          module = await import("../utils/editStatic");
          return module.default(prop);
        case "dynamic":
          module = await import("../utils/editDynamic");
          return module.default(prop);
        case "json":
          module = await import("../utils/editJSON");
          return module.default(prop);
        default:
          throw new Error(`Requested type does not exist`);
      }
    },
    [modalType]
  );

  useEffect(() => {
    renderContent(dataProps).then((res) => setContentBody(res));
  }, [dataProps, renderContent]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          {modalType === "json" ? "Edit JSON" : "Edit module"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{contentBody}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary">Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComp;
