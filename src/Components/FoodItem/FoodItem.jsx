import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./FoodItem.css";
import { FcGlobe } from "react-icons/fc";
import { FaTags } from "react-icons/fa";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { SiIfood } from "react-icons/si";

const FoodItem = ({ food }) => {
  const { strArea, strMeal, strMealThumb, strTags, strYoutube } = food;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>
            <p>
              <FcGlobe /> - {strArea}
            </p>
            <p>
              <FaTags /> - {strTags ? strTags : "Not Available"}
            </p>
          </Card.Text>
        </Card.Body>
              <div className="flex">
              <a href={strYoutube} className="w-50 btn btn-primary">
              <BsFillPlayCircleFill />
            </a>
            <Button variant="success" className="w-50">
              <SiIfood />
            </Button>
           </div>
      </Card>
    </Col>
  );
};

export default FoodItem;
