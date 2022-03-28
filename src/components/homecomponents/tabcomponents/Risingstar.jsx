import React from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../../../images/shavingcream.jpg"
import image2 from "../../../images/cream.jpg"
import image3 from "../../../images/makeup.jpg"

export default function Risingstar() {

    const risingstardata = [
        {
            "id": 1,
            "productname": "Shaving Cream",
            "image" : image1
        },
        {
            "id": 2,
            "productname": " Cream",
            "image" : image2
        },
        {
            "id": 3,
            "productname": "Makeup Kit",
            "image" : image3
        },
        {
            "id": 4,
            "productname": " Cream",
            "image" : image2
        },
        {
            "id": 5,
            "productname": "Shaving Cream",
            "image" : image1
        },
        {
            "id": 6,
            "productname": "Makeup Kit",
            "image" : image3
        },
        {
            "id": 7,
            "productname": "Shaving Cream",
            "image" : image1
        },
        {
            "id": 8,
            "productname": "Cream",
            "image" : image2
        },
        {
            "id": 9,
            "productname": "Shaving Cream",
            "image" : image1
        },
        {
            "id": 10,
            "productname": "Cream",
            "image" : image2
        }
    ]
    const responsiveSlider = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
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
            
                    <Carousel responsive={responsiveSlider}>
{
    risingstardata.map((e)=>{
        return(
            <>
            <div className="p-1">
            <div className="card risingstar-card">
                <figure className="risingstar-figure">

                            <img src={e.image} className="card-img-top risingstar-image" alt="..." />
                </figure>
                                <div class="card-body">
                                    
                                    <h5 className="card-title rising-star-card-title">{e.productname}</h5>
                                    <div className="risingstar-review-div">
                                    <i className="ri-star-fill risingstar-icon"></i>
                                    <p className="risingstar-para">5.0</p>
                                    </div>

                                  
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nobis tempora tenetur obcaecati ex minus!</p>
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                </div>
                        </div>
            </div>
          

           

            </>
        )
    })
}
</Carousel>





        </>
    )
}
