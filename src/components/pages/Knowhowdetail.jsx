import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router"
import Image1 from "../../images/cream.jpg"
import Image2 from "../../images/shavingcream.jpg"
import Image3 from "../../images/makeup.jpg"
import Image4 from "../../images/know-how-detail-img.webp"
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
// import '~react-pro-sidebar/dist/scss/styles.scss';

export default function Knowhowdetail() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
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

    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-8 mx-auto">
                        <div className="row">
                            <div className="col-md-8">
                                <h2 className="know-how-detail-heading">{product.title}</h2>
                                <div className="know-how-detail-top-display">
                                    <Link className="know-how-detail-display" to="/"
                                    //  to={`/user/${product.id}`}
                                     >
                                        <img className="know-how-detail-img" src={product.userimage} alt="..." />
                                        <div>
                                            <h6 className="know-how-detail-subtitle">{product.username}</h6>
                                            <h6 className="know-how-detail-subtitle-1">{product.date}</h6>
                                        </div>
                                    </Link>
                                    <div>
                                        <button className="btn btn-primary">
                                            <div className="follow-btn-div">
                                                <div className="know-how-follow-btn">
                                                    <i className="ri-add-line mt-1"></i>
                                                </div>
                                                Follow
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <p className="know-how-detail-desc">{product.desc}</p>
                                    <div className="know-how-product-image-div">
                                        <img src={product.productimage} alt="..." className="know-how-product-image" />
                                        <Link className="know-how-product-image-icon" to={`/product/${product.id}`}>
                                            <i className="ri-add-line mt-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">

                                <div className="position-fixed know-how-detail-sidebar">
                                    <Link className="position-absolute sidebar-icons" to="/">
                                    <i className="ri-instagram-fill"></i>
                                    </Link>
                                    <Link className="position-absolute sidebar-icons-1" to="/">
                                    <i className="ri-facebook-circle-fill"></i>
                                    </Link>
                                    <Link className="position-absolute sidebar-icons-2" to="/">
                                    <i className="ri-pinterest-fill"></i>
                                    </Link>
                                    <Link className="position-absolute sidebar-icons-3" to="/">
                                    <i className="ri-youtube-fill"></i>
                                    </Link>
                                    <Link className="position-absolute sidebar-icons-4" to="/">
                                    <i className="ri-snapchat-fill"></i>
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}