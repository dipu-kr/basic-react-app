import React from 'react'; 

const Header = () =>{
    return(
         <>
         <header className="header">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-6 d-flex header-right-content">
                        <div className="header-content">
                         <h2>Online Payment Made <br/>Easy For You.</h2>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed dapibus auctor turpis. Ut viverra in tellus et pulvinar. 
                            Nullam consectetur ligula metus, sit amet tincidunt ipsum 
                            faucibus pretium. Aliquam et ex ac ligula cursus vestibulum.</p>
                         <div className="d-flex flex-column div-2">
                             <h4>get early access for you</h4>
                             <div className="div-2-child">
                                 <input type="text" placeholder="enter your email" />
                                 <button className="btn">get it now</button>
                             </div>
                         </div>
                         </div>
                      </div>
                      <div className="col-lg-6  header-left-content">
                         <div className="header-content-2 d-flex justify-content-end">
                             <img src="./images/pic5.jpeg" alt="img" className="img-fluid img1"/>
                         </div>
                      </div>
                  </div>
              </div>
        </header>
         </>
    )
}

export default Header;