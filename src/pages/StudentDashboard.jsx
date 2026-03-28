import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CheckCircle2, Lock, Timer, GitMerge, ChevronLeft } from "lucide-react";
import { useAppContext } from "../context/AppContext";

export default function StudentDashboard() {
  const navigate = useNavigate();
  const { subjectId, topicId } = useParams();
  
  // Fake state simulation for the topic
  const status = {
    theory: "done",
    practice: "done",
    socratic: "in_progress",
    voice: "locked"
  };

  const nodeConfig = {
    done: {
      color: "var(--success)",
      icon: <CheckCircle2 size={24} color="white" />,
      bg: "linear-gradient(135deg, #10b981, #059669)",
      border: "rgba(16, 185, 129, 0.4)",
      label: "✅ Ավարտված է",
      pulse: false,
      opacity: 1,
    },
    in_progress: {
      color: "var(--secondary)",
      icon: <Timer size={24} color="white" />,
      bg: "linear-gradient(135deg, var(--secondary), #7e22ce)",
      border: "rgba(168, 85, 247, 0.6)",
      label: "⏳ Ընթացքի մեջ է",
      pulse: true,
      opacity: 1,
    },
    locked: {
      color: "var(--text-muted)",
      icon: <Lock size={24} color="var(--text-muted)" />,
      bg: "var(--surface-light)",
      border: "var(--surface-border)",
      label: "🔒 Փակված է",
      pulse: false,
      opacity: 0.5,
    },
  };

  const nodes = [
    { id: "theory", title: "1. Տեսություն (Մուլտիմեդիա)", statusKey: "theory" },
    { id: "practice", title: "2. Գործնական (Խնդիրներ և պրակտիկա)", statusKey: "practice" },
    { id: "socratic", title: "3. Սոկրատեսյան Չաթ (AI Օգնական)", statusKey: "socratic" },
    { id: "voice", title: "4. Բանավոր Պաշտպանություն", statusKey: "voice" }
  ];

  return (
    <div
      className="animate-fade-in"
      style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}
    >
      <button 
        className="btn btn-secondary" 
        onClick={() => navigate(`/student/${subjectId || ''}`)}
        style={{ padding: '8px 16px', marginBottom: '24px', borderRadius: '100px' }}
      >
        <ChevronLeft size={18} /> Թեմաներ
      </button>

      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <h2 className="text-gradient">Structured Learning Path</h2>
        <p>Ուսուցման փուլեր • {topicId || 'Ընթացիկ թեմա'}</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "14px",
          marginBottom: "28px",
        }}
      >
        <div
          className="glass-panel"
          style={{ padding: "18px", borderTop: "3px solid var(--primary)", display: 'flex', alignItems: 'center', gap: '16px' }}
        >
          <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '12px', borderRadius: '12px' }}>
             <CheckCircle2 color="var(--primary)" size={28} />
          </div>
          <div>
            <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>Ընթացիկ մակարդակ</div>
            <div style={{ fontSize: "1.45rem", fontWeight: "bold" }}>Լեվել 4: <span style={{ color: "var(--primary)" }}>Հետազոտող</span></div>
          </div>
        </div>
        <div
          className="glass-panel"
          style={{ padding: "18px", borderTop: "3px solid var(--warning)", display: 'flex', alignItems: 'center', gap: '16px' }}
        >
          <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '12px', borderRadius: '12px' }}>
             <Timer color="var(--warning)" size={28} />
          </div>
          <div>
            <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>Դասի Մետաղադրամներ (XP)</div>
            <div style={{ fontSize: "1.45rem", fontWeight: "bold", color: "var(--warning)" }}>1,250 XP</div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "22px",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div style={{ minWidth: "220px" }}>
          <h3 style={{ margin: "0 0 6px 0" }}>Օրական նպատակներ</h3>
          <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
            Մոտեցումով 4 քայլ՝ օրը 20 րոպե
          </div>
        </div>
        <div style={{ flex: 1, minWidth: "260px" }}>
          <div
            style={{
              height: "16px",
              borderRadius: "999px",
              background: "rgba(148,163,184,0.25)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "65%",
                height: "100%",
                background:
                  "linear-gradient(90deg, var(--primary), var(--secondary))",
              }}
            />
          </div>
          <div
            style={{
              marginTop: "6px",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
            }}
          >
            65% հասել է ընտրված ուսումնական քայլին
          </div>
        </div>
        <div>
          <button
            className="btn btn-secondary"
            style={{ padding: "10px 14px", fontSize: "0.85rem" }}
            onClick={() => alert("Սաքրատեսյան ընթացքը թարմացվում է...")}
          >
            Update Progress
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "24px 0",
        }}
      >
        {nodes.map((node, index) => {
          const s = nodeConfig[status[node.statusKey]];
          const isPlayable = status[node.statusKey] === "in_progress";

          return (
            <React.Fragment key={node.id}>
              {/* Node Card */}
              <div
                className={`glass-panel animate-fade-in animate-delay-${(index % 3) + 1} ${s.pulse ? "animate-pulse" : ""}`}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  padding: "20px 24px",
                  borderRadius: "24px",
                  border: `2px solid ${s.border}`,
                  transition: "all 0.3s ease",
                  cursor: isPlayable ? "pointer" : "default",
                  transform: isPlayable ? "scale(1.02)" : "none",
                  boxShadow: s.pulse
                    ? "0 0 20px rgba(168, 85, 247, 0.4)"
                    : "none",
                  opacity: s.opacity,
                  position: "relative",
                  overflow: "hidden"
                }}
                onClick={() => {
                  const isAccessible = status[node.statusKey] === 'in_progress' || status[node.statusKey] === 'done';
                  
                  if (node.statusKey === 'socratic' && isAccessible) {
                    navigate(`/socratic/${topicId || 'dynamics'}`);
                  } else if (node.statusKey === 'theory' && isAccessible) {
                    navigate(`/theory/${topicId || 'dynamics'}`);
                  } else if (node.statusKey === 'practice' && isAccessible) {
                    navigate(`/practice/${topicId || 'dynamics'}`);
                  } else if (status[node.statusKey] === "locked") {
                    alert("Խնդրում ենք նախ ավարտել նախորդ թեման:");
                  }
                }}
              >
                {isPlayable && (
                   <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--secondary), transparent)', animation: 'pulse-glow 2s infinite' }}></div>
                )}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: s.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "24px",
                    boxShadow: `0 4px 12px ${s.border}`,
                  }}
                >
                  {s.icon}
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "4px" }}>
                    {node.title}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: s.color,
                      fontWeight: "bold",
                    }}
                  >
                    {s.label}
                  </div>
                </div>

                {(isPlayable || status[node.statusKey] === 'done') && (
                  <button
                    className={`btn ${isPlayable ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ padding: "8px 20px", borderRadius: "100px" }}
                  >
                    {node.statusKey === 'socratic' && isPlayable ? 'Սկսել սենյակը' : isPlayable ? 'Բացել մոդուլը' : 'Կրկնել'}
                  </button>
                )}
              </div>

              {/* Connecting Line */}
              {index < nodes.length - 1 && (
                <div
                  style={{
                    height: "40px",
                    width: "2px",
                    background:
                      status[nodes[index + 1].statusKey] !== "locked"
                        ? "linear-gradient(to bottom, var(--success), var(--primary))"
                        : "var(--surface-border)",
                    margin: "8px 0",
                    opacity: 0.6,
                  }}
                ></div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div
        style={{
          marginTop: "60px",
          padding: "16px",
          background: "rgba(99, 102, 241, 0.1)",
          borderRadius: "12px",
          border: "1px solid rgba(99, 102, 241, 0.2)",
          textAlign: "center",
          color: "var(--primary)",
        }}
      >
        <GitMerge
          size={20}
          style={{ verticalAlign: "middle", marginRight: "8px" }}
        />
        Ընտրեք <b>2) Ուժ և զանգված</b> Սոկրատեսյան մեթոդը ցուցադրելու համար։
      </div>
    </div>
  );
}
