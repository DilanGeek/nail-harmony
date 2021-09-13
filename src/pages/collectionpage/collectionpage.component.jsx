import React from "react";

// components
import ProductsComponent from "../../components/products/products.component";

const CollectionPage = () => (
  <div className="collentionPage">
    <ProductsComponent finder={true} />
  </div>
);

export default CollectionPage;
