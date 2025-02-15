const IncomeTable = () => {
  return (
    <div class="">
        <h1 class="text-center mx-auto w-75 mb-3 p-2 bg-info text-light rounded-2">Average Added Income Per Month for BGFF Partners</h1>
        <table class="table table-bordered text-center table-striped center align-middle">
            <thead>
                <tr>
                    <th scope="col">Site</th>
                    <th scope="col">High</th>
                    <th scope="col">Average</th>
                    <th scope="col">Low</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Laundromats</th>
                    <td>$2000</td>
                    <td>$1000</td>
                    <td>$500</td>
                </tr>
                <tr>
                    <th scope="row">Supermarkets</th>
                    <td>$1500</td>
                    <td>$600</td>
                    <td>$500</td>
                </tr>
                <tr>
                    <th scope="row">Car Washes / Smoke Shops / Thrift Stores / Restaurants / Water Stores</th>
                    <td>$1250</td>
                    <td>$500</td>
                    <td>$300</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default IncomeTable