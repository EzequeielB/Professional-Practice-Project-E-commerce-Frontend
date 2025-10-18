import React from "react";
import ProductRow from "../../shared/components/ProductRow/ProductRow";
import ImageSlider from "../../shared/components/ImageSlideShow/ImageSlider";
import { imgsBanner, products, urlsBanner } from "./config";

const Home = () => {
  return (
    <>
      <ImageSlider
        imgs={imgsBanner}
        urls={urlsBanner}
        showIndicator={true}
        banner={true}
      />
      <ProductRow products={products} />
    </>
  );
};

export default Home;
