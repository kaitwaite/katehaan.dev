export default function Home() {
  return (
    <main className="min-h-screen">
      <nav style={{
        padding: "1.5rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid var(--color-bark)"
      }}>
        <span style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.1rem",
          color: "var(--color-cream)"
        }}>
          Kate Haan
        </span>
        <div style={{ display: "flex", gap: "2rem" }}>
          <a href="#work" style={{ fontSize: "0.875rem", color: "var(--color-linen)", letterSpacing: "0.05em", textTransform: "uppercase" }}>Work</a>
          <a href="#about" style={{ fontSize: "0.875rem", color: "var(--color-linen)", letterSpacing: "0.05em", textTransform: "uppercase" }}>About</a>
          <a href="#stack" style={{ fontSize: "0.875rem", color: "var(--color-linen)", letterSpacing: "0.05em", textTransform: "uppercase" }}>Stack</a>
          <a href="#contact" style={{ fontSize: "0.875rem", color: "var(--color-linen)", letterSpacing: "0.05em", textTransform: "uppercase" }}>Contact</a>
        </div>
      </nav>

      <section style={{
        padding: "6rem 2rem 4rem",
        maxWidth: "900px",
        margin: "0 auto"
      }}>
        <p style={{
          fontSize: "0.875rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--color-sage)",
          marginBottom: "1.5rem"
        }}>
          Director of Digital · Builder · Daily Shipper
        </p>

        <h1 style={{ marginBottom: "1.5rem" }}>
          I lead with strategy.<br />
          I build with my hands.
        </h1>

        <p style={{
          fontSize: "1.25rem",
          lineHeight: "1.8",
          color: "var(--color-linen)",
          maxWidth: "60ch",
          marginBottom: "3rem"
        }}>
          16+ years building data products, analytics teams, and digital infrastructure
          at scale. Right now I am also building AI agents, shipping personal tools daily,
          and figuring out what it looks like when measurement, experience, and intelligence
          finally work as one system.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="https://www.linkedin.com/in/katehaan/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.75rem 1.75rem",
              backgroundColor: "var(--color-moss)",
              color: "var(--color-cream)",
              borderRadius: "4px",
              fontSize: "0.875rem",
              letterSpacing: "0.05em",
              transition: "background-color 200ms ease"
            }}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/kaitwaite"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.75rem 1.75rem",
              backgroundColor: "transparent",
              color: "var(--color-cream)",
              border: "1px solid var(--color-bark)",
              borderRadius: "4px",
              fontSize: "0.875rem",
              letterSpacing: "0.05em",
              transition: "border-color 200ms ease"
            }}
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
