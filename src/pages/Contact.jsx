import React, { useState } from 'react'

const Contact = () => {
        // State to store form values
    const[FormData, setformData] = useState({
        
        name: "",
        email: "",
        phone : "",
        city : ""

    });
    // State for errors
    const [errors, setErrors] = useState({});
    const [successMessage, setsuccessMessage] = useState("");
    
  

    return (



        <section className="sec-9 p-5 mt-4 w-100">
            <div className="container">

                <div className="section-title">
                    <h2><i className="fa-solid fa-phone"></i>   Contact Us  </h2>

                </div>
                <form className=" needs-validation" novalidate="">
                    <div className="mb-3">
                        <div className="row gy-3">
                            <div className=" col-md-6 col-12">
                                <input type="text" className="form-control p-2" id="name" aria-describedby="emailHelp" placeholder="Your Name" required="" />
                                <div className="valid-feedback">
                                    Looks Good !
                                </div>
                                <div className="invalid-feedback">
                                    Enter Name!
                                </div>
                            </div>
                            <div className=" col-md-6 col-12">
                                <input type="email" className="form-control p-2" id="email" placeholder="Your Email" required="" />
                                <div className="valid-feedback">
                                    Looks Good !
                                </div>
                                <div className="invalid-feedback">
                                    Enter Valide email!
                                </div>
                            </div>
                        </div>

                        <div className="row gy-3 my-3">
                            <div className=" col-md-6 col-12">
                                <input type="number" className="form-control p-2" id="exampleInputPassword1" placeholder="Your Phone" required="" />
                                <div className="valid-feedback">
                                    Looks Good !
                                </div>
                                <div className="invalid-feedback">
                                    Enter Valide Number!
                                </div>
                            </div>
                            <div className=" col-md-6 col-12">
                                <input type="text" className="form-control p-2" id="city" placeholder="City" required="" />
                                <div className="valid-feedback">
                                    Looks Good !
                                </div>
                                <div className="invalid-feedback">
                                    Enter Valid City
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="div w-100 text-center">
                        <button type="submit" className="btn btn-primary submit rounded-5 py-2 px-5 p-2">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Contact 