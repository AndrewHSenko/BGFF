import logo from "./Assets/bgff_colorless.png"
import { Link } from "react-router-dom";

const Header = ({Viewer}) => {
    const handleScroll = (viewer, n) => {
        const header = document.getElementById("Nav");
        const headerOffset = Math.min(header.getBoundingClientRect().height, 78); // 78 is the default header's height to fix collapsing height changes
        const origPos = viewer.current[n]?.getBoundingClientRect().top;
        const newPos = origPos + window.scrollY - headerOffset;
        
        window.scrollTo({
          top: newPos,
          behavior: "smooth"
        });
    }
    
    return (
    <header >
        <nav id="Nav" class="navbar navbar-expand-lg navbar-light bg-info-subtle fixed-top pb-0 pb-md-1">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} class="img-fluid mx-3" width="100" height="100" alt="logo" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-evenly" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0 text-center align-items-center">
                        <li class="nav-item">
                            <a class="nav-link border border-3 rounded mx-1 mx-xl-2 mb-1 mb-lg-0 px-5 px-lg-3" onClick={() => {handleScroll(Viewer, 0)}} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"><h5 class="mb-0 px-5 px-lg-0">Home</h5></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link border border-3 rounded mx-1 mx-xl-2 mb-1 mb-lg-0 px-5 px-lg-3" onClick={() => {handleScroll(Viewer, 1)}} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"><h5 class="mb-0 px-5 px-lg-0">The BGFF Machine</h5></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link border border-3 rounded mx-1 mx-xl-2 mb-1 mb-lg-0 px-5 px-lg-3" onClick={() => {handleScroll(Viewer, 2)}} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"><h5 class="mb-0 px-5 px-lg-0">Services</h5></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link border border-3 rounded mx-1 mx-xl-2 mb-1 mb-lg-0 px-5 px-lg-3" onClick={() => {handleScroll(Viewer, 3)}} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"><h5 class="mb-0 px-5 px-lg-0">About BGFF</h5></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link border border-3 rounded mx-1 mx-xl-2 mb-1 mb-lg-0 px-5 px-lg-3" onClick={() => {handleScroll(Viewer, 4)}} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"><h5 class="mb-0 px-5 px-lg-0">FAQs</h5></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link border border-3 rounded mx-1 mx-xl-2 mb-1 mb-lg-0 px-5 px-lg-3" onClick={() => {handleScroll(Viewer, 5)}} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"><h5 class="mb-0 px-5 px-lg-0">Contact Us</h5></a>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link border border-3 rounded mx-1 mx-xl-2 mb-1 mb-lg-0 px-5 px-lg-3" to="legal"><h5 class="mb-0 px-5 px-lg-0">Legal</h5></Link>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link disabled border border-3 rounded mx-1 mx-xl-2 px-5 px-lg-3" aria-disabled="true"><h5 class="mb-0 px-5 px-lg-0">Client Portal </h5><h5 class="mb-0 d-block d-md-none d-xl-block">( ** Coming Soon ** )</h5></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header