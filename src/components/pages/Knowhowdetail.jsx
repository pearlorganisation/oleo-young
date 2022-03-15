import React from "react";
import { useParams } from "react-router"
import Image1 from "../../images/know-how-card-img.webp"
import Image2 from "../../images/know-how-card-img2.webp"
import Image3 from "../../images/know-how-card-img3.webp"
import Image4 from "../../images/know-how-detail-img.webp"

export default function Knowhowdetail(){
    const data = [
        {
            "id": 1,
            "title": "A plan terrier for the idiots!",
            "subtitle": "xoxo",
            "hits": 1250,
            "scrap": 59,
            "image" : Image1,
            "detailimage" : Image4,
            "date": "10-3-2022"
        },
        {
            "id": 2,
            "title": "The Feeling of a vintage movie",
            "subtitle": "yoyo",
            "hits": "1250",
            "scrap": 79,
            "image" : Image2,
            "detailimage" : Image4,
           "date" : "10-3-2022"
        },
        {
            "id": 3,
            "title": "Only 7 million won !",
            "subtitle": "vovo",
            "hits": 1250,
            "scrap": 29,
            "image" : Image3,
            "detailimage" : Image4,
           "date" : "10-3-2022"
        },
        {
            "id": 4,
            "title": "Secret Hipsteter challenge EP1",
            "subtitle": "lolo",
            "hits": 1250,
            "scrap": 49,
            "image" : Image1,
            "detailimage" : Image4,
           "date" : "10-3-2022"
        },
        {
            "id": 5,
            "title": "Only 7 million won !",
            "subtitle": "koko",
            "hits": 1250,
            "scrap": 59,
            "image" : Image2,
            "detailimage" : Image4,
           "date" : "10-3-2022"
        },
        {
            "id": 6,
            "title": "A plan terrier for the idiots!",
            "subtitle": "xoxo",
            "hits": 1250,
            "scrap": "59",
            "image" : Image3,
            "detailimage" : Image4,
           "date" : "10-3-2022"
        },
        {
            "id": 7,
            "title": "Only 7 million won !",
            "subtitle": "xoxo",
            "hits": 1250,
            "scrap": "59",
            "image" : Image1,
            "detailimage" : Image4,
           "date" : "10-3-2022"
        },
        {
            "id": 8,
            "title": "A plan terrier for the idiots!",
            "subtitle": "xoxo",
            "hits": 1250,
            "scrap": 59,
            "image" : Image2,
            "detailimage" : Image4,
           "date" : "10-3-2022"
        }
    ]

    const proid = useParams();
    const proDetails = data.filter(x => x.id == proid.id);
    const product = proDetails[0];

    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <h2 className="know-how-detail-heading">{product.title}</h2>
                    <div className="know-how-detail-top-display">
                    <div className="know-how-detail-display">
                 <img className="know-how-detail-img" src={product.detailimage} alt="..." />
                 <div>
                     <h6 className="know-how-detail-subtitle">{product.subtitle}</h6>
                     <h6 className="know-how-detail-subtitle-1">{product.date}</h6>
                 </div>
                     </div>
                     <div>
                         <button className="btn btn-primary">Follow</button>
                     </div>
                </div>
                    </div>
                
            </div>
        </div>
        </>
    )
}