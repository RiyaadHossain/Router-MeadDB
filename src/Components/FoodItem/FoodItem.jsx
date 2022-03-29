import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './FoodItem.css'

const FoodItem = ({ food }) => {
    const {/* strArea, idMeal, */ strMeal, strMealThumb} = food
    return (
        
    <Col>
      <Card>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    );
};

export default FoodItem;