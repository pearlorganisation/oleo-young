import React from "react"

export default function Navbar(){
    return(
        <>
        <div className="container-fluid p-0 nav-container">
            <div className="row">
                <div className="col-md-10 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
           
            <a className="nav-link active" href="/" aria-current="page">
                <button className="btn navbar-btn">Category</button>
            </a>
            
          
        </li>
        <li className="nav-item">
       
            <a className="nav-link" href="/" aria-current="page">
                <button className="btn  navbar-btn">Ranking</button>
            </a>
            
        </li>
        <li className="nav-item">
       
            <a className="nav-link active" href="/" aria-current="page">
                <button className="btn  navbar-btn">Following</button>
            </a>
            
        </li>
        <li className="nav-item">
       
            <a className="nav-link active" href="/" aria-current="page">
                <button className="btn  navbar-btn">Creaters</button>
            </a>
            
        </li>
        <li className="nav-item">
       
            <a className="nav-link active" href="/" aria-current="page">
                <button className="btn  navbar-btn">Know How</button>
            </a>
            
        </li>
        <li className="nav-item">
       
            <a className="nav-link active" href="/" aria-current="page">
                <button className="btn  navbar-btn">Beauty Services</button>
            </a>
            
        </li>
        <li className="nav-item">
       
            <a className="nav-link active" href="/" aria-current="page">
                <button className="btn  navbar-btn">Conscious services</button>
            </a>
            
        </li>
        <li className="nav-item">
       
            <a className="nav-link" href="/" aria-current="page">
                <button className="btn  navbar-btn">Q&N</button>
            </a>
            
        </li>
        <li className="nav-item">
       
            <a className="nav-link" href="/" aria-current="page">
                <button className="btn  navbar-btn">Men</button>
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