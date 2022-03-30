import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputGroup,
  Button,
  Container,
  Row,
} from "react-bootstrap";
import FoodItem from "../FoodItem/FoodItem";

const FoodRecipe = () => {
  const [text, setText] = useState("");
  const [foods, setFoods] = useState([]);
  const searchFood = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, [text]);
  return (
    <div className="my-5">
      <Container>
        <InputGroup className="mb-5">
          <FormControl
            onChange={searchFood}
            placeholder="I want to Eat ... 🍫"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="info" id="button-addon2">
            I'm Humgry
          </Button>
        </InputGroup>
        <Row xs={1} md={2} lg={3} className="g-4">
          {foods
            ? foods.map((food) => <FoodItem key={food.idMeal} food={food} />)
            : "Nothing Here 🙄"}
        </Row>
      </Container>
    </div>
  );
};

export default FoodRecipe;
