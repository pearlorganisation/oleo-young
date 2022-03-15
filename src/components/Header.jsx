import React from "react"
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <>
        
        <div className="container-fluid fixed-top">

            <div className="row header-firstrow">
                <div className="col-md-12">
                <div className="row">
                    <div className="col-md-1 col-2">
                    {/* <img className="header-logo" src="headerlogo.png" alt="..." /> */}
                    <Link to="/" className="header-logo-link">
                    <i className="ri-home-2-fill header-logo"></i>
                    </Link>
                    </div>
                    <div className="col-md-2 col-8 mx-auto">
                        <Link to="/" className="header-logo-link">
                    <h2 className="header-heading">
                        OLEO YOUNG
                        </h2>
                        </Link>
                    </div>
                    <div className="col-md-4">
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

            <div className="row">
                <div className="col-md-10 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
           
            <a className="nav-link dropdown-toggle btn navbar-btn" href="#" aria-current="page" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {/* <button className="btn navbar-btn"> */}
                    Category
                    {/* </button> */}
            </a>
            <ul class="dropdown-menu dropdown-container" aria-labelledby="navbarDropdown">
                <div className="row">
                    <div className="col-md-2">
                    <li><a class="dropdown-item" href="#">Basic Cosmetics</a></li>
                    </div>
                    <div className="col-md-2">
             <li><a class="dropdown-item" href="#">Dermo Cosmetics</a></li>

                    </div>
                    <div className="col-md-2">

             <li><a class="dropdown-item" href="#">Makeup and Nails</a></li>
                    </div>
                    <div className="col-md-2">
             <li><a class="dropdown-item" href="#">Body Care</a></li>

                    </div>
                    <div className="col-md-2">
                    <li><a className="dropdown-item" href="#">Hair Care</a></li>
                    </div>
                    <div className="col-md-2">
                    <li><a class="dropdown-item" href="#">Perfume/Diffuser</a></li>
                    </div>

                    <div className="col-md-2">
                    <li><a class="dropdown-item" href="#">Beauty Accessories</a></li>
                    </div>
                    <div className="col-md-2">
            <li><a class="dropdown-item" href="#">Male</a></li>

                    </div>
                    <div className="col-md-2">

            <li><a class="dropdown-item" href="#">Health/Sanitary</a></li>
                    </div>
                    <div className="col-md-2">
            <li><a class="dropdown-item" href="#">Food</a></li>

                    </div>
                    <div className="col-md-2">
                    <li><a className="dropdown-item" href="#">Life/Home</a></li>
                    </div>
                    <div className="col-md-2">
                    <li><a class="dropdown-item" href="#">Pet</a></li>
                    </div>
                    <div className="col-md-2">
                    <li><a class="dropdown-item" href="#">Baby</a></li>
                    </div>
                </div>
          </ul>
          
        </li>
        <li className="nav-item">
       
            <a className="nav-link  navbar-btn" href="/" aria-current="page">
                {/* <button className="btn  navbar-btn"> */}
                    Ranking
                    {/* </button> */}
            </a>
            
        </li>
        <li className="nav-item">
       
            <a className="nav-link  navbar-btn" href="/" aria-current="page">
                {/* <button className="btn  navbar-btn"> */}
                    Following
                    {/* </button> */}
            </a>
            
        </li>
        <li className="nav-item">
       
            <a className="nav-link  navbar-btn" href="/" aria-current="page">
                {/* <button className="btn  navbar-btn"> */}
                    Creaters
                    {/* </button> */}
            </a>
            
        </li>
        <li className="nav-item">
       
            <Link className="nav-link  navbar-btn" to="knowhow" aria-current="page">
                {/* <button className="btn  navbar-btn"> */}
                    Know How
                    {/* </button> */}
            </Link>
            
        </li>
        <li className="nav-item">
       
            <a className="nav-link  navbar-btn" to="/" aria-current="page">
                {/* <button className="btn  navbar-btn"> */}
                    Beauty Services
                    {/* </button> */}
            </a>
            
        </li>
        <li className="nav-item">
       
            <a className="nav-link  navbar-btn" to="/" aria-current="page">
                {/* <button className="btn  navbar-btn"> */}
                    Conscious services
                    {/* </button> */}
            </a>
            
        </li>
        <li className="nav-item">
       
            <a className="nav-link  navbar-btn" href="/" aria-current="page">
                {/* <button className="btn  navbar-btn"> */}
                    Q&N
                    {/* </button> */}
            </a>
            
        </li>
        <li className="nav-item">
       
            <a className="nav-link  navbar-btn" href="/" aria-current="page">
                {/* <button className="btn  navbar-btn"> */}
                    Men
                    {/* </button> */}
            </a>
            
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
                </div>
            
            </div>
            
        </div>
        
        
        </>
    )
}