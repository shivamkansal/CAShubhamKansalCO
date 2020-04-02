import React from "react";

// reactstrap components
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";

import "../assets/css/demo.css";
// import "../assets/css/now-ui-kit.css";
// import "../assets/css/bootstrap.min.css";
// import "../assets/css/nucleo-icons-page-styles.css";

// core components
const items = [
  {
    src: require("../assets/img/1.png")
  },
  {
    src: require("../assets/img/2.1.jpg")
  },
  {
    src: require("../assets/img/3.jpg")
  }
];

function CarouselComponent() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {items.map(item => {
          return (
            <CarouselItem
              onExiting={onExiting}
              onExited={onExited}
              key={item.src}
            >
              <img className="shivam_carousel" src={item.src} alt={item.altText} />
              <div className="carousel-caption d-none d-md-block">
                <h5>{item.caption}</h5>
              </div>
            </CarouselItem>
          );
        })}
        <a
          className="carousel-control-prev"
          data-slide="prev"
          href="/"
          onClick={e => {
            e.preventDefault();
            previous();
          }}
          role="button"
        >
          <i className="fa fa-chevron-left fa-2x" />
        </a>
        <a
          className="carousel-control-next"
          data-slide="next"
          href="/"
          onClick={e => {
            e.preventDefault();
            next();
          }}
          role="button"
        >
          <i className="fa fa-chevron-right fa-2x" />
        </a>
      </Carousel>
    </>
  );
}

export default CarouselComponent;
