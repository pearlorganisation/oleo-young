import React from "react";
import Image1 from "../../images/cream.jpg"
import Image2 from "../../images/shavingcream.jpg"
import Image3 from "../../images/makeup.jpg"
import Image4 from "../../images/know-how-detail-img.webp"
import { Link } from "react-router-dom";



export default function Knowhow() {
    const data = [
        {
            "id": 1,
            "title": "Face Cream",
            "subtitle": "xoxo",
            "hits": 1250,
            "scrap": 59,
            "productimage" : Image1,
            "userimage" : Image4,
            // "productimage" : 
            "date": "10-3-2022",
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo."
        },
        {
            "id": 2,
            "title": "Shaving Cream",
            "subtitle": "yoyo",
            "hits": "1250",
            "scrap": 79,
            "productimage" : Image2,
            "userimage" : Image4,
           "date" : "10-3-2022",
           "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo."
        },
        {
            "id": 3,
            "title": "Makeup Brush",
            "subtitle": "vovo",
            "hits": 1250,
            "scrap": 29,
            "productimage" : Image3,
            "userimage" : Image4,
           "date" : "10-3-2022",
           "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo."
        },
        {
            "id": 4,
            "title": "Face cream",
            "subtitle": "lolo",
            "hits": 1250,
            "scrap": 49,
            "productimage" : Image1,
            "userimage" : Image4,
           "date" : "10-3-2022",
           "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo."
        },
        {
            "id": 5,
            "title": "Shaving cream",
            "subtitle": "koko",
            "hits": 1250,
            "scrap": 59,
            "productimage" : Image2,
            "userimage" : Image4,
           "date" : "10-3-2022",
           "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo."
        },
        {
            "id": 6,
            "title": "Makeup brush",
            "subtitle": "xoxo",
            "hits": 1250,
            "scrap": "59",
            "productimage" : Image3,
            "userimage" : Image4,
           "date" : "10-3-2022",
           "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo."
        },
        {
            "id": 7,
            "title": "Face Cream",
            "subtitle": "xoxo",
            "hits": 1250,
            "scrap": "59",
            "productimage" : Image1,
            "userimage" : Image4,
           "date" : "10-3-2022",
           "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo."
        },
        {
            "id": 8,
            "title": "Shaving cream",
            "subtitle": "xoxo",
            "hits": 1250,
            "scrap": 59,
            "productimage" : Image2,
            "userimage" : Image4,
           "date" : "10-3-2022",
           "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo."
        }
    ]
    console.log(data)
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h2 className="know-how-heading">
                            Know How
                        </h2>
                        <div className="row">
                        {
                            data.map((e) => {
                                return (
                                    <>
                                    <div className="col-md-4 know-how-card-column" key={e.id}>
                                        <Link to={`/knowhow/${e.id}`} className="know-how-link">
                                        <div className="card know-how-card-div">
                                        <div className="know-how-card">
                                            <img src={e.productimage} className="card-img-top know-how-card-image" alt="..." />
                                        </div>
                                            <div className="card-body">
                                                <h5 className="card-title know-how-title-1">{e.title}</h5>
                                                <h6 className="card-title know-how-title-2">{e.username}</h6>
                                                <div className="know-how-card-display">
                                                    <p className="know-how-hits">
                                                    {e.hits} Hits
                                                    </p>
                                                    <p className="know-how-scrap">
                                                        {e.scrap}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                    
                                    </div>
                                    </>
                                )
                            })
                        }
                        </div>
                       

                    </div>
                </div>
            </div>
        </>
    )
}