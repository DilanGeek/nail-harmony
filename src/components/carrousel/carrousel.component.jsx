import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

class Carrousel extends React.Component {
  render() {
    return (
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={true}
        showThumbs={false}
        useKeyboardArrows={true}
      >
        <div>
          <img
            alt=""
            height="700"
            src={
              require(`../../assets/img/models/GEL-HM-10243-0H2A7484-med.jpg`)
                .default
            }
          />
        </div>
        <div>
          <img
            alt=""
            height="700"
            src={
              require(`../../assets/img/models/GEL-HM-10243-0H2A7945-med.jpg`)
                .default
            }
          />
        </div>
        <div>
          <img
            alt=""
            height="700"
            src={
              require(`../../assets/img/models/GEL-HM-10243-0H2A8089-med.jpg`)
                .default
            }
          />
        </div>
      </Carousel>
    );
  }
}

export default Carrousel;
