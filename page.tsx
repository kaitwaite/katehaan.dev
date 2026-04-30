const nowCards = [
  {
    title: "Building agents",
    body: "Evenings go to wiring up AI helpers, small tools, and experiments that make the workday a little lighter.",
  },
  {
    title: "Leading teams",
    body: "Days are for clarity, pace, and people — making sure strategy turns into something shippable and useful.",
  },
  {
    title: "Farm & bees",
    body: "West Michigan soil, a horse named Odin, and hives that remind me good systems need patience and care.",
  },
];

const navLinks = [
  { href: "#now", label: "Now" },
  { href: "#work", label: "Work" },
  { href: "#tools", label: "Tools" },
  { href: "#writing", label: "Writing" },
  { href: "#about", label: "About" },
];

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--pine)",
        color: "var(--bone)",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* NAV */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          padding: "1.25rem clamp(1.5rem, 4vw, 2.5rem)",
          borderBottom: "1px solid #243530",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "1.1rem",
            letterSpacing: "0.04em",
            color: "var(--bone)",
          }}
        >
          Kate Haan
        </span>
        <nav style={{ display: "flex", gap: "1.75rem", flexWrap: "wrap" }}>
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                fontWeight: 400,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--muted)",
                textDecoration: "none",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* HERO */}
        <section
          id="hero"
          style={{
            maxWidth: "860px",
            width: "100%",
            margin: "0 auto",
            padding: "6rem clamp(1.5rem, 4vw, 2.5rem) 5rem",
          }}
        >
          <p
            style={{
              margin: "0 0 1.25rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--fern)",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <span style={{ display: "inline-block", width: "24px", height: "1px", background: "var(--fern)" }} />
            Builder · Systems Thinker · Beekeeper
          </p>
          <h1
            style={{
              margin: "0 0 1.75rem",
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              lineHeight: 1.1,
              color: "var(--bone)",
              letterSpacing: "-0.01em",
            }}
          >
            I build things.<br />
            Mostly digital.<br />
            Also a farm.
          </h1>
          <p
            style={{
              margin: "0 0 2.5rem",
              maxWidth: "480px",
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "0.98rem",
              lineHeight: 1.85,
              color: "var(--sage)",
            }}
          >
            I spend my days leading teams and my evenings building AI agents. Also bees.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="#now"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-mono)",
                fontWeight: 400,
                fontSize: "0.62rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.55rem 1.5rem",
                border: "1px solid var(--mustard)",
                backgroundColor: "transparent",
                color: "var(--mustard)",
              }}
            >
              Now →
            </a>
            <a
              href="https://github.com/kaitwaite"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-mono)",
                fontWeight: 400,
                fontSize: "0.62rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.55rem 1.5rem",
                border: "1px solid #243530",
                backgroundColor: "transparent",
                color: "var(--muted)",
              }}
            >
              GitHub
            </a>
          </div>
        </section>

        {/* DIVIDER */}
        <div style={{ borderTop: "1px solid #1E3028", maxWidth: "860px", width: "100%", margin: "0 auto", padding: "0 clamp(1.5rem, 4vw, 2.5rem)" }} />

        {/* NOW */}
        <section
          id="now"
          style={{
            maxWidth: "860px",
            width: "100%",
            margin: "0 auto",
            padding: "5rem clamp(1.5rem, 4vw, 2.5rem)",
          }}
        >
          <p
            style={{
              margin: "0 0 0.6rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              fontWeight: 400,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--fern)",
            }}
          >
            Now — April 2026
          </p>
          <h2
            style={{
              margin: "0 0 2.5rem",
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              lineHeight: 1.2,
              color: "var(--bone)",
            }}
          >
            What I'm working on.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1px",
              background: "#1E3028",
            }}
          >
            {nowCards.map((card) => (
              <article
                key={card.title}
                style={{
                  padding: "1.75rem",
                  backgroundColor: "#162420",
                  borderLeft: "3px solid var(--mustard)",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 0.75rem",
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "0.68rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--bone)",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                    fontSize: "0.87rem",
                    lineHeight: 1.75,
                    color: "var(--sage)",
                  }}
                >
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div style={{ borderTop: "1px solid #1E3028", maxWidth: "860px", width: "100%", margin: "0 auto", padding: "0 clamp(1.5rem, 4vw, 2.5rem)" }} />

        {/* PLACEHOLDER SECTIONS */}
        {["Work", "Tools", "Writing", "About"].map((section) => (
          <section
            key={section}
            id={section.toLowerCase()}
            style={{
              maxWidth: "860px",
              width: "100%",
              margin: "0 auto",
              padding: "5rem clamp(1.5rem, 4vw, 2.5rem)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--fern)",
                marginBottom: "0.6rem",
              }}
            >
              {section}
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                color: "var(--bone)",
                marginBottom: "1rem",
              }}
            >
              Coming soon.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.9rem", color: "var(--sage)" }}>
              This section is in progress.
            </p>
            <div style={{ borderTop: "1px solid #1E3028", marginTop: "5rem" }} />
          </section>
        ))}

        {/* FOOTER */}
        <footer
          style={{
            borderTop: "1px solid #1E3028",
            padding: "2rem clamp(1.5rem, 4vw, 2.5rem)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[
              { href: "https://www.linkedin.com/in/katehaan/", label: "LinkedIn" },
              { href: "https://github.com/kaitwaite", label: "GitHub" },
              { href: "https://brand-book.katehaan.dev", label: "Brand Book" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.58rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.56rem",
              letterSpacing: "0.12em",
              color: "#2A4035",
              margin: 0,
            }}
          >
            Kate Haan · 2026
          </p>
        </footer>
      </main>
    </div>
  );
}
