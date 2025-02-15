const Service = ({id, icon, title, desc, ac_id}) => {
  return (
    <div class="card bg-info-subtle" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="true" aria-controls={id}>
        <img src={icon} class="card-img-top w-75 d-flex align-self-center py-3 btn" alt="..." />
        <div class="card">
            <div class="card-header text-center pb-0" id="headingOne">
                <div class="btn" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="true" aria-controls={id}>
                    <h2>{title}</h2>
                </div>
            </div>
            <div id={id} class="collapse" aria-labelledby="headingOne" data-bs-parent={`#accordion_${ac_id}`}>
                <div class="card-body">
                    <h5>{desc}</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service