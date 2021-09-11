import React from "react";
import "./homepage.styles.scss";
import "./homepage.styles.scss";

// components
import Carrousel from "../../components/carrousel/carrousel.component";
import ProductsComponent from "../../components/products/products.component";

const HomePage = () => (
  <div className="homepage">
    <Carrousel />

    <div>
      <h4>SEE OUR COLORS</h4>
    </div>

    <ProductsComponent finder={false} />
  </div>
);

export default HomePage;
