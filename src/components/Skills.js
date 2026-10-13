const skillGroups = [
  {
    title: "Frontend Development",
    number: "01",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design"],
  },
  {
    title: "Backend Development",
    number: "02",
    skills: ["Java", "Spring Boot", "REST APIs", "Hibernate", "JPA", "JDBC"],
  },
  {
    title: "Database & Tools",
    number: "03",
    skills: ["MySQL", "Git", "GitHub", "Maven", "Postman", "IntelliJ IDEA"],
  },
];

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">MY TECH STACK</p>
        <h2>Skills & <span>Technologies</span></h2>
        <p className="section-description">
          Technologies I use to design, develop, and maintain web applications.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.number}>
            <span className="skill-number">{group.number}</span>
            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;