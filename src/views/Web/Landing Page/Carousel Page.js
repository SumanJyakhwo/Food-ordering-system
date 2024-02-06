import React, { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

import foods from '../Data For App/foods';
import { useNavigate } from 'react-router-dom';

function Carouselcomponent(args) {

  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(1);
  const [animating, setAnimating] = useState(false);

  const [items, setItems] = useState([]);

  useEffect(()=>{
    const mainFoods = foods.filter(fd => fd.topRated=='true');
    console.log("main foods", mainFoods)
    setItems(mainFoods)
  }, [])



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

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const handleImgClick = (code) => {
    navigate(`/admin/viewdetails/${code}`);
  }
  
  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <img
          src={item.img}
          alt='alt text'
          style={{ width: '100%', height: '55vh', objectFit: 'cover' }}
          onClick={() => handleImgClick(item.code)}
        />
        <div className="carousel-caption">
          <p onClick={() => handleImgClick(item.code)} className='bg-primary' style={{ fontSize: "48px", fontWeight: 'bolder' }}>{item.name}</p>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
      className='mx-auto'
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carouselcomponent;
