import React, { useState } from "react";
import { useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";

const CarouselPanel = () => {
  const photos = useSelector((state) => state.photo.photos);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="bg-dark">
      {Object.keys(photos).map(([k]) => (
        <Carousel.Item>
          <img
            src={photos[k].urls?.regular}
            className="d- offset-4"
            alt={photos[k].alt_description}
            width={500}
            height={500}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselPanel;
