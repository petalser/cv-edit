import { Card, Button } from "react-bootstrap";
import { useState } from "react";

const CardComponent = ({ content, isExported, handleClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered((prev) => !prev);
  };
  const handleClickWrapper = (tagName) => {
    if (tagName === "A") {
      e.preventDefault();
      return;
    }
    handleClick();
  };

  return (
    <Card
      className="col"
      style={{ border: `3px solid ${isHovered ? "black" : "transparent"}` }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={(e) => handleClickWrapper(e.target.tagName)}
    >
      <Card.Body>
        <Card.Title>{content.title.value}</Card.Title>
        <Card.Text>{content.subtitle.value}</Card.Text>
        <Card.Link href={content.link.value} target="_blank">
          Link
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
