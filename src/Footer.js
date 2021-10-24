import React from 'react'

const Footer = () =>{
    return(
      <>
          <section className="footer-section">
               <div className="container">
                   <div className="row">
                       <div className="col-10 col-md-3 footer-sub-div">
                           <h4 className="text-center">company</h4>
                           <ul>
                               <li><a href="#">about</a></li>
                               <li><a href="#">about</a></li>
                               <li><a href="#">about</a></li>
                               <li><a href="#">about</a></li>
                           </ul>
                       </div>
                       <div className="col-10 col-md-3 footer-sub-div">
                           <h4 className="text-center">support</h4>
                           <ul>
                               <li><a href="#">about</a></li>
                               <li><a href="#">about</a></li>
                               <li><a href="#">about</a></li>
                               <li><a href="#">about</a></li>
                           </ul>
                       </div>
                       <div className="col-10 col-md-3 footer-sub-div">
                           <h4 className="text-center">services</h4>
                           <ul>
                               <li><a href="#">about</a></li>
                               <li><a href="#">about</a></li>
                               <li><a href="#">about</a></li>
                               <li><a href="#">about</a></li>
                           </ul>
                       </div>
                       <div className="col-10 col-md-3 footer-sub-div">
                           <h4 className="text-center">follow us</h4>
                           <div className="text-center social-link">
                               <a href="#" ><i className="fab fa-facebook-f"></i></a>
                               <a href="#"><i className="fab fa-instagram"></i></a>
                               <a href="#"><i className="fab fa-twitter"></i></a>
                           </div>
                       </div>
                       <hr/>
                       <p className="text-center footer-p">Copyright @ 2021 OnlinePay</p>
                   </div>
               </div>
          </section>
      </>
    )
}

export default Footer;