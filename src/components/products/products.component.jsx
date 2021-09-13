import React from "react";
import "./products.styles.scss";

class ProductsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      sections: [
        {
          sku: "1110365",
          name: "Tell Her She's Stellar",
          imageUrl: "GEL-W-H-19-1110365-TellHerShesStellar.jpg",
        },
        {
          sku: "1110373",
          name: "Copper Dream",
          imageUrl: "GEL-W-H-19-1110373-CopperDream.jpg",
        },
        {
          sku: "1110367",
          name: "Sprinkle of Twinkle",
          imageUrl: "GEL-W-H-19-1110367-SprinkleofTwinkle.jpg",
        },
        {
          sku: "1110368",
          name: "A Starry Sigh",
          imageUrl: "GEL-W-H-19-1110368-AStarrySight.jpg",
        },
      ],
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
            width="120"
            className="center"
            height="400"
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
