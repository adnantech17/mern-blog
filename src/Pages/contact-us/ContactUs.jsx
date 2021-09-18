import "./contact-us.scss";

const ContactUs = () => {
  return (
    <div className="contact" id="contact-us">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 contact-form">
            <h2 className="title">CONTACT US</h2>

            <form method="post">
              <input type="hidden" data-form-email="true" />
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  required=""
                  placeholder="Name*"
                  data-form-field="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  required=""
                  placeholder="Email*"
                  data-form-field="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  placeholder="Phone"
                  data-form-field="Phone"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Message"
                  rows="7"
                  data-form-field="Message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-lg btn-success form-group"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="contact-info col-sm-12 col-md-4">
            <h3 className="title" data-aos="fade-up">
              CONTACT INFO
            </h3>
            <div className="contact-address">
              <div className="icon">
                <i className="fas fa-address-card"></i>
              </div>
              <div className="data">
                <h5>Where to find us</h5>
                <p>
                  House No. 02, Road No.32, Mirpur Road,
                  <br />
                  Dhanmondi, Dhaka-1209,
                  <br />
                  Bangladesh.
                </p>
              </div>
            </div>

            <div className="contact-email">
              <div className="icon">
                <i className="fas fa-envelope-square"></i>
              </div>
              <div className="data">
                <h5>Email us</h5>
                <p>example.ex@example.com</p>
              </div>
            </div>

            <div className="contact-phone">
              <div className="icon">
                <i className="fas fa-phone-square"></i>
              </div>
              <div className="data">
                <h5>Call us</h5>
                <p>
                  01992XXXX
                  <br />
                  01811XXXXXX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
