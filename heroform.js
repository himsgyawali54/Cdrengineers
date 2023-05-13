class MyHeroForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="card">
      <div class="card-body">
        <span>Get CDR Engineers Australia</span>
        <form action="" target="_blank">
          <div class="row">
            <div class="col-12 col-md-6">
              <label for="nameHero" class="form-label">Name*</label>
              <input
                class="form-control"
                type="text"
                name="Name"
                id="nameHero"
                placeholder="Your Name"
                required
              />
            </div>
            <div class="col-12 col-md-6">
              <label for="numberHero" class="form-label"
                >Number</label
              >
              <input
                class="form-control"
                type="text"
                name="Number"
                id="numberHero"
                placeholder="Your Number"
              />
            </div>
            <div class="col-12">
              <label for="emailHero" class="form-label">Email*</label>
              <input
                class="form-control"
                type="email"
                name="Email"
                id="emailHero"
                placeholder="Your Email"
                required
              />
            </div>
            <div class="col-12">
              <label for="messageHero" class="form-label"
                >Message</label
              >
              <textarea
                name="Message"
                id="messageHero"
                rows="3"
                class="form-control"
                placeholder="Enter Your Query"
              ></textarea>
            </div>
            <button class="btn-all">Free Consultation</button>
          </div>
        </form>
      </div>
    </div>
      `;
  }
}
customElements.define("my-hero-form", MyHeroForm);
