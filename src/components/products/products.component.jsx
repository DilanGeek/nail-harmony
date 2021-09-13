import React from "react";
import "./products.styles.scss";

class ProductsComponent extends React.Component {
  componentDidMount() {
    const apiUrl = "http://localhost/nailaliancePHP/api/product_color.php";
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ sections: data });
      });
  }

  constructor(props) {
    super(props);

    this.state = {
      search: "",
      sections: [],
    };
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    let filteredSections = this.state.sections.filter((product) => {
      return (
        product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1 || product.sku.indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    let input;
    if (this.props.finder) {
      input = (
        <div>
          <input
            type="text"
            id="product"
            name="product"
            placeholder="Search Product"
            value={this.state.search}
            onChange={this.handleChange.bind(this)}
          />
        </div>
      );
    }

    let products = filteredSections.map(({ imageUrl, sku, name }) => {
      return (
        <div className="column">
          <img
            alt=""
            className="center imageStyle"
            src={require(`../../assets/img/bottles/${imageUrl}`).default}
          />
          <div className="center">
            <h4>{sku}</h4>
            <h3 style={{ textAlign: "center" }}>{name}</h3>
          </div>
        </div>
      );
    });

    return (
      <div>
        {input}

        <div id="products">
          <div className="row">
            {products.length > 0 ? products : <div>Data not found!!</div>}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsComponent;
