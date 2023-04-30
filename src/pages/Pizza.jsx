import { useEffect, useState } from "react";
import { usePizzasContext } from "../context/PizzasContext";
import { useParams, NavLink } from "react-router-dom";

export default function Pizza() {
  const [pizza, setPizza] = useState();
  const [loading, setLoading] = useState(true);
  const { addPizza } = usePizzasContext();

  const params = useParams();

  useEffect(() => {
    setLoading(true);
    fetch("/pizzas.json")
      .then((response) => response.json())
      .then((data) => {
        const pizza = data.find((item) => item.id === params.id);
        setPizza(pizza);
      })
      .finally(() => setLoading(false));
  }, [params]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="card-detail card bg-light">
      <div className="row">
        <div className="col-md-4">
          <img
            src={pizza.img}
            className="img-fluid rounded-start h-100"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body text-start">
            <h5 className="fs-1">{pizza.name} </h5>
            <hr />
            <p className="card-text">{pizza.desc}</p>
            <p className="card-text">
              <small className="text-muted">
                <div className="alert alert-warning text-dark">
                  <h3>Ingredientes:</h3>
                  {pizza.ingredients.map((ingredient, index) => (
                    <div key={ingredient}>
                      🍕 {ingredient}
                      {pizza.ingredients.length !== index + 1 && ", "}
                    </div>
                  ))}
                </div>

                <h4 className="alert alert-primary text-center d-flex justify-content-between">
                  Precio: ${pizza.price}
                  <NavLink
                    className="btn btn-danger"
                    onClick={() => addPizza(pizza)}
                    to="/cart"
                  >
                    Añadir 🛒
                  </NavLink>
                </h4>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}