import React from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart, Line, AreaChart, Area, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, ReferenceArea
} from "recharts";
import {
  Brain, Mic, Zap, ArrowRight, Building2, Landmark, Sparkles, Network, Fingerprint, Target, BarChart2, Users, FileText
} from "lucide-react";

// --- Data Models for Charts ---

const visionData = [
  { year: "2015", info: 100, synthesis: 20 },
  { year: "2020", info: 80, synthesis: 35 },
  { year: "2023", info: 40, synthesis: 60 },
  { year: "2026", info: 10, synthesis: 85 },
  { year: "2030", info: 0.1, synthesis: 110 },
];

const generateBellCurve = () => {
  const data = [];
  for (let i = -4; i <= 4; i += 0.2) {
    const y = (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * i * i);
    data.push({ x: i.toFixed(2), y: y * 100 });
  }
  return data;
};
const bellCurveData = generateBellCurve();

// --- Reusable Premium Animated Components ---

const FadeIn = ({ children, delay = 0, y = 40, x = 0, className = "", duration = 0.8, style = {} }) => (
  <motion.div
    initial={{ opacity: 0, y, x }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    className={className}
    style={style}
  >
    {children}
  </motion.div>
);

const PitchQuote = ({ children }) => (
  <motion.div
    whileHover={{ x: 5 }}
    transition={{ duration: 0.3 }}
    style={{
      position: "relative",
      padding: "30px 40px",
      background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
      borderLeft: "4px solid #8b5cf6",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      borderRight: "1px solid rgba(255,255,255,0.05)",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      borderRadius: "0 24px 24px 0",
      backdropFilter: "blur(20px)",
      boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
      marginTop: "20px"
    }}
  >
    <div style={{ position: "absolute", top: -20, left: 20, fontSize: "4rem", opacity: 0.1, fontFamily: "serif", lineHeight: 1 }}>"</div>
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
      <div style={{ 
        width: 40, height: 40, borderRadius: "50%", background: "rgba(139, 92, 246, 0.15)", 
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)"
      }}>
        <Mic size={18} color="#8b5cf6" />
      </div>
      <p style={{
        fontSize: "1.15rem", lineHeight: 1.8, color: "#e2e8f0", margin: 0, fontWeight: 300, letterSpacing: "0.2px"
      }}>
        {children}
      </p>
    </div>
  </motion.div>
);

const SectionLabel = ({ num, title, color = "#8b5cf6", bgColor = "rgba(139, 92, 246, 0.1)" }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "24px", padding: "8px 20px", borderRadius: "100px", background: bgColor, border: `1px solid ${color}40` }}>
    <span style={{ color, fontWeight: 700, fontSize: "0.9rem", letterSpacing: "1px" }}>ՍԼԱՅԴ {num}</span>
    <span style={{ width: 4, height: 4, borderRadius: "50%", background: color }} />
    <span style={{ color: "#f8fafc", fontSize: "0.95rem", fontWeight: 500 }}>{title}</span>
  </div>
);

const GlowOrb = ({ top, left, right, bottom, color, size = 500 }) => (
  <motion.div 
    animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
    style={{
      position: "absolute", top, left, right, bottom, width: size, height: size,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      filter: "blur(60px)", pointerEvents: "none", zIndex: 0
    }} 
  />
);

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-pitch" style={{ width: "100%", overflowX: "hidden", background: "#09090b", color: "#f8fafc" }}>
      
      {/* ========================================================= */}
      {/* SLIDE 1: VISION */}
      {/* ========================================================= */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "120px 20px 80px", position: "relative", overflow: "hidden"
      }}>
        <GlowOrb top="-10%" left="-5%" color="#8b5cf6" size={800} />
        <GlowOrb bottom="-10%" right="-5%" color="#ec4899" size={600} />

        <div style={{ maxWidth: "1300px", margin: "0 auto", width: "100%", zIndex: 10 }}>
          
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div style={{ marginBottom: "22px" }}>
                <span className="pitch-deck-pill">🚀 PITCH DECK · «Mentoria AI»</span>
              </div>
              <SectionLabel num="1" title="10-ամյա Վիզիոն և Պարադիգմի Տրանսֆորմացիա" />
              <div className="pitch-shimmer-line" aria-hidden />
              <h1
                className="pitch-hero-title"
                style={{
                  fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)",
                  fontWeight: 900,
                  lineHeight: 1.08,
                  marginBottom: "16px",
                  letterSpacing: "-0.03em",
                  maxWidth: "1000px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Կոգնիտիվ ենթակառուցվածք
                <br />
                առաջիկա 10 տարիների համար
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#94a3b8", fontWeight: 500, marginBottom: "8px" }}>
                Վերջնական PM-տարբերակ · Տևողությունը՝ <strong style={{ color: "#e2e8f0" }}>5 րոպե</strong>
              </p>
              <p style={{ fontSize: "0.95rem", color: "#64748b", maxWidth: "560px", margin: "0 auto" }}>
                Նույն պատմությունը՝ մեկ էկրան, մեկ հոսք, ժյուրիի համար պատրաստ
              </p>
            </motion.div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "60px", alignItems: "center" }}>
            
            <FadeIn x={-30} delay={0.2}>
              <motion.div 
                className="pitch-chart-float"
                whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(139,92,246,0.1)" }}
                style={{ 
                  background: "rgba(24,24,27,0.4)", borderRadius: "32px", padding: "40px", height: "450px", 
                  border: "1px solid rgba(255,255,255,0.05)", backdropFilter: "blur(20px)"
                }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "0 0 8px 0", color: "#f8fafc" }}>
                      Ինֆորմացիայի արժեզրկում · մտածողության արժևորում
                    </h3>
                    <p style={{ fontSize: "0.88rem", color: "#94a3b8", margin: 0, lineHeight: 1.5, maxWidth: "340px" }}>
                      AI դարաշրջանում «զրոյական արժեք» է դառնում զուտ տեղեկությունը, իսկ սինթեզն ու պաշտպանված խոսքը՝ գլխավոր արժույթը։
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "#94a3b8" }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }}/> Ինֆորմացիա
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "#94a3b8" }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981" }}/> Կոգնիտիվ սինթեզ
                    </div>
                  </div>
                </div>
                
                <ResponsiveContainer width="100%" height="80%">
                  <LineChart data={visionData} margin={{ top: 20, right: 20, bottom: 20, left: -20 }}>
                    <XAxis dataKey="year" stroke="#475569" tick={{fill: '#94a3b8'}} axisLine={false} tickLine={false} />
                    <YAxis stroke="#475569" tick={{fill: '#94a3b8'}} axisLine={false} tickLine={false} />
                    <RechartsTooltip 
                      contentStyle={{ background: "rgba(15,23,42,0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }} 
                      itemStyle={{ color: "#f8fafc" }}
                    />
                    <Line type="monotone" dataKey="info" stroke="#ef4444" strokeWidth={5} dot={{ r: 0 }} activeDot={{ r: 8, fill: "#ef4444", stroke: "#000", strokeWidth: 2 }} animationDuration={2500} style={{ filter: "drop-shadow(0 0 10px rgba(239, 68, 68, 0.4))" }} />
                    <Line type="monotone" dataKey="synthesis" stroke="#10b981" strokeWidth={5} dot={{ r: 0 }} activeDot={{ r: 8, fill: "#10b981", stroke: "#000", strokeWidth: 2 }} animationDuration={2500} animationBegin={800} style={{ filter: "drop-shadow(0 0 10px rgba(16, 185, 129, 0.4))" }} />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            </FadeIn>

            <FadeIn x={30} delay={0.4}>
              <PitchQuote>
                «Բարև ձեզ։ Որպեսզի հասկանանք, թե ինչ պրոդուկտ է պետք կառուցել այսօր, պետք է նայել 10 տարի առաջ։ Առաջիկա տասնամյակում Արհեստական Բանականությունը գեներացնելու է ցանկացած տեքստ, կոդ կամ գրաֆիկ՝ <strong style={{color:"white"}}>զրոյական ծախսով</strong>։ Հետևաբար, զուտ ինֆորմացիայի և գրավոր առաջադրանքների վրա հիմնված կրթությունը դառնում է անպիտան։<br/><br/>
                Վաղվա աշխարհում միակ արժեքավոր հմտությունը լինելու է <strong style={{color:"#a855f7"}}>մարդու կոգնիտիվ սինթեզը և բանավոր արգումենտացիան</strong>։ Մենք ներկայացնում ենք Mentoria AI-ը՝ նոր սերնդի վերլուծական ենթակառուցվածք, որը նախագծված է հենց առաջիկա 10 տարիների մարտահրավերների համար»։
              </PitchQuote>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SLIDE 2: THE BELL CURVE FLAW */}
      {/* ========================================================= */}
      <section style={{ padding: "140px 20px", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)" }} />
        
        <div style={{ maxWidth: "1300px", margin: "0 auto", zIndex: 10, position: "relative" }}>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "80px", alignItems: "center" }}>
            
            <FadeIn x={-30}>
              <SectionLabel num="2" title="Պրոբլեմը (The Bell Curve Flaw)" color="#ef4444" bgColor="rgba(239, 68, 68, 0.1)" />
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 800, marginBottom: "30px", lineHeight: 1.1 }}>
                Նորմալ Բաշխվածության Թակարդը
              </h2>
              
              <PitchQuote>
                «Ներկայիս պրոդուկտներն ու դասագրքերն ունեն արմատական դիզայներական սխալ (design flaw)։ Նրանք կառուցված են վիճակագրական «Նորմալ բաշխվածության» տրամաբանությամբ՝ թիրախավորելով միայն «միջին» սովորողին։<br/><br/>
                Արդյունքում՝ կորի երկու ծայրերը տուժում են.<br/>
                <strong style={{color:"#10b981"}}>❌ Աջ պոչը</strong> (առաջադեմ աշակերտը) ձանձրանում է, նրա պոտենցիալը սահմանափակվում է միջին տեմպով:<br/>
                <strong style={{color:"#ef4444"}}>❌ Ձախ պոչը</strong> (դժվարությամբ յուրացնող աշակերտը) ետ է մնում, չի հասկանում նյութը և ստիպված դիմում է ChatGPT-ի պարազիտային օգնությանը՝ ուղղակի պատասխաններ արտագրելով:<br/><br/>
                Միասնական (One-size-fits-all) մոդելն այլևս չի աշխատում»։
              </PitchQuote>
            </FadeIn>

            <FadeIn x={30} delay={0.2}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                style={{ 
                  background: "linear-gradient(180deg, rgba(30,41,59,0.5) 0%, rgba(15,23,42,0.8) 100%)", 
                  borderRadius: "32px", padding: "40px", height: "500px", position: "relative",
                  border: "1px solid rgba(255,255,255,0.05)", boxShadow: "0 30px 60px rgba(0,0,0,0.5)"
                }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.05) 0%, transparent 60%)", pointerEvents: "none" }} />
                
                <h3 style={{ textAlign: "center", marginBottom: "30px", color: "#f8fafc", fontSize: "1.4rem", fontWeight: 600 }}>
                  Կրթական «Միջինի» Ճգնաժամը
                </h3>
                
                <ResponsiveContainer width="100%" height="75%">
                  <AreaChart data={bellCurveData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <defs>
                      <linearGradient id="centerGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#475569" stopOpacity={0.6}/>
                        <stop offset="95%" stopColor="#475569" stopOpacity={0.0}/>
                      </linearGradient>
                      <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0.0}/>
                      </linearGradient>
                      <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.0}/>
                      </linearGradient>
                    </defs>
                    
                    {/* Left Tail Highlight */}
                    <ReferenceArea x1="-4" x2="-1.2" fill="url(#redGradient)" fillOpacity={0.4} />
                    {/* Right Tail Highlight */}
                    <ReferenceArea x1="1.2" x2="4" fill="url(#greenGradient)" fillOpacity={0.4} />
                    
                    <Area type="monotone" dataKey="y" stroke="#94a3b8" strokeWidth={3} fillOpacity={1} fill="url(#centerGradient)" animationDuration={2000} />
                  </AreaChart>
                </ResponsiveContainer>
                
                {/* Overlay Text */}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "0 10px", marginTop: "10px" }}>
                  <div style={{ textAlign: "left", color: "#ef4444", maxWidth: "120px" }}>
                    <div style={{ fontWeight: 800, fontSize: "1.05rem" }}>Ձախ պոչ</div>
                    <div style={{ fontSize: "0.75rem", opacity: 0.85, lineHeight: 1.35 }}>Դժվարությամբ յուրացնող · ChatGPT արտագրում</div>
                  </div>
                  <div style={{ textAlign: "center", color: "#94a3b8", maxWidth: "140px" }}>
                    <div style={{ fontWeight: 800, fontSize: "1.05rem" }}>Կենտրոն</div>
                    <div style={{ fontSize: "0.75rem", opacity: 0.85 }}>Միասնական (one-size-fits-all)</div>
                  </div>
                  <div style={{ textAlign: "right", color: "#10b981", maxWidth: "120px" }}>
                    <div style={{ fontWeight: 800, fontSize: "1.05rem" }}>Աջ պոչ</div>
                    <div style={{ fontSize: "0.75rem", opacity: 0.85, lineHeight: 1.35 }}>Առաջադեմ · ձանձրույթ միջին տեմպով</div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SLIDE 3: HYPER-PERSONALIZATION */}
      {/* ========================================================= */}
      <section style={{ padding: "140px 20px", position: "relative" }}>
        <GlowOrb top="20%" left="30%" color="#10b981" size={800} />
        
        <div style={{ maxWidth: "1300px", margin: "0 auto", position: "relative", zIndex: 10 }}>
          
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <FadeIn y={20}>
              <SectionLabel num="3" title="Լուծումը. Գերանհատականացում" color="#10b981" bgColor="rgba(16, 185, 129, 0.1)" />
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 800, marginBottom: "16px", lineHeight: 1.1 }}>
                Hyper-Personalization
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.6 }}
                style={{
                  fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
                  color: "#94a3b8",
                  marginBottom: "36px",
                  letterSpacing: "0.06em",
                  fontWeight: 600,
                }}
              >
                User Journey ·{" "}
                <span style={{ color: "#c4b5fd" }}>Adaptive Mapping</span>
                {" > "}
                <span style={{ color: "#e879f9" }}>Socratic Friction</span>
                {" > "}
                <span style={{ color: "#34d399" }}>Voice Defense</span>
              </motion.p>
            </FadeIn>
            
            <FadeIn y={20} delay={0.2}>
              <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                <PitchQuote>
                  «Mentoria AI-ն ամբողջությամբ քանդում է այդ ստանդարտացված մոդելը։ Մեր լուծումը <strong style={{ color: "#fff" }}>Գերանհատականացված ուսուցումն է (Hyper-Personalized Learning)</strong>։ Համակարգը հարմարվում է կոնկրետ սովորողի ճանաչողական տեմպին։<br/><br/>
                  Պրոդուկտի աշխատանքային ցիկլը հիմնված է <strong style={{color:"white"}}>Սոկրատեսյան մեթոդի</strong> վրա․ AI-ն երբեք պատրաստի պատասխան չի տալիս։ Եթե աշակերտը առաջադեմ է, համակարգը բարդացնում է հարցադրումները։ Եթե դժվարանում է, թեման տրոհում է միկրո-քայլերի։ Ուսուցումը միջինացվածից վերածվում է 100% անհատականի»։
                </PitchQuote>
              </div>
            </FadeIn>
          </div>

          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.2 } } }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px", marginTop: "60px" }}>
             {[
               { icon: <Network size={40} color="#38bdf8" />, title: "Adaptive Mapping", desc: "Թեմայի տրոհում ըստ աշակերտի ընկալման արագության և նախագիտելիքի: Անհատական ուղի յուրաքանչյուրի համար:" },
               { icon: <Brain size={40} color="#a855f7" />, title: "Socratic Friction", desc: "Հարցադրումների վրա հիմնված ուսուցում: Պատրաստի պատասխաններ չկան, միայն ուղղորդող բարդացումներ:" },
               { icon: <Mic size={40} color="#10b981" />, title: "Voice Defense", desc: "Ստուգում բանավոր խոսքի և արգումենտացիայի միջոցով վերջնական փուլում: Ապացուցիր խոսքով:" }
             ].map((step, idx) => (
               <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                 <motion.div 
                    whileHover={{ y: -10, scale: 1.02, boxShadow: "0 30px 60px rgba(0,0,0,0.4)" }}
                    style={{ 
                      padding: "50px 40px", height: "100%", textAlign: "center", position: "relative", overflow: "hidden",
                      background: "rgba(30,41,59,0.4)", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.05)",
                      backdropFilter: "blur(12px)"
                    }}>
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                      style={{ position: "absolute", top: -30, right: -30, opacity: 0.05, transform: "scale(3)" }}>
                      {step.icon}
                    </motion.div>
                    
                    <div style={{ display: "inline-flex", padding: "24px", borderRadius: "50%", background: "rgba(0,0,0,0.3)", marginBottom: "30px", boxShadow: "inset 0 4px 20px rgba(255,255,255,0.05)" }}>
                      {step.icon}
                    </div>
                    <h3 style={{ fontSize: "1.6rem", marginBottom: "20px", fontWeight: 700, color: "#f8fafc" }}>{step.title}</h3>
                    <p style={{ color: "#94a3b8", fontSize: "1.1rem", lineHeight: 1.7 }}>{step.desc}</p>
                 </motion.div>
               </motion.div>
             ))}
          </motion.div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SLIDE 4: THE MOAT - VOICE VALIDATION */}
      {/* ========================================================= */}
      <section style={{ padding: "140px 20px", background: "linear-gradient(180deg, transparent, rgba(139,92,246,0.05), transparent)", position: "relative" }}>
        
        <div style={{ maxWidth: "1300px", margin: "0 auto", position: "relative", zIndex: 10 }}>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "80px", alignItems: "center" }}>
            
            <FadeIn x={-30}>
              <SectionLabel num="4" title="Բանավոր Պաշտպանություն" color="#a855f7" bgColor="rgba(168, 85, 247, 0.1)" />
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 800, marginBottom: "30px", lineHeight: 1.1 }}>
                The Ultimate <span style={{ color: "#a855f7" }}>Moat</span>
              </h2>
              
              <PitchQuote>
                «Ուսումնական մոդուլի ավարտին մենք ունենք հեղափոխական նորարարություն՝ Ձայնային Պաշտպանության Արձանագրություն։<br/><br/>
                Աշակերտը պարտավոր է ձայնով, իր բառերով հիմնավորել ստացած գիտելիքը վիրտուալ AI հանձնաժողովին։ Եթե բանավոր չես կարողանում վերլուծել նյութը՝ այն համարվում է չյուրացված։<br/><br/>
                Սա մեր գլխավոր մրցակցային պաշտպանվածությունն է (Moat)։ Այն <strong>անհնար է դարձնում արտագրելը</strong> և ձևավորում է աշակերտի <strong style={{ color: "#e9d5ff" }}>Կոգնիտիվ Պրոֆիլը (Cognitive Profile)</strong>»։
              </PitchQuote>
            </FadeIn>

            <FadeIn x={30} delay={0.2}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                style={{ 
                  borderRadius: "40px", padding: "60px", position: "relative", overflow: "hidden",
                  background: "linear-gradient(135deg, rgba(30,41,59,0.8) 0%, rgba(15,23,42,0.9) 100%)",
                  border: "1px solid rgba(139,92,246,0.2)", boxShadow: "0 40px 80px rgba(0,0,0,0.6)"
                }}>
                
                {/* Glowing mic backdrop */}
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 200, height: 200, borderRadius: "50%", background: "#a855f7", filter: "blur(100px)", opacity: 0.3 }} />
                
                <div style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
                  <motion.div 
                    animate={{ boxShadow: ["0 0 0px #a855f7", "0 0 60px rgba(168,85,247,0.6)", "0 0 0px #a855f7"] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    style={{ 
                      width: 120, height: 120, borderRadius: "50%", background: "rgba(168,85,247,0.1)", 
                      display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 40px",
                      border: "2px solid rgba(168,85,247,0.3)"
                    }}>
                    <Mic size={50} color="#c084fc" />
                  </motion.div>
                  
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "15px" }}>Verbal Defense Protocol</h3>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(16,185,129,0.1)", padding: "10px 20px", borderRadius: "100px", color: "#10b981", fontWeight: 600 }}>
                    <Fingerprint size={18} /> Cheat-proof Ի ծնե
                  </div>

                  {/* Sound Waves Animation */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginTop: "60px", height: "100px" }}>
                    {[...Array(30)].map((_, i) => (
                      <motion.div key={`big-wave-${i}`}
                        animate={{ height: [10, (i * 37) % 90 + 20, 10] }} 
                        transition={{ repeat: Infinity, duration: 0.5 + ((i * 13) % 10) / 10, repeatType: "mirror" }} 
                        style={{ width: "6px", background: "linear-gradient(to top, #8b5cf6, #ec4899)", borderRadius: "10px" }} 
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SLIDE 5: USER SEGMENTATION (NEW SLIDE) */}
      {/* ========================================================= */}
      <section style={{ padding: "140px 20px" }}>
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <FadeIn y={20}>
              <SectionLabel num="5" title="Օգտատերերի Սեգմենտացիա" color="#3b82f6" bgColor="rgba(59, 130, 246, 0.1)" />
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 800, marginBottom: "30px", lineHeight: 1.1 }}>
                Primary <span style={{color: "#475569"}}>vs.</span> Secondary Users
              </h2>
            </FadeIn>
            
            <FadeIn y={20} delay={0.2}>
              <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                <PitchQuote>
                  «Մեր պրոդուկտի <strong style={{ color: "#fff" }}>GTM (Go-To-Market)</strong> ռազմավարության առաջին փուլում մեր գլխավոր թիրախն ու <strong style={{color:"white"}}>առաջնային օգտատերը</strong> (Primary User) աշակերտն է։ Մենք նրան տալիս ենք անհատական մենթոր։<br/><br/>
                  Բայց համակարգը հսկայական արժեք է ստեղծում նաև <strong style={{color:"white"}}>ուսուցիչների համար</strong> (Secondary User)։ Ուսուցիչն այսօր հյուծված է․ նա ժամանակ է վատնում տասնյակ AI-գեներացված, անիմաստ էսսեներ կարդալու վրա։ Mentoria-ի միջոցով մենք ազատում ենք նրան այդ ռուտինայից։ Ուսուցիչը ստանում է անալիտիկ վահանակ (Dashboard), որտեղ տեսնում է ոչ թե գրված տեքստը, այլ տվյալներ (Data) առ այն, թե դասարանի որ տոկոսը կարողացավ ձայնով պաշտպանել նյութը և որտեղ են նրանց տրամաբանական բացերը։ Սա ուսուցչին «տետր ստուգողից» վերածում է իրական վերլուծաբանի և մենթորի»։
                </PitchQuote>
              </div>
            </FadeIn>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "40px" }}>
            
            {/* Student Dashboard Card */}
            <FadeIn x={-20} delay={0.4}>
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                style={{ 
                  background: "rgba(15,23,42,0.6)", borderRadius: "32px", padding: "40px", 
                  borderTop: "4px solid #3b82f6", borderLeft: "1px solid rgba(255,255,255,0.05)",
                  borderRight: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)", position: "relative", overflow: "hidden"
                }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
                  <div>
                    <h3 style={{ fontSize: "1.6rem", fontWeight: 700, margin: 0 }}>Աշակերտի Վահանակ</h3>
                    <span style={{ color: "#3b82f6", fontWeight: 600, fontSize: "1rem" }}>PRIMARY USER</span>
                  </div>
                  <Target size={40} color="#3b82f6" opacity={0.5} />
                </div>
                
                {/* Mock UI for Student */}
                <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: "20px", padding: "24px", border: "1px solid rgba(255,255,255,0.05)" }}>
                   <div style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
                      <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(45deg, #3b82f6, #8b5cf6)" }} />
                      <div style={{ background: "rgba(255,255,255,0.05)", padding: "16px", borderRadius: "0 20px 20px 20px", flex: 1 }}>
                        <div style={{ width: "80%", height: 8, background: "rgba(255,255,255,0.1)", borderRadius: 4, marginBottom: 8 }} />
                        <div style={{ width: "60%", height: 8, background: "rgba(255,255,255,0.1)", borderRadius: 4 }} />
                      </div>
                   </div>
                   <div style={{ marginTop: "30px" }}>
                     <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "0.9rem", color: "#94a3b8" }}>
                        <span>Կոգնիտիվ Աճ (Skill Wallet)</span>
                        <span style={{ color: "#10b981", fontWeight: "bold" }}>85%</span>
                     </div>
                     <div style={{ width: "100%", height: "12px", background: "rgba(255,255,255,0.05)", borderRadius: "10px", overflow: "hidden" }}>
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ duration: 1.5, delay: 0.5 }} style={{ height: "100%", background: "#10b981", borderRadius: "10px" }} />
                     </div>
                   </div>
                </div>
              </motion.div>
            </FadeIn>

            {/* Teacher Dashboard Card */}
            <FadeIn x={20} delay={0.6}>
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                style={{ 
                  background: "rgba(15,23,42,0.6)", borderRadius: "32px", padding: "40px", 
                  borderTop: "4px solid #f59e0b", borderLeft: "1px solid rgba(255,255,255,0.05)",
                  borderRight: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)", position: "relative", overflow: "hidden"
                }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
                  <div>
                    <h3 style={{ fontSize: "1.6rem", fontWeight: 700, margin: 0 }}>Ուսուցչի Վահանակ</h3>
                    <span style={{ color: "#f59e0b", fontWeight: 600, fontSize: "1rem" }}>SECONDARY USER</span>
                  </div>
                  <BarChart2 size={40} color="#f59e0b" opacity={0.5} />
                </div>
                
                {/* Mock UI for Teacher */}
                <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: "20px", padding: "24px", border: "1px solid rgba(255,255,255,0.05)" }}>
                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", height: "100px", gap: "12px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "10px" }}>
                      {[40, 70, 45, 90, 60, 85].map((h, i) => (
                        <div key={i} style={{ flex: 1, height: "100%", display: "flex", alignItems: "flex-end" }}>
                          <motion.div initial={{ height: 0 }} whileInView={{ height: `${h}%` }} transition={{ duration: 1, delay: 0.5 + i*0.1 }} style={{ width: "100%", background: i === 3 ? "#f59e0b" : "rgba(255,255,255,0.1)", borderRadius: "4px 4px 0 0" }} />
                        </div>
                      ))}
                   </div>
                   <div style={{ marginTop: "20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                     <div style={{ background: "rgba(245, 158, 11, 0.1)", padding: "12px", borderRadius: "10px", display: "flex", alignItems: "center", gap: "10px", color: "#f59e0b" }}>
                       <Users size={20} /> <span style={{ fontWeight: "bold" }}>24/30 PASS</span>
                     </div>
                     <div style={{ background: "rgba(239, 68, 68, 0.1)", padding: "12px", borderRadius: "10px", display: "flex", alignItems: "center", gap: "10px", color: "#ef4444" }}>
                       <FileText size={20} /> <span style={{ fontWeight: "bold" }}>6 FAILED</span>
                     </div>
                   </div>
                </div>
              </motion.div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SLIDE 6: FUNDING AND BUSINESS MODEL */}
      {/* ========================================================= */}
      <section style={{ padding: "140px 20px" }}>
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <FadeIn y={20}>
              <SectionLabel num="6" title="Ֆինանսավորում և Բիզնես Մոդել" color="#10b981" bgColor="rgba(16, 185, 129, 0.1)" />
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 800, marginBottom: "30px", lineHeight: 1.1 }}>
                Բիզնես Մոդել<br/>
                <span className="text-gradient hover-glow" style={{ fontSize: "2.5rem" }}>Open-Source & Social-Based</span>
              </h2>
            </FadeIn>

            <FadeIn y={20} delay={0.2}>
              <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                <PitchQuote>
                  «Ինչ վերաբերում է ֆինանսավորմանը․ սա գլոբալ խնդիր է, ուստի ստանդարտ վճարովի հավելվածի մոդելն այստեղ չի աշխատի։ Մենք կառուցում ենք <strong style={{ color: "#fff" }}>Social-based</strong> տեխնոլոգիա, որի հիմնական միջուկը կլինի <strong style={{ color: "#fff" }}>Open-Source</strong> (բաց կոդով) և լիովին անվճար աշակերտների համար։<br/><br/>
                  Մոնետիզացիան եռաստիճան է․ <strong>R&amp;D փուլ․</strong> Ֆինանսավորվում է CSR ֆոնդերից (օրինակ՝ Coca-Cola-ի նման կազմակերպություններից, որոնք շահագրգռված են ապագայի որակյալ աշխատուժով)։ <strong>B2G (Պետական մակարդակ)․</strong> Համակարգի տրամադրում ԿԳՄՍՆ-ին որպես հանրային թվային ենթակառուցվածք։ <strong>B2B SaaS․</strong> Վճարովի պրեմիում անալիտիկա մասնավոր և միջազգային դպրոցների համար, որոնք կգնեն մեր հարթակը՝ իրենց ուսուցիչների արդյունավետությունը բարձրացնելու համար»։
                </PitchQuote>
              </div>
            </FadeIn>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
            
            <motion.div variants={staggerItem}>
              <motion.div 
                whileHover={{ y: -15, scale: 1.03, boxShadow: "0 40px 80px rgba(239, 68, 68, 0.2)" }}
                style={{ background: "rgba(30,41,59,0.4)", borderRadius: "32px", padding: "50px", height: "100%", borderTop: "6px solid #ef4444", position: "relative", backdropFilter: "blur(12px)", borderLeft: "1px solid rgba(255,255,255,0.05)", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ position: "absolute", top: -20, right: 20, fontSize: "6rem", opacity: 0.05, fontWeight: 900, fontStyle: "italic" }}>1</div>
                <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
                  <Sparkles size={50} color="#ef4444" style={{ marginBottom: "24px" }} />
                </motion.div>
                <h3 style={{ fontSize: "1.6rem", marginBottom: "20px", color: "white", fontWeight: 700 }}>R&D փուլ</h3>
                <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "1.1rem" }}>
                  Ֆինանսավորվում է CSR ֆոնդերից: Օրինակ՝ <strong style={{color:"white"}}>Coca-Cola</strong>-ի նման կազմակերպություններից, որոնք էքզիստենցիալ շահագրգռված են ապագայի որակյալ, մտածող և սինթեզող աշխատուժով։
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={staggerItem}>
              <motion.div 
                whileHover={{ y: -15, scale: 1.03, boxShadow: "0 40px 80px rgba(59, 130, 246, 0.2)" }}
                style={{ background: "rgba(30,41,59,0.4)", borderRadius: "32px", padding: "50px", height: "100%", borderTop: "6px solid #3b82f6", position: "relative", backdropFilter: "blur(12px)", borderLeft: "1px solid rgba(255,255,255,0.05)", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ position: "absolute", top: -20, right: 20, fontSize: "6rem", opacity: 0.05, fontWeight: 900, fontStyle: "italic" }}>2</div>
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
                  <Landmark size={50} color="#3b82f6" style={{ marginBottom: "24px" }} />
                </motion.div>
                <h3 style={{ fontSize: "1.6rem", marginBottom: "20px", color: "white", fontWeight: 700 }}>B2G (Պետական)</h3>
                <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "1.1rem" }}>
                  Համակարգի տրամադրում ԿԳՄՍՆ-ին կամ ազգային կրթական ինստիտուտներին որպես հանրային անվճար թվային ենթակառուցվածք՝ ազգային մակարդակով որոշումներ կայացնելու համար (Data-driven policymaking)։
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={staggerItem}>
              <motion.div 
                whileHover={{ y: -15, scale: 1.03, boxShadow: "0 40px 80px rgba(16, 185, 129, 0.2)" }}
                style={{ background: "rgba(30,41,59,0.4)", borderRadius: "32px", padding: "50px", height: "100%", borderTop: "6px solid #10b981", position: "relative", backdropFilter: "blur(12px)", borderLeft: "1px solid rgba(255,255,255,0.05)", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ position: "absolute", top: -20, right: 20, fontSize: "6rem", opacity: 0.05, fontWeight: 900, fontStyle: "italic" }}>3</div>
                <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 3.5 }}>
                  <Building2 size={50} color="#10b981" style={{ marginBottom: "24px" }} />
                </motion.div>
                <h3 style={{ fontSize: "1.6rem", marginBottom: "20px", color: "white", fontWeight: 700 }}>B2B SaaS</h3>
                <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "1.1rem" }}>
                  Վճարովի պրեմիում անալիտիկա մասնավոր և միջազգային դպրոցների համար, որոնք կգնեն մեր հարթակը (Dashboard)՝ իրենց ուսուցիչների արդյունավետությունը բազմապատկելու համար։
                </p>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SLIDE 7: THE VISIONARY CLOSE */}
      {/* ========================================================= */}
      <section style={{ padding: "160px 20px 200px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        
        <GlowOrb top="30%" left="20%" color="#a855f7" size={1000} />
        
        <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 10 }}>
          <FadeIn y={50}>
             <SectionLabel num="7" title="Եզրափակում" color="#f8fafc" bgColor="rgba(255,255,255,0.05)" />
             <motion.p
               initial={{ opacity: 0, letterSpacing: "0.3em" }}
               whileInView={{ opacity: 1, letterSpacing: "0.12em" }}
               viewport={{ once: true }}
               transition={{ duration: 0.9 }}
               style={{
                 fontSize: "clamp(0.75rem, 2vw, 0.95rem)",
                 textTransform: "uppercase",
                 color: "#94a3b8",
                 marginBottom: "20px",
                 fontWeight: 700,
               }}
             >
               Mentoria — Empowering Human Cognition
             </motion.p>
             <h2 style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 900, marginBottom: "50px", lineHeight: 1.1 }}>
                Mentoria AI-ն ուղղակի <br/><span style={{ background: "linear-gradient(to right, #6366f1, #a855f7)", WebkitBackgroundClip: "text", color: "transparent" }}>հավելված չէ։</span>
             </h2>
          </FadeIn>

          <FadeIn delay={0.2} y={50}>
            <motion.div 
              whileHover={{ boxShadow: "0 40px 80px rgba(0,0,0,0.8)", scale: 1.02 }}
              style={{ 
                background: "linear-gradient(135deg, rgba(30,41,59,0.8), rgba(15,23,42,0.9))", 
                border: "1px solid rgba(168,85,247,0.3)", borderRadius: "40px", padding: "60px", 
                backdropFilter: "blur(20px)", boxShadow: "0 30px 60px rgba(0,0,0,0.6)", transition: "all 0.5s" 
              }}>
              <p style={{ fontSize: "1.4rem", lineHeight: 1.9, textAlign: "left", marginBottom: "50px", color: "#f8fafc", fontWeight: 300, letterSpacing: "0.2px" }}>
                 «Դա կոգնիտիվ ենթակառուցվածք է:<br/><br/>
                 Մենք վերացնում ենք <strong style={{color:"#ef4444", fontWeight: 700}}>«միջին աշակերտի»</strong> սինդրոմը: Որովհետև ապագայում, երբ արհեստական բանականությունը կկարողանա անել գրեթե ամեն ինչ, միակ բանը, որ մեզ կտարբերի մեքենայից՝ <strong style={{color:"#a855f7", fontSize:"1.5rem", fontWeight: 700}}>բարդ խնդիրներ վերլուծելու և մեր սեփական միտքը պաշտպանելու կարողությունն է</strong>:<br/><br/><span style={{fontStyle:"italic", color:"#94a3b8"}}>Շնորհակալություն։</span>»
              </p>

              <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(139,92,246,0.8)" }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary"
                  onClick={() => navigate("/student")}
                  style={{ 
                    padding: "24px 60px", fontSize: "1.4rem", borderRadius: "100px", 
                    background: "linear-gradient(135deg, #6366f1, #a855f7)", color: "white", border: "none",
                    boxShadow: "0 0 30px rgba(139,92,246,0.4)", display: "inline-flex", gap: "16px", alignItems: "center", cursor: "pointer", fontWeight: 700
                  }}
                >
                  <Brain size={28} /> Մտնել Դեմո<motion.div animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><ArrowRight size={28} /></motion.div>
                </motion.button>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
