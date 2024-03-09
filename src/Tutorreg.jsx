import React from "react";
function Tutorreg() {
    return (
        <>
            <div style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <div>
                    <div className="row" style={{ padding: "10%", justifyContent: "center", backgroundColor: "#124076" }}>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input className="form-control " style={{ marginBottom: "5px" }} placeholder="Enter FullName" type="text" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input className="form-control " style={{ marginBottom: "5px" }} placeholder="Enter Mail Id" type="text" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input className="form-control " style={{ marginBottom: "5px" }} placeHolder="Enter UserName" type="text" />
                        </div>
                        
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div class="dropdown" style={{ width: "100%" }}>
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Languages to Communicate
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <input style={{ marginRight: "5px", marginLeft: "5px" }} type="checkbox" />English
                                    <input style={{ marginRight: "5px", marginLeft: "5px" }} type="checkbox" />French
                                    <input style={{ marginRight: "5px", marginLeft: "5px" }} type="checkbox" />Spanish
                                    <input style={{ marginRight: "5px", marginLeft: "5px" }} type="checkbox" />Hindi
                                    <input style={{ marginRight: "5px", marginLeft: "5px" }} type="checkbox" />Telugu <br />
                                    <input style={{ marginRight: "5px", marginLeft: "5px" }} type="checkbox" />Kanada
                                    <input style={{ marginRight: "5px", marginLeft: "5px" }} type="checkbox" />Tamil

                                </ul>
                            </div>
                        </div>
                         {/* 
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <select className="form-control">

                           
                                <option value="">Select a language to Teach</option>
                                <option value="english" ><input type="checkbox" />English</option>
                                <option value="french">French</option>
                                <option value="spanish">Spanish</option>
                                <option value="hindi">Hindi</option>
                                <option value="telugu">Telugu</option>
                                <option value="kannada">Kannada</option>
                                <option value="tamil">Tamil</option>
                            </select>
                        </div>
                        */}
                        <div>

                        </div>
                        {/* 
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input className="form-control " style={{ marginBottom: "5px" }} placeholder="Communicating Language" type="text" />
                        </div>
                        */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input className="form-control " style={{ marginBottom: "5px" }} placeholder="Enter Password" type="text" />
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div class="dropdown" style={{ width: "100%" }}>
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                   Language to taught 
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <input style={{ marginRight: "5px", marginLeft: "5px" }} type="checkbox" />English
                                    <input style={{ marginRight: "5px", marginLeft: "5px" }} type="checkbox" />French
                                    <input style={{ marginRight: "5px", marginLeft: "5px" }} type="checkbox" />Spanish
                                    <input style={{ marginRight: "5px", marginLeft: "5px" }} type="checkbox" />Hindi
                                    <input style={{ marginRight: "5px", marginLeft: "5px" }} type="checkbox" />Telugu <br />
                                    <input style={{ marginRight: "5px", marginLeft: "5px" }} type="checkbox" />Kanada
                                    <input style={{ marginRight: "5px", marginLeft: "5px" }} type="checkbox" />Tamil

                                </ul>
                            </div>
                        </div>

                        <button type="button" style={{ maxWidth: "10%", marginTop: "10px" }} className="btn btn-outline-info">Submit</button>
                    </div>




                </div>
            </div>


        </>
    );
}
export default Tutorreg;