import { Modal, Button } from "react-bootstrap";
import { signalData } from "../signals/data";
import { useState } from "react";

const ModalStatic = ({ show, onHide, id, modalType }) => {
  //chunk of global data object
  const dataChunk = signalData.value[id];

  const [data, setData] = useState({ ...dataChunk });

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          {modalType === "json" ? "Edit JSON" : "Edit module"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            {Object.keys(dataChunk).map((item, index) => (
              <label
                htmlFor={item}
                className="form-label d-flex justify-content-end"
                key={index}
              >
                {data[item].description}
              </label>
            ))}
          </div>
          <div className="col">
            {Object.keys(dataChunk).map((item, index) => (
              <input
                type="text"
                id={item}
                className="form-control"
                value={data[item].value}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    [item]: { ...prev[item], value: e.target.value },
                  }))
                }
                key={index}
              />
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            signalData.value = { ...signalData.value, [id]: data };
            onHide();
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalStatic;
