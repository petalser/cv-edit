import { Modal, Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { signalData } from "../signals/data";
import { useState, useEffect } from "react";

const ModalDynamic = ({ show, onHide, id }) => {
  //chunk of global data object
  const dataChunk = signalData.value[id].values;
  const [firstPlaceholder, secondPlaceholder] =
    signalData.value[id].placeholders;

  const [data, setData] = useState([...dataChunk]);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const [valueOne, valueTwo] = data[data.length - 1];
    setIsDisabled(valueOne || valueTwo ? false : true);
  }, [data]);

  const handleAddItem = () => {
    const updatedValue = [...data];
    updatedValue.push(["", ""]);
    setData(updatedValue);
  };

  const handleRemove = (index) => {
    const updatedValue = data.filter((_, i) => i != index);
    setData(updatedValue);
  };

  const handleChange = (indexOne, indexTwo, value) => {
    const updatedValue = [...data];
    updatedValue[indexOne][indexTwo] = value;
    setData(updatedValue);
  };

  const handleSave = () => {
    signalData.value[id].values = data;
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit module</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            {data.map((item, index) => (
              <div key={index} className="d-flex align-items-center mb-2">
                <input
                  type="text"
                  placeholder={firstPlaceholder}
                  value={item[0]}
                  onChange={(e) => handleChange(index, 0, e.target.value)}
                  className="form-control me-2"
                />
                <input
                  type="text"
                  placeholder={secondPlaceholder}
                  value={item[1]}
                  onChange={(e) => handleChange(index, 1, e.target.value)}
                  className="form-control me-2"
                />
                <Button variant="warning" onClick={() => handleRemove(index)}>
                  <Trash />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleAddItem} disabled={isDisabled}>
          New Item
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleSave();
            onHide();
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDynamic;
