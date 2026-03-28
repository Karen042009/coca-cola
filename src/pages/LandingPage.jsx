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
    <div className="landing-pitch" style={{ 
      width: "100%", 
      overflowX: "hidden", 
      background: "linear-gradient(135deg, #0a0c1a 0%, #1e1b4b 50%, #2e1065 100%)", 
      color: "#f8fafc",
      position: "relative"
    }}>
      {/* ========================================================= */}
      {/* SLIDE 1: VISION & PARADIGM TRANSFORMATION */}
      {/* ========================================================= */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "120px 20px 80px", position: "relative", overflow: "hidden"
      }}>
        <GlowOrb top="-10%" left="-5%" color="#312e81" size={1000} />
        <GlowOrb bottom="-10%" right="-5%" color="#4c1d95" size={800} />

        <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%", zIndex: 10 }}>
          
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <FadeIn y={20}>
              <div style={{ marginBottom: "28px" }}>
                <span className="pitch-deck-pill">🚀 PITCH DECK · «Mentoria AI»</span>
              </div>
              <SectionLabel num="1" title="10-ամյա Վիզիոն և Պարադիգմի Տրանսֆորմացիա" />
              <h1
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  marginBottom: "24px",
                  letterSpacing: "-0.02em",
                  maxWidth: "1200px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Պատրաստվեք առաջիկա <span style={{ color: "#8b5cf6" }}>10 տարվա</span>
                <br />
                կոգնիտիվ մարտահրավերներին
              </h1>
              <p style={{ fontSize: "1.4rem", color: "#cbd5e1", fontWeight: 500, marginBottom: "12px" }}>
                Պրոդուկտի Ընդլայնված Ներկայացում · Տևողությունը՝ <strong style={{ color: "#fff" }}>5 րոպե</strong>
              </p>
            </FadeIn>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "60px", alignItems: "center" }}>
            
            <FadeIn x={-30} delay={0.2}>
              <div style={{ padding: "40px", background: "rgba(255,255,255,0.02)", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.05)", height: "450px" }}>
                <div style={{ marginBottom: "20px" }}>
                   <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#f8fafc", marginBottom: "8px" }}>Ինֆորմացիայի արժեքի անկումը vs. Կոգնիտիվ արժեք</h3>
                   <p style={{ fontSize: "0.95rem", color: "#94a3b8" }}>Արհեստական Բանականությունը գեներացնելու է ցանկացած տեքստ, կոդ կամ գրաֆիկ՝ զրոյական սահմանային ծախսով:</p>
                </div>
                <div style={{ height: "250px" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={visionData}>
                      <XAxis dataKey="year" stroke="#475569" tick={{fill: '#94a3b8'}} hide />
                      <YAxis stroke="#475569" tick={{fill: '#94a3b8'}} hide />
                      <RechartsTooltip 
                        contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px" }}
                      />
                      <Line type="monotone" dataKey="info" stroke="#ef4444" strokeWidth={4} dot={false} name="Ինֆորմացիայի արժեք" />
                      <Line type="monotone" dataKey="synthesis" stroke="#10b981" strokeWidth={4} dot={false} name="Կոգնիտիվ հմտություններ" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div style={{ display: "flex", gap: "20px", marginTop: "20px", justifyContent: "center" }}>
                   <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#94a3b8" }}>
                      <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444" }} /> Ինֆորմացիա
                   </div>
                   <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#94a3b8" }}>
                      <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#10b981" }} /> Կոգնիտիվ սինթեզ
                   </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn x={30} delay={0.4}>
              <PitchQuote>
                «Բարև ձեզ: Պրոդուկտ մենեջմենթի ոսկե կանոնն ասում է՝ եթե դու կառուցում ես պրոդուկտ այսօրվա շուկայի համար, դու արդեն ուշացել ես։ Պետք է նայել 10 տարի առաջ։ Առաջիկա տասնամյակում Արհեստական Բանականությունը գեներացնելու է ցանկացած տեքստ, կոդ, տեսանյութ և գրաֆիկ՝ <strong style={{color:"#fff"}}>զրոյական սահմանային ծախսով (zero marginal cost)</strong>։<br/><br/>
                Արդյունքում, զուտ ինֆորմացիայի վերարտադրման և գրավոր առաջադրանքների վրա հիմնված կրթական մոդելը դառնում է բացարձակ անպիտան։ Վաղվա աշխարհում, երբ մեքենայից այնկողմ ամեն ինչ կա, միակ արժեքավոր մարդկային ռեսուրսը լինելու է <strong style={{color:"#8b5cf6"}}>կոգնիտիվ սինթեզը</strong> և սեփական միտքը բանավոր պաշտպանելու կարողությունը:»
              </PitchQuote>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SLIDE 2: THE BELL CURVE FLAW */}
      {/* ========================================================= */}
      <section style={{ padding: "140px 20px", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ maxWidth: "1300px", margin: "0 auto", position: "relative", zIndex: 10 }}>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "80px", alignItems: "center" }}>
            
            <FadeIn x={-30}>
              <SectionLabel num="2" title="Պրոբլեմը և «Նորմալ Բաշխվածության» Թակարդը" color="#ef4444" bgColor="rgba(239, 68, 68, 0.1)" />
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 800, marginBottom: "30px", lineHeight: 1.1 }}>
                The <span style={{ color: "#ef4444" }}>Bell Curve</span> Flaw
              </h2>
              <PitchQuote>
                «Ինչո՞ւ է այսօրվա կրթությունը տապալվում։ Որովհետև ներկայիս կրթական պրոդուկտներն ու դասագրքերն ունեն <strong style={{color:"#fff"}}>արմատական դիզայներական սխալ (design flaw)</strong>։ Դրանք կառուցված են վիճակագրական «Նորմալ բաշխվածության» տրամաբանությամբ՝ թիրախավորելով միայն համակարգի կենտրոնը՝ այսպես կոչված «միջին» սովորողին։<br/><br/>
                Արդյունքում՝ կորի երկու ծայրերը (պոչերը) հայտնվում են ճգնաժամի մեջ. Աջ պոչը (առաջադեմ աշակերտը) ձանձրանում է, իսկ Ձախ պոչը (դժվարությամբ յուրացնողը) հետ է մնում և ստիպված դիմում է <strong style={{color:"#fff"}}>ChatGPT-ի պարազիտային օգնությանը</strong>։»
              </PitchQuote>
            </FadeIn>

            <FadeIn x={30} delay={0.2}>
              <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: "32px", padding: "40px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <h3 style={{ textAlign: "center", marginBottom: "30px", fontSize: "1.2rem" }}>Գաուսյան նորմալ բաշխման կորը (Bell Curve)</h3>
                <div style={{ height: "300px" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={bellCurveData}>
                       <defs>
                        <linearGradient id="colorY" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#ef4444" stopOpacity={0.8}/>
                          <stop offset="30%" stopColor="#475569" stopOpacity={0.3}/>
                          <stop offset="70%" stopColor="#475569" stopOpacity={0.3}/>
                          <stop offset="100%" stopColor="#ef4444" stopOpacity={0.8}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="y" stroke="#94a3b8" fill="url(#colorY)" fillOpacity={1} strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                   <span style={{ color: "#ef4444", fontWeight: 700 }}>Ձախ պոչ</span>
                   <span style={{ color: "#64748b" }}>Միջին</span>
                   <span style={{ color: "#ef4444", fontWeight: 700 }}>Աջ պոչ</span>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SLIDE 3: HYPER-PERSONALIZATION & CORE LOOP */}
      {/* ========================================================= */}
      <section style={{ padding: "140px 20px", position: "relative" }}>
        <GlowOrb top="20%" left="30%" color="#10b981" size={800} />
        <div style={{ maxWidth: "1300px", margin: "0 auto", position: "relative", zIndex: 10 }}>
          
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <FadeIn y={20}>
              <SectionLabel num="3" title="Լուծումը. Գերանհատականացված Ուսուցում" color="#10b981" bgColor="rgba(16, 185, 129, 0.1)" />
              <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 900, marginBottom: "24px" }}>
                Hyper-Personalized <span style={{ color: "#10b981" }}>Core Loop</span>
              </h1>
              <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                <PitchQuote>
                  «Mentoria AI-ն հիմնովին քանդում է այդ ստանդարտացված մոդելը: Մեր պրոդուկտի աշխատանքային ցիկլը (Core Loop) հիմնված է <strong style={{color:"#fff"}}>Սոկրատեսյան մեթոդաբանության</strong> և կառուցողական բարդության (constructive friction) վրա: Մեր AI-ն երբեք պատրաստի պատասխան չի տալիս: Եթե աշակերտը առաջադեմ է, այն ավտոմատ բարդացնում է հարցադրումները, իսկ եթե դժվարանում է՝ նյութը տրոհում է միկրո-քայլերի:»
                </PitchQuote>
              </div>
            </FadeIn>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px", marginTop: "60px" }}>
             {[
               { icon: <Network size={40} color="#38bdf8" />, title: "Adaptive Mapping", desc: "Թեմայի դինամիկ տրոհում ըստ աշակերտի ճանաչողական տեմպի և նախագիտելիքի: Անհատական ուղի յուրաքանչյուրի համար:" },
               { icon: <Brain size={40} color="#a855f7" />, title: "Socratic Friction", desc: "Հարցադրումների վրա հիմնված ուսուցում: Պատրաստի պատասխաններ չկան, միայն ուղղորդող բարդացումներ:" },
               { icon: <Mic size={40} color="#10b981" />, title: "Voice Defense", desc: "Ստուգում բանավոր խոսքի և արգումենտացիայի միջոցով վերջնական փուլում: Ապացուցիր խոսքով:" }
             ].map((step, idx) => (
                <FadeIn key={idx} delay={idx * 0.15}>
                  <div style={{ padding: "40px", background: "rgba(255,255,255,0.02)", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.05)", height: "100%" }}>
                     <div style={{ marginBottom: "24px" }}>{step.icon}</div>
                     <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", color: "#f8fafc" }}>{step.title}</h3>
                     <p style={{ color: "#94a3b8", lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                </FadeIn>
             ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SLIDE 4: THE MOAT - VOICE VALIDATION */}
      {/* ========================================================= */}
      <section style={{ padding: "140px 20px", position: "relative" }}>
        <div style={{ maxWidth: "1300px", margin: "0 auto", position: "relative", zIndex: 10 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "80px", alignItems: "center" }}>
            
            <FadeIn x={-30}>
              <SectionLabel num="4" title="Բանավոր Պաշտպանություն" color="#a855f7" bgColor="rgba(168, 85, 247, 0.1)" />
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 800, marginBottom: "30px", lineHeight: 1.1 }}>
                The Ultimate <span style={{ color: "#a855f7" }}>Moat</span>
              </h2>
              <PitchQuote>
                «Ինչպե՞ս ենք մենք ստուգում գիտելիքը AI-ի դարաշրջանում: Ուսումնական մոդուլի ավարտին մենք ներդրել ենք հեղափոխական ֆիչր՝ <strong style={{color:"#fff"}}>Ձայնային Պաշտպանության Արձանագրություն</strong>: Աշակերտը պարտավոր է բացառապես ձայնով, իր սեփական բառերով հիմնավորել ստացած գիտելիքը վիրտուալ AI հանձնաժողովին: Եթե բանավոր չես կարողանում արգումենտավորել նյութը՝ այն համարվում է չյուրացված:»
              </PitchQuote>
            </FadeIn>

            <FadeIn x={30} delay={0.2}>
              <div style={{ padding: "60px", background: "rgba(168, 85, 247, 0.05)", borderRadius: "40px", textAlign: "center", border: "1px solid rgba(168, 85, 247, 0.1)" }}>
                <motion.div 
                   animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0px #a855f7", "0 0 40px rgba(168,85,247,0.3)", "0 0 0px #a855f7"] }}
                   transition={{ repeat: Infinity, duration: 2 }}
                   style={{ width: 100, height: 100, borderRadius: "50%", background: "rgba(168,85,247,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 30px" }}>
                  <Mic size={48} color="#a855f7" />
                </motion.div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "16px" }}>Verbal Defense Protocol</h3>
                <p style={{ color: "#94a3b8", marginBottom: "30px" }}>Անհնար է դարձնում արտագրելը և ձևավորում է աշակերտի Կոգնիտիվ Պրոֆիլը (Cognitive Profile):</p>
                <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                   {[...Array(12)].map((_, i) => (
                      <motion.div 
                        key={i}
                        animate={{ height: [8, 30, 8] }}
                        transition={{ repeat: Infinity, duration: 0.5 + Math.random(), ease: "easeInOut" }}
                        style={{ width: 4, background: "#a855f7", borderRadius: 2 }}
                      />
                   ))}
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SLIDE 5: USER SEGMENTATION */}
      {/* ========================================================= */}
      <section style={{ padding: "140px 20px" }}>
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <FadeIn y={20}>
              <SectionLabel num="5" title="Օգտատերերի Սեգմենտացիա" color="#3b82f6" bgColor="rgba(59, 130, 246, 0.1)" />
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 800 }}>
                Primary <span style={{ color: "#475569" }}>vs.</span> Secondary Users
              </h2>
            </FadeIn>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "40px" }}>
            <FadeIn x={-20} delay={0.2}>
               <div style={{ padding: "40px", background: "rgba(255,255,255,0.02)", borderRadius: "32px", borderTop: "4px solid #3b82f6" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
                     <div>
                        <h3 style={{ fontSize: "1.7rem", fontWeight: 800 }}>Աշակերտ (Primary)</h3>
                        <p style={{ color: "#3b82f6", fontWeight: 600 }}>Անհատական մենթոր</p>
                     </div>
                     <Target size={40} color="#3b82f6" opacity={0.5} />
                  </div>
                  <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "1.1rem" }}>
                    «Աշակերտը ստանում է անվճար, կատարյալ համակարգված անհատական մենթոր, որը փոխարինում է թանկարժեք կրկնուսույցներին։»
                  </p>
               </div>
            </FadeIn>

            <FadeIn x={20} delay={0.4}>
               <div style={{ padding: "40px", background: "rgba(255,255,255,0.02)", borderRadius: "32px", borderTop: "4px solid #f59e0b" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
                     <div>
                        <h3 style={{ fontSize: "1.7rem", fontWeight: 800 }}>Ուսուցիչ (Secondary)</h3>
                        <p style={{ color: "#f59e0b", fontWeight: 600 }}>Actionable Data</p>
                     </div>
                     <BarChart2 size={40} color="#f59e0b" opacity={0.5} />
                  </div>
                  <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "1.1rem" }}>
                    «Ուսուցիչը ստանում է պրոֆեսիոնալ Անալիտիկ Վահանակ, որտեղ տեսնում է ոչ թե մեռած տեքստ, այլ դասարանի կիրառելի տվյալները:»
                  </p>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SLIDE 6: FUNDING & BUSINESS MODEL */}
      {/* ========================================================= */}
      <section style={{ padding: "140px 20px" }}>
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <FadeIn y={20}>
              <SectionLabel num="6" title="Ֆինանսավորում և Բիզնես Մոդել" color="#10b981" bgColor="rgba(16, 185, 129, 0.1)" />
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 900 }}>
                Open-Source & Social-Based
              </h2>
              <PitchQuote>
                «Մենք կառուցում ենք Social-based տեխնոլոգիա, որի հիմնական շարժիչը կլինի <strong style={{color:"#fff"}}>Open-Source</strong> և լիովին անվճար աշակերտների համար։ Մոնետիզացիան կառուցված է 3 հենասյան վրա՝ R&D դրամաշնորհներ, Պետական ինտեգրացիա (B2G) և Enterprise SaaS մասնավոր դպրոցների համար։»
              </PitchQuote>
            </FadeIn>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
             {[
               { icon: <Sparkles color="#ef4444" />, title: "R&D & Grants", desc: "Ֆինանսավորվում է գլոբալ կրթական դրամաշնորհների և խոշոր կորպորատիվ ESG ֆոնդերի կողմից:" },
               { icon: <Landmark color="#3b82f6" />, title: "B2G (Պետական)", desc: "Համակարգի տրամադրում Նախարարություններին որպես հանրային թվային ենթակառուցվածք՝ սուբսիդավորմամբ։" },
               { icon: <Building2 color="#10b981" />, title: "Enterprise SaaS", desc: "Վճարովի Predictive Analytics միջազգային և մասնավոր դպրոցների ու համալսարանների համար։" }
             ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div style={{ padding: "40px", background: "rgba(255,255,255,0.02)", borderRadius: "32px", textAlign: "center", height: "100%" }}>
                     <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>{item.icon}</div>
                     <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "12px" }}>{item.title}</h3>
                     <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>{item.desc}</p>
                  </div>
                </FadeIn>
             ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SLIDE 7: THE VISIONARY CLOSE */}
      {/* ========================================================= */}
      <section style={{ padding: "160px 20px 200px", textAlign: "center", position: "relative" }}>
        <GlowOrb top="30%" left="20%" color="#a855f7" size={1000} />
        <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 10 }}>
          <FadeIn y={50}>
             <SectionLabel num="7" title="Եզրափակում" color="#fff" bgColor="rgba(255,255,255,0.1)" />
             <h2 style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 900, marginBottom: "40px", lineHeight: 1.1 }}>
               Mentoria — Empowering <br /> <span style={{ background: "linear-gradient(to right, #6366f1, #a855f7)", WebkitBackgroundClip: "text", color: "transparent" }}>Human Cognition</span>
             </h2>
             <p style={{ fontSize: "1.6rem", lineHeight: 1.8, color: "#cbd5e1", fontWeight: 300, marginBottom: "60px" }}>
               «Ապագայում, երբ արհեստական բանականությունը կկարողանա անել գրեթե ամեն ինչ, միակ և անփոխարինելի բանը, որ մեզ կտարբերի մեքենայից՝ բարդ խնդիրներ վերլուծելու և մեր սեփական միտքը պաշտպանելու կարողությունն է:»
             </p>
             <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/student")}
                style={{ 
                  padding: "24px 60px", fontSize: "1.4rem", borderRadius: "100px", background: "linear-gradient(135deg, #6366f1, #a855f7)", color: "white", border: "none", cursor: "pointer", fontWeight: 700, display: "inline-flex", gap: "12px", alignItems: "center"
                }}
             >
                <Brain size={28} /> Մտնել Դեմո <ArrowRight size={28} />
             </motion.button>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
