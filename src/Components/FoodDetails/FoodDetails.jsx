import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FcHome } from "react-icons/fc";

const FoodDetails = () => {
  const { foodId } = useParams();
  const [singleItem, setSingleItem] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => setSingleItem(json.meals[0]));
  }, [foodId]);
  console.log(singleItem);
  return (
    <div>
      <Container>
        <Card className="my-5 mx-auto" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={singleItem?.strMealThumb} />
          <Card.Body>
                      <Card.Title>{ singleItem.strMeal}</Card.Title>
            <Card.Text>
              <strong>Instructions: </strong>{singleItem.strInstructions}
            </Card.Text>
            <Link to={'/foodrecipe'}><Button variant="primary">Go<FcHome className="ms-2"/> </Button></Link>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default FoodDetails;
