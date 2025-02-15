const Row = ({icon_one, icon_two, icon_three, title_one, title_two, title_three, desc_one, desc_two, desc_three, id_one, id_two, id_three}) => {
  return (
    <div class="container-fluid bg-primary-subtle">
        <div class="row m-1 mx-5 gy-2" id="accordion">
            <div class="col-12 col-md-6 col-xl-4">
                <div class="card bg-info-subtle" data-bs-toggle="collapse" data-bs-target={`#${id_one}`} aria-expanded="true" aria-controls={id_one}>
                    <img src={icon_one} class="card-img-top w-50 d-flex align-self-center py-3 btn" alt="..." />
                    <div class="card">
                        <div class="card-header text-center pb-0" id="headingOne">
                            <div class="btn" data-bs-toggle="collapse" data-bs-target={`#${id_one}`} aria-expanded="true" aria-controls={id_one}>
                                <h2>{title_one}</h2>
                            </div>
                        </div>
                        <div id={id_one} class="collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">
                            <div class="card-body">
                                <h5>{desc_one}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-xl-4">
                <div class="card bg-info-subtle" data-bs-toggle="collapse" data-bs-target={`#${id_two}`} aria-expanded="true" aria-controls={id_two}>
                    <img src={icon_two} class="card-img-top w-50 d-flex align-self-center py-3 btn" alt="..." />
                    <div class="card">
                        <div class="card-header text-center pb-0" id="headingTwo">
                            <div class="btn" data-bs-toggle="collapse" data-bs-target={`#${id_two}`} aria-expanded="true" aria-controls={id_two}>
                                <h2>{title_two}</h2>
                            </div>
                        </div>
                        <div id={id_two} class="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                            <div class="card-body">
                                <h5>{desc_two}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-xl-4">
                <div class="card bg-info-subtle" data-bs-toggle="collapse" data-bs-target={`#${id_three}`} aria-expanded="true" aria-controls={id_three}>
                    <img src={icon_three} class="card-img-top w-50 d-flex align-self-center py-3 btn" alt="..." />
                    <div class="card">
                        <div class="card-header text-center pb-0" id="headingThree">
                            <div class="btn" data-bs-toggle="collapse" data-bs-target={`#${id_three}`} aria-expanded="true" aria-controls={id_three}>
                                <h2>{title_three}</h2>
                            </div>
                        </div>
                        <div id={id_three} class="collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                            <div class="card-body">
                                <h5>{desc_three}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Row