export const translations = {
  // ─── NAVIGATION ──────────────────────────────────────────────
  nav: {
    students:   { hy: 'Ուսանողներ',    en: 'Students',    ru: 'Ученики' },
    analytics:  { hy: 'Անալիտիկա',     en: 'Analytics',   ru: 'Аналитика' },
    profile:    { hy: 'Պրոֆիլ',        en: 'Profile',     ru: 'Профиль' },
    streak:     { hy: 'օր',            en: 'day',         ru: 'дн' },
  },

  // ─── LANDING PAGE ────────────────────────────────────────────
  landing: {
    badge:       { hy: '🚀 Hackathon Demo — Mentoria AI v1.0', en: '🚀 Hackathon Demo — Mentoria AI v1.0', ru: '🚀 Hackathon Demo — Mentoria AI v1.0' },
    heroTitle1:  { hy: 'Արհեստական բանականություն, որն ուսուցանում է', en: 'The AI that teaches', ru: 'ИИ, который учит' },
    heroTitle2:  { hy: 'մտածելու արվեստը', en: 'the art of thinking', ru: 'искусству мышления' },
    heroSub:     {
      hy: 'Ոչ թե ChatGPT-ի կրկնօրինակ, այլ Սոկրատեսյան մենթոր, որն ամեն պատասխանի փոխարեն հարց է տալիս — մինչև որ դու ինքդ հասնես ճշմարտությանը։',
      en: 'Not a ChatGPT clone — a Socratic mentor that asks questions until YOU reach the answer yourself.',
      ru: 'Не копия ChatGPT — сократический ментор, который задаёт вопросы, пока ты сам не найдёшь ответ.',
    },
    heroTitle1_clean: {
      hy: 'Արհեստական բանականություն, որն ուսուցանում է',
      en: 'The AI that teaches',
      ru: 'ИИ, который учит',
    },
    heroTitle2_clean: {
      hy: 'մտածելու արվեստը',
      en: 'the art of thinking',
      ru: 'искусству мышления',
    },
    ctaStudent:  { hy: 'Փորձել հիմա', en: 'Try Now', ru: 'Попробовать' },
    ctaDashboard:{ hy: 'Ուսուցչի վահանակ', en: 'Teacher Dashboard', ru: 'Дэшборд учителя' },
    demoLabel:   { hy: '⚡ HACKATHON ԴԵՄՈ ՍՑԵՆԱՐ', en: '⚡ HACKATHON DEMO SCENARIO', ru: '⚡ HACKATHON DEMO SCENARIO' },
    demoText:    {
      hy: 'Առարկա: Ֆիզիկա • Թեմա: Նյուտոնի դինամիկա • AI Մակարդակ:',
      en: 'Subject: Physics • Topic: Newton\'s Dynamics • AI Level:',
      ru: 'Предмет: Физика • Тема: Динамика Ньютона • AI Level:',
    },
    demoSubject: { hy: 'Ֆիզիկա', en: 'Physics', ru: 'Физика' },
    demoTopic:   { hy: 'Նյուտոնի դինամիկա', en: 'Newton\'s Dynamics', ru: 'Динамика Ньютона' },
    demoBtn:     { hy: 'Սկսել', en: 'Start', ru: 'Начать' },

    problemLabel:{ hy: 'ԽՆԴԻՐԸ', en: 'THE PROBLEM', ru: 'ПРОБЛЕМА' },
    problemTitle:{ hy: 'Ինչու է ավանդական կրթությունը ձախողվում', en: 'Why traditional education fails', ru: 'Почему традиционное образование не работает' },
    problemSub:  { hy: 'Ոչ թե ուսուցիչների, այլ ՀԱՄԱԿԱՐԳԻ ձախողումն է', en: 'Not the teachers — the SYSTEM fails', ru: 'Не учителя — система виновата' },
    problems: {
      hy: [
        'Աշակերտներն անգիր են անում, այլ ոչ թե հասկանում',
        '1 ուսուցիչ → 30 աշակերտ → 0 անհատական մոտեցում',
        'Արհեստական բանականության սխալ գործածում (պատճենում ChatGPT-ից)',
        'Հետադարձ կապը կոտրված է — սխալի դեպքում չկա բացատրություն',
        '70%+ դիմում են մասնավոր կրկնուսույցների',
      ],
      en: [
        'Students memorize, not understand',
        '1 teacher → 30 students → 0 individual attention',
        'AI is misused (ChatGPT copy-paste homework)',
        'Feedback loop is broken — wrong answer, no explanation',
        '70%+ rely on private tutors',
      ],
      ru: [
        'Ученики зубрят, а не понимают',
        '1 учитель → 30 учеников → 0 индивидуального внимания',
        'ИИ используют неправильно (copy-paste из ChatGPT)',
        'Обратная связь сломана — ошибка без объяснения',
        '70%+ прибегают к частным репетиторам',
      ],
    },
    problemIcons: ['😴', '👤', '❌', '📉', '🎯'],

    solutionLabel:{ hy: 'ԼՈՒԾՈՒՄԸ', en: 'THE SOLUTION', ru: 'РЕШЕНИЕ' },
    solutionTitle:{ hy: '4-փուլային ճանաչողական ուսուցման ցիկլ', en: '4-phase cognitive learning cycle', ru: '4-фазный цикл когнитивного обучения' },
    solutionSub:  {
      hy: 'Տեսություն → Սոկրատեսյան մեթոդ → Բանավոր խոսք → Ամբողջական յուրացում — յուրաքանչյուր արդյունք ստուգվում է ԱԲ-ի կողմից',
      en: 'Theory → Socratic → Voice → Mastered — every result verified by AI',
      ru: 'Theory → Socratic → Voice → Mastered — каждый результат проверен ИИ',
    },
    steps: {
      titles: {
        hy: ['Տեսություն և Պրակտիկա', 'Սոկրատեսյան ԱԲ', 'Բանավոր պաշտպանություն', 'Խաղայնացում և XP'],
        en: ['Theory + Practice', 'Socratic AI', 'Oral Defense', 'Gamification + XP'],
        ru: ['Теория + Практика', 'Сократический ИИ', 'Устная защита', 'Геймификация + XP'],
      },
      descs: {
        hy: [
          'Մուլտիմեդիա դասեր և ինտերակտիվ թեստեր, որոնք հարմարեցված են աշակերտի տեմպին',
          'ԱԲ-ն ԵՐԲԵՔ պատրաստի պատասխան չի տալիս, այլ հարցերի միջոցով ստիպում է ՄՏԱԾԵԼ',
          'Ձայնը տեքստի վերածող համակարգ և իմաստային վերլուծություն («հասկացա»-ն ապացույց չէ)',
          'Մակարդակներ, կրծքանշաններ, օրերի շարք — ուղեղը դոֆամին է ստանում ուսուցումից',
        ],
        en: [
          'Multimedia lessons and interactive tests — adapted to each student\'s pace',
          'AI NEVER gives a ready answer — it forces you to THINK through questions',
          'Speech-to-text + semantic analysis — "I understand" ≠ proof',
          'Levels, badges, streaks — the brain gets dopamine from learning',
        ],
        ru: [
          'Мультимедийные уроки и интерактивные тесты — по темпу каждого ученика',
          'ИИ НИКОГДА не даёт готовый ответ — он заставляет ДУМАТЬ через вопросы',
          'Речь-в-текст + семантический анализ — «Я понял» ≠ доказательство',
          'Уровни, значки, серии — мозг получает дофамин от учёбы',
        ],
      },
    },

    statsLabel:  { hy: 'ԱԶԴԵՑՈՒԹՅՈՒՆ ԵՎ ՄԱՍՇՏԱԲ', en: 'IMPACT & SCALE', ru: 'МАСШТАБ' },
    statsTitle:  { hy: 'Թվերով', en: 'By the numbers', ru: 'В цифрах' },
    statsLabels: {
      hy: ['Թիրախային աշակերտներ ՀՀ-ում', 'Հասանելի առարկաներ', 'Ուսումնական թեմաներ', 'Կոնցեպտուալ յուրացում ↑'],
      en: ['Target students in Armenia', 'Available subjects', 'Learning topics', 'Conceptual mastery ↑'],
      ru: ['Целевых учеников в РА', 'Доступных предметов', 'Учебных тем', 'Conceptual mastery ↑'],
    },

    usersLabel:  { hy: 'ԹԻՐԱԽԱՅԻՆ ՕԳՏԱՏԵՐԵՐ', en: 'TARGET USERS', ru: 'ЦЕЛЕВЫЕ ПОЛЬЗОВАТЕЛИ' },
    usersTitle:  { hy: 'Ու՞մ համար է նախատեսված Mentoria-ն', en: 'Who is Mentoria for?', ru: 'Для кого Mentoria?' },
    userNames:   {
      hy: ['Արամ, 16 տարեկան — Աշակերտ', 'Անի, 34 տարեկան — Ուսուցիչ', 'Ներդրողներ / Ժյուրի'],
      en: ['Aram, 16 — Student', 'Ani, 34 — Teacher', 'Investor / Judges'],
      ru: ['Арам, 16 л. — Ученик', 'Ани, 34 л. — Учитель', 'Инвестор / Жюри'],
    },
    userPoints: {
      hy: [
        ['ԱԲ-ի վրա հիմնված անհատականացված դասեր', 'Խաղայնացում + XP + Մակարդակներ', 'Իրական հետադարձ կապ — ոչ միայն կարմիր X', 'Ուզում է ՀԱՍԿԱՆԱԼ, այլ ոչ թե անգիր անել'],
        ['30 աշակերտ — 1 վահանակ', 'Անալիտիկա իրական ժամանակում', 'Ժամանակի խնայում — ԱԲ օգնական', 'Ով է կանգ առել — ակնթարթային տվյալներ'],
        ['$4.2B ԱՊՀ EdTech շուկա 2026-ին', '200,000+ պոտենցիալ օգտատերեր ՀՀ-ում', 'Դպրոցների համար B2B լիցենզավորում', 'Փուլ 4 → Մասշտաբավորում ողջ երկրով'],
      ],
      en: [
        ['AI-powered personalized lessons', 'Gamification + XP + Levels', 'Real feedback — not just red X', 'Wants to UNDERSTAND, not memorize'],
        ['30 students — 1 dashboard', 'Real-time analytics per concept', 'Time economy — AI teacher-assist', 'Who is stuck — instant data'],
        ['$4.2B CIS EdTech market 2026', '200,000+ addressable users in Armenia', 'B2B school licensing model', 'Phase 4 → Nationwide scale'],
      ],
      ru: [
        ['AI-персонализированные уроки', 'Геймификация + XP + Уровни', 'Реальная обратная связь', 'Хочет ПОНИМАТЬ, а не зубрить'],
        ['30 учеников — 1 дашборд', 'Аналитика в реальном времени', 'Экономия времени — ИИ-помощник', 'Кто застрял — мгновенные данные'],
        ['$4.2B рынок EdTech СНГ 2026', '200 000+ целевых пользователей', 'B2B лицензирование школ', 'Фаза 4 → Масштаб по всей стране'],
      ],
    },

    roadmapLabel:{ hy: 'ՃԱՆԱՊԱՐՀԱՅԻՆ ՔԱՐՏԵԶ', en: 'ROADMAP', ru: 'ДОРОЖНАЯ КАРТА' },
    roadmapTitle:{ hy: 'Պրոդուկտի ճանապարհային քարտեզ', en: 'Product Roadmap', ru: 'Дорожная карта продукта' },
    phases: {
      labels: {
        hy: ['MVP Հիմա', 'Q3 2026', 'Q1 2027', 'Մասշտաբավորում'],
        en: ['MVP Now', 'Q3 2026', 'Q1 2027', 'Scale'],
        ru: ['MVP Сейчас', 'Q3 2026', 'Q1 2027', 'Масштаб'],
      },
      descs: {
        hy: [
          '16 առարկա, 160 թեմա, AI չաթ, Բանավոր կապի դեմո',
          'Ուսուցչի վահանակ, իրական ժամանակի անալիտիկա',
          'OpenAI/Gemini API-ների ինտեգրում, իրական խոսքի ճանաչում',
          'Դպրոցների B2B լիցենզավորում, ընդլայնում ԱՊՀ-ում',
        ],
        en: [
          '16 subjects, 160 topics, AI chat, Voice demo',
          'Teacher Dashboard, real-time analytics live',
          'OpenAI/Gemini API, real Speech Recognition',
          'B2B school licensing, CIS expansion',
        ],
        ru: [
          '16 предметов, 160 тем, AI-чат, Voice demo',
          'Дашборд учителя, аналитика в реальном времени',
          'API OpenAI/Gemini, реальное распознавание речи',
          'B2B лицензирование школ, расширение на СНГ',
        ],
      },
    },

    poweredBy:   { hy: 'Ապահովված է', en: 'Powered by', ru: 'Технологии' },

    ctaTitle1:   { hy: 'Պատրա՞ստ եք ապագայի', en: 'Ready for the', ru: 'Готов к' },
    ctaTitle2:   { hy: 'ուսուցմանը', en: 'future of learning?', ru: 'образованию будущего?' },
    ctaSub:      {
      hy: 'Mentoria AI-ը պարզապես գործիք չէ, այն արհեստական բանականության վրա հիմնված ուսուցիչ է, որը յուրաքանչյուր աշակերտի հետ խոսում է յուրովի',
      en: 'Mentoria AI is not just a tool — it\'s an AI-powered teacher that speaks differently to every student',
      ru: 'Mentoria AI — не просто инструмент, это ИИ-учитель, который говорит с каждым учеником по-разному',
    },
    ctaBtn:      { hy: 'Սկսել Դեմոն', en: 'Start Demo', ru: 'Начать Demo' },
    ctaFooter:   {
      hy: '16 առարկա · 160+ թեմա · AI Մենթոր · Բանավոր պաշտպանություն · Իրական ժամանակի անալիտիկա',
      en: '16 subjects · 160+ topics · AI Mentor · Voice Defense · Real-time Analytics',
      ru: '16 предметов · 160+ тем · AI Ментор · Устная защита · Аналитика',
    },
  },

  // ─── SUBJECTS PAGE ───────────────────────────────────────────
  subjects: {
    title:   { hy: '📚 Ընտրեք Առարկան', en: '📚 Choose a Subject', ru: '📚 Выберите предмет' },
    sub:     { hy: 'Mentoria AI-ում հասանելի գիտակարգերը', en: 'Available disciplines in Mentoria AI', ru: 'Доступные дисциплины Mentoria AI' },
    soon:    { hy: 'Շուտով', en: 'Coming soon', ru: 'Скоро' },
    names: {
      physics:     { hy: 'Ֆիզիկա',             en: 'Physics',          ru: 'Физика' },
      math:        { hy: 'Մաթեմատիկա',          en: 'Mathematics',      ru: 'Математика' },
      biology:     { hy: 'Կենսաբանություն',        en: 'Biology',          ru: 'Биология' },
      chemistry:   { hy: 'Քիմիա',              en: 'Chemistry',        ru: 'Химия' },
      cs:          { hy: 'Ինֆորմատիկա',         en: 'Computer Science', ru: 'Информатика' },
      history:     { hy: 'Պատմություն',           en: 'History',          ru: 'История' },
      literature:  { hy: 'Գրականություն',         en: 'Literature',       ru: 'Литература' },
      language:    { hy: '🇦🇲 Հայոց լեզու',      en: 'Armenian Language', ru: 'Армянский язык' },
      geography:   { hy: 'Աշխարհագրություն',      en: 'Geography',        ru: 'География' },
      foreign_lang:{ hy: 'Օտար լեզուներ',        en: 'Foreign Languages', ru: 'Иностранные языки' },
      astronomy:   { hy: 'Աստղագիտություն',       en: 'Astronomy',        ru: 'Астрономия' },
      economics:   { hy: 'Տնտեսագիտություն',      en: 'Economics',        ru: 'Экономика' },
      psychology:  { hy: 'Հոգեբանություն',        en: 'Psychology',       ru: 'Психология' },
      law:         { hy: 'Իրավագիտություն',       en: 'Law',              ru: 'Правоведение' },
      art:         { hy: 'Արվեստ',              en: 'Art',              ru: 'Искусство' },
      music:       { hy: 'Երաժշտություն',        en: 'Music',            ru: 'Музыка' },
    },
  },

  // ─── TOPICS PAGE ─────────────────────────────────────────────
  topics: {
    backBtn:     { hy: 'Առարկաներ', en: 'Subjects', ru: 'Предметы' },
    titleSuffix: { hy: ' — Թեմաներ', en: ' — Topics', ru: ' — Темы' },
    sub:         { hy: 'Ընտրեք ուսումնական մոդուլը՝ AI դասը սկսելու համար', en: 'Choose a module to start your AI lesson', ru: 'Выберите модуль для начала урока с ИИ' },
    modules:     { hy: 'մոդուլից', en: 'modules', ru: 'модулей' },
    locked:      { hy: 'Արգելափակված է', en: 'Locked', ru: 'Заблокировано' },
    progress:    { hy: 'Առաջընթաց', en: 'Progress', ru: 'Прогресс' },
    madeOf:      { hy: 'Բաղկացած է', en: 'Contains', ru: 'Состоит из' },
  },

  // ─── STUDENT DASHBOARD ───────────────────────────────────────
  dashboard: {
    backBtn:     { hy: 'Թեմաներ', en: 'Topics', ru: 'Темы' },
    level:       { hy: 'Մակարդակ', en: 'Level', ru: 'Уровень' },
    xp:          { hy: 'XP', en: 'XP', ru: 'XP' },
    streak:      { hy: 'օրվա շարք', en: 'day streak', ru: 'дн. серия' },
    knowledge:   { hy: 'Գիտելիքի ծառ', en: 'Knowledge Tree', ru: 'Дерево знаний' },
    theory:      { hy: 'Տեսություն', en: 'Theory', ru: 'Теория' },
    practice:    { hy: 'Պրակտիկա', en: 'Practice', ru: 'Практика' },
    socratic:    { hy: 'Սոկրատեսյան', en: 'Socratic', ru: 'Сократов' },
    voice:       { hy: 'Բանավոր', en: 'Voice', ru: 'Устно' },
    done:        { hy: 'Ավարտված է', en: 'Done', ru: 'Завершено' },
    inProgress:  { hy: 'Ընթացքի մեջ է', en: 'In Progress', ru: 'В процессе' },
    locked:      { hy: 'Արգելափակված է', en: 'Locked', ru: 'Заблокировано' },
    nodeStart:   { hy: 'Սկսել', en: 'Start', ru: 'Начать' },
    nodeReview:  { hy: 'Կրկնել', en: 'Review', ru: 'Повторить' },
    nodeLocked:  { hy: '🔒 Արգելափակված է', en: '🔒 Locked', ru: '🔒 Заблокировано' },
    lockAlert:   { hy: 'Խնդրում ենք նախ ավարտել նախորդ թեման', en: 'Please complete the previous topic first', ru: 'Пожалуйста, сначала завершите предыдущую тему' },
  },

  // ─── THEORY PAGE ─────────────────────────────────────────────
  theory: {
    backBtn:     { hy: 'Վերադառնալ', en: 'Back', ru: 'Назад' },
    videoLabel:  { hy: 'Ինտերակտիվ վիդեոդաս (AI գեներացված 3D)', en: 'Interactive video lesson (AI-generated 3D)', ru: 'Интерактивный видеоурок (3D, сгенерирован ИИ)' },
    materials:   { hy: 'Դասի նյութեր', en: 'Lesson Materials', ru: 'Материалы урока' },
    pdf:         { hy: 'Դասախոսության PDF', en: 'Lecture notes PDF', ru: 'Конспект PDF' },
    model3d:     { hy: '3D Մոդել', en: '3D Model', ru: '3D Модель' },
    open:        { hy: 'Բացել', en: 'Open', ru: 'Открыть' },
    summary:     { hy: 'Ամփոփում', en: 'Summary', ru: 'Итог' },
    summaryText: {
      hy: 'Դիտեք վիդեոդասը և ծանոթացեք համառոտագրությանը՝ գործնական փուլին անցնելու համար։',
      en: 'Watch the video lesson and read the notes to proceed to the practice phase.',
      ru: 'Посмотрите видеоурок и ознакомьтесь с конспектом, чтобы перейти к практике.',
    },
    markDone:    { hy: 'Նշել որպես ավարտված', en: 'Mark as completed', ru: 'Отметить как пройденное' },
    marked:      { hy: '✓ Նշված է որպես ավարտված', en: '✓ Marked as done', ru: '✓ Отмечено как пройденное' },
  },

  // ─── PRACTICE PAGE ───────────────────────────────────────────
  practice: {
    backBtn:      { hy: 'Վերադառնալ', en: 'Back', ru: 'Назад' },
    title:        { hy: '🧠 Գործնական թեստ', en: '🧠 Practice Test', ru: '🧠 Практический тест' },
    question:     { hy: 'Հարցը', en: 'Question', ru: 'Вопрос' },
    submit:       { hy: 'Հաստատել', en: 'Submit', ru: 'Отправить' },
    correct:      { hy: '✅ Ճիշտ է:', en: '✅ Correct!', ru: '✅ Верно!' },
    incorrect:    { hy: '❌ Սխալ է', en: '❌ Incorrect', ru: '❌ Неверно' },
    backToDash:   { hy: 'Վերադառնալ Գիտելիքի ծառ', en: 'Back to Knowledge Tree', ru: 'К дереву знаний' },
    nextTopic:    { hy: 'Հաջորդ թեման', en: 'Next Topic', ru: 'Следующая тема' },
  },

  // ─── SOCRATIC ROOM ───────────────────────────────────────────
  socratic: {
    theoryTitle:  { hy: 'Տեսություն', en: 'Theory', ru: 'Теория' },
    goalLabel:    { hy: 'Նպատակ', en: 'Goal', ru: 'Цель' },
    goalText:     {
      hy: 'Հասկանալ պատճառահետևանքային կապերը, այլ ոչ թե պարզապես անգիր անել բանաձևերը։ AI-ն ձեզ կուղղորդի:',
      en: 'Understand cause-and-effect relationships, not just memorize formulas. AI will guide you.',
      ru: 'Понять причинно-следственные связи, а не просто заучить формулы. ИИ будет направлять.',
    },
    mentorName:   { hy: 'Mentoria AI Մենթոր', en: 'Mentoria AI Mentor', ru: 'Ментор Mentoria AI' },
    online:       { hy: '● Առցանց (Սոկրատեսյան ռեժիմ)', en: '● Online (Socratic mode)', ru: '● Онлайн (сократический режим)' },
    placeholder:  { hy: 'Գրեք ձեր պատասխանը...', en: 'Write your answer...', ru: 'Напишите ваш ответ...' },
    completeBtn:  {
      hy: 'Ավարտել և անցնել բանավոր պաշտպանության →',
      en: 'Complete and go to oral defense →',
      ru: 'Завершить и перейти к устной защите →',
    },
  },

  // ─── VOICE MODAL ─────────────────────────────────────────────
  voice: {
    title:        { hy: '🎤 Ամփոփիչ բանավոր պաշտպանություն', en: '🎤 Oral Defense Evaluation', ru: '🎤 Итоговая Устная Защита' },
    questionLabel:{ hy: 'AI-ի հարցը՝', en: 'AI Question:', ru: 'Вопрос ИИ:' },
    pressToSpeak: { hy: 'Սեղմեք խոսելու համար', en: 'Press to speak', ru: 'Нажмите чтобы говорить' },
    recording:    { hy: '🔴 Ձայնագրվում է... խոսեք հիմա', en: '🔴 Recording... speak now', ru: '🔴 Запись... говорите сейчас' },
    analyzing:    { hy: 'Վերլուծվում է ձեր տրամաբանությունը...', en: 'Analyzing your reasoning...', ru: 'Анализируем ваше мышление...' },
    aiEngine:     {
      hy: 'Mentoria AI Engine-ը ստուգում է իմաստային ճշգրտությունը...',
      en: 'Mentoria AI Engine is checking semantic accuracy...',
      ru: 'Mentoria AI Engine проверяет смысловую точность...',
    },
    liveSTT:      { hy: 'Live Speech-to-Text', en: 'Live Speech-to-Text', ru: 'Живой Речь-в-текст' },
    transcribing: { hy: '... խոսքը վերածվում է տեքստի', en: '... transcribing speech', ru: '... транскрибируется речь' },
    successTitle: { hy: 'Թեման յուրացված է 100%-ով', en: 'Topic mastered 100%', ru: 'Тема освоена на 100%' },
    successSub:   { hy: 'Դուք կարող եք վստահորեն առաջ շարժվել', en: 'You can confidently move forward', ru: 'Вы уверенно можете идти дальше' },
    sttLabel:     { hy: 'Խոսքից տեքստ տրանսկրիպցիա', en: 'Speech-To-Text Transcription', ru: 'Транскрипция речи' },
    backTree:     { hy: 'Վերադառնալ ծառին', en: 'Back to Tree', ru: 'Вернуться к дереву' },
    analytics:    { hy: 'Տեսնել անալիտիկան', en: 'View Analytics', ru: 'Посмотреть аналитику' },
    noiseCancel:  { hy: 'Աղմուկի չեղարկում (AI Denoise դեմո)', en: 'Noise Cancellation (AI Denoise Demo)', ru: 'Шумоподавление (AI Denoise Demo)' },
  },

  // ─── PROFILE PAGE ────────────────────────────────────────────
  profile: {
    title:        { hy: 'Իմ պրոֆիլը', en: 'My Profile', ru: 'Мой профиль' },
    level:        { hy: 'Մակարդակ', en: 'Level', ru: 'Уровень' },
    student:      { hy: 'Աշակերտ', en: 'Student', ru: 'Ученик' },
    badges:       { hy: 'Կրծքանշաններ', en: 'Badges', ru: 'Значки' },
    stats:        { hy: 'Վիճակագրություն', en: 'Statistics', ru: 'Статистика' },
    topicsComp:   { hy: 'Ավարտված թեմաներ', en: 'Completed Topics', ru: 'Завершённые темы' },
    daysActive:   { hy: 'Ակտիվ օրեր', en: 'Active Days', ru: 'Активных дней' },
    avgScore:     { hy: 'Միջին գնահատական', en: 'Avg. Score', ru: 'Средний балл' },
  },

  // ─── ANALYTICS DASHBOARD ─────────────────────────────────────
  analytics: {
    title:        { hy: '📊 Ուսուցչի վահանակ — Անալիտիկա', en: '📊 Teacher Dashboard — Analytics', ru: '📊 Дашборд учителя — Аналитика' },
    classProgress:{ hy: 'Դասարանի առաջընթաց', en: 'Class Progress', ru: 'Прогресс класса' },
    students:     { hy: 'Աշակերտներ', en: 'Students', ru: 'Ученики' },
    completed:    { hy: 'Ավարտված', en: 'Completed', ru: 'Завершено' },
    inProgress:   { hy: 'Ընթացքի մեջ', en: 'In Progress', ru: 'В процессе' },
    avgScore:     { hy: 'Միջին', en: 'Average', ru: 'Среднее' },
  },
};

// Helper function
export const t = (obj, lang) => {
  if (!obj) return '';
  return obj[lang] || obj['en'] || obj['hy'] || '';
};
