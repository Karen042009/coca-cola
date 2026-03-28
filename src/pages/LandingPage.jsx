import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BrainCircuit, BarChart2, Zap, Mic, MessageSquare, BookOpen, Shield, Users, Target, ChevronRight, Globe, Lock } from "lucide-react";

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

  const problems = [
    { icon: "🧩", title: "Մասնատված Գիտելիք", text: "Դասագրքերը չեն ապահովում տրամաբանական անխզելիություն: Սովորողը չի տեսնում մեծ պատկերը:" },
    { icon: "🧠", title: "Կոգնիտիվ Շրջանցում", text: "AI-ի միջոցով առաջադրանքների գեներացումը թույլ չի տալիս նոր նեյրոնային կապերի ձևավորում:" },
    { icon: "📉", title: "Գնահատման Ճգնաժամ", text: "Ուսուցիչներն այլևս չեն կարող տարբերել աշակերտի միտքը AI-ի տեքստից: Հին պրոդուկտները մեռած են:" },
  ];

  const steps = [
    { icon: <Globe size={40} color="var(--primary)" />, num: "01", title: "Դինամիկ Համակարգում", desc: "Վերցնում է քաոսային թեման և վերածում կատարյալ միկրո-քայլերի: Էլիտար կրկնուսույցի նման միացնում է նորը հնի հետ:" },
    { icon: <MessageSquare size={40} color="var(--success)" />, num: "02", title: "Սոկրատեսյան Շփում", desc: "Համակարգը երբեք չի տալիս պատրաստի պատասխաններ: Ստեղծում է «կառուցողական բարդություն»:" },
    { icon: <Mic size={40} color="var(--secondary)" />, num: "03", title: "Ձայնային Պաշտպանություն", desc: "Ուսումնական մոդուլի ավարտին տեքստային քննություն չկա: Խոսքով հիմնավորիր գիտելիքդ AI-ին (Cheat-proof by design):" },
  ];

  const personas = [
    {
      icon: <Target size={40} />,
      title: "Առաջնային Օգտատեր",
      subtitle: "Սովորողը",
      color: "var(--primary)",
      points: ["100% Անվճար", "Կատարյալ համակարգված պլան", "Անհատական AI մենթոր"],
    },
    {
      icon: <Users size={40} />,
      title: "Երկրորդային Օգտատեր",
      subtitle: "Ուսուցիչ և Դպրոց",
      color: "var(--success)",
      points: ["Կոգնիտիվ Վերլուծության Վահանակ", "Data-ի վրա հիմնված որոշումներ", "Կրճատված ստուգման ժամանակ"],
    },
    {
      icon: <Shield size={40} />,
      title: "Ռազմավարական Շահառու",
      subtitle: "Պետություն և Գործատու",
      color: "var(--secondary)",
      points: ["Սինթեզող և մտածող աշխատուժ", "Անկախ խոսքի հմտություն", "Հիմնված CSR ֆինանսավորման վրա"],
    }
  ];

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>

      {/* ── Slide 1: HERO / 10-YEAR VISION ─────────────────────────────── */}
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

        <div className="pill-badge animate-fade-in" style={{ marginBottom: "32px", fontSize: "0.9rem", padding: "8px 20px" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--success)", boxShadow: "0 0 12px var(--success)", flexShrink: 0 }} />
          🚀 PITCH DECK. «Mentoria AI» — 10-ամյա Վիզիոն
        </div>

        <h1 className="animate-fade-in animate-delay-1" style={{
          fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: "28px",
          maxWidth: "1000px",
          letterSpacing: "-1px",
        }}>
          Կոգնիտիվ ենթակառուցվածք<br />
          <span className="text-gradient">առաջիկա 10 տարիների համար</span>
        </h1>

        <p className="animate-fade-in animate-delay-2" style={{
          fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
          color: "var(--text-muted)",
          maxWidth: "800px",
          marginBottom: "40px",
          lineHeight: 1.7,
        }}>
          «Եթե այսօրվա կրթությունը ստուգում է, թե սովորողը ինչ գիտի, վաղվա աշխարհում միակ կենսունակ չափորոշիչը լինելու է այն, թե 
          <strong style={{ color: "var(--primary)" }}> սովորողը ինչպես է մտածում և ինչպես է պաշտպանում իր միտքը</strong>։ Մենք ներկայացնում ենք ոչ թե հավելված, այլ պարադիգմի տրանսֆորմացիա»:
        </p>

        <div className="animate-fade-in animate-delay-3" style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginBottom: "80px" }}>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/student")}
            style={{ padding: "18px 40px", fontSize: "1.15rem", borderRadius: "100px", gap: "10px", boxShadow: "0 0 40px rgba(99,102,241,0.4)" }}
          >
            <BrainCircuit size={22} />
            Դիտել Դեմոն
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* ── Slide 2: PROBLEM VALIDATION ─────────────────────────── */}
      <section style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ color: "var(--danger)", fontSize: "0.85rem", letterSpacing: "3px", fontWeight: 700, marginBottom: "12px" }}>SLIDE 2: ՇՈՒԿԱՅԻ ԲԱՑԸ (MARKET GAP)</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "16px" }}>
            Ինչո՞ւ են ներկայիս լուծումները <span style={{ color: "var(--danger)" }}>ձախողում</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto" }}>
            Այսօրվա EdTech և AI պրոդուկտներն ունեն արմատական սխալ (design flaw) — նրանք օպտիմիզացված են կյանքը «հեշտացնելու» համար: Բայց կրթության մեջ «հեշտը» = դեգրադացիա:
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {problems.map((p, i) => (
            <div key={i} className="glass-panel" style={{
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              borderTop: "3px solid var(--danger)",
              background: "rgba(239,68,68,0.02)",
            }}>
              <span style={{ fontSize: "3rem" }}>{p.icon}</span>
              <h3 style={{ margin: 0, fontWeight: 700, fontSize: "1.2rem" }}>{p.title}</h3>
              <p style={{ margin: 0, color: "var(--text-muted)", lineHeight: 1.6 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Slide 3: CORE PRODUCT LOOP ────────────────────────── */}
      <section style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ color: "var(--primary)", fontSize: "0.85rem", letterSpacing: "3px", fontWeight: 700, marginBottom: "12px" }}>SLIDE 3: ՊՐՈԴՈՒԿՏԻ ԼՈՒԾՈՒՄԸ</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "16px" }}>
            <span className="text-gradient">3-փուլյան աշխատանքային ցիկլ</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto" }}>
            Մեր Unique Value Proposition-ը ոչ թե ինֆորմացիա տրամադրելն է, այլ սովորողի ուղեղում ճարտարապետություն կառուցելը:
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {steps.map((s, i) => (
            <div key={i} className="glass-panel" style={{
              padding: "40px 30px",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.3s",
            }}
              onMouseOver={e => e.currentTarget.style.transform = "translateY(-8px)"}
              onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{
                position: "absolute", top: "16px", right: "20px",
                fontSize: "4rem", fontWeight: 900, color: "rgba(99,102,241,0.05)", lineHeight: 1, fontFamily: "var(--font-heading)"
              }}>{s.num}</div>
              <div style={{ marginBottom: "20px" }}>{s.icon}</div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "12px" }}>{s.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Slide 4: TARGET PERSONAS ───────────────────── */}
      <section style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ color: "var(--success)", fontSize: "0.85rem", letterSpacing: "3px", fontWeight: 700, marginBottom: "12px" }}>SLIDE 4: ՕԳՏԱՏԵՐԵՐԻ ՍԵԳՄԵՆՏԱՑԻԱ</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800 }}>Շահառուները և Ազդեցությունը</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {personas.map((u, i) => (
            <div key={i} className="glass-panel" style={{ padding: "32px", borderTop: `4px solid ${u.color}` }}>
              <div style={{ color: u.color, marginBottom: "20px" }}>{u.icon}</div>
              <div style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--text-muted)", marginBottom: "4px" }}>{u.title}</div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "20px", color: u.color }}>{u.subtitle}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {u.points.map((pt, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--text-muted)", fontSize: "1rem" }}>
                    <span style={{ color: u.color, flexShrink: 0 }}>✓</span> {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Slide 5: THE MOAT ─────────────────────────── */}
      <section style={{
        padding: "80px 20px",
        background: "rgba(99,102,241,0.03)",
        borderTop: "1px solid var(--surface-border)",
        borderBottom: "1px solid var(--surface-border)",
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "var(--secondary)", fontSize: "0.85rem", letterSpacing: "3px", fontWeight: 700, marginBottom: "12px" }}>SLIDE 5: THE MOAT & DEFENSIBILITY</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "30px" }}>Մրցակցային Առավելություն</h2>
          
          <div className="glass-panel" style={{ padding: "40px", textAlign: "left", display: "inline-block", background: "var(--bg-dark)" }}>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, margin: 0 }}>
              «Ո՞րն է մեր պաշտպանվածությունը (Moat): Ոչ թե AI ալգորիթմն է, այլ տվյալների բազան և գնահատման նոր ստանդարտը:<br/><br/>
              Քանի դեռ մրցակիցները ստեղծում են հարցաշարեր (Quiz) և տեքստային Anti-cheat, Mentoria-ն ստեղծում է յուրաքանչյուր օգտատիրոջ <strong>Կոգնիտիվ Պրոֆիլը (Skill Wallet)</strong>: Համակարգում կուտակվում է մարդու մտածելակերպի, խնդիրներ լուծելու և բանավոր խոսքի ողջ դինամիկան՝ դարձնելով պրոդուկտը անփոխարինելի ողջ կրթական ուղու համար»:
            </p>
          </div>
        </div>
      </section>

      {/* ── Slide 6: B2B / GTM ──────────────────────── */}
      <section style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ color: "#f59e0b", fontSize: "0.85rem", letterSpacing: "3px", fontWeight: 700, marginBottom: "12px" }}>SLIDE 6: ԲԻԶՆԵՍ ՄՈԴԵԼ ԵՎ PPP</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "16px" }}>Public-Private Partnership</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>
            Ապագայի կրթական ենթակառուցվածքները պետք է լինեն հանրային բարիք:
          </p>
        </div>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>
           <div className="glass-panel" style={{ flex: "1 1 400px", padding: "30px", borderLeft: "4px solid var(--primary)" }}>
              <h3 style={{ marginBottom: "16px", color: "var(--primary)" }}>Տրաֆիկի վիրուսային աճ</h3>
              <p style={{ margin: 0 }}>Համակարգը <strong>100% անվճար է օգտատիրոջ համար</strong> (B2C zero barrier), ինչը ապահովում է աննախադեպ Network Effect:</p>
           </div>
           <div className="glass-panel" style={{ flex: "1 1 400px", padding: "30px", borderLeft: "4px solid #f59e0b" }}>
              <h3 style={{ marginBottom: "16px", color: "#f59e0b" }}>CSR Ֆինանսավորում</h3>
              <p style={{ margin: 0 }}>Ֆինանսավորումը B2B և B2G հատվածից է: Օրինակ՝ գլոբալ խաղացողներ (ինչպես հաքաթոնի հովանավոր <strong>Կոկա-Կոլա ՀԲՔ</strong>-ն) հովանավորում են հարթակը դպրոցներում՝ գիտակցելով, որ իրենց հաջողությունը կախված է ապագա վերլուծական ուղեղներից:</p>
           </div>
        </div>
      </section>

      {/* ── Slide 7: VISIONARY CLOSE ───────────────────────── */}
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
          <div style={{ color: "var(--primary)", fontSize: "0.85rem", letterSpacing: "3px", fontWeight: 700, marginBottom: "20px", position: "relative" }}>SLIDE 7: ԵԶՐԱՓԱԿՈՒՄ (VISIONARY CLOSE)</div>
          
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "20px", position: "relative" }}>
            Mentoria AI-ը պարզապես նոր EdTech <span className="text-gradient">պրոդուկտ չէ։</span>
          </h2>
          
          <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", marginBottom: "40px", lineHeight: 1.7, position: "relative", textAlign: "left" }}>
            «Երբ մեքենաները սկսեցին ֆիզիկական ծանր աշխատանք անել, մարդիկ սկսեցին գնալ մարզասրահ՝ ֆիզիկական առողջությունը պահպանելու համար: Հիմա մեքենաներն անում են ինտելեկտուալ ծանր աշխատանքը...
            <br/><br/>
            Mentoria AI-ը այն <strong style={{ color: "var(--primary)" }}>կոգնիտիվ մարզասրահն է</strong>, որը թույլ կտա մարդկությանը չկորցնել իր ամենագլխավոր հմտությունը՝ ինքնուրույն և խորքային մտածելու կարողությունը»:
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
        </div>
      </section>

    </div>
  );
}

