import { NavLink, Link } from "react-router-dom";
import { usePizzasContext } from "../context/PizzasContext";
import { formatPrice } from "../utils/formatPrice";

export default function Navbar() {
  const { totalCart } = usePizzasContext();

  return (
    <nav className="navbar fixed-top navbar-main bg-light p-0 horizontal-nav full-width horizontalNav-notprocessed">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="https://w7.pngwing.com/pngs/736/179/png-transparent-pizza-pizza-logo-pizza-icon-white-food-camera-icon-thumbnail.png"
            className="main-logo"
            alt=""
          />
        </Link>
        <NavLink className="btn btn-outline-info me-2" to="/cart">
          🛒 ${formatPrice(totalCart())}
        </NavLink>
      </div>
    </nav>
  );
}


