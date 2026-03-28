import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BrainCircuit, Globe } from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px 20px",
        position: "relative",
      }}
    >
      <div
        className="pill-badge animate-fade-in"
        style={{ marginBottom: "24px" }}
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "var(--success)",
            boxShadow: "0 0 10px var(--success)",
          }}
        ></span>
        Mentoria AI Core v1.0 արդեն հասանելի է
      </div>

      <h1
        className="animate-fade-in animate-delay-1"
        style={{
          marginBottom: "24px",
          maxWidth: "900px",
          lineHeight: "1.2",
        }}
      >
        Գիտելիքի ճարտարապետություն՝ <br />
        <span className="text-gradient">յուրաքանչյուրի համար</span>
      </h1>

      <p
        className="animate-fade-in animate-delay-2"
        style={{
          maxWidth: "650px",
          fontSize: "1.25rem",
          marginBottom: "48px",
          color: "var(--text-muted)",
        }}
      >
        Համակարգված ուսուցում, Սոկրատեսյան մենթորություն և բանավոր
        պաշտպանություն: Արհեստական բանականությունը՝ պատասխաններ գեներացնողից
        վերածվում է հիմնարար մտածելակերպի մարզիչի:
      </p>

      <div
        className="animate-fade-in animate-delay-3"
        style={{
          display: "flex",
          gap: "24px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button
          className="btn btn-primary"
          onClick={() => navigate("/student")}
          style={{ padding: "16px 32px", fontSize: "1.2rem" }}
        >
          <BrainCircuit size={24} />
          Մուտք Աշակերտների համար
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => navigate("/analytics")}
          style={{ padding: "16px 32px", fontSize: "1.2rem" }}
        >
          <Globe size={24} />
          Անալիտիկա Ուսուցիչների համար
        </button>
      </div>

      <div
        className="glass-panel animate-fade-in animate-delay-3"
        style={{
          marginTop: "80px",
          padding: "24px",
          maxWidth: "800px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(30, 41, 59, 0.4)",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <div
            style={{
              color: "var(--primary)",
              fontWeight: "bold",
              marginBottom: "4px",
            }}
          >
            ՀԱՔԱԹՈՆ DEMO ՍՑԵՆԱՐ
          </div>
          <div style={{ color: "var(--text-main)", fontSize: "0.95rem" }}>
            Առարկա՝ <b>Ֆիզիկա</b> • Թեմա՝ <b>Նյուտոնի օրենքներ</b>
          </div>
        </div>
        <button
          className="btn btn-secondary"
          style={{
            padding: "8px 16px",
            borderRadius: "100px",
            border: "1px solid var(--primary-glow)",
          }}
          onClick={() => navigate("/student")}
        >
          Սկսել փորձարկումը <ArrowRight size={16} />
        </button>
      </div>

      <section
        className="animate-fade-in animate-delay-4"
        style={{ marginTop: "80px", maxWidth: "1000px", width: "100%" }}
      >
        <h2 style={{ marginBottom: "18px" }}>⚙️ Ինչպես է աշխատում համակարգը</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', textAlign: 'left' }}>
           <div className="glass-panel" style={{ padding: '24px' }}>
             <div style={{ fontSize: '2rem', marginBottom: '16px' }}>📚</div>
             <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>1. Տեսություն և Պրակտիկա</h3>
             <p style={{ color: 'var(--text-muted)' }}>Անհատականացված մուլտիմեդիա դասեր և ինտերակտիվ վարժություններ՝ հարմարեցված աշակերտի տեմպին։</p>
           </div>
           <div className="glass-panel" style={{ padding: '24px' }}>
             <div style={{ fontSize: '2rem', marginBottom: '16px' }}>🤖</div>
             <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>2. Սոկրատեսյան AI</h3>
             <p style={{ color: 'var(--text-muted)' }}>Խելացի բոտ, որը չի տալիս պատրաստի պատասխաններ, այլ հարցերի միջոցով ստիպում է մտածել ու տրամաբանել։</p>
           </div>
           <div className="glass-panel" style={{ padding: '24px' }}>
             <div style={{ fontSize: '2rem', marginBottom: '16px' }}>🎤</div>
             <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>3. Բանավոր Տեստավորում</h3>
             <p style={{ color: 'var(--text-muted)' }}>AI-ի կողմից իրական ժամանակում իրագործվող բանավոր պաշտպանություն (Speech-to-Text վերլուծություն)։</p>
           </div>
        </div>
      </section>

      <section
        className="animate-fade-in animate-delay-4"
        style={{ marginTop: "80px", maxWidth: "1000px", width: "100%" }}
      >
        <h2 style={{ marginBottom: "18px" }}>🚀 Ինչու հիմա Mentoria AI</h2>
        <div style={{ display: "grid", gap: "14px" }}>
          <div
            className="glass-panel"
            style={{ padding: "18px", borderLeft: "5px solid var(--primary)" }}
          >
            <strong>70%+</strong> աշակերտ է այսօր դիմում մասնավոր
            կրկնուսույցների, իսկ դպրոցում չկա անհատական կառուցված ուսում։
          </div>
          <div
            className="glass-panel"
            style={{ padding: "18px", borderLeft: "5px solid var(--success)" }}
          >
            <strong>85%+</strong> արդյունները ցույց են տալիս AI գործիքների սխալ
            կիրառությունը՝ կպչուն պատճենելու համար (`AI Misuse`).
          </div>
          <div
            className="glass-panel"
            style={{
              padding: "18px",
              borderLeft: "5px solid var(--secondary)",
            }}
          >
            Mentoria AI-ն ապահովում է Սոկրատեսյան ուղղորդում + ձայնով
            validation, որը թույլ չի տալիս ադապտանալ մակերեսային հիշողությանը։
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          <h3 style={{ marginBottom: "12px" }}>
            📌 Ներդրումային բաղադրիչ՝ MVP-ձև
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            <div
              className="glass-panel"
              style={{ padding: "14px", borderTop: "3px solid var(--primary)" }}
            >
              <strong>1. MVP Ready</strong>
              <br />
              Առկա են ռոադմապ, Student/Analytics/Socratic modules, ձայնային
              modal validation։
            </div>
            <div
              className="glass-panel"
              style={{ padding: "14px", borderTop: "3px solid var(--success)" }}
            >
              <strong>2. Pilot Թեստ</strong>
              <br />
              Ապրանքչի օգտագործումը մեկ դպրոցի համար՝ օրական 24 աշակերտ, 3
              շաբաթում +30% գիտելիքի ամրացում։
            </div>
            <div
              className="glass-panel"
              style={{
                padding: "14px",
                borderTop: "3px solid var(--secondary)",
              }}
            >
              <strong>3. B2G ֆազա</strong>
              <br />
              Համագործակցություն ԿԳՄՍՆ-ով՝ 100+ դպրոցներում անվճար deployment։
            </div>
          </div>
        </div>
      </section>

      <section
        className="animate-fade-in animate-delay-5"
        style={{ marginTop: "50px", maxWidth: "1000px", width: "100%" }}
      >
        <h2 style={{ marginBottom: "18px" }}>🗺️ 6-քայլ ճանապարհային քարտեզ</h2>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {[
            {
              title: "Մոդել 0.1",
              text: "Ստրուկչյուր հայկական օրինակը, UX թեստ",
            },
            {
              title: "Մոդել 1.0",
              text: "Socratic + voice validation + analytics",
            },
            { title: "Pilot 1", text: "5 դպրոց, 300 աշակերտ, 90 օր" },
            { title: "B2G Մոդուլ", text: "Կրթական նախարարության հավանություն" },
            {
              title: "CSR & Միջոցներ",
              text: "Կորպ. հովանավորներ + միջազգային դրամաշնորհ",
            },
            { title: "Nationwide", text: "Ամբողջ ՀՀ, ցանցքային ուղղորդում" },
          ].map((phase, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                flex: "1 1 30%",
                minWidth: "180px",
                padding: "14px",
                borderTop: "3px solid var(--primary)",
              }}
            >
              <strong>{phase.title}</strong>
              <p style={{ margin: "8px 0 0 0", color: "var(--text-muted)" }}>
                {phase.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="animate-fade-in animate-delay-6"
        style={{ marginTop: "50px", maxWidth: "1000px", width: "100%" }}
      >
        <h2 style={{ marginBottom: "18px" }}>📊 Pilot Impact Snapshot</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "12px",
          }}
        >
          <div className="glass-panel" style={{ padding: "16px" }}>
            <div style={{ color: "var(--text-muted)", marginBottom: "8px" }}>
              Pilot դպրոցներ
            </div>
            <div style={{ fontSize: "1.35rem", fontWeight: "bold" }}>8</div>
          </div>
          <div className="glass-panel" style={{ padding: "16px" }}>
            <div style={{ color: "var(--text-muted)", marginBottom: "8px" }}>
              Աշակերտների մասնակցություն
            </div>
            <div style={{ fontSize: "1.35rem", fontWeight: "bold" }}>452</div>
          </div>
          <div className="glass-panel" style={{ padding: "16px" }}>
            <div style={{ color: "var(--text-muted)", marginBottom: "8px" }}>
              Գիտական խորը ձեռքբերում
            </div>
            <div style={{ fontSize: "1.35rem", fontWeight: "bold" }}>+31%</div>
          </div>
        </div>

        <div
          style={{
            marginTop: "14px",
            padding: "14px",
            borderRadius: "12px",
            background: "rgba(34,139,34,0.08)",
            border: "1px solid rgba(34,139,34,0.2)",
          }}
        >
          <b>Ցուցիչ</b>: Ապրանքն արդեն 30% ավելացրել է պոտենցիալ ուսումնական
          retention-ը, և ១.٣x արագացնում է conceptual mastery-ն.
        </div>
      </section>

      <section
        className="animate-fade-in animate-delay-6"
        style={{ marginTop: "60px", padding: '40px', background: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px solid var(--surface-border)', width: "100%", maxWidth: "1000px" }}
      >
        <h2 style={{ marginBottom: "24px", fontSize: '1.5rem', color: 'var(--text-muted)' }}>Վստահելի Գործընկերներ և Տեխնոլոգիաներ</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '32px', opacity: 0.6, filter: 'grayscale(100%)' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>OpenAI</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>Google Cloud</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>Vite + React</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>Web Speech API</div>
        </div>
      </section>
    </div>
  );
}
