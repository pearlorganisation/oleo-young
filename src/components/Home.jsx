import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image1 from "../images/female.jpg"
import Image2 from "../images/creame2.jpg"
import Tabs, { TabPane } from 'rc-tabs';
import '../../node_modules/rc-tabs/assets/index.css';
import image1 from "../images/topstoryslider1.jpg"
import image2 from "../images/topstoryslider2.jpg"
import image3 from "../images/topstoryslider3.jpg"
import toppick1 from "../images/cream.jpg"
import toppick2 from "../images/makeup.jpg"
import toppick3 from "../images/shavingcream.jpg"
import HomeTabs from "./homecomponents/Tab";
export default function Home() {

  const sliderData = [
    {
      "id": 1,
      "productimage": toppick1
    },
    {
      "id": 2,
      "productimage": toppick2
    },
    {
      "id": 3,
      "productimage": toppick3
    },
    {
      "id": 4,
      "productimage": toppick1
    },
    {
      "id": 5,
      "productimage": toppick2
    },
    {
      "id": 6,
      "productimage": toppick3
    },
    {
      "id": 7,
      "productimage": toppick1
    },
    {
      "id": 8,
      "productimage": toppick2
    },
    {
      "id": 9,
      "productimage": toppick3
    },
    {
      "id": 10,
      "productimage": toppick1
    }
  ]

  const data = [
    {
      "id": 1,
      "title": "Face Cream",
      "image": toppick1,
      "view": 1450,
      "price": "139",
      "rank": 1
    },
    {
      "id": 2,
      "title": "Makeup Brush",
      "image": toppick2,
      "view": 1350,
      "price": "119",
      "rank": 2
    },

    {
      "id": 3,
      "title": "Shaving Cream",
      "image": toppick3,
      "view": 1250,
      "price": "139",
      "rank": 3
    },
    {
      "id": 4,
      "title": "Cream xyz",
      "image": toppick1,
      "view": 1150,
      "price": "159",
      "rank": 4
    },
    {
      "id": 5,
      "title": "Makeup",
      "image": toppick2,
      "view": 1050,
      "price": "129",
      "rank": 5
    },
    {
      "id": 6,
      "title": "Cream",
      "image": toppick3,
      "view": 950,
      "price": "179",
      "rank": 6
    }

  ]
  const topstorydata = [
    {
      "id": 1,
      "title": "Fashion Youtuber recommended",
      "url": image1,
      "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magnam!"
    },
    {
      "id": 2,
      "title": "Dancers recommended",
      "url": image2,
      "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magnam!"
    },

    {
      "id": 3,
      "title": "Hand Cream recommended",
      "url": image3,
      "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magnam!"
    },
    {
      "id": 4,
      "title": "Easy Cooking at the camps",
      "url": image1,
      "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magnam!"
    },
    {
      "id": 5,
      "title": "Hair item recommended",
      "url": image2,
      "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magnam!"
    },
    {
      "id": 6,
      "title": "Futsaler recommended",
      "url": image3,
      "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magnam!"
    }

  ]

  const data2 = [
    {
      "id": 1,
      "name": "Lash Princess Mascara Review",
      "image": Image1
    },
    {
      "id": 2,
      "name": "My favouite Mascara!",
      "image": Image1
    },
    {
      "id": 3,
      "name": "Lash Princess Mascara",
      "image": Image1
    },
    {
      "id": 4,
      "name": "Princess False Lash Mascara",
      "image": Image1
    },
    {
      "id": 5,
      "name": "Lash Princess Mascara",
      "image": Image1
    },
    {
      "id": 6,
      "name": "My favouite Mascara!",
      "image": Image1
    },
    {
      "id": 7,
      "name": "Princess False Lash Mascara",
      "image": Image1
    }
  ]

  const responsiveSlider = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <>

      <div className="container-fluid home-container p-0">

        {/* top slider */}

        <div className="row">
          <div className="col-md-8 mx-auto slider-container">

            <h2 className="top-slider-heading">
              Fame Deal Limited Offer
            </h2>

            <Carousel responsive={responsiveSlider}>
              {
                sliderData.map((e) => {
                  return (
                    <>

                      <div>
                        <div className="card">
                          <img src={e.productimage} className="card-img-top top-slider-image" alt="..." />
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </Carousel>

          </div>
        </div>

        <div className="row">
          <div className="col-md-8 mx-auto top-second-slider-container">

            <h2 className="top-slider-heading">
              On The Horizon Team Buy!
            </h2>

            <Carousel responsive={responsiveSlider}>
              {
                sliderData.map((e) => {
                  return (
                    <>

                      <div>
                        <div className="card">
                          <img src={e.productimage} className="card-img-top top-slider-image" alt="..." />
                          <div className="second-slider-card-btn-div" >
                            <button className="btn second-slider-btn" >Free Delievery</button>
                            <button className="btn second-slider-btn" >2 Team</button>
                          </div>
                        </div>
                      </div>

                    </>
                  )
                })
              }
            </Carousel>

          </div>
        </div>

        {/* tab section */}

        <div className="row">
          <div className="col-md-8 mx-auto top-tab-container">

            <HomeTabs />

          </div>
        </div>


        {/* top picks for you  */}

        {/* <div className="row">
          <div className="col-md-8 col-10 mx-auto">

            <div className="box-1">
              <h1 className="top-pick-heading">

                Top Picks For You

              </h1>

             

              <div className="row top-pick-slider-div">



              </div>

            

            </div>


          </div>


        </div> */}


        {/* Todays story */}

        <div className="row">
          <div className="col-md-8 mx-auto col-10">


            <h2 className="today-story-heading">

              Today's Story

            </h2>

            {/* <hr /> */}

            <div className="row">
              <Carousel responsive={responsive}>
                {
                  topstorydata.map((e) => {

                    return (

                      <>
                        <div className="col-md-11 col-8 mx-auto">
                          <div>
                            <div className="card card-display">
                              <img src={e.url} className="card-img-top top-pick-image" alt="..." />
                              <div className="card-body">
                                <h5 className="card-title card-title-1">{e.title}</h5>
                                <p className="card-text">{e.desc}</p>
                                {/* <a href="#" className="btn btn-primary first-card-btn">Buy Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </>

                    )
                  })
                }
              </Carousel>
            </div>




          </div>


        </div>


        {/* Real Time View Ranking */}

        <div className="row">
          <div className="col-md-8 mx-auto col-10 tab-column">

            <h2 className="ranking-heading">

              Real Time View Ranking

            </h2>


            {/* <hr /> */}


            <div className="row ranking-tab-div">
              <div className="col-md-12">
                <Tabs defaultActiveKey="1" tabPosition="left" className="desktop-tab">
                  {
                    data.map((e) => {
                      return (
                        <>
                          <TabPane tab={e.title} key={e.id}>
                            <div className="card">
                              <div className="tab-card">
                                <div>
                                  <img src={e.image} className="card-img-top tab-card-image" alt="..." />
                                </div>
                                <div className="card-body">
                                  <div className="view-div">
                                    <i className="ri-focus-2-fill pt-1 pe-2"></i>
                                    <h5 className="card-title">{e.view}</h5>
                                  </div>
                                  <div className="view-div">
                                    <i className="ri-star-line pt-1 pe-2"></i>
                                    <h5 className="card-title">{e.rank}</h5>
                                  </div>

                                  <h5 className="card-title">{e.title}</h5>
                                  <h5 className="card-title">Price: {e.price}</h5>
                                  <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                              </div>

                            </div>
                          </TabPane>
                        </>
                      )
                    })
                  }
                </Tabs>

                <Tabs defaultActiveKey="1" tabPosition="top" className="mobile-tab">
                  {
                    data.map((e) => {
                      return (
                        <>
                          <TabPane className="tab-title" tab={e.title} key={e.id}>
                            <div className="card">
                              <div className="tab-card">
                                <div>
                                  <img src={e.image} className="card-img-top tab-card-image" alt="..." />
                                </div>
                                <div className="card-body">
                                  <div className="view-div">
                                    <i className="ri-focus-2-fill pt-lg-1 pe-2"></i>
                                    <h5 className="card-title tab-card-title">{e.view}</h5>
                                  </div>
                                  <div className="view-div">
                                    <i className="ri-star-line pt-1 pe-2"></i>
                                    <h5 className="card-title">{e.rank}</h5>
                                  </div>

                                  <h5 className="card-title tab-card-title">{e.title}</h5>
                                  <h5 className="card-title tab-card-title">Price: {e.price}</h5>
                                  <a href="#" className="btn btn-primary tab-card-btn">Go somewhere</a>
                                </div>
                              </div>

                            </div>
                          </TabPane>
                        </>
                      )
                    })
                  }
                </Tabs>

              </div>
            </div>

          </div>
        </div>


        {/* todays a whole vibe */}

        <div className="row">

          <div className="col-md-8 col-10 mx-auto">
            <h2 className="wholevibe-heading">
              Today&lsquo;s A Whole Vibe
            </h2>


            <div className="row">
              <Carousel responsive={responsive}>
                {
                  data2.map((e) => {
                    return (
                      <>
                        <div className="col-md-10 col-8 mx-auto top-pick-carousel-col">
                          <div>
                            <div className="card card-display">
                              <video className="video-tag"
                                poster={Image2}
                                // width="320" height="240"
                                controls>
                                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
                              </video>
                              <div className="card-body">
                                <h5 className="card-title card-title-1">{e.name}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </Carousel>
            </div>

          </div>

        </div>

        {/* spring festivals */}

        <div className="row top-pick-row">
          <div className="col-md-8 col-10 mx-auto">

            <div className="box-1">
              <h2 className="springfestival-heading">

                Spring Festival 30-70% Off

              </h2>



              <div className="row">
                <Carousel responsive={responsive}>
                  {
                    data.map((e) => {

                      return (

                        <>
                          <div className="col-md-11 col-8 mx-auto top-pick-carousel-col">
                            <div>
                              <div className="card card-display">
                                <img src={e.image} className="card-img-top top-pick-image" alt="..." />
                                <div className="card-body">
                                  <h5 className="card-title card-title-1">{e.title}</h5>
                                  <a href="#" className="btn btn-primary first-card-btn">Buy Now</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>

                      )
                    })
                  }
                </Carousel>
              </div>
            </div>


          </div>


        </div>

      </div>




    </>
  )
}