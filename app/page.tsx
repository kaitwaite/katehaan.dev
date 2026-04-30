"use client";
import { useEffect, useRef } from "react";

const workItems = [
  {
    num: "01",
    title: "OpenClaw — Personal AI Operating System",
    company: "Personal",
    desc: "A system of named agents running my home and work life. Heidi handles daily ops. Sage manages health. Finn watches finances. Frank resets sessions nightly to keep costs lean. Built from scratch, runs daily.",
    tags: ["Anthropic API", "Claude Code", "Python", "Multi-agent"],
    borderColor: "var(--mustard)",
  },
  {
    num: "02",
    title: "Commercial Realization Engine",
    company: "Herbalife",
    desc: "Built the global digital performance org from scratch — measurement, campaign ops, and communications platform across global markets. Measurement drives decisioning. The platform delivers the experience.",
    tags: ["Salesforce MC", "Adobe AEP", "Braze", "Snowflake", "Power BI"],
    borderColor: "var(--fern)",
  },
  {
    num: "03",
    title: "Enterprise BI Center of Excellence",
    company: "Gap Inc.",
    desc: "Defined the vision and built the analytics function serving 5,000+ weekly users across a $16B brand portfolio — Old Navy, Gap, Banana Republic, Athleta. Governance, architecture, self-service adoption.",
    tags: ["Tableau", "Looker", "Snowflake", "BigQuery", "Data governance"],
    borderColor: "var(--fern)",
  },
  {
    num: "04",
    title: "Digital Analytics Function",
    company: "Vera Bradley",
    desc: "Built the analytics capability from zero during a full site re-platform. Owned strategy, tagging, experimentation, and performance reporting end to end. Led weekly executive thought leadership sessions.",
    tags: ["Google Analytics", "Adobe Launch", "Optimizely", "SQL"],
    borderColor: "var(--fern)",
  },
];

const toolItems = [
  { name: "Escalation Advisor", status: "Live", desc: "Should you handle it, escalate it, or skip a level? Answer in 30 seconds.", url: "https://escalation-advisor.katehaan.dev" },
  { name: "Voice Tone Shifter", status: "Live", desc: "Speak raw. Get back a version that sounds like your actual professional voice.", url: "https://voice-tone-shifter.katehaan.dev" },
  { name: "CliftonStrengths Analyzer", status: "In dev", desc: "Feed in your team's top 5. Get real insights about dynamics, gaps, and collaboration.", url: "#" },
  { name: "Kate's Brain", status: "In dev", desc: "Ask your team anything. Get answers in your voice and logic — without scheduling a meeting.", url: "#" },
];

const strengthItems = [
  { num: "01", name: "Learner", desc: "The process of growth energizes me as much as the destination. I never stop building expertise." },
  { num: "02", name: "Futurist", desc: "I see where things are going before others do — and I build the bridge to get there." },
  { num: "03", name: "Competition", desc: "I measure against the best — and I bring the people around me along for the win." },
  { num: "04", name: "Focus", desc: "I prioritize ruthlessly and execute with precision. Noise doesn't move me." },
  { num: "05", name: "Maximizer", desc: "Good enough isn't a stopping point — it's a signal to push further. I elevate everything I touch." },
];

export default function Home() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    revealRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const reveal = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      el.style.opacity = "0";
      el.style.transform = "translateY(22px)";
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      revealRefs.current.push(el);
    }
  };

  const mono: React.CSSProperties = { fontFamily: "var(--font-mono), 'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" };
  const display: React.CSSProperties = { fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif" };
  const body: React.CSSProperties = { fontFamily: "var(--font-body), 'Outfit', system-ui, sans-serif" };

  const sectionLabel: React.CSSProperties = { ...mono, color: "var(--fern)", display: "block", marginBottom: "0.6rem" };
  const sectionH2: React.CSSProperties = { ...display, fontWeight: 300, fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.1, color: "var(--pine)", marginBottom: "1.2rem" };
  const bodyText: React.CSSProperties = { ...body, fontWeight: 300, fontSize: "0.98rem", lineHeight: 1.8, color: "var(--mid)", maxWidth: "640px" };
  const card: React.CSSProperties = { background: "var(--linen)", border: "1px solid var(--canvas)", padding: "1.5rem", borderRadius: "3px" };
  const divider: React.CSSProperties = { border: "none", borderTop: "1px solid var(--canvas)", margin: "3rem 0" };
  const inner: React.CSSProperties = { maxWidth: "860px", margin: "0 auto", padding: "6rem 2rem" };

  return (
    <div style={{ ...body, minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "var(--pine)", borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "56px",
      }}>
        <span style={{ ...display, fontStyle: "italic", fontWeight: 300, fontSize: "1.1rem", color: "var(--bone)", letterSpacing: "0.12em" }}>
          Kate — Portfolio
        </span>
        <ul style={{ display: "flex", gap: "1.8rem", listStyle: "none" }}>
          {["Now", "Work", "Tools", "About"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} style={{ ...mono, color: "var(--muted)", textDecoration: "none" }}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO — dark pine, full viewport */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end",
        background: "var(--pine)", position: "relative", overflow: "hidden", paddingTop: "56px",
      }}>
        <div style={{ position: "absolute", top: "-15%", right: "-8%", width: "50vw", height: "50vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,136,42,0.15) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-12%", left: "-6%", width: "38vw", height: "38vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(168,72,50,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 2rem 5rem", position: "relative", zIndex: 1, width: "100%" }}>
          <p style={{ ...mono, color: "var(--sage)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ display: "inline-block", width: "32px", height: "1px", background: "var(--sage)" }} />
            Portfolio · 2026
          </p>
          <h1 style={{ ...display, fontWeight: 300, fontSize: "clamp(3.5rem, 10vw, 7rem)", lineHeight: 0.95, color: "var(--bone)", marginBottom: "1.5rem", letterSpacing: "-0.01em" }}>
            Kate<br />
            <span style={{ fontStyle: "italic", color: "var(--amber)" }}>Building.</span>
          </h1>
          <p style={{ ...body, fontWeight: 300, fontSize: "0.88rem", letterSpacing: "0.04em", color: "rgba(250,248,245,0.55)", marginBottom: "3rem", maxWidth: "480px", lineHeight: 1.75 }}>
            Director of Digital · Builder · Daily Shipper · West Michigan
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2.5rem" }}>
            {["Builder", "Systems Thinker", "Daily Shipper", "Beekeeper"].map((pill) => (
              <span key={pill} style={{ ...mono, padding: "0.4rem 0.9rem", border: "1px solid rgba(250,248,245,0.18)", color: "rgba(250,248,245,0.45)", borderRadius: "2px" }}>
                {pill}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#now" style={{ ...mono, padding: "0.5rem 1.4rem", border: "1px solid var(--mustard)", color: "var(--mustard)", textDecoration: "none", borderRadius: "2px" }}>
              Now →
            </a>
            <a href="#work" style={{ ...mono, padding: "0.5rem 1.4rem", border: "1px solid rgba(250,248,245,0.18)", color: "rgba(250,248,245,0.45)", textDecoration: "none", borderRadius: "2px" }}>
              Work
            </a>
          </div>
        </div>
      </section>

      {/* LIGHT SECTIONS — bone background from here down */}
      <div style={{ background: "var(--bone)", color: "var(--ink)" }}>

        {/* NOW */}
        <section id="now" style={inner}>
          <div ref={reveal}>
            <span style={sectionLabel}>Now — April 2026</span>
            <h2 style={sectionH2}>What I'm working on.</h2>
            <hr style={divider} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
              {[
                { title: "OpenClaw", body: "5 named agents running home and work. Heidi, Sage, Finn, Norah, Frank. Production daily.", accent: "var(--mustard)" },
                { title: "Commercial Realization Engine", body: "Building the connected operating system at Herbalife — measurement + experience delivery as one.", accent: "var(--fern)" },
                { title: "This site", body: "Built in public. Every section ships before it's perfect. That's the point.", accent: "var(--rust)" },
              ].map((c) => (
                <div key={c.title} style={{ ...card, borderLeft: `3px solid ${c.accent}` }}>
                  <h3 style={{ ...mono, color: "var(--pine)", marginBottom: "0.5rem" }}>{c.title}</h3>
                  <p style={{ ...bodyText, margin: 0, fontSize: "0.87rem" }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--canvas)", maxWidth: "860px", margin: "0 auto" }} />

        {/* WORK */}
        <section id="work" style={inner}>
          <div ref={reveal}>
            <span style={sectionLabel}>Work</span>
            <h2 style={sectionH2}>Things I have built.</h2>
            <hr style={divider} />

            {/* Quote */}
            <div style={{ borderLeft: "3px solid var(--mustard)", padding: "1.2rem 1.8rem", marginBottom: "3rem", background: "rgba(196,136,42,0.05)", borderRadius: "0 3px 3px 0" }}>
              <p style={{ ...display, fontStyle: "italic", fontSize: "1.3rem", color: "var(--pine)", lineHeight: 1.55, margin: 0, maxWidth: "100%" }}>
                My career is a through-line of building things that didn't exist before — in industries that didn't always know they needed them yet.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {workItems.map((item) => (
                <div key={item.num} ref={reveal} style={{ ...card, borderLeft: `3px solid ${item.borderColor}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
                    <div>
                      <span style={{ ...mono, color: "var(--mustard)", display: "block", marginBottom: "0.3rem" }}>{item.company}</span>
                      <h3 style={{ ...body, fontWeight: 500, fontSize: "0.95rem", color: "var(--pine)", letterSpacing: "0.01em" }}>{item.title}</h3>
                    </div>
                    <span style={{ ...display, fontSize: "2rem", fontWeight: 300, color: "var(--canvas)", lineHeight: 1 }}>{item.num}</span>
                  </div>
                  <p style={{ ...bodyText, marginBottom: "1rem", fontSize: "0.9rem" }}>{item.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {item.tags.map((tag) => (
                      <span key={tag} style={{ ...mono, fontSize: "0.55rem", padding: "0.25rem 0.65rem", border: "1px solid var(--canvas)", color: "var(--muted)", borderRadius: "2px" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--canvas)", maxWidth: "860px", margin: "0 auto" }} />

        {/* TOOLS */}
        <section id="tools" style={inner}>
          <div ref={reveal}>
            <span style={sectionLabel}>Tools — live & in dev</span>
            <h2 style={sectionH2}>Things I have shipped.</h2>
            <hr style={divider} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {toolItems.map((tool) => (
                <a key={tool.name} href={tool.url} target={tool.url !== "#" ? "_blank" : undefined} rel="noopener noreferrer"
                  style={{ ...card, textDecoration: "none", display: "block", borderLeft: `3px solid ${tool.status === "Live" ? "var(--fern)" : "var(--canvas)"}` }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                    <h3 style={{ ...body, fontWeight: 500, fontSize: "0.9rem", color: "var(--pine)" }}>{tool.name}</h3>
                    <span style={{ ...mono, fontSize: "0.52rem", padding: "0.2rem 0.6rem", background: tool.status === "Live" ? "rgba(46,74,62,0.1)" : "rgba(196,136,42,0.08)", color: tool.status === "Live" ? "var(--fern)" : "var(--mustard)", border: `1px solid ${tool.status === "Live" ? "var(--fern)" : "var(--mustard)"}`, borderRadius: "2px" }}>
                      {tool.status}
                    </span>
                  </div>
                  <p style={{ ...bodyText, margin: 0, fontSize: "0.87rem" }}>{tool.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--canvas)", maxWidth: "860px", margin: "0 auto" }} />

        {/* ABOUT */}
        <section id="about" style={inner}>
          <div ref={reveal}>
            <span style={sectionLabel}>About</span>
            <h2 style={sectionH2}>The story so far.</h2>

            <p style={{ ...display, fontStyle: "italic", fontSize: "1.35rem", lineHeight: 1.6, color: "var(--pine)", marginBottom: "1.6rem", maxWidth: "600px" }}>
              I build the systems, teams, and strategies that turn complexity into clarity — and I do it with rigor, imagination, and a long view.
            </p>

            <hr style={divider} />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
              <div>
                <p style={{ ...bodyText, marginBottom: "1.2rem" }}>
                  16+ years building data products, analytics teams, and digital infrastructure. Gap, Amway, Vera Bradley, Victoria's Secret, Meijer — and now a global health & wellness company where I lead measurement, insights, campaign ops, and comm ops.
                </p>
                <p style={{ ...bodyText, marginBottom: "1.2rem" }}>
                  I'm a systems thinker. I walk into broken orgs and see the intake problem, the handoff gap, the measurement void, and the team structure issue — usually before anyone's named them.
                </p>
                <p style={{ ...bodyText }}>
                  I also teach Pilates, keep bees, and run a small farm in West Michigan with a 17-hand Percheron/Thoroughbred named Odin. I've considered getting a PhD purely because I love learning that much.
                </p>
              </div>

              <div>
                <h3 style={{ ...mono, color: "var(--pine)", marginBottom: "1.2rem" }}>CliftonStrengths · Top 5</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                  {strengthItems.map((s) => (
                    <div key={s.num} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1rem 1.4rem", background: "var(--linen)", border: "1px solid var(--canvas)", borderRadius: "3px" }}>
                      <span style={{ ...mono, color: "var(--fern)", paddingTop: "3px", minWidth: "22px" }}>{s.num}</span>
                      <div>
                        <p style={{ ...mono, color: "var(--pine)", marginBottom: "0.2rem" }}>{s.name}</p>
                        <p style={{ ...body, fontWeight: 300, fontSize: "0.87rem", color: "var(--mid)", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <hr style={divider} />

            <div style={{ ...card, borderLeft: "3px solid var(--mustard)" }}>
              <p style={{ ...display, fontStyle: "italic", fontSize: "1.4rem", color: "var(--pine)", lineHeight: 1.55, margin: 0 }}>
                "The most strategic thing I can do is be entirely, specifically myself — and make sure the right people can find that."
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: "var(--pine)", padding: "3rem 2rem", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "1rem" }}>
            {[
              { href: "https://www.linkedin.com/in/katehaan/", label: "LinkedIn" },
              { href: "https://github.com/kaitwaite", label: "GitHub" },
              { href: "https://brand-book.katehaan.dev", label: "Brand Book" },
            ].map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                style={{ ...mono, color: "rgba(250,248,245,0.35)", textDecoration: "none", fontSize: "0.58rem" }}>
                {link.label}
              </a>
            ))}
          </div>
          <p style={{ ...mono, fontSize: "0.56rem", color: "rgba(250,248,245,0.2)", margin: 0 }}>
            Kate Haan · 2026 · Living document
          </p>
        </footer>

      </div>
    </div>
  );
}
