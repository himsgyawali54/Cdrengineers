class MyFooterForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="card">
        <div class="card-body">
          <span>Get CDR Engineers Australia</span>
          <form action="" target="_blank">
            <div class="row">
              <div class="col-12 col-md-6">
                <label for="nameFooter" class="form-label">Name*</label>
                <input
                  class="form-control"
                  type="text"
                  name="Name"
                  id="nameFooter"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="col-12 col-md-6">
                <label for="numberFooter" class="form-label"
                  >Number</label
                >
                <input
                  class="form-control"
                  type="tel"
                  name="Number"
                  id="numberFooter"
                  placeholder="Your Number"
                />
              </div>
              <div class="col-12">
                <label for="emailFooter" class="form-label">Email*</label>
                <input
                  class="form-control"
                  type="email"
                  name="Email"
                  id="emailFooter"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div class="col-12">
                <label for="messageFooter" class="form-label"
                  >Message</label
                >
                <textarea
                  name="Message"
                  id="messageFooter"
                  rows="1"
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
customElements.define("my-footer-form", MyFooterForm);
