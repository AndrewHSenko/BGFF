import { useRef, useEffect } from "react";
import Header from './Header.js';
import LandingCard from './LandingCard.js';
import AVM from './AVM.js';
import ProfitSharing from './ProfitSharing.js';
import IncomeTable from './IncomeTable.js';
import Shoutout from './Shoutout.js';
import Services from './Services.js';
import About from './About.js';
import FAQs from './FAQs.js';
import Footer from './Footer.js';

const LandingPage = () => {
    const Viewer = useRef([]);
    
    useEffect(() => {
        window.scrollTo({
        top: (0, 0)
        })
    })
    return (
        <div>
            <div ref={(ref) => {Viewer.current[0] = ref}}>
                <LandingCard />
            </div>
            <div ref={(ref) => {Viewer.current[1] = ref}}>
                <AVM />
            </div>
            <Shoutout
                header={<p>The BGFF Machine makes sites an average of more than<br/>$1000 per month!</p>}
                text={<p>If your machine does not generate at least $500 in monthly income for any three consecutive months, Buy Gum Free Fun will remove the equipment at <strong>no expense</strong> to you.<br/><br/>Some sites make almost <i><strong className="money">$2000</strong> a month</i>! Pocket <strong>50% of the total profits</strong> with NO out-of-pocket expenditures. Join over 200 other businesses and make some extra money with no hassle today!</p>}
            />
            <ProfitSharing />
            <IncomeTable />
            <div ref={(ref) => {Viewer.current[2] = ref}}>
                <Services />
            </div>
            <div ref={(ref) => {Viewer.current[3] = ref}}>
                <About />
            </div>
            <Shoutout
                header={<p>OUR MACHINES ARE BUILT FOR SECURITY AND CUSTOMIZED FOR LEGAL COMPLIANCE.</p>}
                text={<p>Buy Gum Free Fun has added various security features to the machines, including a tilt alarm and an optional shark cage. The BGFF machine is an "amusement vending machine," which is not considered a gambling device. We have studied this exemption extensively, and our vending machines are developed and manufactured to comply with this classification.<br/><br/> Please call us at <strong>(949) 215-7007</strong> with any questions or comments about this exemption.</p>}
            />
            <div ref={(ref) => {Viewer.current[4] = ref}}>
                <FAQs />
            </div>
            <Shoutout 
                header={<p>Interested?</p>}
                text={<p>Contact us below!</p>}
            />
            <div ref={(ref) => {Viewer.current[5] = ref}}>
                <Footer />
            </div>
            <Header Viewer={Viewer}/>
        </div>
    )
}

export default LandingPage