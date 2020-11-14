function Header(){
    return(
    <div className="jumbotron jumbotron-fluid" style ={{backgroundColor: "red"}}>
        <div className="container" >
            <h1 className="display-4 d-flex justify-content-center" style ={{fontWeight: "bold"}}>My Favorite Pokemon Directory</h1>
            <p className="lead d-flex justify-content-center" style ={{fontWeight: "bold"}}>Search by name or sort alphabetically</p>
        </div>
    </div>
    );
}

export default Header;