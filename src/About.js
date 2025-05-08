import About_Pic_One from "./Assets/About.jpg";
import About_Pic_Two from "./Assets/About_two.jpg";

const About = () => {
  return (
    <div id="About" class="container-fluid">
        <div class="row mx-md-4 mx-1 my-2">
            <div class="col-12 col-lg-6 text-center p-3">
                <h1 class="pb-2 text-decoration-underline">Who We Are</h1>
                <div class="d-flex justify-content-center d-lg-none flex-column ">
                    <img src={About_Pic_One} class="w-75 my-auto align-self-center mb-3 p-2 rounded-5 bg-warning-subtle" alt="The Buy Gum Free Fun Team" />
                </div>
                <p class="lead">In today's marketplace of rising rents, rising utility rates, and increasing labor cost, we were constantly on the lookout for ways to increase our business revenues without a large out-of-pocket expenditures. Being a California state-licensed attorney, our founder had conducted thorough legal research on amusement devices commonly known as coin pushers. He found that these machines were routinely producing an additional <b>$1,000 per month</b> in average revenue but were typically only found in arcades.
                </p>
                <p class="lead">After months of development and refinement, the Buy Gum Free Fun team created our Amusement Vending Machine (AVM) in 2010, which vends gum AND provides the chance for a user to play a coin pusher game. Over the years, BGFF has operated and expanded from LA and San Diego County to almost all of Southern California, meeting and working with over 200 laundromats, stores, and more to help increase their revenue. BGFF has also improved the machine by adding various security measures, such as a tilt alarm and optional shark cage, and better quality designs for repairs and maintenance. We are proud to serve the small business owners of Southern California, and we hope to serve you soon with a smile!
                </p>
                <div class="d-flex justify-content-center d-lg-none flex-column ">
                    <img src={About_Pic_Two} class="w-75 my-auto align-self-center mb-3 p-2 rounded-5 bg-warning-subtle" alt="The Buy Gum Free Fun Team" />
                </div>
            </div>
            <div class="col-12 col-lg-6 d-lg-flex justify-content-center align-content-center d-none flex-column">
                <img src={About_Pic_One} class="w-75 my-auto align-self-center p-2 rounded-5 bg-warning-subtle" alt="The Buy Gum Free Fun Team" />
                <img src={About_Pic_Two} class="w-75 my-auto align-self-center mt-1 mb-3 p-2 rounded-5 bg-warning-subtle" alt="The Buy Gum Free Fun Team" />
                {/**<div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={About_Pic_One} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={About_Pic_One} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={About_Pic_One} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                */}
                </div> 
            </div>
        </div>
    )
}

export default About