import { useState, useEffect } from "react";
import MainCard from "../components/MainCard";
import Loading from "../components/Loading";

export default function Pizzas() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getPizzas = async () => {
    setLoading(true);
    try {
      const res = await fetch("pizzas.json");
      if (!res.ok) setError(true);
      const data = await res.json();
      setPizzas(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getPizzas();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>Error: Pizza no encontrada</div>;

  return (
    <div>
      <div className="row text-center">
        {pizzas.map((item) => {
          return <MainCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}