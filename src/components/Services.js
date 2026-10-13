const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional websites for small businesses, shops, service providers, and local brands.",
    features: ["Responsive layout", "Business information", "Contact links"],
  },
  {
    number: "02",
    title: "Portfolio Websites",
    description:
      "Personal portfolio websites for developers, photographers, freelancers, and professionals.",
    features: ["Project gallery", "About section", "Resume and social links"],
  },
  {
    number: "03",
    title: "React Development",
    description:
      "Interactive frontend applications with reusable components and modern user interfaces.",
    features: ["React components", "Interactive UI", "API integration"],
  },
  {
    number: "04",
    title: "Full Stack Applications",
    description:
      "Web applications using Java, Spring Boot, REST APIs, and MySQL.",
    features: ["Backend APIs", "Database integration", "CRUD functionality"],
  },
];

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="section-heading">
        <p className="eyebrow">HOW I CAN HELP</p>
        <h2>Services for <span>Your Business</span></h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <span className="service-number">{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <ul>
              {service.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>

            <a
              href="#contact"
              className="text-link"
              aria-label={`Enquire about ${service.title}`}
            >
              Discuss service ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;