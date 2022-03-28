import React from "react";
import { useParams } from "react-router"
import Image1 from "../../images/cream.jpg"
import Image2 from "../../images/shavingcream.jpg"
import Image3 from "../../images/makeup.jpg"
import Image4 from "../../images/know-how-detail-img.webp"

export default function Productdetail(){

    const data = [
        {
            "id": 1,
            "title": "Face Cream",
            "username": "xoxo",
            "hits": 1250,
            "scrap": 59,
            "productimage": Image1,
            "userimage": Image4,
            "usersfollower": 99,
            "userfollowing": 27,
            // "productimage" : 
            "date": "10-3-2022",
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo."
        },
        {
            "id": 2,
            "title": "Shaving Cream",
            "username": "yoyo",
            "hits": "1250",
            "scrap": 79,
            "productimage": Image2,
            "userimage": Image4,
            "usersfollower": 39,
            "userfollowing": 48,
            "date": "10-3-2022",
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo."
        },
        {
            "id": 3,
            "title": "Makeup Brush",
            "username": "vovo",
            "hits": 1250,
            "scrap": 29,
            "productimage": Image3,
            "userimage": Image4,
            "usersfollower": 99,
            "userfollowing": 52,
            "date": "10-3-2022",
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo."
        },
        {
            "id": 4,
            "title": "Face cream",
            "username": "lolo",
            "hits": 1250,
            "scrap": 49,
            "productimage": Image1,
            "userimage": Image4,
            "usersfollower": 57,
            "userfollowing": 26,
            "date": "10-3-2022",
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo."
        },
        {
            "id": 5,
            "title": "Shaving cream",
            "username": "koko",
            "hits": 1250,
            "scrap": 59,
            "productimage": Image2,
            "userimage": Image4,
            "usersfollower": 99,
            "userfollowing": 37,
            "date": "10-3-2022",
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo."
        },
        {
            "id": 6,
            "title": "Makeup brush",
            "username": "xoxo",
            "hits": 1250,
            "scrap": "59",
            "productimage": Image3,
            "userimage": Image4,
            "usersfollower": 199,
            "userfollowing": 23,
            "date": "10-3-2022",
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo."
        },
        {
            "id": 7,
            "title": "Face Cream",
            "username": "xoxo",
            "hits": 1250,
            "scrap": "59",
            "productimage": Image1,
            "userimage": Image4,
            "usersfollower": 149,
            "userfollowing": 22,
            "date": "10-3-2022",
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo."
        },
        {
            "id": 8,
            "title": "Shaving cream",
            "username": "xoxo",
            "hits": 1250,
            "scrap": 59,
            "productimage": Image2,
            "userimage": Image4,
            "usersfollower": 65,
            "userfollowing": 27,
            "date": "10-3-2022",
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo."
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
                  <div className="row">
                      <div className="col-md-6">
                      <img src={product.productimage} alt="..." className="product-image" />
                      </div>
                      <div className="col-md-6">
                          <h6 className="product-main-heading">
                              {product.title}
                          </h6>
                          <p className="product-desc">{product.desc}</p>
                      </div>
                  </div>
                </div>
            </div>
        </div>
        </>
    )
}