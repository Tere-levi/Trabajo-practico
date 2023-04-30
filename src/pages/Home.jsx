import Pizzas from "../pages/Pizzas";

export default function Home() {
  return (
    <>
      <div className="main-hero bg-light">
        <div className="hero-container">
          <img
            src="https://images.unsplash.com/photo-1559183533-ee5f4826d3db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2254&q=80" 
            alt=""
            className="hero-img"
          />
        </div>
        <div className="hero-text">
          <h1 className="display-3">
            <b>¡Pizzeria Mamma Mia!</b>
          </h1>
          <p className="text-center">
            <b>¡Tenemos las mejores pizzas que podrás imaginar!</b>
          </p>
          <hr />
        </div>
      </div>

      <div className="m-5">
        <Pizzas />
      </div>
    </>
  );
}