import "../styles/Panel.css";
const Panel = () => {
  return (
    <aside className="sidebar">
      <button className="btn text-light">Download</button>
      <button className="btn text-light">Edit JSON</button>
      <button className="btn text-light">Clipboard JSON</button>
    </aside>
  );
};

export default Panel;
