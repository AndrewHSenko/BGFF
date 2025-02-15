const FAQ = ({question, answer, id}) => {
  return (
    <div class="px-3 px-md-5 m-2">
        <button class="w-100 text-start bg-info-subtle pt-1 pb-0" type="button" data-bs-toggle="collapse" data-bs-target={"#faq" + id} aria-expanded="false" aria-controls={"faq" + id}>
            <h4 class="d-none d-lg-block pb-0">{question}</h4>
            <h5 class="d-block d-lg-none pb-0">{question}</h5>
        </button>
        <div class="collapse" id={"faq" + id}>
            <div class="lead pt-2 px-3 border">
                {answer}
            </div>
        </div>
    </div>
  )
}

export default FAQ