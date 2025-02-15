import landing_img from './Assets/landing_img.jpg';

const LandingCard = () => {
    return (
        <div class="pt-5">
            <img src={landing_img} class="img-fluid pt-5 pt-md-3 pt-lg-4" alt="BGFF Logo"/>
            <h1 class="text-center display-5 m-lg-4 p-lg-3 m-2 p-2 border-top border-bottom border-warning">The innovative vending machine that can make you <p class="mb-0 pb-1 mt-1 text-decoration-underline text-success fst-italic">$$ THOUSANDS $$</p> a month risk free!</h1>            
        </div>
    )
}

export default LandingCard;