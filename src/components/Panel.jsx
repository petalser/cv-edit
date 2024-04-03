import { Button, ButtonGroup } from "react-bootstrap";
import Save2PDFButton from "./Save2PDFButton";
import { signalData } from "../signals/data";
import { modalType } from "../signals/states";

const Panel = () => {
  return (
    <ButtonGroup className="position-absolute" vertical>
      <Save2PDFButton />
      <Button
        variant="secondary"
        onClick={() => {
          modalType.value = "json";
        }}
      >
        Edit JSON
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          navigator.clipboard.writeText(JSON.stringify(signalData.value));
        }}
      >
        Clipboard JSON
      </Button>
    </ButtonGroup>
  );
};

export default Panel;
