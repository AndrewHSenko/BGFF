import {useEffect} from "react";
import AltHeader from "./AltHeader.js";
import Footer from "./Footer.js";
import me from "./Assets/me.jpeg";
import ontario from "./Assets/ontario.png";
import lynwood from "./Assets/lynwood.png";
import temecula from "./Assets/temecula.png";

const Legal = () => {
    useEffect(() => {
        window.scrollTo({
          top: (0, 0)
        })
    })
    return (
    <div>
        <AltHeader />
        <h1 class="display-2 text-decoration-underline text-center mt-2">Legal</h1>
        <div class="container-fluid">
            <div class="row mx-4 my-2">
                <div class="col-12 col-lg-6 text-center align-content-center">
                    <img src={me} class="w-100 mt-2 p-2 rounded-5 bg-warning-subtle" alt="Todd Iger" />
                </div>
                <div class="col-12 col-lg-6 p-1 p-md-3 align-content-center">
                    <h2 class="text-center">About Me</h2>
                    <p class="lead">My name is Todd H. Iger and my California State Bar number is 171286. I have conducted extensive legal research in regards to the legality of various amusement devices in California. I would argue that past attempts to exclude amusement devices under being "skill-based" have been incorrectly rebuffed in the case of some coin pusher machines. To date, my attempts to have my day in court have been moot, but I would embrace my opportunity to make my legal argument.
                    </p>
                </div>
            </div>
            <div class="row mx-1 mx-md-3">
                <h2 class="text-center">Is this a gambling device?</h2>
                <p><strong>No.</strong> Under California Penal Code (CPC) Section 330.5, an amusement device (especially one that involves money) is not considered a gambling machine if it is either skill-based or purely transactional. BGFF does not argue that our machines are strictly skill-based (although they are!) because of its subjectivity. Instead, our machines are purely transactional, meaning you pay for something and you get it every time. This is called the "considerational" exclusion.</p>
                <h2 class="text-center">How does this fall under the "Consideration" exemption?</h2>
                <p>The Buy Gum Free Fun AVM is a type of <i>vending machine</i>, meaning you are directly purchasing gum from that machine. Further, the gum that the player receives matches the fair market value (FMV) of the cost to play ($0.25). Hence, the machine provides the user gum that matches the exact consideration in value and provides that gum every time the user uses the machine. The game that someone plays after the purchase is <i>strictly free</i> as a bonus, hence the name "Buy Gum Free Fun"!</p>
                <h2 class="text-center">Read the CPC Section here:</h2>
                <p class="blockquote border"><a href="https://codes.findlaw.com/ca/penal-code/pen-sect-330-5/">CPC Section 330.5</a>: "It is further expressly provided that Sections 330.1 to 330.4 [related to gambling devices], inclusive, of this code shall not apply to ... machines which vend cigarettes, candy, ice cream, food, confections or other merchandise, in which there is deposited an exact consideration and from which in every case the customer obtains that which he purchases..."</p>
            </div>
            <div class="row mx-2 mb-1">
                <h1 class="text-center">Our Business Licenses:</h1>
                <img class="col-12 col-lg-4 p-1" src={ontario} alt="Business License from the City of Ontario"></img>
                <img class="col-12 col-lg-4 p-1" src={lynwood} alt="Business License from the City of Lynwood"></img>
                <img class="col-12 col-lg-4 p-1" src={temecula} alt="Business License from the City of Temecula"></img>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Legal