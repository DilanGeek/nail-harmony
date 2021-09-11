import React from "react";
import "./products.styles.scss";

class ProductsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

  render() {
    const handleChange = (e) => {
      let value = e.target.value;
      const product = this.state.sections.filter((product) =>
        product.sku.includes(value)
      );

      if (product.length > 0) {
        // this.state.sections = [];
        // this.state.sections = [...product];
      }
    };

    let input;
    if (this.props.finder) {
      input = (
        <div>
          <input
            type="text"
            id="product"
            name="product"
            placeholder="Search Product"
            onChange={handleChange}
          />
        </div>
      );
    }

    let products = this.state.sections.map(({ imageUrl, sku, name }) => {
      return (
        <div class="column">
          <img
            alt=""
            width="120"
            className="center"
            height="400"
            src={require(`../../assets/img/bottles/${imageUrl}`).default}
          />
          <div class="center">
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
          <div class="row">{products}</div>
        </div>
      </div>
    );
  }
}

export default ProductsComponent;
