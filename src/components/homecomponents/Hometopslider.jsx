import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import topsliderimage1 from "../../images/creame1.jpg"
import topsliderimage2 from "../../images/creame2.jpg"
import topsliderimage3 from "../../images/creame3.jpg"
import saleimage from "../../images/sale.png"
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '24px', color:"white"}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
      {/* <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button> */}
    </div>
  );
}

export default function Topslider() {

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
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 mx-auto slider-container">

            <div>
              {/* <h2 className="top-slider-heading">
              Fame Deal Limited Offer
            </h2> */}

            </div>


            <Carousel showArrows={true}
            //  autoPlay={true}
             infiniteLoop
            >

              <div>
                <div className="topslider-carousel-container">
                  <div className="topslider-logo-display">
                    <h2 className="top-slider-heading">
                      Fame Deal Limited Offer!
                    </h2>
                    <figure className="topslider-figure">
                      <img src={saleimage} alt=".." className="topslider-logo" />
                    </figure>
                  </div>
                  <div className="row">
                    {
                      sliderData.map((e) => {
                        return (
                          <>
                            <div className="col-md-3 carousel-image-div">

                              <figure className="carousel-figure">
                                <img src={e.productimage} alt="..." className="card-img-top top-slider-image p-1" />
                              </figure>
                              
                              <div className="timer-div">
                              <MyTimer expiryTimestamp={time} />
                              </div>
                                <button className="btn topslider-btn">50% <span className="top-slider-btn-span">BDT5000</span></button>
                            
                             
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
                  <div className="topslider-logo-display">
                    <h2 className="top-slider-heading">
                      Fame Deal Limited Offer!
                    </h2>
                    <figure className="topslider-figure">
                      <img src={saleimage} alt=".." className="topslider-logo" />
                    </figure>
                  </div>
                  <div className="row">
                    {
                      sliderData.map((e) => {
                        return (
                          <>
                            <div className="col-md-3 carousel-image-div">

                              <figure className="carousel-figure">
                                <img src={e.productimage} alt="..." className="card-img-top top-slider-image p-1" />
                              </figure>
                            
                              <div className="timer-div">
                              <MyTimer expiryTimestamp={time} />
                              </div>
                                <button class="btn topslider-btn">50% <span className="top-slider-btn-span">BDT5000</span></button>
                             
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
                  <div className="topslider-logo-display">
                    <h2 className="top-slider-heading">
                      Fame Deal Limited Offer!
                    </h2>
                    <figure className="topslider-figure">
                      <img src={saleimage} alt=".." className="topslider-logo" />
                    </figure>
                  </div>
                  <div className="row">
                    {
                      sliderData.map((e) => {
                        return (
                          <>
                            <div className="col-md-3 carousel-image-div">

                              <figure className="carousel-figure">
                                <img src={e.productimage} alt="..." className="card-img-top top-slider-image p-1" />
                              </figure>                           
                              <div className="timer-div">
                              <MyTimer expiryTimestamp={time} />
                              </div>
                                <button class="btn topslider-btn">50% <span className="top-slider-btn-span">BDT5000</span></button>
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