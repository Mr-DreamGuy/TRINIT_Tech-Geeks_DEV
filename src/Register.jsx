import React from "react";
import {Link} from "react-router-dom";

//import "./App.css";

function Register() {
    return (
        <>
            <div className="register" style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center",height:"100vh",backgroundColor:"#" }}>
                <div class="d-grid gap-2 d-md-block" style={{padding:"15%",backgroundColor:"#124076",borderRadius:"10%"}}>
                   <Link to="/Tutorreg"><button className="btn btn-outline-info" style={{marginBottom:"15px"}} type="button">Tutor</button></Link> <br />
                   <Link to="/Signin"><button className="btn btn-outline-info" type="button">Student</button></Link> 

                </div>
            </div>

        </>
    );
}
export default Register;