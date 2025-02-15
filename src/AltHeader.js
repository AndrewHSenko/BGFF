import logo from "./Assets/bgff_colorless.png";
import { Link } from "react-router-dom";

const AltHeader = () => {
  return (
    <header>
        <nav class="navbar navbar-light bg-info-subtle">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                    <img src={logo} class="img-fluid mx-3" width="100" height="100" alt="logo" />
                </Link>
                <div class="justify-content-center w-full me-3" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0 text-center align-items-center justify-content-start">
                        <li class="nav-item">
                            <Link class="nav-link border border-3 rounded mx-1 mx-xl-2 p-2" to="/"><h5 class="text-dark-emphasis mb-0">Home</h5></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default AltHeader