import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BrainCircuit, BarChart2, Zap, Mic, MessageSquare, BookOpen, Award, Users, Target, ChevronRight } from "lucide-react";

// Animated counter component
function AnimatedCounter({ target, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const duration = 1800;
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function LandingPage() {
  const navigate = useNavigate();

  const steps = [
    { icon: "📚", num: "01", title: "Տեսություն + Պրակտիկա", desc: "Multimedia դասեր և ինտերակտիվ թեստեր — յուրաքանչյուր աշակերտի տեմпին" },
    { icon: "🤖", num: "02", title: "Սոկրատեսյան AI", desc: "AI-ն ԵՐԲԵՔ պատրաստի պատասխան չի տալիս — հարցերի միջոցով ստիպում է ՄՏԱԾԵԼ" },
    { icon: "🎤", num: "03", title: "Բանավոր Պաշտպանություն", desc: "Speech-to-text + իմաստային վերլուծություն — «Հասկացա» ≠ ապացույց" },
    { icon: "🏆", num: "04", title: "Gamification + XP", desc: "Level-ներ, badge-եր, streak-եր — brain-ը dopamine ստանում է ուսուցումից" },
  ];

  const problems = [
    { icon: "😴", text: "Աշակերտները անգիր են անում, ոչ թե հասկանում" },
    { icon: "👤", text: "1 ուսուցիչ → 30 աշակերտ → 0 անհատական ուշադրություն" },
    { icon: "❌", text: "AI-ն misuse-ում են (ChatGPT-ından copy-paste)" },
    { icon: "📉", text: "Feedback loop-ը կոտրված է — սխալ + ոչ մի բացատրություն" },
    { icon: "🎯", text: "70%+ դիմում է մասնավոր կրկնուսույցների" },
  ];

  const stats = [
    { value: 200000, suffix: "+", label: "Թիրախ աշակերտ ՀՀ-ում" },
    { value: 16, suffix: "", label: "Հասանելի առարկա" },
    { value: 160, suffix: "+", label: "Ուսուցողական թեմա" },
    { value: 31, suffix: "%", label: "Conceptual mastery ↑" },
  ];

  const phases = [
    { phase: "Phase 1", label: "MVP Հիմա", desc: "16 առարկա, 160 թեմա, AI chat, Voice demo", color: "var(--primary)" },
    { phase: "Phase 2", label: "Q3 2026", desc: "Teacher Dashboard, real-time analytics", color: "var(--success)" },
    { phase: "Phase 3", label: "Q1 2027", desc: "OpenAI/Gemini API, real Speech Recognition", color: "var(--secondary)" },
    { phase: "Phase 4", label: "Scale", desc: "B2B school licensing, CIS expansion", color: "#f59e0b" },
  ];

  const techStack = ["OpenAI", "Google Gemini", "React + Vite", "Web Speech API", "Framer Motion", "Node.js"];

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>

      {/* ── HERO ─────────────────────────────── */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "120px 20px 80px",
        position: "relative",
      }}>

        {/* Animated glow orbs */}
        <div style={{
          position: "absolute", top: "15%", left: "10%", width: "500px", height: "500px",
          borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          filter: "blur(40px)", animation: "float 8s ease-in-out infinite", pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute", bottom: "20%", right: "8%", width: "400px", height: "400px",
          borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
          filter: "blur(40px)", animation: "float 10s ease-in-out infinite 2s", pointerEvents: "none"
        }} />

        {/* Badge */}
        <div className="pill-badge animate-fade-in" style={{ marginBottom: "32px", fontSize: "0.9rem", padding: "8px 20px" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--success)", boxShadow: "0 0 12px var(--success)", flexShrink: 0 }} />
          🚀 Hackathon Demo — Mentoria AI v1.0
        </div>

        {/* Main title */}
        <h1 className="animate-fade-in animate-delay-1" style={{
          fontSize: "clamp(2.8rem, 7vw, 6rem)",
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: "28px",
          maxWidth: "1000px",
          letterSpacing: "-1px",
        }}>
          AI-ն, որն ուսուցանում է<br />
          <span className="text-gradient">մտածելու արվեստը</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in animate-delay-2" style={{
          fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
          color: "var(--text-muted)",
          maxWidth: "680px",
          marginBottom: "56px",
          lineHeight: 1.7,
        }}>
          Ոչ թե ChatGPT-ի պատճեն, այլ Սոկրատեսյան մենթոր, որն ամեն պատասխանի փոխарен հարց է տալիս 
          — մինչև <strong style={{ color: "var(--primary)" }}>դու ինքդ հասնես ճշմարտությանը</strong>։
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in animate-delay-3" style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginBottom: "80px" }}>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/student")}
            style={{ padding: "18px 40px", fontSize: "1.15rem", borderRadius: "100px", gap: "10px", boxShadow: "0 0 40px rgba(99,102,241,0.4)" }}
          >
            <BrainCircuit size={22} />
            Փորձիր Հիմա
            <ArrowRight size={18} />
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/analytics")}
            style={{ padding: "18px 40px", fontSize: "1.15rem", borderRadius: "100px", gap: "10px" }}
          >
            <BarChart2 size={22} />
            Ուսուցչի Dashboard
          </button>
        </div>

        {/* Demo banner */}
        <div className="glass-panel animate-fade-in animate-delay-3" style={{
          padding: "20px 32px",
          maxWidth: "700px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          background: "rgba(99,102,241,0.08)",
          border: "1px solid rgba(99,102,241,0.3)",
          borderRadius: "16px",
        }}>
          <div style={{ textAlign: "left" }}>
            <div style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>
              ⚡ HACKATHON DEMO SCENARIO
            </div>
            <div style={{ color: "var(--text-main)", fontSize: "1rem" }}>
              Առարկա՝ <b>Ֆիզիկա</b> • Թեմա՝ <b>Նյուտոնի Դինամիկա</b> • AI Level: <b style={{ color: "var(--success)" }}>Socratic Mode ON</b>
            </div>
          </div>
          <button
            className="btn btn-primary"
            style={{ padding: "10px 20px", borderRadius: "100px", whiteSpace: "nowrap", flexShrink: 0 }}
            onClick={() => navigate("/student")}
          >
            Սկսել <ChevronRight size={16} />
          </button>
        </div>
      </section>

      {/* ── PROBLEM ─────────────────────────── */}
      <section style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ color: "#ef4444", fontSize: "0.85rem", letterSpacing: "3px", fontWeight: 700, marginBottom: "12px" }}>THE PROBLEM</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "16px" }}>
            Ինչո՞ւ ավանդական կրթությունը <span style={{ color: "#ef4444" }}>ձախողում է</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Ոչ թե ուսուցիչների, այլ <strong>SYSTEM</strong>-ի ձախողում
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
          {problems.map((p, i) => (
            <div key={i} className="glass-panel" style={{
              padding: "24px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              borderLeft: "3px solid #ef4444",
              background: "rgba(239,68,68,0.04)",
            }}>
              <span style={{ fontSize: "2rem", flexShrink: 0 }}>{p.icon}</span>
              <p style={{ margin: 0, fontWeight: 500, lineHeight: 1.5 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOLUTION ────────────────────────── */}
      <section style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ color: "var(--primary)", fontSize: "0.85rem", letterSpacing: "3px", fontWeight: 700, marginBottom: "12px" }}>THE SOLUTION</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "16px" }}>
            <span className="text-gradient">4-փուլ</span> ճանաչողական ուսուցման ցիկл
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Theory → Socratic → Voice → Mastered — ամեն արդյունք ստուգված է AI-ի կողմից
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          {steps.map((s, i) => (
            <div key={i} className="glass-panel" style={{
              padding: "32px 24px",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "default",
            }}
              onMouseOver={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(99,102,241,0.2)"; }}
              onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = ""; }}
            >
              <div style={{
                position: "absolute", top: "16px", right: "16px",
                fontSize: "3.5rem", fontWeight: 900, color: "rgba(99,102,241,0.08)", lineHeight: 1, fontFamily: "var(--font-heading)"
              }}>{s.num}</div>
              <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>{s.icon}</div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>{s.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS ───────────────────────────── */}
      <section style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(168,85,247,0.06) 100%)",
        borderTop: "1px solid var(--surface-border)",
        borderBottom: "1px solid var(--surface-border)",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "var(--success)", fontSize: "0.85rem", letterSpacing: "3px", fontWeight: 700, marginBottom: "12px" }}>IMPACT & SCALE</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, marginBottom: "60px" }}>Թվերով</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "32px" }}>
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900,
                  background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  lineHeight: 1, marginBottom: "12px"
                }}>
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: "1rem", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IS IT FOR ───────────────────── */}
      <section style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ color: "var(--secondary)", fontSize: "0.85rem", letterSpacing: "3px", fontWeight: 700, marginBottom: "12px" }}>TARGET USERS</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800 }}>Ո՞ւմ համար է Mentoria-ն</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {[
            {
              emoji: "🎒",
              title: "Արամ, 16 տ. — Աշակերտ",
              color: "var(--primary)",
              points: ["AI-ով personalized դաս", "Gamification + XP + Level-ներ", "Real feedback — ոչ «կարմիր X»", "Ուզում է ՀASKEL, ոչ անгир"],
            },
            {
              emoji: "👩‍🏫",
              title: "Անի, 34 տ. — Ուսուցչուհի",
              color: "var(--success)",
              points: ["30 աշակերտ — 1 dashboard", "Real-time analytics per concept", "Ժամ economy — AI ուսուցիչ-assist", "Ո՞վ ո՞ւ կանգ առ instant data"],
            },
            {
              emoji: "📊",
              title: "Investor / Hackathon Jury",
              color: "var(--secondary)",
              points: ["$4.2B CIS EdTech market 2026-ին", "200,000+ addressable users ՀՀ-ում", "B2B school licensing model", "Phase 4 → Nationwide scale"],
            },
          ].map((u, i) => (
            <div key={i} className="glass-panel" style={{ padding: "32px", borderTop: `4px solid ${u.color}` }}>
              <div style={{ fontSize: "3rem", marginBottom: "16px" }}>{u.emoji}</div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "20px", color: u.color }}>{u.title}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {u.points.map((pt, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-muted)", fontSize: "0.95rem" }}>
                    <span style={{ color: u.color, flexShrink: 0 }}>✓</span> {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── ROADMAP ─────────────────────────── */}
      <section style={{
        padding: "80px 20px",
        background: "rgba(255,255,255,0.01)",
        borderTop: "1px solid var(--surface-border)",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{ color: "#f59e0b", fontSize: "0.85rem", letterSpacing: "3px", fontWeight: 700, marginBottom: "12px" }}>ROADMAP</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800 }}>Ճանապարհային քարտեզ</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            {phases.map((p, i) => (
              <div key={i} className="glass-panel" style={{
                padding: "28px 24px",
                borderTop: `3px solid ${p.color}`,
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: "-10px", right: "-10px",
                  fontSize: "5rem", fontWeight: 900, opacity: 0.04, lineHeight: 1
                }}>{i + 1}</div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "2px", color: p.color, marginBottom: "8px", textTransform: "uppercase" }}>{p.phase}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "10px" }}>{p.label}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ──────────────────────── */}
      <section style={{ padding: "60px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", letterSpacing: "2px", textTransform: "uppercase" }}>Powered by</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
          {techStack.map((t, i) => (
            <div key={i} style={{
              padding: "10px 24px",
              border: "1px solid var(--surface-border)",
              borderRadius: "100px",
              color: "var(--text-muted)",
              fontSize: "0.95rem",
              fontWeight: 600,
              background: "rgba(255,255,255,0.03)",
            }}>{t}</div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────── */}
      <section style={{ padding: "100px 20px", textAlign: "center" }}>
        <div style={{
          maxWidth: "800px", margin: "0 auto",
          padding: "80px 40px",
          borderRadius: "32px",
          background: "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.1) 100%)",
          border: "1px solid rgba(99,102,241,0.3)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "20px", position: "relative" }}>
            Պատրա՞ստ ես <span className="text-gradient">ապագայի ուսուցմանը</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", marginBottom: "40px", lineHeight: 1.7, position: "relative" }}>
            Mentoria AI-ն ոչ թե tool է — այն <strong style={{ color: "var(--primary)" }}>AI-powered ուսուցիչ</strong> է,<br />
            որն ամեն աshакертի հետ այլ կերпок է խոsuum
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/student")}
              style={{ padding: "18px 48px", fontSize: "1.2rem", borderRadius: "100px", boxShadow: "0 0 40px rgba(99,102,241,0.5)" }}
            >
              <Zap size={22} /> Սկսել Demo-ն
            </button>
          </div>
          <p style={{ marginTop: "24px", color: "var(--text-muted)", fontSize: "0.85rem", position: "relative" }}>
            16 առakа · 160+ թema · AI Mentor · Voice Defense · Real-time Analytics
          </p>
        </div>
      </section>

    </div>
  );
}
