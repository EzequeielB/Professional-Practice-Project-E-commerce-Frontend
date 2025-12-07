import React, { useEffect, useState } from "react";
import ProductRow from "../../shared/components/ProductRow/ProductRow";
import ImageSlider from "../../shared/components/ImageSlideShow/ImageSlider";
import { imgsBanner, urlsBanner } from "./config";
import { useProducts } from "../../hooks/useProducts";

const Home = () => {
  const { list, error } = useProducts();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await list();
      const normalized = data.map((p) => {
        const price = Number(p.unit_price);
        const offerPercent = Number(p.offer);

        const hasDiscount = offerPercent > 0;
        const discountPrice = hasDiscount
          ? price - (price * offerPercent) / 100
          : price;

        return {
          id: p.id,
          url: `/product/${p.id}`,
          img: p.images?.[0]?.url || "https://via.placeholder.com/300",
          product: p.name,
          price: `$${discountPrice.toLocaleString("es-AR")}`,
          nQuotas: "6",
          quotas: `$${(discountPrice / 6).toLocaleString("es-AR")}`,
          discount: hasDiscount ? `$${price.toLocaleString("es-AR")}` : null,
          offerPercent: hasDiscount ? `${offerPercent}% OFF` : null,
        };
      });

      setProducts(normalized);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <ImageSlider
        imgs={imgsBanner}
        urls={urlsBanner}
        showIndicator={true}
        banner={true}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ProductRow products={products} />
    </>
  );
};

export default Home;
