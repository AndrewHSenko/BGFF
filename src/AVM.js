import AVM_one from "./Assets/AVM_One.JPG";
import AVM_two from "./Assets/AVM_Two.JPG";

const AVM = () => {
  return (
    <div id="AVM" class="container-fluid bg-success-subtle p-xl-3 py-3">
      <h1 class="text-center display-2 text-dark fst-italic mb-4 text-decoration-underline">The BGFF Amusement Vending Machine</h1>
      <div class="row d-flex justify-content-evenly">
        <div class="col-md-3 d-flex justify-content-center">
          <img class="w-100 d-none d-md-block rounded" src={AVM_one} alt="BGFF Machine" />
          <img class="w-50 p-2 d-block d-md-none rounded" src={AVM_one} alt="BGFF Machine" /> {/* For mobile */} 
          <img class="w-50 p-2 d-block d-md-none rounded" src={AVM_two} alt="BGFF Machine" /> {/* For mobile */} 
        </div>
        <div class="col-md-5 d-flex justify-content-center align-content-center text-center text-dark bg-warning-subtle p-lg-2 p-xl-3 px-4 py-3 rounded-4">
          <p class="fs-2 align-self-center d-none d-xxl-block mb-0 py-3">The Buy Gum Free Fun Amusement Vending Machine (AVM) is a vending machine where someone can use a quarter to purchase gum.<br />After buying the gum, the person can play an interactive game for free where they try to time where their quarter lands to push coins and other prizes off of a ledge, similar to a coin pusher machine.</p>
          <p class="fs-3 align-self-center d-none d-xl-block d-xxl-none mb-0 py-3">The Buy Gum Free Fun Amusement Vending Machine (AVM) is a vending machine where someone can use a quarter to purchase gum. <br/>After buying the gum, the person can play an interactive game for free where they try to time where their quarter lands to push coins and other prizes off of a ledge, similar to a coin pusher machine.</p>
          <p class="fs-4 align-self-center d-none d-lg-block d-xl-none mb-0 py-3">The Buy Gum Free Fun Amusement Vending Machine (AVM) is a vending machine where someone can use a quarter to purchase gum. <br/>After buying the gum, the person can play an interactive game for free where they try to time where their quarter lands to push coins and other prizes off of a ledge, similar to a coin pusher machine.</p>
          <p class="fs-5 align-self-center d-block d-lg-none mb-0">The Buy Gum Free Fun Amusement Vending Machine (AVM) is a vending machine where someone can use a quarter to purchase gum. <br/>After buying the gum, the person can play an interactive game for free where they try to time where their quarter lands to push coins and other prizes off of a ledge, similar to a coin pusher machine.</p>
        </div>
        <div class="col-md-3 d-none d-md-flex justify-content-center">
            <img class="w-100 rounded" src={AVM_two} alt="BGFF Machine" />
        </div>
      </div>
      <h1 class="text-center fs-4 text-dark m-4 text-decoration-underline">Watch this fan-filmed video to see it in action!</h1>
      <div>
        <iframe class="w-100 d-block m-auto min-vh-100" src="https://www.youtube.com/embed/iZ8k8fmyMHQ" title="Buy Gum Free Fun!" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default AVM