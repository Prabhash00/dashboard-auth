import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageCarousel() {
  const images = [
    "https://images.pexels.com/photos/8255381/pexels-photo-8255381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   
   
    "https://images.pexels.com/photos/6710912/pexels-photo-6710912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/31473380/pexels-photo-31473380/free-photo-of-charming-bedroom-with-garden-view-decor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6009424/pexels-photo-6009424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    "https://images.pexels.com/photos/6483115/pexels-photo-6483115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/21363471/pexels-photo-21363471/free-photo-of-sydney-opera-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/28626151/pexels-photo-28626151/free-photo-of-winter-landscape-snow-covered-park-with-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9045366/pexels-photo-9045366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div className="box">
      
      <Carousel useKeyboardArrows autoPlay interval={1500} infiniteLoop>
        {images.map((URL, index) => (
          <div className="slide" key={index}>
            <img alt="sample_file" src={URL} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
