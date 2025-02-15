import FAQ from "./FAQ.js"

const FAQs = () => {
  return (
    <div id="FAQs">
        <h1 class="display-5 text-center text-decoration-underline mb-3 mt-0">FAQs</h1>
        <FAQ
          question={<p class="mb-0">Where does Buy Gum Free Fun operate? And how long has BGFF been in business?</p>}
          answer={<p>Although we are based in Temecula, we serve everywhere in Southern California except for Riverside County, and we've been working hard for our partners for 14 years and counting!</p>}
          id="0"
        />
        <FAQ
          question={<p class="mb-0">Is this considered gambling?</p>}
          answer={<p>No. The founder of Buy Gum Free Fun is a California state attorney with expertise on the legality of amusement devices (such as coin pusher machines) in the state of California, and we are confident that our vending machines adhere to California Penal Code Section 330 and are perfectly legal. You can read more about our legal argument here.</p>}
          id="1"
        />
        <FAQ
          question={<p class="mb-0">Why should I choose Buy Gum Free Fun instead of buying a similar product by myself?</p>}
          answer={<p>Time, money, and hassle! We take care of all of the maintenance, repairs, and upgrades, and our years of experience building and fixing machines like this makes the process painless. We also handle transporting all of the coins to the bank (that's over 40+ lbs!) and ensuring a smooth transfer of your profits back to you. By choosing Buy Gum Free Fun, you won't have to spend time and money on maintaining the machine and can focus on your business.</p>}
          id="2"
        />
        <FAQ
          question={<p class="mb-0">Why should I choose Buy Gum Free Fun instead of a different business?</p>}
          answer={<p>Buy Gum Free Fun is one of the leading names in this space, with over a decade of experience working with over 200 businesses throughout Southern California. Our 50/50 profit sharing model is also unique as we want our clients to maximize their profits, and we happily will fix any general wear-and-tear to the Amusement Vending Machine for free to further benefit our clients. Our legal argument also separates us from the competition, as the legality of our machines is substantially less subjective than our competitors' machines. This ensures the machine is not subject to legal headaches. We have the resources and knowledge to engineer upgrades to our machines while still being small enough that we know you by name!</p>}
          id="3"
        />
    </div>
  )
}

export default FAQs