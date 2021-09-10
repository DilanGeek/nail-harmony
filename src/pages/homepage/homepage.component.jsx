import React from "react";
import "./homepage.styles.scss";
// import Directory from "../../components/directory/directory.component";
import Carrousel from "../../components/carrousel/carrousel.component";
// import Footer from "../../components/footer/footer.component";

const HomePage = () => (
  <div className="homepage">
    {/* <Directory /> */}
    <Carrousel />
    {/* <Footer /> */}
  </div>
);

export default HomePage;
