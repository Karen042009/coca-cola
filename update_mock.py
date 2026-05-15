import re

with open('src/data/mockContent.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Define the explanation texts for each topic based on the correct answers
explanations = {
    "dynamics": "Ուժը հավասար է զանգվածի և արագացման արտադրյալին (F = m · a)։ 1000 կգ · 2 մ/վ² = 2000 Նյուտոն։",
    "kinematics": "Հաստատուն արագությամբ շարժման դեպքում ճանապարհը հավասար է արագություն բազմապատկած ժամանակ (S = V · t): 60 կմ/ժ · 2.5 ժ = 150 կմ։",
    "work_energy": "Աշխատանքը հաշվարկվում է որպես ուժի և տեղափոխության արտադրյալ (A = F · S)։ 10 Ն · 5 մ = 50 Ջոուլ։",
    "algebra": "Հավասարման երկու կողմերին գումարելով 5, կստանանք 3x = 15։ Այնուհետև երկու կողմը բաժանելով 3-ի՝ կստանանք x = 5։",
    "functions": "Տեղադրելով x = 3 արժեքը բանաձևի մեջ՝ կստանանք y = 4 · 3 - 2 = 12 - 2 = 10։",
    "geometry": "Եռանկյան ներքին անկյունների գումարը միշտ 180° է: Երրորդ անկյունը կլինի՝ 180° - (40° + 60°) = 180° - 100° = 80°։",
    "polygons": "Շեղանկյունն այն քառանկյունն է, որի բոլոր կողմերը հավասար են, սակայն անկյունները կարող են լինել սուր և բութ։ Եթե անկյուններն ուղիղ լինեին, այն կկոչվեր քառակուսի։",
    "cell": "Կորիզը պարունակում է ԴՆԹ-ն, որն իրենից ներկայացնում է բջջի գենետիկական ծրագիրը և ղեկավարում է բոլոր կենսական պրոցեսները:",
    "genetics": "ԴՆԹ-ն (դեզօքսիռիբոնուկլեինաթթու) այն մոլեկուլն է, որը պարունակում է գեները և կրում է օրգանիզմի ամբողջ ժառանգական ինֆորմացիան։",
    "atoms": "Ատոմն ամբողջությամբ էլեկտրաչեզոք է, ուստի դրական լիցքավորված պրոտոնների քանակը միշտ պետք է հավասար լինի բացասական լիցքավորված էլեկտրոնների քանակին (8)։",
    "bonds": "Կովալենտ կապն առաջանում է ոչ մետաղների ատոմների միջև՝ արտաքին էլեկտրոնների համատեղման (ընդհանրացման) արդյունքում։",
    "inorganic": "Բոլոր թթուների բանաձևերը սկսվում են ջրածնի ատոմով (H), որին միացած է թթվային մնացորդը (R): Օրինակ՝ HCl, H2SO4։",
    "Generic": "Այս պատասխանը ցույց է տալիս ձեր պատրաստակամությունը քննարկմանը մասնակցելու համար:"
}

def replace_func(match):
    # match.group(1) is the whole block up to the closing bracket of practiceOptions
    topic_key = None
    text_before = match.group(0)
    
    # Let's find which topic this is by looking for the courseTitle nearby or just matching the text
    # Actually, easier to use a counter or just look back
    
    # Since regex might be tricky, let's iterate through the file and replace by topic
    pass

# We can replace by finding practiceQuestion for each topic and doing a manual insertion.
for key, expl in explanations.items():
    if key == "Generic":
        # Handle getGenericContent
        pattern = r'(practiceOptions:\s*\[.*?\])(,)'
        # wait, generic is handled in getGenericContent
        match = re.search(r'practiceQuestion:\s*"Արդյո՞ք պատրաստ եք այս թեմայի շուրջ Սոկրատեսյան քննարկմանը\?",\s*practiceOptions:\s*\[.*?\]', content, re.DOTALL)
        if match:
            full_match = match.group(0)
            replacement = full_match + f',\n      explanation: "{expl}"'
            content = content.replace(full_match, replacement)
    else:
        # Find the block for the specific topic key
        # We look for key: { ... practiceOptions: [...] ... }
        # Let's just find the practiceOptions block within that topic
        pattern = rf'({key}:\s*{{.*?practiceOptions:\s*\[.*?\])'
        match = re.search(pattern, content, re.DOTALL)
        if match:
            full_match = match.group(1)
            replacement = full_match + f',\n      explanation: "{expl}"'
            content = content.replace(full_match, replacement)

with open('src/data/mockContent.js', 'w', encoding='utf-8') as f:
    f.write(content)
