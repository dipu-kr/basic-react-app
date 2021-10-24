import React from 'react'
import data2 from './ServiceData';

const Service = ()=>{
    return(
      <section className="service">
          <div className="container service-div">
             <h2 className="text-center">how to send money</h2>
             <div className="row">
             {
                data2.map((elem) =>{
                    const{id, logo, title, info} = elem;
                     return(
                        <div className=" col-12 col-md-4 service-sub-div" key={id}>
                           <i className={`fontstyle ${logo}`}></i>
                           <h5>{title}</h5>
                           <p className="text-center">{info}</p>

                         </div>
                     )
                 })
             }   
             </div>
          </div>
      </section>
    )
}

export default Service;