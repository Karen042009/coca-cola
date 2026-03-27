import React, { useEffect, useMemo, useState } from "react";
import {
  Users,
  BookOpenCheck,
  AlertTriangle,
  ShieldCheck,
  BrainCircuit,
  Play,
} from "lucide-react";

const STUDENTS = [
  {
    name: "Արամ Հ.",
    topic: "Նյուտոնի օրենքը",
    status: "ԿԱՆԱՉ",
    note: "Անցել է Սոկրատեսյան չաթը և ձայնով հաջողությամբ պաշտպանել է",
    bgColor: "rgba(16, 185, 129, 0.1)",
    iconC: "var(--success)",
    transcript:
      "«Երբ զանգվածը մնում է նույնը, իսկ ուժը մեծանում է, ըստ F = m·a արագացումը մեծանում է, հետևաբար մեքենան ավելի արագ է շարժվում»",
  },
  {
    name: "Մարիա Գ.",
    topic: "Նյուտոնի օրենքը",
    status: "ԿԱՐՄԻՐ",
    note: "Չաթում ճիշտ է գրել, բայց ձայնով չի կարողացել բացատրել իմաստը (Մակերեսային գիտելիք)",
    bgColor: "rgba(239, 68, 68, 0.1)",
    iconC: "var(--danger)",
    transcript:
      "«Ուժը մեծանում է, բայց վստահ չեմ՝ ինչի համար… կարծես արագացումը էլի նույնն է…»",
  },
  {
    name: "Դավիթ Ս.",
    topic: "Նյուտոնի օրենքը",
    status: "ԴԵՂԻՆ",
    note: "Սոկրատեսյան չաթում մինչև ճիշտ պատասխանը՝ 5+ սխալ (Դժվարանում է տրամաբանել)",
    bgColor: "rgba(245, 158, 11, 0.1)",
    iconC: "var(--warning)",
    transcript:
      "«Կարծում եմ՝ եթե ուժը մեծացնես, մեքենան ավելի արագ կգնա, բայց չգիտեմ՝ զանգվածը ինչպես է ներգրավվում»",
  },
  {
    name: "Աննա Պ.",
    topic: "Նյուտոնի օրենքը",
    status: "ԿԱՆԱՉ",
    note: "Արագ արձագանք չաթում և վստահ բանավոր պաշտպանություն",
    bgColor: "rgba(16, 185, 129, 0.1)",
    iconC: "var(--success)",
    transcript:
      "«Զանգվածը նույնն է, ուժը մեծանում է, ուրեմն արագացումը մեծանում է։ Հետևաբար մեքենան ավելի արագ է փոխում արագությունը»",
  },
];

export default function AnalyticsDashboard() {
  const [activeIdx, setActiveIdx] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const displayedTranscript = useMemo(() => {
    if (activeIdx === null) return "";
    const t = STUDENTS[activeIdx]?.transcript ?? "";
    const len = Math.floor((progress / 100) * t.length);
    return t.slice(0, len);
  }, [activeIdx, progress]);

  useEffect(() => {
    if (activeIdx === null || !isPlaying) return;

    const durationMs = 3600;
    const start = Date.now();
    const id = setInterval(() => {
      const p = Math.min(100, ((Date.now() - start) / durationMs) * 100);
      setProgress(p);
      if (p >= 100) {
        setIsPlaying(false);
        clearInterval(id);
      }
    }, 50);

    return () => clearInterval(id);
  }, [activeIdx, isPlaying]);

  const handlePlay = (idx) => {
    setActiveIdx(idx);
    setIsPlaying(true);
    setProgress(0);
  };

  return (
    <div
      className="animate-fade-in"
      style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "40px",
        }}
      >
        <div>
          <h2 style={{ fontSize: "2rem", marginBottom: "8px" }}>
            <ShieldCheck
              size={32}
              style={{
                verticalAlign: "bottom",
                marginRight: "12px",
                color: "var(--primary)",
              }}
            />
            Պետական/Ուսուցչի Անալիտիկա
          </h2>
          <p>Դասարան N9 • Առարկա՝ Ֆիզիկա (B2G Մոդել)</p>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px",
          marginBottom: "48px",
        }}
      >
        <div
          className="glass-panel"
          style={{ padding: "24px", borderTop: "4px solid var(--primary)" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                padding: "12px",
                background: "rgba(99, 102, 241, 0.1)",
                borderRadius: "12px",
              }}
            >
              <Users size={28} color="var(--primary)" />
            </div>
            <div>
              <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                Դասարանի Աշակերտներ
              </div>
              <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>24</div>
            </div>
          </div>
        </div>

        <div
          className="glass-panel"
          style={{ padding: "24px", borderTop: "4px solid var(--success)" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                padding: "12px",
                background: "rgba(16, 185, 129, 0.1)",
                borderRadius: "12px",
              }}
            >
              <BookOpenCheck size={28} color="var(--success)" />
            </div>
            <div>
              <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                Թեման Անցածներ
              </div>
              <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                14{" "}
                <span style={{ fontSize: "1rem", color: "var(--success)" }}>
                  +2
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="glass-panel"
          style={{ padding: "24px", borderTop: "4px solid var(--danger)" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                padding: "12px",
                background: "rgba(239, 68, 68, 0.1)",
                borderRadius: "12px",
              }}
            >
              <AlertTriangle size={28} color="var(--danger)" />
            </div>
            <div>
              <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                Վտանգի Գոտի
              </div>
              <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>5</div>
            </div>
          </div>
        </div>

        <div
          className="glass-panel"
          style={{ padding: "24px", borderTop: "4px solid var(--secondary)" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                padding: "12px",
                background: "rgba(168, 85, 247, 0.1)",
                borderRadius: "12px",
              }}
            >
              <ShieldCheck size={28} color="var(--secondary)" />
            </div>
            <div>
              <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                Դասարանի ընդհանուր տրամաբանության ցուցանիշը
              </div>
              <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>82%</div>
            </div>
          </div>
        </div>
      </div>

      <h3
        style={{
          marginBottom: "24px",
          fontSize: "1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        🚦 Traffic Light System
        <span
          className="pill-badge"
          style={{
            fontSize: "0.8rem",
            verticalAlign: "middle",
            background: "var(--primary-glow)",
            borderColor: "var(--primary)",
          }}
        >
          Live Tracking
        </span>
      </h3>

      <div className="glass-panel" style={{ overflow: "hidden" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
          }}
        >
          <thead>
            <tr
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                borderBottom: "1px solid var(--surface-border)",
              }}
            >
              <th style={{ padding: "20px" }}>Աշակերտ</th>
              <th style={{ padding: "20px" }}>Թեմա</th>
              <th style={{ padding: "20px" }}>Կարգավիճակ</th>
              <th style={{ padding: "20px" }}>AI-ի Նշում / Պատճառ</th>
            </tr>
          </thead>
          <tbody>
            {STUDENTS.map((student, i) => (
              <tr
                key={i}
                style={{
                  borderBottom: "1px solid var(--surface-border)",
                  transition: "background 0.2s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.02)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <td style={{ padding: "20px", fontWeight: "bold" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                    }}
                  >
                    <span>{student.name}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePlay(i);
                      }}
                      title="Լսել ձայնագրությունը"
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "12px",
                        background: "rgba(99, 102, 241, 0.14)",
                        border: "1px solid rgba(99, 102, 241, 0.35)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        boxShadow: "0 6px 20px rgba(99, 102, 241, 0.18)",
                      }}
                    >
                      <Play size={18} />
                    </button>
                  </div>
                </td>
                <td style={{ padding: "20px", color: "var(--text-muted)" }}>
                  {student.topic}
                </td>
                <td style={{ padding: "20px" }}>
                  <span
                    className="pill-badge"
                    style={{
                      background: student.bgColor,
                      color: student.iconC,
                      border: `1px solid ${student.iconC}`,
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: student.iconC,
                        marginRight: "6px",
                      }}
                    ></span>
                    {student.status}
                  </span>
                </td>
                <td
                  style={{
                    padding: "20px",
                    fontSize: "0.95rem",
                    lineHeight: "1.5",
                    maxWidth: "400px",
                  }}
                >
                  {student.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {activeIdx !== null && (
        <div
          className="glass-panel"
          style={{
            marginTop: "18px",
            padding: "18px",
            animation: "fadeIn 0.25s ease-out",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
              marginBottom: "12px",
            }}
          >
            <div>
              <div style={{ fontWeight: 800, fontSize: "1.05rem" }}>
                🎧 Լսել ձայնագրությունը — {STUDENTS[activeIdx].name}
              </div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                {isPlaying
                  ? "Գեներացվում է/բացվում է transcript-ը…"
                  : "Ավարտվեց"}
              </div>
            </div>
            <div
              className="pill-badge"
              style={{
                background: "rgba(99, 102, 241, 0.12)",
                borderColor: "rgba(99, 102, 241, 0.35)",
              }}
            >
              {Math.round(progress)}%
            </div>
          </div>

          <div
            style={{
              height: 10,
              borderRadius: 999,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid var(--surface-border)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background:
                  "linear-gradient(135deg, var(--primary), var(--secondary))",
                borderRadius: 999,
                transition: "width 0.05s linear",
              }}
            />
          </div>

          <div
            style={{
              marginTop: 12,
              background: "rgba(15, 23, 42, 0.45)",
              border: "1px solid var(--surface-border)",
              borderRadius: 12,
              padding: "14px 16px",
              color: "#e2e8f0",
              lineHeight: 1.6,
            }}
          >
            {displayedTranscript ? (
              displayedTranscript
            ) : (
              <span style={{ color: "var(--text-muted)" }}>Սկսում ենք…</span>
            )}
          </div>
        </div>
      )}

      <div
        style={{
          marginTop: "40px",
          padding: "24px",
          background: "rgba(99, 102, 241, 0.1)",
          borderRadius: "16px",
          border: "1px solid rgba(99, 102, 241, 0.3)",
          display: "flex",
          gap: "16px",
        }}
      >
        <div
          style={{
            flexShrink: 0,
            padding: "12px",
            background:
              "linear-gradient(135deg, var(--primary), var(--secondary))",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BrainCircuit color="white" size={24} />
        </div>
        <div>
          <h4
            style={{ marginBottom: "8px", fontSize: "1.1rem", color: "white" }}
          >
            Mentoria AI-ի Եզրակացությունը
          </h4>
          <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
            Համակարգը հաջողությամբ տարբերակել է մակերեսային և արտագրված
            պատասխանները իրական ըմբռնումից՝ համադրելով{" "}
            <b>Սոկրատեսյան չաթի շտկումների արագությունը</b> և{" "}
            <b>Բանավոր պաշտպանության իմաստային ճշգրտությունը</b>։ Կարմիր գոտում
            հայտնված աշակերտներին ուղարկվել են հավելյալ պարզեցված առաջադրանքներ:
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "28px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: "12px",
        }}
      >
        <div
          className="glass-panel"
          style={{ padding: "14px", borderTop: "3px solid var(--primary)" }}
        >
          <h4 style={{ margin: "0 0 8px 0" }}>Risk Mitigation</h4>
          <ul
            style={{
              color: "#cbd5e1",
              margin: 0,
              paddingLeft: "18px",
              lineHeight: "1.6",
            }}
          >
            <li>AI Hallucination - թարմացվող փորձարկում Expert Review-ով;</li>
            <li>Բովանդակության հավասարակշռման համար Pedagogue Loop;</li>
            <li>Սկզբնական ուսուցիչ-շրջանային onboarding + Webinars;</li>
          </ul>
        </div>
        <div
          className="glass-panel"
          style={{ padding: "14px", borderTop: "3px solid var(--success)" }}
        >
          <h4 style={{ margin: "0 0 8px 0" }}>Գործիքներ</h4>
          <p style={{ color: "#cbd5e1", margin: 0 }}>
            Մենք կավելացնենք նոր AI explainability dashboard, ticketing system և
            teacher feedback loop:
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "36px",
          padding: "20px",
          borderRadius: "16px",
          border: "1px dashed var(--surface-border)",
          background: "rgba(15,23,42,0.40)",
        }}
      >
        <h4 style={{ marginBottom: "12px", fontSize: "1.15rem" }}>
          📈 Շոշափելի KPI-ներ և առաջընթաց
        </h4>
        <ul
          style={{
            color: "#cbd5e1",
            fontSize: "0.95rem",
            marginLeft: "16px",
            listStyleType: "disc",
            lineHeight: "1.7",
          }}
        >
          <li>
            Կրթական գործընթացի արագացուցիչ՝ 2x վերականգնում Սոկրատեսյան
            հաջորդականությամբ.
          </li>
          <li>
            Ճշգրիտ գնահատման համար ամփոփված{" "}
            <b>70%-ը ծրագրում ավելացված է ավտոմատ գնահատման մոդուլից</b>.
          </li>
          <li>
            Հաջորդ շաբաթվա B2G ինտեգրիացում՝ 3 pilot դպրոց + 120 աշակերտ,
            միջազգային CSR առաջարկ՝ UNICEF + World Bank կորպորատիվ երաշխիքով.
          </li>
        </ul>
      </div>
    </div>
  );
}
