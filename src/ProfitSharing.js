import diagram from './Assets/diagram.png';

const ProfitSharing = () => {
  return (
    <div class="container-fluid mt-lg-0 mt-3 mb-2">
        <h1 class="text-center text-decoration-underline display-4">How It Works</h1>
        <div class="row d-flex justify-content-center mx-lg-5">
            <img class="w-100 mx-lg-5" src={diagram} alt=""/>
        </div>
        <div class="row d-flex justify-content-center text-center mb-3">
            <h1 class="d-lg-block d-none display-6">Total Revenue - Repair Costs = Net Profit</h1>
            <h1 class="d-lg-none d-sm-block d-none display-6">Total Revenue - Repair Costs = Net Profit</h1>
            <h1 class="d-sm-none d-block lead fst-italic mt-2">Total Revenue - Repair Costs = Net Profit</h1>
            <h1 class="d-sm-none d-block lead">-----------------------------</h1>
            <h1 class="lead mt-2">BGFF takes the total amount of money that the AVM has made and subtracts any costs from significant repairs, resulting in the machine's net profit.</h1>
            <h1 class="lead">This net profit is then split equally (50/50) between you and Buy Gum Free Fun.</h1>
        </div>
        
    </div>
  )
}

export default ProfitSharing