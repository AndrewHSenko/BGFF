import footer_logo from "./Assets/bgff_flat.png";

const Footer = () => {
  return (
    <div class="container-fluid bg-warning text-light py-3">
        <div class="row d-flex justify-content-evenly text-center">
            <div class="col-12 col-md-4 align-self-center w-50">
                <img src={footer_logo} alt="logo" class="w-75"/>
                <p class="mb-0">2024</p>
            </div>
            <div class="d-none d-md-block col-12 col-md-4 w-50">
                <h5>Phone: (949) 215-7007</h5>
                <h5>Email: wcbstiger@yahoo.com</h5>
                <h5>Facebook: https://www.facebook.com/Buygumfreefun/</h5>
            </div>
            <div class="d-block d-md-none col-12 col-md-4 pt-2">
                <p>Phone: (949) 215-7007</p>
                <p>Email: wcbstiger@yahoo.com</p>
                <p>Facebook: https://www.facebook.com/Buygumfreefun/</p>
            </div>
        </div>
    </div>
  )
}

export default Footer