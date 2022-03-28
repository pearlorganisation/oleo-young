import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "../../../images/female.jpg"
// import { Player } from 'video-react';
// import "node_modules/video-react/dist/video-react.css";
import ReactPlayer from 'react-player'


export default function All() {

    const videosliderData = [
        {
            "id": 1,
            "username": "xoxo",
            "productTitle": "Cream",
            "price": 29,
        },
        {
            "id": 2,
            "username": "xoxo",
            "productTitle": "Makeup Kit",
            "price": 19,
        },
        {
            "id": 3,
            "username": "xoxo",
            "productTitle": "Shaving Cream",
            "price": 21,
        },
        {
            "id": 4,
            "username": "xoxo",
            "productTitle": "Cream",
            "price": 19,
        },
        {
            "id": 5,
            "username": "xoxo",
            "productTitle": "Makeup Kit",
            "price": 39,
        },
        {
            "id": 6,
            "username": "xoxo",
            "productTitle": "Shaving Cream",
            "price": 29,
        },
        {
            "id": 7,
            "username": "xoxo",
            "productTitle": "Cream",
            "price": 19,
        },
        {
            "id": 8,
            "username": "xoxo",
            "productTitle": "Makeup Kit",
            "price": 39,
        },
        {
            "id": 9,
            "username": "xoxo",
            "productTitle": "Shaving Cream",
            "price": 29,
        },
        {
            "id": 10,
            "username": "xoxo",
            "productTitle": "Cream",
            "price": 19,
        }
    ]

    const responsiveSlider = {
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

            {/* <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 mx-auto"> */}
                    <div className="row">
                    <Carousel responsive={responsiveSlider}>
                {
                    videosliderData.map((e) => {
                        return (
                            <>

                                <div class="p-1 col-md-10 mx-auto">
                                    <div className="card video-slider-card">
                                    <ReactPlayer controls url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" className="tab-all-video" />
                                        
                                        <div class="card-body">
                                            <div className="tab-all-card-display">
                                            <figure className="tab-all-figure">
                                            <img src={Image} alt=".." className="tab-all-image" />
                                            </figure>
                                            <h6 className="tab-all-username">{e.username}</h6>
                                            </div>
                                           
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

                    </div>

        

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