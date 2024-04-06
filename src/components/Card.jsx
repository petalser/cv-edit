import { Card, Button } from "react-bootstrap";
import { useState } from "react";

const CardComponent = ({ content, isExported }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered((prev) => !prev);
  };
  const handleTransitionToUrl = () => {
    window.open(content.link.value, "_blank");
  };
  console.log(content);

  return (
    <Card
      className="col"
      style={{ border: `3px solid ${isHovered ? "black" : "transparent"}` }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <Card.Body>
        <Card.Title>{content.title.value}</Card.Title>
        <Card.Text>{content.subtitle.value}</Card.Text>
        {isExported || !isHovered ? (
          <Card.Link href={content.link.value}>Link</Card.Link>
        ) : (
          <Button variant="secondary" size="sm" onClick={handleTransitionToUrl}>
            Try link
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
