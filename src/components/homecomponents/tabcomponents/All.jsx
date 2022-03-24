import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { Player } from 'video-react';
// import "node_modules/video-react/dist/video-react.css";


export default function All() {

    const videosliderData = [
        {
            "id": 1,
            "productTitle": "Cream",
            "price": 29,
        },
        {
            "id": 2,
            "productTitle": "Makeup Kit",
            "price": 19,
        },
        {
            "id": 3,
            "productTitle": "Shaving Cream",
            "price": 21,
        },
        {
            "id": 4,
            "productTitle": "Cream",
            "price": 19,
        },
        {
            "id": 5,
            "productTitle": "Makeup Kit",
            "price": 39,
        },
        {
            "id": 6,
            "productTitle": "Shaving Cream",
            "price": 29,
        },
        {
            "id": 7,
            "productTitle": "Cream",
            "price": 19,
        },
        {
            "id": 8,
            "productTitle": "Makeup Kit",
            "price": 39,
        },
        {
            "id": 9,
            "productTitle": "Shaving Cream",
            "price": 29,
        },
        {
            "id": 10,
            "productTitle": "Cream",
            "price": 19,
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


    return (
        <>

            {/* <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 mx-auto"> */}

            <Carousel responsive={responsiveSlider}>
                {
                    videosliderData.map((e) => {
                        return (
                            <>

                                <div>
                                    <div className="card video-slider-card">
                                        <video className="video-tag"
                                // poster={Image2}
                                controls>
                                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
                              </video>
                                        {/* <Player>
                                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                        </Player> */}
                                        <div class="card-body">

                                            <h5 class="card-title tab-all-heading">{e.productTitle}</h5>
                                            <h5 class="card-title tab-all-heading">Price : ${e.price} </h5>



                                        </div>
                                        {/* <div className="second-slider-card-btn-div" >
                            <button className="btn second-slider-btn" >Free Delievery</button>
                            <button className="btn second-slider-btn" >2 Team</button>
                          </div> */}
                                    </div>
                                </div>

                            </>
                        )
                    })
                }
            </Carousel>


            {/* <div class="card">
                        <video className="video-tag"
                                poster={Image2}
                                controls>
                                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
                              </video>
                                <div class="card-body">
                                    <h5 class="card-title">Price : </h5>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                        </div> */}
            {/* </div>
                </div>
            </div> */}

        </>
    )
}