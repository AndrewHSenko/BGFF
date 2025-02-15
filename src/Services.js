import Service from "./Service.js";
import Delivery from "./Assets/truck.svg";
import Maintenance from "./Assets/wrench.svg";
import Collections from "./Assets/coin.svg";
import Security from "./Assets/siren.svg";
import Repair from "./Assets/worker.svg";
import Accounting from "./Assets/calculator.svg";
import Electricity from "./Assets/electricity.svg";
import Space from "./Assets/business.svg";
import Supervision from "./Assets/supervision.svg";

const Services = () => {
  return (
    <div id="Services" class="bg-primary-subtle p-2 p-md-3">
        <div class="container-fluid bg-primary-subtle">
          <h1 class="text-center text-dark display-4 text-decoration-underline">BGFF PROVIDES:</h1>
          <div class="row m-1 mx-2 gy-2" id="accordion_one">
            <div class="col-12 col-md-6 col-xl-4">
              <Service icon={Delivery} title={"Delivery and Installation"} desc={"Buy Gum Free Fun will deliver our Amusement Vending Machine and install it at your location free of charge! You simply pick out the space, and our mechanics will set up the machine so you don't have to break a sweat. BGFF will even remove your machine for free if you are not satisfied after 3 months."} id="1" ac_id="one"/>
            </div>
          <div class="col-12 col-md-6 col-xl-4">
              <Service icon={Maintenance} title={"Preventative Maintenance"} desc={"Our experienced team of mechanics will regularly perform maintenace for FREE on a schedule of your choosing, ranging from once a month to twice a week. This helps prevent any disruption to your business during business hours and helps keep the machine running smoothly. We will also notify you 3 days in advance with an estimated time of service and the contact information of our mechanic."} id="2" ac_id="one"/>
          </div>
          <div class="col-12 col-md-6 col-xl-4">
              <Service icon={Collections} title={"Scheduled Collections"} desc={"Buy Gum Free Fun will make routine collections based on how much revenue the machine makes and what works best for your schedule. We make sure that you are aware of when a collection is to be made well in advance, and we minimize the amount of money left in the machine by increasing the frequency of collections for machines with higher revenue."} id="3" ac_id="one"/>
          </div>
          <div class="col-12 col-md-6 col-xl-4">
              <Service icon={Security} title={"Security Modifications"} desc={"Every machine comes with an optional shark cage and tilt alarm for free to provide security and protect any cash in the machine. Buy Gum Free Fun works hard to ensure every machine is secure by coming up with new and improved security features to add to your Amusement Vending Machine."} id="4" ac_id="one"/>
          </div>
          <div class="col-12 col-md-6 col-xl-4">
              <Service icon={Repair} title={"On-Site Repairs"} desc={"Buy Gum Free Fun performs timely repairs of your machine whenever there's an issue. You never have to pay directly to repair the machine as the repair cost is taken from the machine's monthly revenue (before that revenue is split between you and BGFF). This means you never have to worry about spending a cent on repairs!"} id="5" ac_id="one"/>
          </div>
          <div class="col-12 col-md-6 col-xl-4">
              <Service icon={Accounting} title={"Metered Accounting"} desc={"Know exactly how much your machine makes through our metered accounting. Buy Gum Free Fun is transparent on your machine's total revenue, revenue from each collection, repair costs, and the 50/50 split of revenue between us and you."} id="6" ac_id="one"/>
          </div>
          </div>
          <h1 class="text-center text-dark pt-2 display-4 text-decoration-underline">SITE PROVIDES:</h1>
          <div class="row m-1 mx-2 gy-2" id="accordion_two">
            <div class="col-12 col-md-6 col-xl-4">
              <Service icon={Electricity} title={"Electricity"} desc={"Our machines can be plugged into most standard power outlets. Reach out to the BGFF team with any questions regarding how much electricity our machines typically use."} id="7" ac_id="two"/>
            </div>
            <div class="col-12 col-md-6 col-xl-4">
              <Service icon={Space} title={"Space"} desc={"Buy Gum Free Fun will visit your location to help determine the best spot for your Amusement Vending Machine. We are happy to assist you in making space for the machine, and we have experience with fitting our machine in dozens of locations."} id="8" ac_id="two"/>
            </div>
            <div class="col-12 col-md-6 col-xl-4">
              <Service icon={Supervision} title={"Supervision"} desc={"You simply have to let us know if there's an issue with your Amusement Vending Machine, and Buy Gum Free Fun will do our best to serve you and your machine as quickly as possible. We also routinely check the state of your machine during our collections."} id="9" ac_id="two"/>
            </div>
      
          </div>
        
        
        </div>
        
    </div>
  )
}

export default Services