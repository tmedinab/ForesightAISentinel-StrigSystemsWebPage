"""Three complete brand systems: selected controls and two fresh-agent proposals."""
from study_support import ROOT,INK,PAPER,board,text,word,icon,save,assets,retained
import json,shutil,textwrap
OUT=ROOT/'assets/img/brand/round-13'
teams=[dict(team='A',name='Campo y centinela abierto',thesis='La S firma ingeniería; el rostro identifica el sistema.',corporate=retained(ROOT/'assets/img/brand/round-12','strig-h1','strig-a','Strig / A actual'),product=retained(ROOT/'assets/img/brand/round-12','athene-equilibrado','athene-a','Athene / A actual'),tradeoffs=['Dirección preferida; distintividad y lectura facial pendientes.'])]
for letter in ['b','c']:
    source=OUT/f'source/team_{letter}.json'
    if not source.exists():
        source.parent.mkdir(parents=True,exist_ok=True)
        shutil.copyfile(ROOT/f'scratch/round13/team_{letter}.json',source)
    team=json.loads(source.read_text(encoding='utf-8-sig'))
    for kind,prefix in [('corporate','strig'),('product','athene')]:
        team[kind]['id']=prefix+'-'+letter
    teams.append(team)
STUDIES=[t[k] for t in teams for k in ['corporate','product']]
assets(OUT,STUDIES,ROOT/'scratch/round13/preview-strig',preview_company=True)
assets(OUT,STUDIES,ROOT/'scratch/round13/preview-athene')

def width_for_height(s,h):
    b=s['bounds'];return (b[2]-b[0])*h/(b[3]-b[1])

def sized(s,x,cy,h,color=INK):
    b=s['bounds'];span=max(b[2]-b[0],b[3]-b[1])*h/(b[3]-b[1])
    return icon(s,x+width_for_height(s,h)/2,cy,span,color)

def company(s,x,baseline,size=60,color=INK):
    k=size/85;h=65.4347826087*k;w=width_for_height(s,h)
    return sized(s,x,baseline-18*k,h,color)+word('STRIG',x+w+22*k,baseline,size,color)+word('SYSTEMS',x+w+24*k,baseline+30*k,24*k,color,weight=400,track=170)

def product(s,x,baseline,size=60,color=INK):
    k=size/85;h=59*k;w=width_for_height(s,h)
    return sized(s,x,baseline-29.75*k,h,color)+word('ATHENE',x+w+24*k,baseline,size,color)

for t in teams:
    for kind,draw in [('corporate',company),('product',product)]:
        s=t[kind];font=85
        # Broad marks may require a lower nominal size to stay inside export canvas.
        required=width_for_height(s,65.4347826087 if kind=='corporate' else 59)+(22 if kind=='corporate' else 24)+(240.55 if kind=='corporate' else 319.6)
        if required>460:font=85*460/required
        s['exportNominalSize']=round(font,3)
        p=[f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 140" role="img" aria-labelledby="{s["id"]}-lock-title"><title id="{s["id"]}-lock-title">{s["title"]} / estudio de sistema {t["team"]}</title>',draw(s,15,88,font,'currentColor')]
        save(OUT,s['id']+'-lockup',p)
shutil.copyfile(ROOT/'assets/img/brand/round-12/strig-h1-lockup.svg',OUT/'strig-a-lockup.svg')
shutil.copyfile(ROOT/'assets/img/brand/round-12/athene-equilibrado-lockup.svg',OUT/'athene-a-lockup.svg')

def wrapped(x,y,label,size=16,color=INK,width=43,step=23):
    return [text(x,y+i*step,line,size,color) for i,line in enumerate(textwrap.wrap(label,width=width))]

p=board(1440,1190,'Round13 / tres sistemas completos de marca')
p += [text(50,50,'R13 / CONSULTORÍA SIMULADA · TRES SISTEMAS COMPARABLES',16),text(50,107,'Una dirección elegida. Dos interpretaciones nuevas.',32,INK,500),text(50,148,'Mismo brief, tipografía y altura visible de símbolos por papel. Sin adopción pública.',17)]
for i,t in enumerate(teams):
    x=50+i*475;c=t['corporate'];a=t['product']
    p += [text(x,212,t['team']+' / '+t['name'],21,INK,500)]
    summary={'A':'La S firma ingeniería; el rostro identifica el sistema.','B':'Una S compacta de barrido; Athene transforma el recorrido en un centinela de perfil.','C':'Una estructura abierta organiza un campo común; Athene lo convierte en presencia frontal.'}[t['team']]
    p += wrapped(x,249,summary,15,width=46,step=21)
    p += [text(x,323,'EMPRESA / STRIG SYSTEMS',13),sized(c,x+195-width_for_height(c,80)/2,398,80),company(c,x+25,523,60),f'<rect x="{x}" y="558" width="390" height="74" fill="{INK}"/>',company(c,x+24,604,48,PAPER)]
    p += [text(x,683,'PRODUCTO / ATHENE',13),sized(a,x+195-width_for_height(a,62)/2,744,62),product(a,x+15,851,60),f'<rect x="{x}" y="893" width="390" height="76" fill="{INK}"/>',product(a,x+24,943,48,PAPER)]
    risk=' / '.join(t.get('tradeoffs',[])[:1])
    p += wrapped(x,1025,risk,14,width=47,step=21)
p += [text(50,1150,'A PRESERVA LA SELECCIÓN · B/C SON EQUIPOS DE AGENTES DISTINTOS, NO CONSULTORES HUMANOS',13)]
save(OUT,'three-systems',p)

p=board(1440,900,'Round13 / misma aplicación para los tres sistemas',True)
p += [text(50,50,'R13 / MISMA FICHA DE SISTEMA',16,'#aab7bf'),text(50,108,'El producto identifica. La empresa respalda.',32,PAPER,500)]
for i,t in enumerate(teams):
    x=50+i*475;a=t['product'];c=t['corporate']
    p += [text(x,189,t['team']+' / '+t['name'],21,PAPER),f'<rect x="{x}" y="229" width="390" height="565" fill="{PAPER}"/>',text(x+24,273,'FICHA DE SISTEMA / ESTUDIO',13),sized(a,x+195-width_for_height(a,65)/2,370,65),word('ATHENE',x+55,505,77),text(x+24,561,'SISTEMA CENTINELA AÉREO',15),text(x+24,652,'Desarrollado por',13),company(c,x+24,729,52)]
p += [text(50,853,'SIN ESPECIFICACIONES INVENTADAS · LAS TRES OPCIONES CONSERVAN LOS PAPELES EMPRESA/PRODUCTO',13,'#aab7bf')]
save(OUT,'applications',p)

p=board(1200,1240,'Round13 / símbolos nativos de las tres familias')
p += [text(40,52,'R13 / CANVAS NATIVO 128 · 16 / 24 / 32 / 48 / 128',18,INK),text(40,90,'Sin compensar diferencias de ancho/altura propios; revisión de reproducción, no prueba de reconocimiento.',14)]
for i,s in enumerate(STUDIES):
    y=180+i*165;p += [text(40,y+7,s['title'],18,INK)]
    for size,x in [(16,470),(24,570),(32,680),(48,800),(128,960)]:
        p += [icon(s,x+size/2,y,size,native=True),text(x,y+77,str(size)+' px',12)]
p += [text(40,1198,'METÁFORA Y CARÁCTER SE EVALÚAN CON TOMÁS; LA RASTERIZACIÓN NO LOS ACREDITA',13)]
save(OUT,'native-sizes',p)
public=[{k:v for k,v in t.items() if k not in ['corporate','product']}|{'corporate':t['corporate']['id'],'product':t['product']['id']} for t in teams]
(OUT/'systems.json').write_text(json.dumps(public,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
(OUT/'studies.json').write_text(json.dumps([{k:v for k,v in s.items() if k!='path'} for s in STUDIES],ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
(OUT/'boards.json').write_text(json.dumps([['three-systems',1440,1190],['applications',1440,900],['native-sizes',1200,1240]],indent=2)+'\n',encoding='utf-8')
print('Round13: three complete pairs, six symbols/lockups, three boards.')
