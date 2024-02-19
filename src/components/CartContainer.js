import { clearCart } from "../features/cart/cartSlice";
import CartItem from "./CartItem";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">Your Bag is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
            <button onClick={() => dispatch(openModal())} className="btn">
              Check out
            </button>
          </h4>
        </div>
        <button onClick={() => dispatch(clearCart())} className="btn clear-btn">
          clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
