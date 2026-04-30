const projects = [
  {
    number: "01",
    title: "OpenClaw personal AI system",
    description:
      "Built a personal AI operating layer that combines agents, structured memory, and daily workflow automation to accelerate execution and decision-making.",
    tags: ["LLMs", "Agent Orchestration", "TypeScript", "Automation"],
  },
  {
    number: "02",
    title: "Commercial Realization Engine at Herbalife",
    description:
      "Designed an enterprise analytics and activation framework that connected sales, marketing, and operations signals to improve planning and measurable commercial impact.",
    tags: ["Data Strategy", "Measurement", "Attribution", "Executive Dashboards"],
  },
  {
    number: "03",
    title: "BI Center of Excellence at Gap",
    description:
      "Established a BI Center of Excellence with shared standards, governance, and enablement practices that scaled trusted reporting across business units.",
    tags: ["Business Intelligence", "Governance", "Data Modeling", "Enablement"],
  },
  {
    number: "04",
    title: "Digital Analytics at Vera Bradley",
    description:
      "Led digital analytics modernization across ecommerce and performance channels, improving funnel visibility and creating stronger experimentation loops.",
    tags: ["Digital Analytics", "Ecommerce", "Experimentation", "Adobe Analytics"],
  },
];

const stackCategories = [
  {
    label: "AI & Agents",
    tools: ["Anthropic API", "Claude Code", "OpenAI API", "Gemini", "Perplexity", "LangChain", "Cursor"],
  },
  {
    label: "Data & Analytics",
    tools: [
      "SQL",
      "Python",
      "Power BI",
      "Tableau",
      "Looker",
      "Amplitude",
      "Heap",
      "Google Analytics",
      "Adobe Analytics",
      "Snowflake",
      "BigQuery",
      "Databricks",
    ],
  },
  {
    label: "Marketing & Experience",
    tools: [
      "Salesforce Marketing Cloud",
      "Salesforce CRM",
      "Braze",
      "Adobe Experience Platform",
      "Tealium",
      "Adobe Launch",
      "Adobe Target",
      "Optimizely",
    ],
  },
  {
    label: "Engineering & Delivery",
    tools: ["Azure DevOps", "AWS", "GitHub Actions", "Git", "Vercel", "VS Code"],
  },
  {
    label: "Automation & Integration",
    tools: [
      "Make.com",
      "Zapier",
      "Power Automate",
      "Power Apps",
      "Google APIs",
      "OAuth 2.0",
      "Telegram Bot API",
    ],
  },
  {
    label: "Productivity & Ops",
    tools: ["SharePoint", "Slack", "Microsoft Teams", "Granola", "OmniFocus", "Obsidian", "Figma", "Gamma"],
  },
];

const journeyEntries = [
  {
    company: "Herbalife",
    years: "Nov 2024–Present",
    title: "Director of Global Measurement, Commercial Realization & MarTech Operations",
    description:
      "Built the global digital performance organization from scratch, spanning measurement strategy, campaign operations, and communications platform delivery across global markets. Created the connective tissue between data, media, and execution so teams could move with more clarity and speed.",
  },
  {
    company: "Gap Inc.",
    years: "Nov 2021–Nov 2024",
    title: "Senior Manager, Enterprise Data Products",
    description:
      "Defined the vision and built the Enterprise BI Center of Excellence serving 5000+ weekly active users across a $16B brand portfolio. Led product strategy, operating rhythms, and adoption programs that made trusted data more useful in everyday decisions.",
  },
  {
    company: "Amway",
    years: "Jan 2020–Nov 2021",
    title: "Senior Digital Strategist",
    description:
      "Owned digital product strategy for a global $8.9B CPG organization, including roadmap planning presented to board and executive leadership. Helped align cross-functional teams around measurable priorities and a more coherent customer experience.",
  },
  {
    company: "Vera Bradley",
    years: "Apr 2016–Jan 2020",
    title: "Digital Analytics Manager, then Senior Digital Product Owner",
    description:
      "Built the Digital Analytics function from scratch and established a scalable measurement foundation for mobile and web. Later led agile product delivery to turn insight into shipped features and stronger digital outcomes.",
  },
  {
    company: "Earlier Roles",
    years: "Before 2016",
    title: "Meijer and Rosler Metal Finishing",
    description:
      "Early chapters at Meijer and Rosler Metal Finishing shaped my approach to operations, analysis, and practical problem solving. Those roles built the foundation for how I lead today: hands-on, people-centered, and outcomes-focused.",
  },
];

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--color-soil)",
        color: "var(--color-linen)",
        fontFamily: "var(--font-body)",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.25rem 2rem",
          borderBottom: "1px solid var(--color-bark)",
          position: "sticky",
          top: 0,
          backgroundColor: "var(--color-soil)",
        }}
      >
        <span
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--color-moss)",
            fontFamily: "var(--font-display)",
          }}
        >
          Kate Haan
        </span>
        <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
          <a
            href="#home"
            style={{ color: "var(--color-amber)", textDecoration: "none", fontFamily: "var(--font-body)" }}
          >
            Home
          </a>
          <a
            href="#work"
            style={{ color: "var(--color-amber)", textDecoration: "none", fontFamily: "var(--font-body)" }}
          >
            Work
          </a>
          <a
            href="#contact"
            style={{ color: "var(--color-amber)", textDecoration: "none", fontFamily: "var(--font-body)" }}
          >
            Contact
          </a>
        </div>
      </nav>

      <section
        id="home"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "5rem 2rem 3rem",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "0.8rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-sage)",
            fontFamily: "var(--font-body)",
          }}
        >
          Strategy + Execution
        </p>
        <h1
          style={{
            margin: "1rem 0 1.25rem",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            lineHeight: 1.1,
            color: "var(--color-cream)",
            fontFamily: "var(--font-display)",
          }}
        >
          I lead with strategy. I build with my hands.
        </h1>
        <p
          style={{
            maxWidth: "65ch",
            margin: 0,
            lineHeight: 1.75,
            color: "var(--color-linen)",
            fontFamily: "var(--font-body)",
          }}
        >
          I spend my days leading teams and my evenings building AI agents. Also bees.
        </p>
      </section>

      <section
        id="work"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "1rem 2rem 5rem",
        }}
      >
        <h2
          style={{
            margin: "0 0 1.5rem",
            fontSize: "1.5rem",
            color: "var(--color-cream)",
            fontFamily: "var(--font-display)",
          }}
        >
          Selected Work
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
          }}
        >
          {projects.map((project) => (
            <article
              key={project.number}
              style={{
                padding: "1.25rem",
                border: "1px solid var(--color-bark)",
                backgroundColor: "var(--color-soil)",
                borderRadius: "10px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "0.8rem",
                  letterSpacing: "0.14em",
                  color: "var(--color-sage)",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-body)",
                }}
              >
                {project.number}
              </p>
              <h3
                style={{
                  margin: "0.6rem 0",
                  color: "var(--color-cream)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  margin: "0 0 1rem",
                  lineHeight: 1.65,
                  color: "var(--color-linen)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {project.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.75rem",
                      padding: "0.35rem 0.55rem",
                      backgroundColor: "var(--color-soil)",
                      border: "1px solid var(--color-moss)",
                      borderRadius: "999px",
                      color: "var(--color-fern)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="journey"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "1rem 2rem 5rem",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "0.8rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-sage)",
            fontFamily: "var(--font-body)",
          }}
        >
          Journey
        </p>
        <h2
          style={{
            margin: "1rem 0 1.5rem",
            fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)",
            lineHeight: 1.2,
            color: "var(--color-cream)",
            fontFamily: "var(--font-display)",
          }}
        >
          Career Timeline
        </h2>

        <div
          style={{
            position: "relative",
            paddingLeft: "2rem",
            borderLeft: "2px solid var(--color-moss)",
            display: "grid",
            gap: "1.25rem",
          }}
        >
          {journeyEntries.map((entry) => (
            <article
              key={`${entry.company}-${entry.years}`}
              style={{
                position: "relative",
                border: "1px solid var(--color-bark)",
                borderRadius: "10px",
                backgroundColor: "var(--color-soil)",
                padding: "1rem 1rem 1rem 1.1rem",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-2.4rem",
                  top: "1.05rem",
                  width: "0.75rem",
                  height: "0.75rem",
                  borderRadius: "999px",
                  backgroundColor: "var(--color-moss)",
                  border: "2px solid var(--color-soil)",
                }}
              />
              <h3
                style={{
                  margin: "0 0 0.35rem",
                  color: "var(--color-cream)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {entry.company}
              </h3>
              <p
                style={{
                  margin: "0 0 0.75rem",
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em",
                  textTransform: "none",
                  color: "var(--color-sage)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {entry.title} · {entry.years}
              </p>
              <p
                style={{
                  margin: 0,
                  lineHeight: 1.7,
                  color: "var(--color-linen)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {entry.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "1rem 2rem 5rem",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "0.8rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-sage)",
            fontFamily: "var(--font-body)",
          }}
        >
          About
        </p>
        <h2
          style={{
            margin: "1rem 0 1.25rem",
            fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)",
            lineHeight: 1.2,
            color: "var(--color-cream)",
            fontFamily: "var(--font-display)",
          }}
        >
          I build new things with heart, grit, and curiosity.
        </h2>
        <p
          style={{
            maxWidth: "70ch",
            margin: "0 0 1rem",
            lineHeight: 1.75,
            color: "var(--color-linen)",
            fontFamily: "var(--font-body)",
          }}
        >
          For 16+ years, I have loved building from zero to one: new teams, new systems, and new
          ways of working that help people move faster with more clarity. I am energized by early
          ambiguity and the moment an idea becomes something real and useful.
        </p>
        <p
          style={{
            maxWidth: "70ch",
            margin: "0 0 1.5rem",
            lineHeight: 1.75,
            color: "var(--color-linen)",
            fontFamily: "var(--font-body)",
          }}
        >
          My CliftonStrengths top five are Learner, Futurist, Competition, Focus, and Maximizer.
          Outside work, I teach Pilates and run a farm in West Michigan with my horse, Odin.
          Life there keeps me grounded, playful, and deeply connected to what matters.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {["Learner", "Futurist", "Competition", "Focus", "Maximizer"].map((strength) => (
            <span
              key={strength}
              style={{
                fontSize: "0.75rem",
                padding: "0.35rem 0.55rem",
                backgroundColor: "var(--color-soil)",
                border: "1px solid var(--color-moss)",
                borderRadius: "999px",
                color: "var(--color-fern)",
                fontFamily: "var(--font-body)",
              }}
            >
              {strength}
            </span>
          ))}
        </div>
      </section>

      <section
        id="stack"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "1rem 2rem 5rem",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "0.8rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-sage)",
            fontFamily: "var(--font-body)",
          }}
        >
          Stack
        </p>
        <h2
          style={{
            margin: "1rem 0 1.5rem",
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            lineHeight: 1.2,
            color: "var(--color-cream)",
            fontFamily: "var(--font-display)",
          }}
        >
          Tools I use to build, measure, and ship.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
          }}
        >
          {stackCategories.map((category) => (
            <article
              key={category.label}
              style={{
                border: "1px solid var(--color-bark)",
                borderRadius: "10px",
                backgroundColor: "var(--color-soil)",
                padding: "1rem",
              }}
            >
              <p
                style={{
                  margin: "0 0 0.75rem",
                  fontSize: "0.8rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-sage)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {category.label}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {category.tools.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      fontSize: "0.75rem",
                      padding: "0.35rem 0.55rem",
                      backgroundColor: "var(--color-soil)",
                      border: "1px solid var(--color-moss)",
                      borderRadius: "999px",
                      color: "var(--color-fern)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "1rem 2rem 5rem",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "0.8rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-sage)",
            fontFamily: "var(--font-body)",
          }}
        >
          Contact
        </p>
        <h2
          style={{
            margin: "1rem 0 1.25rem",
            fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)",
            lineHeight: 1.2,
            color: "var(--color-cream)",
            fontFamily: "var(--font-display)",
          }}
        >
          If this resonates, I would love to connect.
        </h2>
        <p
          style={{
            maxWidth: "68ch",
            margin: "0 0 1rem",
            lineHeight: 1.75,
            color: "var(--color-linen)",
            fontFamily: "var(--font-body)",
          }}
        >
          I am always open to thoughtful conversations about building better systems, teams, and
          digital experiences.
        </p>
        <p
          style={{
            maxWidth: "68ch",
            margin: "0 0 1.5rem",
            lineHeight: 1.75,
            color: "var(--color-linen)",
            fontFamily: "var(--font-body)",
          }}
        >
          Reach out on LinkedIn or take a look at what I am building on GitHub.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a
            href="https://www.linkedin.com/in/katehaan/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "0.65rem 1rem",
              borderRadius: "999px",
              border: "1px solid var(--color-moss)",
              color: "var(--color-amber)",
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              backgroundColor: "var(--color-soil)",
            }}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/kaitwaite"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "0.65rem 1rem",
              borderRadius: "999px",
              border: "1px solid var(--color-moss)",
              color: "var(--color-amber)",
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              backgroundColor: "var(--color-soil)",
            }}
          >
            GitHub
          </a>
        </div>
      </section>

      <footer
        style={{
          borderTop: "1px solid var(--color-bark)",
          marginTop: "1rem",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "1rem 2rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
            fontSize: "0.8rem",
            color: "var(--color-linen)",
            fontFamily: "var(--font-body)",
          }}
        >
          <span>Kate Haan</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </footer>
    </main>
  );
}
