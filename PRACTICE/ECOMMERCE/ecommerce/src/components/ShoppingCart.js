import {
  shoppingInitialState,
  shoppingReducer,
} from "../reduces/shoppingReduce";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const {}
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <article className="box">
        <h3>Carrito</h3>
      </article>
      <article className="box"></article>
    </div>
  );
};

export default ShoppingCart;
