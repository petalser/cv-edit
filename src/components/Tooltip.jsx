import "../styles/Tooltip.css";
const Tooltip = ({ setter }) => {
  return (
    <div className="c-tooltip">
      <p className="c-text-upper">
        <span className="faded">H</span>OVER HERE!
      </p>

      <button
        className="symbol close"
        onClick={() => {
          setter(false);
        }}
      >
        &times;
      </button>
      <p className="symbol arrow">&lt;</p>
      <p className="c-text-lower">
        Hover over left border of screen to see tools
      </p>
    </div>
  );
};

export default Tooltip;
