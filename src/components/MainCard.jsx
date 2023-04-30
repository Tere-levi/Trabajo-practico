import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { usePizzasContext } from "../context/PizzasContext";

export default function MainCard({ item }) {
  const { addPizza } = usePizzasContext();

  return (
    <Card
      className="text-start m-1 col-12 col-md-6 col-xl-3 p-0 overflow-hidden"
      style={{ width: "18rem" }}
    >
      <Card.Img variant="top" className="img-fluid" src={item.img} />
      <Card.Body className="m-0">
        <Card.Title className="alert alert-warning text-dark fs-3 mt-0 mb-1">
          {item.name}
        </Card.Title>
        <Card.Text>
          <div className="alert alert-warning text-dark mb-1">
            <h5>Ingredientes:</h5>
            {item.ingredients.map((ingredient) => (
              <div key={ingredient}>🍕 {ingredient}</div>
            ))}
          </div>
          <h6 className="alert alert-primary text-center">
            Precio: ${item.price}
          </h6>
        </Card.Text>

        <div className="text-center">
          <NavLink
            to={`/pizzas/${item.id}`}
            className="btn btn-sm btn-primary m-2"
          >
            Ver detalles
          </NavLink>
          <NavLink
            to="/cart"
            className="btn btn-sm btn-danger m-2"
            onClick={() => addPizza(item)}
          >
            Comprar
          </NavLink>
        </div>
      </Card.Body>
    </Card>
  );
}