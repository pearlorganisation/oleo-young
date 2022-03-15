import React from "react";
import Image1 from "../../images/know-how-card-img.webp"
import Image2 from "../../images/know-how-card-img2.webp"
import Image3 from "../../images/know-how-card-img3.webp"



export default function Knowhow() {
    const data = [
        {
            "id": 1,
            "title": "A plan terrier for the idiots!",
            "subtitle": "xoxo",
            "hits": 1250,
            "scrap": 59,
            "image" : Image1
        },
        {
            "id": 2,
            "title": "The Feeling of a vintage movie",
            "subtitle": "yoyo",
            "hits": "1250",
            "scrap": 79,
            "image" : Image2
        },
        {
            "id": 3,
            "title": "Only 7 million won !",
            "subtitle": "vovo",
            "hits": 1250,
            "scrap": 29,
            "image" : Image3
        },
        {
            "id": 4,
            "title": "Secret Hipsteter challenge EP1",
            "subtitle": "lolo",
            "hits": 1250,
            "scrap": 49,
            "image" : Image1
        },
        {
            "id": 5,
            "title": "Only 7 million won !",
            "subtitle": "koko",
            "hits": 1250,
            "scrap": 59,
            "image" : Image2
        },
        {
            "id": 6,
            "title": "A plan terrier for the idiots!",
            "subtitle": "xoxo",
            "hits": 1250,
            "scrap": "59",
            "image" : Image3
        },
        {
            "id": 7,
            "title": "Only 7 million won !",
            "subtitle": "xoxo",
            "hits": 1250,
            "scrap": "59",
            "image" : Image1
        },
        {
            "id": 8,
            "title": "A plan terrier for the idiots!",
            "subtitle": "xoxo",
            "hits": 1250,
            "scrap": 59,
            "image" : Image2
        }
    ]
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
                                    <div class="card">
                                        <div className="know-how-card">
                                            <img src={e.image} className="card-img-top know-how-card-image" alt="..." />
                                        </div>
                                            <div class="card-body">
                                                <h5 className="card-title know-how-title-1">{e.title}</h5>
                                                <h6 className="card-title know-how-title-2">{e.subtitle}</h6>
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