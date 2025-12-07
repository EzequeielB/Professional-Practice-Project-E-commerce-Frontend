
import React from "react";
import { useCart } from "../../../hooks/useCart";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ROUTES } from "../../../Router/routesConfig";
import { setCart, clearCart } from "../../../redux/features/cart/cartSlice";
import styles from "./CartDropdown.module.css";

const CartDropdown = () => {
  const { update, remove } = useCart();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const cart = useSelector((state) => state.cart.cart);
  const auth = useSelector((state) => state.auth);

  const formatPrice = (value) =>
    `$${Number(value).toLocaleString("es-AR", { maximumFractionDigits: 0 })}`;

  if (!cart || !cart.items?.length) {
    return (
      <div className={styles.cartDropdown}>
        <h3>🛒 Carrito (0)</h3>
        <p>Tu carrito está vacío</p>
      </div>
    );
  }

  const handleRemoveItem = async (uniqueProductId) => {
    const userId = auth?.decode?.id ? Number(auth.decode.id) : null;
    const updatedItems = cart.items
      .filter((i) => i.uniqueProduct.id !== uniqueProductId)
      .map((i) => ({
        id_uniqueProduct: i.uniqueProduct.id,
        units: i.units,
      }));

    if (updatedItems.length === 0) {
      await remove(cart.id);
      dispatch(clearCart()); 
    } else {
      const payload = { user: userId, items: updatedItems };
      const updatedCart = await update(cart.id, payload);
      dispatch(setCart(updatedCart));
    }
  };

  return (
    <div className={styles.cartDropdown}>
      <h3>🛒 Carrito ({cart.items.length})</h3>
      <ul className={styles.cartList}>
        {cart.items.map((item) => (
          <li key={item.id} className={styles.cartItem}>
            <img
              src={item.uniqueProduct?.product?.images?.[0]?.url}
              alt={item.uniqueProduct?.name}
              className={styles.cartImage}
            />
            <div className={styles.cartInfo}>
              <p>{item.uniqueProduct?.name}</p>
              <p>{item.units} x {formatPrice(item.unit_price)}</p>
              <p className={styles.subtotal}>
                Subtotal: {formatPrice(item.subtotal)}
              </p>
            </div>
            <button
              className={styles.removeBtn}
              onClick={() => handleRemoveItem(item.uniqueProduct.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.cartFooter}>
        <p className={styles.total}>
          Total: {formatPrice(cart.items.reduce((acc, i) => acc + Number(i.subtotal), 0))}
        </p>
        <button
          className={styles.checkoutBtn}
          onClick={() => navigate(ROUTES.CHECKOUT)}
        >
          Ir a pagar
        </button>
      </div>
    </div>
  );
};

export default CartDropdown;
