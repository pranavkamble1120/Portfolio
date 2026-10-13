
function Contact() {
  // Replace these with your actual contact details
//   const whatsappNumber = "8412801181";
  const mobileNumber = "+918412801181";
  const email = "pranavkamble4678@gmail.com";

  const message =
    "Hello Pranav, I visited your portfolio and would like to discuss a website project.";

//   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//     message
//   )}`;

  const emailLink = `mailto:${email}?subject=${encodeURIComponent(
    "Website Project Enquiry"
  )}`;

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-panel">
        <p className="eyebrow">HAVE A PROJECT IN MIND?</p>

        <h2>
          Let's build something
          <br />
          <span>amazing together.</span>
        </h2>

        <p className="contact-description">
          Have an idea for a website or web application?
          Send me a message to discuss your requirements,
          timeline, and project details.
        </p>

        <div className="contact-actions">
          {/* <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Chat on WhatsApp ↗
          </a> */}

          {/* <a href={emailLink} className="btn btn-outline">
            Send an Email ↗
          </a> */}
        </div>

        <div className="contact-details">
          <div>
            <span>Email</span>
            <a href={`mailto:${email}`}>{email}</a>
          </div>

          {/* <div>
            <span>Mobile / WhatsApp</span>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {mobileNumber}
            </a>
          </div> */}

          <div>
            <span>GitHub</span>
            <a
              href="https://github.com/pranavkamble1120"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/pranavkamble1120 ↗
            </a>
          </div>

          <div>
            <span>LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/pranav-kamble-2429b2281/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
