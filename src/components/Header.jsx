import React from "react"

export default function Header(){
    return(
        <>
        
        <div className="container-fluid header-container">
            <div className="row">
                <div className="col-md-12">
                <div className="row">
                    <div className="col-md-1 col-2">
                    {/* <img className="header-logo" src="headerlogo.png" alt="..." /> */}
                    <i className="ri-home-2-fill header-logo"></i>
                    </div>
                    <div className="col-md-2 col-8 mx-auto">
                    <h2 className="header-heading">OLEO YOUNG</h2>
                    </div>
                    <div className="col-md-4 ">
                    <input type="search" placeholder="search" className="form-control header-input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="col-md-5 mb-3">
                        <div className="header-btn-display">
                        <button className="btn header-btn">
                         Register
                     </button>
                    <button className="btn header-btn">
                         Log In
                     </button>                                     
                    <button className="btn header-btn">
                         Order Tracking
                     </button>                  
                    <button className="btn header-btn">
                        <div className="header-btn-inside">
                        <div>
                        <i className="ri-shopping-bag-line header-btn-icon"></i>
                        </div>
                        <div className="ms-1">
                        Bag()
                        </div>
                      
                        </div>
                        
                     </button>     
                        </div>
                                  
                     </div>                    
                </div>
               
               
                </div>
            </div>
        </div>
        
        
        </>
    )
}