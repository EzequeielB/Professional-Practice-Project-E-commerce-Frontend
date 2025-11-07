import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router"; 
import { ROUTES } from "../../Router/routesConfig"; 
import { useParams } from "react-router";
import ImageSlider from "../../shared/components/ImageSlideShow/ImageSlider";
import { useProducts } from "../../hooks/useProducts";
import { useCart } from "../../hooks/useCart";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../../redux/features/cart/cartSlice";
import styles from "./ShopDisplay.module.css";

const ShopDisplay = () => {
  const { id } = useParams();
  const { getById, error: productError } = useProducts();
  const { list, create, update, error: cartError } = useCart();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [selectedUnique, setSelectedUnique] = useState(null);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const data = await getById(id);
      if (data) {
        setProduct(data);
        if (data.uniqueProducts?.length) {
          setSelectedUnique(data.uniqueProducts[0].id);
        }
      }
    };
    fetch();
  }, [id]);

  if (!product) return <p>Cargando producto...</p>;
  if (productError) return <p>Error: {productError}</p>;

  const formatPrice = (value) =>
    `$${Number(value || 0).toLocaleString("es-AR", { maximumFractionDigits: 0 })}`;

const getCurrentPrice = () => {
  const variant = product.uniqueProducts?.find((u) => u.id === selectedUnique);
  return variant?.unit_price ?? product.unit_price ?? 0;
};

  const selectedStock =
    product.uniqueProducts?.find((u) => u.id === selectedUnique)?.stock?.count ?? 0;

  const handleAddToCart = async () => {
    if (!auth?.token) {
      navigate(ROUTES.LOGIN);
      return;
    }

    try {
      setCreating(true);
      const userId = auth?.decode?.id ? Number(auth.decode.id) : null;

      const carts = await list();
      const existingCart = Array.isArray(carts)
        ? carts.find((c) => c.usuario?.id === userId)
        : null;

      const newItem = { id_uniqueProduct: selectedUnique, units: cantidad };

      if (!existingCart) {
        const payload = { user: userId, items: [newItem] };
        const newCart = await create(payload);
        dispatch(setCart(newCart));
      } else {
        const updatedItems = [
          ...existingCart.items
            .filter((i) => i.uniqueProduct.id !== selectedUnique)
            .map((i) => ({
              id_uniqueProduct: i.uniqueProduct.id,
              units: i.units,
            })),
          newItem,
        ];

        const payload = { user: userId, items: updatedItems };
        const updatedCart = await update(existingCart.id, payload);
        dispatch(setCart(updatedCart));
      }
    } catch (e) {
      console.error(e);
    } finally {
      setCreating(false);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <ImageSlider
          imgs={product.images?.map((img) => img.url) || []}
          showIndicator
        />
      </div>

      <div className={styles.rightSection}>
        <h1 className={styles.title}>{product.name}</h1>

        <p className={styles.price}>{formatPrice(getCurrentPrice())}</p>

        <p className={styles.installments}>
          6 cuotas sin interés de {formatPrice(Math.round(getCurrentPrice() / 6))}
        </p>

        <p className={styles.description}>{product.description}</p>

        <div className={styles.uniqueSelector}>
          <label>Selecciona variante:</label>
          <select
            value={selectedUnique || ""}
            onChange={(e) => setSelectedUnique(Number(e.target.value))}
          >
            {product.uniqueProducts?.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name} (Stock: {u.stock?.count ?? 0})
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formSection}>
          <label>Cantidad:</label>
          <div className={styles.counter}>
            <button
              onClick={() => setCantidad((n) => Math.max(1, n - 1))}
              disabled={cantidad <= 1}
            >
              -
            </button>
            <span>{cantidad}</span>
            <button
              onClick={() => setCantidad((n) => Math.min(selectedStock, n + 1))}
              disabled={cantidad >= selectedStock}
            >
              +
            </button>
          </div>
          <p>Stock disponible: {selectedStock}</p>
          <button
            onClick={handleAddToCart}
            disabled={selectedStock === 0 || creating}
            className={styles.addToCart}
          >
            {creating
              ? "Procesando..."
              : `Agregar al carrito — Subtotal: ${formatPrice(getCurrentPrice() * cantidad)}`}
          </button>
          {cartError && <p style={{ color: "red" }}>{cartError}</p>}
        </div>
      </div>
    </div>
  );
};

export default ShopDisplay;
