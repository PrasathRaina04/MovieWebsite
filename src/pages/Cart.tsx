function Cart(){
    return(
        <>
        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar" data-bs-placement="end" aria-controls="navbar">Cart</button>
         <div className="offcanvas offcanvas-end" id="navbar" aria-labelledby="navbarLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="navbarLabel">Navigation</h5><button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body"></div>
    </div>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
        </>
    )
}

export default Cart;