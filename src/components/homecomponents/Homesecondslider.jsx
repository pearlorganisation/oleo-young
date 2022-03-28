import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import topsliderimage1 from "../../images/creame1.jpg"
import topsliderimage2 from "../../images/creame2.jpg"
import topsliderimage3 from "../../images/creame3.jpg"
import saleimage from "../../images/sale.png"

export default function Homesecondslider(){

    const sliderData = [
        {
          "id": 1,
          "productimage": topsliderimage1
        },
        {
          "id": 2,
          "productimage": topsliderimage2
        },
        {
          "id": 3,
          "productimage": topsliderimage3
        },
        {
          "id": 4,
          "productimage": topsliderimage1
        },
        {
          "id": 5,
          "productimage": topsliderimage2
        },
        {
          "id": 6,
          "productimage": topsliderimage3
        },
        {
          "id": 7,
          "productimage": topsliderimage1
        },
        {
          "id": 8,
          "productimage": topsliderimage2
        },
      ]
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 mx-auto">
                <h2 className="top-slider-heading2">
                    On The Horizon Team Buy!
                    </h2>
                <Carousel showArrows={true}
            //  autoPlay={true}
             infiniteLoop
             >

              <div>
                <div className="topslider-carousel-container">
                  {/* <div className="topslider-logo-display"> */}
                    {/* <figure className="topslider-figure">
                    <img src={saleimage} alt=".." className="topslider-logo" />
                    </figure> */}
                  {/* </div> */}
                  <div className="row">
                    {
                      sliderData.map((e) => {
                        return (
                          <>
                            <div className="col-md-3 carousel-image-div">
                              <figure className="carousel-figure">
                              <img src={e.productimage} alt="..." className="card-img-top top-slider-image p-1" />
                              </figure>
                                <div className="slider-btn-display">
                                <button class="btn topslider-btn">Free Delievery</button>
                                <button class="btn topslider-btn2">2 Team</button>
                                </div>
                               
                            </div>
                          </>
                        )
                      })
                    }
                  </div>

                </div>
              </div>

              <div>
                <div className="topslider-carousel-container">
                  {/* <div className="topslider-logo-display"> */}
                    {/* <figure className="topslider-figure">
                    <img src={saleimage} alt=".." className="topslider-logo" />
                    </figure> */}
                  {/* </div> */}
                  <div className="row">
                    {
                      sliderData.map((e) => {
                        return (
                          <>
                            <div className="col-md-3 carousel-image-div">
                              <figure className="carousel-figure">
                              <img src={e.productimage} alt="..." className="card-img-top top-slider-image p-1" />
                              </figure>
                                <div className="slider-btn-display">
                                <button class="btn topslider-btn">Free Delievery</button>
                                <button class="btn topslider-btn2">2 Team</button>
                                </div>
                               
                            </div>
                          </>
                        )
                      })
                    }
                  </div>

                </div>
              </div>

              <div>
                <div className="topslider-carousel-container">
                  {/* <div className="topslider-logo-display"> */}
                    {/* <figure className="topslider-figure">
                    <img src={saleimage} alt=".." className="topslider-logo" />
                    </figure> */}
                  {/* </div> */}
                  <div className="row">
                    {
                      sliderData.map((e) => {
                        return (
                          <>
                            <div className="col-md-3 carousel-image-div">
                              <figure className="carousel-figure">
                              <img src={e.productimage} alt="..." className="card-img-top top-slider-image p-1" />
                              </figure>
                                <div className="slider-btn-display">
                                <button class="btn topslider-btn">Free Delievery</button>
                                <button class="btn topslider-btn2">2 Team</button>
                                </div>
                               
                            </div>
                          </>
                        )
                      })
                    }
                  </div>

                </div>
              </div>

            </Carousel>

                </div>
            </div>
        </div>
        
        </>
    )
}