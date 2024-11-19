import { Link } from "react-router-dom";

const PublicHeader = () =>{
    return(
            <>
            <div className="container p-3 mb-2">
                <div className="row">
                    <div className="col-xl-3"> <i className="fa fa-headset"></i> +91-8884166608 </div>
                    <div className="col-xl-6">
                        <i className="fa fa-map-marker"></i> #123, Shop No. 25, 1st Floor, Marathahalli Bangalore 560037
                    </div>
                    <div className="col-xl-3 text-end">
                        <i className="fab fa-facebook me-2"></i>
                        <i className="fab fa-twitter me-2"></i>
                        <i className="fab fa-linkedin me-2"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-sm navbar-dark mybg shadow container">
                <div className="container">
                    <a className="navbar-brand"><i className="fa fa-shopping-bag fa-lg"></i> Shopx24 </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-4">
                                <Link className="nav-link active" to="/"><i className="fa fa-home"></i> Home </Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link active" to="/category"><i className="fa fa-table"></i> Shop By Category </Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link active" to="/cart"><i className="fa fa-shopping-cart"></i> My Cart </Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link active" to="/login"><i className="fa fa-lock"></i> Login </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </>
    )
}

export default PublicHeader;