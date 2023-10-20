import React from 'react'
const Footer = () => {
    return (
        <>
            <footer className=" bg-black text-white ">
                <div className="container ">
                    <div className="row py-5">
                        <div className="col-lg-4">
                            <div className="text-center py-4">
                                <h3 className="mb-4">LOCATION</h3>
                                <p>2215 E Commerce app
                                    , we are exist for you
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-center py-4">
                                <h3 className="mb-4">AROUND THE WEB</h3>
                                <div className="social-icons d-flex  justify-content-center align-items-center">
                                    <div className="icons me-2 d-flex  justify-content-center align-items-center rounded-circle">
                                        <i className="fa-brands fa-facebook-f  fa-xl"></i></div>
                                    <div className="icons me-2 d-flex justify-content-center align-items-center rounded-circle ">
                                        <i className="fa-brands fa-twitter fa-xl "></i>
                                    </div>
                                    <div className="icons  me-2 d-flex  justify-content-center align-items-center rounded-circle">
                                        <i className="fa-brands fa-linkedin-in fa-xl"></i></div>
                                    <div className="icons me-2 d-flex justify-content-center align-items-center rounded-circle ">
                                        <i className="fa-brands fa-github"></i>                      </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-center py-4">
                                <h3 className="mb-4">ABOUT FREELANCER</h3>
                                <p className="px-4">E Commerce is a free to use, MIT licensed Commerce theme created 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row bg-copyright ">
                        <div className="col-m-12 ">
                            <div className="text-center py-3 d-flex justify-content-center align-items-center ">
                                <small>Copyright © Your Website 2021</small>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer