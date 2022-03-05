// import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image1 from "../images/female.jpg"
import Image2 from "../images/creame2.jpg"
import Tabs, { TabPane } from 'rc-tabs';
import '../../node_modules/rc-tabs/assets/index.css';


export default function Home() {

  const relatedproducts = [
    {
      "id": 1,
      "title": "Face Cream",
      "url": "https://cdn.pixabay.com/photo/2016/04/13/22/26/cream-1327847_960_720.jpg"
    },
    {
      "id": 2,
      "title": "Makeup Brush",
      "url": "https://cdn.pixabay.com/photo/2016/10/06/21/11/brush-1720073_960_720.jpg"
    },
    {
      "id": 3,
      "title": "Shaving Cream",
      "url": "https://cdn.pixabay.com/photo/2014/08/10/18/00/razor-414909_960_720.jpg"
    },
    {
      "id": 4,
      "title": "Cream xyz",
      "url": "https://cdn.pixabay.com/photo/2016/04/13/22/26/cream-1327847_960_720.jpg"
    },
    {
      "id": 5,
      "title": "Makeup",
      "url": "https://cdn.pixabay.com/photo/2016/10/06/21/11/brush-1720073_960_720.jpg"
    },
    {
      "id": 6,
      "title": "Face Cream",
      "url": "https://cdn.pixabay.com/photo/2016/04/13/22/26/cream-1327847_960_720.jpg"
    },
    {
      "id": 7,
      "title": "Makeup Brush",
      "url": "https://cdn.pixabay.com/photo/2016/10/06/21/11/brush-1720073_960_720.jpg"
    },
    {
      "id": 8,
      "title": "Shaving Cream",
      "url": "https://cdn.pixabay.com/photo/2014/08/10/18/00/razor-414909_960_720.jpg"
    },
    {
      "id": 9,
      "title": "Cream xyz",
      "url": "https://cdn.pixabay.com/photo/2016/04/13/22/26/cream-1327847_960_720.jpg"
    },
    {
      "id": 10,
      "title": "Makeup",
      "url": "https://cdn.pixabay.com/photo/2016/10/06/21/11/brush-1720073_960_720.jpg"
    },


  ]

  const data = [
    {
      "id": 1,
      "title": "Face Cream",
      "url": "https://cdn.pixabay.com/photo/2016/04/13/22/26/cream-1327847_960_720.jpg",
       "view": 1450,
       "price": "139",
       "rank": 1
    },
    {
      "id": 2,
      "title": "Makeup Brush",
      "url": "https://cdn.pixabay.com/photo/2016/10/06/21/11/brush-1720073_960_720.jpg",
      "view": 1350,
       "price": "119",
       "rank": 2
    },

    {
      "id": 3,
      "title": "Shaving Cream",
      "url": "https://cdn.pixabay.com/photo/2014/08/10/18/00/razor-414909_960_720.jpg",
      "view": 1250,
       "price": "139",
       "rank": 3
    },
    {
      "id": 4,
      "title": "Cream xyz",
      "url": "https://cdn.pixabay.com/photo/2016/04/13/22/26/cream-1327847_960_720.jpg",
      "view": 1150,
       "price": "159",
       "rank": 4
    },
    {
      "id": 5,
      "title": "Makeup",
      "url": "https://cdn.pixabay.com/photo/2016/10/06/21/11/brush-1720073_960_720.jpg",
      "view": 1050,
       "price": "129",
       "rank": 5
    },
    {
      "id": 6,
      "title": "Cream",
      "url": "https://cdn.pixabay.com/photo/2014/08/10/18/00/razor-414909_960_720.jpg",
      "view": 950,
       "price": "179",
       "rank": 6
    }

  ]

  const data1 = [
    {
      "id": 1,
      "title": "Face Cream",
      "rank": 1,
      "image": Image1,
      "view": 413
    },
    {
      "id": 2,
      "name": "Ilarika Rautela",
      "rank": 2,
      "image": Image1
    },
    {
      "id": 3,
      "name": "Akanksha Rana",
      "rank": 3,
      "image": Image1
    },
    {
      "id": 4,
      "name": "Kajal Panwar",
      "rank": 4,
      "image": Image1
    },
    {
      "id": 5,
      "name": "Vibhanshi Singh",
      "rank": 3,
      "image": Image1
    },
    {
      "id": 6,
      "name": "Juhi Negi",
      "rank": 3,
      "image": Image1
    },
    {
      "id": 7,
      "name": "Sonali Panwar",
      "rank": 3,
      "image": Image1
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

  const responsive = {
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
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <div className="container-fluid p-0">

        {/* top picks for you  */}

        <div className="row top-pick-row">
          <div className="col-md-12 col-10 mx-auto text-center">

            <div class="box-1">
              <button className="btn home-heading-1">
                <div className="inside-btn">
                  <div>
                    <i className="ri-vip-crown-2-line"></i>
                  </div>
                  Top Picks For You
                  <div>
                    <i className="ri-vip-crown-2-line"></i>
                  </div>
                </div>
              </button>

              <hr />

              <div className="row">
                <Carousel responsive={responsive}>
                  {
                    data.map((e) => {

                      return (

                        <>
                          <div className="col-md-8 mx-auto top-pick-carousel-col">
                            <div>
                              <div className="card card-display">
                                <img src={e.url} className="card-img-top top-pick-image" alt="..." />
                                <div className="card-body">
                                  <h5 className="card-title">{e.title}</h5>
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



        {/* Real Time View Ranking */}

         <div className="row">
          <div className="col-md-8 mx-auto tab-column">
            <div className="text-center p-3">
            <button className="btn home-heading-2">
              <div className="inside-btn">
                <div>
                  <i className="ri-timer-2-line"></i>
                </div>
                Real Time View Ranking
                <div>
                  <i className="ri-timer-2-line"></i>
                </div>
              </div>
            </button>
            <hr />

            </div>

           
          

            <Tabs defaultActiveKey="1" tabPosition="left">
              {
                data.map((e) => {
                  return (
                    <>
                      <TabPane tab={e.title} key={e.id}>
                        <div className="card">
                          <div className="tab-card">
                          <div>   
                          <img src={e.url} className="card-img-top tab-card-image" alt="..." />
                          </div>
                          <div className="card-body">
                            <div className="view-div">
                            <i className="ri-focus-2-fill pt-1 pe-2"></i>
                          <h5 className="card-title">{e.view}</h5>
                            </div>
                            <div className="view-div">
                            <i class="ri-star-line pt-1 pe-2"></i>
                            <h5 className="card-title">{e.rank}</h5>
                            </div>
                           
                            <h5 className="card-title">{e.title}</h5>
                            <h5 className="card-title">Price: {e.price}</h5>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
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

        {/* todays a whole vibe */}

        <div className="row top-pick-row">

          <div className="col-md-12 col-10 mx-auto text-center">
            <button className="btn home-heading-1">
              <div className="inside-btn">
                <div>
                  <i className="ri-flashlight-fill"></i>
                </div>
                Today&lsquo;s A Whole Vibe
                <div>
                  <i className="ri-flashlight-fill"></i>
                </div>
              </div>
            </button>

            <hr />
            <div className="row">
              <Carousel responsive={responsive}>
                {
                  data2.map((e) => {
                    return (
                      <>
                        <div className="col-md-10 mx-auto top-pick-carousel-col">
                          <div>
                            <div className="card card-display">
                              <video className="video-tag"
                                poster={Image2}
                                // width="320" height="240"
                                controls>
                                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
                              </video>
                              <div className="card-body">
                                <h5 className="card-title">{e.name}</h5>
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
          <div className="col-md-12 text-center">

            <div class="box-1">
              <button className="btn home-heading-1">
                <div className="inside-btn">
                  <div>
                    <i className="ri-vip-crown-2-line"></i>
                  </div>
                  Spring Festival 30-70% Off
                  <div>
                    <i className="ri-vip-crown-2-line"></i>
                  </div>
                </div>
              </button>

              <hr />

              <div className="row">
                <Carousel responsive={responsive}>
                  {
                    data.map((e) => {

                      return (

                        <>
                          <div className="col-md-8 mx-auto top-pick-carousel-col">
                            <div>
                              <div className="card card-display">
                                <img src={e.url} className="card-img-top top-pick-image" alt="..." />
                                <div className="card-body">
                                  <h5 className="card-title">{e.title}</h5>
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