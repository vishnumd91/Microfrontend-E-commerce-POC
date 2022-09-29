import React from "react";
import imagePath from "./first.jpg";
import imagePath2 from "./second.jpg";

const Carousel = () => {
  return (
    <div>
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" className="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              //className="d-block w-100"
              src="https://cdn.pocket-lint.com/r/s/970x/assets/images/146077-phones-deals-apple-iphone-xr-deals-image1-d8bu5e41vf.jpg"
              style={{ height: "400px"/* marginLeft:"342px" */,width:"100%" }}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              //className="d-block w-50"
              src="https://beebom.com/wp-content/uploads/2020/10/Apple-foldable-device-feat-1.jpg"
              style={{ height: "400px",width:"100%" }}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              //className="d-block w-100"
              src="https://th.bing.com/th/id/R.9f1872cc6e33eca9089cefd67d22bf9f?rik=3T%2fluPS3vFSALw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-15Zqijz3gus%2fT9_sVY_m-TI%2fAAAAAAAAEzY%2fnNZZ33CQnGI%2fs1600%2fApple_iPhone_4.jpg&ehk=llQTPhVlhTKfT5JELjCte5Bsmz49pfpSFvdyI14%2b%2fdo%3d&risl=&pid=ImgRaw&r=0"
              style={{ height: "400px" ,width:"100%"}}
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
