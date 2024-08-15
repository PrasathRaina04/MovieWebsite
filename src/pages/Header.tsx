function Header (){
    return(
       <header style={{marginBottom: "24px"}}>
        <nav className="navbar navbar-expand-md bg-body py-3">
            <div className="container"><a className="navbar-brand d-flex align-items-center" href="#"><span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-basket2">
                            <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z"></path>
                            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z"></path>
                        </svg></span><span>MAX Market</span></a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-2"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse text-center" id="navcol-2">
                    <ul className="navbar-nav navbar-nav-scroll mx-auto">
                        <li className="nav-item"><a className="nav-link active" href="#">First Item</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Second Item</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Third Item</a></li>
                        <li className="nav-item" style={{textAlign: "right"}}></li>
                    </ul><button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar" data-bs-placement="end" aria-controls="navbar">Cart</button>
                </div>
            </div>
        </nav>
        <div className="container d-flex flex-row flex-grow-1 flex-shrink-1 justify-content-evenly">
            <input className="bg-secondary-subtle border rounded-pill border-primary-subtle shadow-lg d-flex flex-row flex-grow-1" type="search" placeholder="Search for Products, Brands and More"  autoComplete="on" style={{paddingLeft: "20px" ,margin: "0px", marginRight: "10px" ,marginLeft: "0px" ,paddingTop: "0px", paddingRight: "0px"}} />
            <button className="btn btn-primary" type="submit">Search</button>
            </div>
        <div className="offcanvas offcanvas-end" id="navbar" aria-labelledby="navbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="navbarLabel">Cart</h5><button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="table-responsive" style={{height: "100vh"}}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Item name</th>
                                <th>Quantity</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tomato</td>
                                <td>1Kg</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>Lays</td>
                                <td>2</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Sprite 500ml</td>
                                <td>1</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Total:</td>
                                <td></td>
                                <td>1000</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </header>
    )
}
export default Header;