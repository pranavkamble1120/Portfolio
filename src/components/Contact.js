
function Contact() {
  const mobileNumber = "+918412801181";
  const email = "pranavkamble4678@gmail.com";

  const message =
    "Hello Pranav, I visited your portfolio and would like to discuss a website project.";

  const emailLink = `mailto:${email}?subject=${encodeURIComponent(
    "Website Project Enquiry"
  )}`;

  const whatsappLink = `https://wa.me/${mobileNumber.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(message)}`;

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
          <a
            className="contact-button"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Me
          </a>

          <a className="contact-button" href={emailLink}>
            Email Me
          </a>
        </div>

        <div className="contact-details">
          <div>
            <span>Email</span>
            <a href={`mailto:${email}`}>{email}</a>
          </div>

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
