import { Button } from "react-bootstrap";
import CartItem from "../components/CartItem";
import { usePizzasContext } from "../context/PizzasContext";

export default function Cart() {
  const { cart, totalCart } = usePizzasContext();

  return (
    <div className="cart-container container overflow-hidden">
      <h3 className="text-start my-4 text-light">Detalle del pedido</h3>
      <hr className="text-light mb-5" />
      <ul className="list-group">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        {cart.length === 0 && (
          <li className="list-group-item text-center">
            <b>Tu Carrito esta vacío</b>
          </li>
        )}

        <li className="list-group-item list-group-item-action active text-start ps-4">
          <b className="fs-5">Total: ${totalCart().toLocaleString("de-DE")}</b>
          <Button className="btn btn-success ms-3">Ir a Pagar</Button>
        </li>
      </ul>
    </div>
  );
}