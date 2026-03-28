import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Maximize2, GitMerge } from 'lucide-react';

export default function TopicsPage() {
  const navigate = useNavigate();
  const { subjectId } = useParams();

  // Mock data for topics
  const data = {
    physics: {
      title: 'Ֆիզիկա',
      topics: [
        { id: 'kinematics', title: '1. Կինեմատիկա. Արագություն և արագացում', prg: 100, locked: false, modules: 4 },
        { id: 'dynamics', title: '2. Դինամիկա (Նյուտոնի օրենքներ)', prg: 45, locked: false, modules: 4 },
        { id: 'work_energy', title: '3. Աշխատանք, հզորություն և էներգիա', prg: 20, locked: false, modules: 5 },
        { id: 'molecular', title: '4. Մոլեկուլային ֆիզիկա, Գազերի օրենքներ', prg: 0, locked: true, modules: 3 },
        { id: 'thermo', title: '5. Ջերմադինամիկայի հիմունքներ', prg: 0, locked: true, modules: 5 },
        { id: 'electrostatics', title: '6. Էլեկտրաստատիկա', prg: 0, locked: true, modules: 4 },
        { id: 'dc_current', title: '7. Հաստատուն էլեկտրական հոսանք', prg: 0, locked: true, modules: 6 },
        { id: 'magnetism', title: '8. Մագնիսական դաշտ և ինդուկցիա', prg: 0, locked: true, modules: 5 },
        { id: 'optics', title: '9. Օպտիկա. Լույսի անդրադարձում', prg: 0, locked: true, modules: 3 },
        { id: 'quantum', title: '10. Քվանտային և Միջուկային ֆիզիկայի տարրեր', prg: 0, locked: true, modules: 4 }
      ]
    },
    math: {
      title: 'Մաթեմատիկա',
      topics: [
        { id: 'algebra', title: '1. Հանրահաշիվ. Հավասարումներ', prg: 80, locked: false, modules: 3 },
        { id: 'functions', title: '2. Ֆունկցիաներ և գրաֆիկներ', prg: 65, locked: false, modules: 5 },
        { id: 'geometry', title: '3. Երկրաչափություն. Եռանկյուններ', prg: 20, locked: false, modules: 4 },
        { id: 'polygons', title: '4. Քառանկյուններ և Բազմանկյուններ', prg: 10, locked: false, modules: 4 },
        { id: 'circle', title: '5. Շրջանագիծ և Շրջան', prg: 0, locked: true, modules: 5 },
        { id: 'trig', title: '6. Եռանկյունաչափություն', prg: 0, locked: true, modules: 6 },
        { id: 'solid_geometry', title: '7. Տարածաչափություն. Մարմինների մակերևույթներ', prg: 0, locked: true, modules: 5 },
        { id: 'vectors', title: '8. Վեկտորական հանրահաշիվ', prg: 0, locked: true, modules: 4 },
        { id: 'probability', title: '9. Հավանականություն և վիճակագրություն', prg: 0, locked: true, modules: 3 },
        { id: 'calculus', title: '10. Մաթ. Անալիզ (Ածանցյալ)', prg: 0, locked: true, modules: 7 },
      ]
    },
    biology: {
      title: 'Կենսաբանություն',
      topics: [
        { id: 'cell', title: '1. Բջջաբանության հիմունքներ', prg: 100, locked: false, modules: 4 },
        { id: 'genetics', title: '2. Գենետիկա և ժառանգականություն', prg: 10, locked: false, modules: 5 },
        { id: 'selection', title: '3. Սելեկցիա և կենսատեխնոլոգիա', prg: 0, locked: true, modules: 4 },
        { id: 'anatomy_bones', title: '4. Մարդու Անատոմիա. Ոսկրային համակարգ', prg: 0, locked: true, modules: 3 },
        { id: 'anatomy_neuro', title: '5. Նյարդային համակարգ', prg: 0, locked: true, modules: 6 },
        { id: 'anatomy_digestion', title: '6. Մարսողական համակարգ', prg: 0, locked: true, modules: 5 },
        { id: 'botany', title: '7. Բույսերի կառուցվածք', prg: 0, locked: true, modules: 5 },
        { id: 'zoology', title: '8. Կենդանաբանության հիմունքներ', prg: 0, locked: true, modules: 4 },
        { id: 'ecology', title: '9. Էկոլոգիա և բնապահպանություն', prg: 0, locked: true, modules: 4 },
        { id: 'evolution', title: '10. Էվոլյուցիոն տեսություն', prg: 0, locked: true, modules: 3 },
      ]
    },
    chemistry: {
      title: 'Քիմիա',
      topics: [
        { id: 'atoms', title: '1. Ատոմի կառուցվածք և Պարբերական համակարգ', prg: 75, locked: false, modules: 4 },
        { id: 'bonds', title: '2. Քիմիական կապեր', prg: 30, locked: false, modules: 3 },
        { id: 'inorganic', title: '3. Անօրգանական միացությունների դասեր', prg: 15, locked: false, modules: 4 },
        { id: 'redox', title: '4. Օքսիդավերականգնման ռեակցիաներ', prg: 0, locked: true, modules: 5 },
        { id: 'kinetics', title: '5. Ռեակցիայի արագություն և հավասարակշռություն', prg: 0, locked: true, modules: 4 },
        { id: 'electrolysis', title: '6. Էլեկտրոլիտային դիսոցում', prg: 0, locked: true, modules: 5 },
        { id: 'non_metals', title: '7. Ոչ մետաղների քիմիա', prg: 0, locked: true, modules: 5 },
        { id: 'metals', title: '8. Մետաղների քիմիա', prg: 0, locked: true, modules: 6 },
        { id: 'organic', title: '9. Օրգանական քիմիա. Ալկաններ և Ալկեններ', prg: 0, locked: true, modules: 6 },
        { id: 'bio_chem', title: '10. Սպիտակուցներ և Ածխաջրեր', prg: 0, locked: true, modules: 4 },
      ]
    }
  };

  const subject = data[subjectId] || data.physics;

  return (
    <div className="animate-fade-in" style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <button 
        className="btn btn-secondary" 
        onClick={() => navigate('/student')}
        style={{ padding: '8px 16px', marginBottom: '24px', borderRadius: '100px' }}
      >
        <ChevronLeft size={18} /> Առարկաներ
      </button>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 className="text-gradient">📚 {subject.title}ի Թեմաներ</h2>
        <p>Ընտրեք ուսումնական մոդուլը՝ AI դասը սկսելու համար</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {subject.topics.map(t => (
          <div
            key={t.id}
            className="glass-panel"
            style={{
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              opacity: t.locked ? 0.5 : 1,
              borderLeft: t.locked ? '4px solid var(--surface-border)' : '4px solid var(--primary)',
              cursor: t.locked ? 'not-allowed' : 'pointer',
              transition: '0.3s'
            }}
            onClick={() => {
              if (!t.locked) navigate(`/student/${subjectId}/${t.id}`);
            }}
            onMouseOver={(e) => {
              if (!t.locked) {
                 e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              }
            }}
            onMouseOut={(e) => {
               e.currentTarget.style.background = 'var(--surface-dark)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
               <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '12px' }}>
                 <GitMerge size={24} color={t.locked ? 'var(--text-muted)' : 'var(--primary)'}/>
               </div>
               <div>
                 <h3 style={{ fontSize: '1.2rem', margin: '0 0 4px 0' }}>{t.title}</h3>
                 <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Բաղկացած է {t.modules || 4} մոդուլից</div>
               </div>
            </div>
            
            <div style={{ width: '150px', textAlign: 'right' }}>
               <div style={{ fontSize: '0.85rem', marginBottom: '6px', color: 'var(--text-muted)' }}>
                 {t.locked ? 'Փակված է' : `Առաջընթաց՝ ${t.prg}%`}
               </div>
               <div style={{ height: '6px', borderRadius: '99px', background: 'rgba(255,255,255,0.1)' }}>
                  <div style={{ width: `${t.prg}%`, height: '100%', borderRadius: '99px', background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }}></div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
