import Save2PDFButton from "./Save2PDFButton";
import { signalData } from "../signals/data";
import { isModalEnabled } from "../signals/states";
import "../styles/Panel.css";

const Panel = () => {
  return (
    <aside className="sidebar">
      <Save2PDFButton name={signalData.value.name.value} />
      <button className="btn text-light">Edit JSON</button>
      <button
        className="btn text-light"
        onClick={() => (isModalEnabled.value = true)}
      >
        Show
      </button>
    </aside>
  );
};

export default Panel;
