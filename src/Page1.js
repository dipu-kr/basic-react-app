import React from 'react';
import data from "./Page1Data";

const Page1 = () => {
    
    return(
        <>
        <section className="page1-sec">
            <div className="container text-center page1">
                 <h2>How does it Work</h2>
                 <div className="row">
                    {
                        data.map((element) => {
                            const {id, logo, title, info} = element;
                            return(
                            <>
                            <div className="col-12 col-lg-4 text-center box">
                               <i className={`fontawesome ${logo}`}></i>
                               <h4 className="title">{title}</h4>
                               <p className="info">{info}</p> 
                            </div> 
                            </>
                            )
                           
                        })
                    }

                 </div>
            </div>
        </section>
        </>
    )
}

export default Page1;