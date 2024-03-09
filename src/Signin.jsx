function Signin() {
    return (
        <>
            <div style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <div style={{padding:"8%",backgroundColor:"#124076",borderRadius:"10%"}}>
                <h5 style={{textAlign:"center",color:"white"}}>Student Details</h5>
                    <input className="form-control" style={{marginBottom:"5px"}}placeholder="Enter Username" type="text" />
                    <input className="form-control" style={{marginBottom:"5px"}} placeHolder="Enter Mail Id" type="text" />
                    <input className="form-control"style={{marginBottom:"5px"}} placeHolder="Phone Number" type="text" />
                    <input className="form-control" style={{marginBottom:"5px"}} placeholder="Enter Password" type="text" />
                    <button type="button" style={{marginBottom:"5px"}} className="btn btn-outline-info">Submit</button>
                </div>
            </div>


        </>
    );
}
export default Signin;