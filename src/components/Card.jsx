import { Card, Button } from "react-bootstrap";
import { useState } from "react";

const CardComponent = ({ content, handleClick }) => {
  const handleClickWrapper = (e) => {
    if (e.target.tagName === "A") {
      e.preventDefault();
      return;
    }
    handleClick();
  };

  return (
    <Card className="col" onClick={(e) => handleClickWrapper(e)}>
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
