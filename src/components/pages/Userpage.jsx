import React from "react";
import { useParams } from "react-router"
import Image1 from "../../images/cream.jpg"
import Image2 from "../../images/shavingcream.jpg"
import Image3 from "../../images/makeup.jpg"
import Image4 from "../../images/know-how-detail-img.webp"
import Tabs, { TabPane } from 'rc-tabs';

export default function Userpage() {

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
            "usersdesc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, quaerat.",
            // "productimage" : 
            "date": "10-3-2022",
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo.",
            "shortdesc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo",
            "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
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
            "usersdesc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, quaerat.",
            "date": "10-3-2022",
            "shortdesc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo",
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
            "usersdesc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, quaerat.",
            "date": "10-3-2022",
            "shortdesc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo",
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
            "usersdesc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, quaerat.",
            "date": "10-3-2022",
            "shortdesc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo",
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
            "usersdesc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, quaerat.",
            "date": "10-3-2022",
            "shortdesc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo",
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
            "usersdesc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, quaerat.",
            "date": "10-3-2022",
            "shortdesc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo",
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
            "usersdesc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, quaerat.",
            "date": "10-3-2022",
            "shortdesc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo",
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
            "usersdesc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, quaerat.",
            "date": "10-3-2022",
            "shortdesc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo",
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam ut cum saepe expedita. Excepturi ex quaerat debitis sit illo."
        }
    ]

    const proid = useParams();
    const proDetails = data.filter(x => x.id == proid.id);
    const product = proDetails[0];
    console.log(product)

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 mx-auto">



                        <div className="user-info-column">

                            <Tabs defaultActiveKey="1" tabPosition="top" className="user-tab">

                                <TabPane tab="Photos" key="1" className="user-tab-content">
                                    <div className="row">
                                        <div className="col-md-5 user-tab-card-column">
                                            <div className="position-fixed">
                                                <div className="position-absolute">

                                                    <div className="card user-card text-center">
                                                        <img src={product.userimage} className="card-img-top user-card-img" alt="..." />
                                                        <div className="card-body">
                                                            <h5 className="card-title user-card-heading">{product.username}</h5>
                                                            <div className="user-card-follow-maindiv">
                                                                <div>
                                                                    <div className="user-card-following-div">
                                                                        <p className="user-card-following-para">
                                                                            following
                                                                        </p>
                                                                        <p className="user-card-following-para ps-2">{product.usersfollower}</p>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="user-card-following-div ps-2">
                                                                        <p className="user-card-following-para">
                                                                            follower
                                                                        </p>
                                                                        <p className="user-card-following-para ps-2">{product.userfollowing}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="btn btn-primary">Follow</a>
                                                            <p className="card-text user-card-desc">
                                                                {product.usersdesc}
                                                            </p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-7 user-tab-desc-column">

                                            <h2 className="user-tab-heading">Photos</h2>

                                            <div className="row">
                                                {
                                                    data.map((e) => {
                                                        return (
                                                            <>
                                                                <div className="col-md-6">
                                                                    <div className="user-tab-desc-card-header">
                                                                        <img src={e.userimage} className="user-tab-desc-card-userimage" />


                                                                        <div>
                                                                            <h6 className="user-tab-desc-card-username">
                                                                                {e.username}
                                                                            </h6>
                                                                            <p>
                                                                                {e.usersdesc}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card user-tab-desc-card p-2">

                                                                        <img src={e.productimage} className="card-img-top user-tab-desc-card-img" alt="..." />
                                                                        <div className="card-body">
                                                                            <h5 className="card-title">{e.title}</h5>
                                                                            <p className="card-text">{e.shortdesc}</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }

                                            </div>


                                        </div>

                                    </div>

                                </TabPane>

                                <TabPane tab="Videos" key="2">
                                    <div className="row">

                                        <div className="col-md-5 user-tab-card-column">
                                            <div className="position-fixed">
                                                <div className="position-absolute">

                                                    <div className="card user-card text-center">
                                                        <img src={product.userimage} className="card-img-top user-card-img" alt="..." />
                                                        <div className="card-body">
                                                            <h5 className="card-title user-card-heading">{product.username}</h5>
                                                            <div className="user-card-follow-maindiv">
                                                                <div>
                                                                    <div className="user-card-following-div">
                                                                        <p className="user-card-following-para">
                                                                            following
                                                                        </p>
                                                                        <p className="user-card-following-para ps-2">{product.usersfollower}</p>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="user-card-following-div ps-2">
                                                                        <p className="user-card-following-para">
                                                                            follower
                                                                        </p>
                                                                        <p className="user-card-following-para ps-2">{product.userfollowing}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="btn btn-primary">Follow</a>
                                                            <p className="card-text user-card-desc">
                                                                {product.usersdesc}
                                                            </p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-md-7 user-tab-desc-column">

                                            <h2 className="user-tab-heading">Videos</h2>

                                            <div className="row">
                                                {
                                                    data.map((e) => {
                                                        return (
                                                            <>
                                                                <div className="col-md-6">
                                                                    <div className="user-tab-desc-card-header">
                                                                        <img src={e.userimage} className="user-tab-desc-card-userimage" />


                                                                        <div>
                                                                            <h6 className="user-tab-desc-card-username">
                                                                                {e.username}
                                                                            </h6>
                                                                            <p>
                                                                                {e.usersdesc}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card user-tab-desc-card p-2">
                                                                        <video className="video-tag"
                                                                            // poster={Image2}
                                                                            // width="320" height="240"
                                                                            controls>
                                                                            <source src={e.url} type="video/mp4" />
                                                                        </video>
                                                                        {/* <img src={e.productimage} className="card-img-top user-tab-desc-card-img" alt="..." /> */}
                                                                        <div className="card-body">
                                                                            <h5 className="card-title">{e.title}</h5>
                                                                            <p className="card-text">{e.shortdesc}</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }

                                            </div>


                                        </div>

                                    </div>

                                </TabPane>


                                <TabPane tab="Know-How" key="3">
                                    <div className="row">

                                        <div className="col-md-5 user-tab-card-column">
                                            <div className="position-fixed">
                                                <div className="position-absolute">

                                                    <div className="card user-card text-center">
                                                        <img src={product.userimage} className="card-img-top user-card-img" alt="..." />
                                                        <div className="card-body">
                                                            <h5 className="card-title user-card-heading">{product.username}</h5>
                                                            <div className="user-card-follow-maindiv">
                                                                <div>
                                                                    <div className="user-card-following-div">
                                                                        <p className="user-card-following-para">
                                                                            following
                                                                        </p>
                                                                        <p className="user-card-following-para ps-2">{product.usersfollower}</p>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="user-card-following-div ps-2">
                                                                        <p className="user-card-following-para">
                                                                            follower
                                                                        </p>
                                                                        <p className="user-card-following-para ps-2">{product.userfollowing}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="btn btn-primary">Follow</a>
                                                            <p className="card-text user-card-desc">
                                                                {product.usersdesc}
                                                            </p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-md-7 user-tab-desc-column">

                                            <h2 className="user-tab-heading">Know How</h2>

                                            <div className="row">
                                                {
                                                    data.map((e) => {
                                                        return (
                                                            <>
                                                                <div className="col-md-6">
                                                                    <div className="user-tab-desc-card-header">
                                                                        <img src={e.userimage} className="user-tab-desc-card-userimage" />


                                                                        <div>
                                                                            <h6 className="user-tab-desc-card-username">
                                                                                {e.username}
                                                                            </h6>
                                                                            <p>
                                                                                {e.usersdesc}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card user-tab-desc-card p-2">

                                                                        <img src={e.productimage} className="card-img-top user-tab-desc-card-img" alt="..." />
                                                                        <div className="card-body">
                                                                            <h5 className="card-title">{e.title}</h5>
                                                                            <p className="card-text">{e.shortdesc}</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }

                                            </div>


                                        </div>

                                    </div>

                                </TabPane>

                                <TabPane tab="Q&N" key="4">
                                    <div className="row">

                                        <div className="col-md-5 user-tab-card-column">
                                            <div className="position-fixed">
                                                <div className="position-absolute">

                                                    <div className="card user-card text-center">
                                                        <img src={product.userimage} className="card-img-top user-card-img" alt="..." />
                                                        <div className="card-body">
                                                            <h5 className="card-title user-card-heading">{product.username}</h5>
                                                            <div className="user-card-follow-maindiv">
                                                                <div>
                                                                    <div className="user-card-following-div">
                                                                        <p className="user-card-following-para">
                                                                            following
                                                                        </p>
                                                                        <p className="user-card-following-para ps-2">{product.usersfollower}</p>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="user-card-following-div ps-2">
                                                                        <p className="user-card-following-para">
                                                                            follower
                                                                        </p>
                                                                        <p className="user-card-following-para ps-2">{product.userfollowing}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="btn btn-primary">Follow</a>
                                                            <p className="card-text user-card-desc">
                                                                {product.usersdesc}
                                                            </p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-md-7 user-tab-desc-column">

                                            <h2 className="user-tab-heading">Q&N</h2>
                                               
                                               <div className="qn-main-display">
                                                   <div className="qn-inside-main-display">
                                                   <h6 className="qn-heading-1">My Question</h6>
                                            <h6 className="qn-heading-2">My Answer</h6>
                                                   </div>
                                                   <button className="btn btn-primary qn-btn" href="/">Go to Q&N</button>
                                               </div>
                                           

                                        </div>

                                    </div>

                                </TabPane>


                                <TabPane tab="Scrapbook" key="5">

                                </TabPane>

                            </Tabs>

                        </div>


                        <div></div>
                    </div>
                </div>
            </div>

        </>
    )
}