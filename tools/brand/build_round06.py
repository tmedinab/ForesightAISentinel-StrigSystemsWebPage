"""Specialist-guided Round06. Closed/open structures; previous controls intact."""
from pathlib import Path
import json,re,base64,html,shutil

ROOT=Path(__file__).resolve().parents[2]
OUT=ROOT/'assets/img/brand/round-06';OUT.mkdir(parents=True,exist_ok=True)
PREVIOUS=ROOT/'assets/img/brand/round-05'
SOURCE=ROOT/'assets/img/brand/round-04'
RUNS=json.loads((SOURCE/'wordmark-source.json').read_text(encoding='utf-8'))['runs']
FONT=base64.b64encode((SOURCE/'source/SpaceGrotesk.ttf').read_bytes()).decode()
INK,PAPER,MUTED='#101820','#edf0f0','#52606c'
OLD={s['id']:s for s in json.loads((PREVIOUS/'studies.json').read_text(encoding='utf-8'))}

def retained(old,new,title):
 s=dict(OLD[old]);s.update(id=new,title=title,change='Control conservado',risk=s['risk'].removeprefix('Riesgo: '),path=re.search(r'<path[^>]* d="([^"]+)"', (PREVIOUS/(old+'.svg')).read_text(encoding='utf-8')).group(1));return s

STUDIES=[
 retained('athene-control','athene-original','Original / R04'),
 retained('athene-compacto','athene-compacto','Compacto / R05'),
 dict(id='athene-frente-solido',title='Frente sólido',change='Cabeza cerrada; aperturas más amplias',intent='Presencia firme y mirada contenida.',risk='Máscara / demasiada amabilidad.',bounds=[16,30,112,99],path='M16 30L40 36H88L112 30L108 70L90 90L70 99H58L38 90L20 70Z M28 48H56L54 62Q50 72 44 74H40Q32 70 28 62Z M100 48H72L74 62Q78 72 84 74H88Q96 70 100 62Z M58 78H70L64 88Z'),
 dict(id='athene-frente-abierto',title='Frente abierto',change='Perímetro inferior abierto; pico conectado',intent='Atención sin mentón de escudo.',risk='Visor / gafas / cercanía a Bilateral.',bounds=[16,30,112,77],path='M16 30L40 36H88L112 30L108 62L96 74L88 68L98 58V48H74L76 60Q74 66 69 71L64 77L59 71Q54 66 52 60L54 48H30V58L40 68L32 74L20 62Z'),
 retained('campo-continuidad','strig-campo','Strig / Campo continuidad'),
 retained('bilateral-frente','strig-bilateral','Strig / Bilateral frente'),
]

def text(x,y,label,size=17,color=MUTED,weight=400):
 return f'<text x="{x}" y="{y}" font-size="{size}" fill="{color}" font-weight="{weight}">{html.escape(label)}</text>'
def word(name,x,y,size,color=INK,weight=700,track=40):
 p=[]
 for i,g in enumerate(RUNS[name+'_'+str(weight)]['glyphs']):p.append(f'<path transform="translate({g["originX"]+i*track} 0)" d="{g["svgPath"]}"/>')
 return f'<g fill="{color}" transform="translate({x} {y}) scale({size/1000})">'+''.join(p)+'</g>'
def icon(s,cx,cy,span,color=INK,native=False):
 x0,y0,x1,y1=s['bounds'];k=span/128 if native else span/max(x1-x0,y1-y0)
 return f'<path fill="{color}" fill-rule="evenodd" transform="translate({cx-(x0+x1)*k/2} {cy-(y0+y1)*k/2}) scale({k})" d="{s["path"]}"/>'
def board(w,h,title,dark=False):
 return [f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-labelledby="board-title"><title id="board-title">{html.escape(title)}</title>',f'<style>@font-face{{font-family:Space;src:url(data:font/ttf;base64,{FONT}) format("truetype");font-weight:300 700}}text{{font-family:Space,Arial,sans-serif}}</style>',f'<rect width="{w}" height="{h}" fill="{INK if dark else PAPER}"/>']
def save(name,parts):(OUT/(name+'.svg')).write_text(''.join(parts)+'</svg>',encoding='utf-8')

preview=ROOT/'scratch/round06';preview.mkdir(parents=True,exist_ok=True)
if not (preview/'preview.html').exists():shutil.copyfile('C:/Users/Tomas/.codex/skills/svg-design/assets/preview.html',preview/'preview.html')
variants=[]
for s in STUDIES:
 name=s['id'];title=s['title']
 svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor" role="img" aria-labelledby="{name}-title {name}-desc"><title id="{name}-title">{html.escape(title)} / estudio sin aprobación</title><desc id="{name}-desc">{html.escape(s["change"]+". "+s["intent"]+" Riesgo: "+s["risk"])}</desc><path fill-rule="evenodd" d="{s["path"]}"/></svg>'
 (OUT/(name+'.svg')).write_text(svg,encoding='utf-8')
 company=name.startswith('strig')
 lock=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 140" role="img" aria-labelledby="{name}-lock-title"><title id="{name}-lock-title">{html.escape(title)} / lockup de estudio</title>'+icon(s,72,70,90,'currentColor')+word('STRIG' if company else 'ATHENE',145,88,85,'currentColor')
 if company:lock+=word('SYSTEMS',147,118,24,'currentColor',weight=400,track=170)
 (OUT/(name+'-lockup.svg')).write_text(lock+'</svg>',encoding='utf-8')
 if not company:
  variants.append(dict(id=name,name=title,light='../../assets/img/brand/round-06/'+name+'.svg',description=s['change']))
  (preview/'variants.js').write_text('window.VARIANTS = '+json.dumps(dict(projectName='Round06 / sin aprobación',brandName='Athene',concepts=[dict(name='Presencia firme y vigilancia competente',variants=variants)]),ensure_ascii=False,indent=2)+';\n',encoding='utf-8')

p=board(1700,1080,'Round06 / dos controles y dos rutas Athene, sin selección')
p += [text(60,55,'ATHENE / R06 · REVISIÓN DEL EQUIPO DE AGENTES',16),text(60,113,'Presencia firme. Vigilancia competente.',36,INK,500),text(60,151,'Dos controles a la izquierda. Dos estructuras nuevas a la derecha.',19)]
for i,s in enumerate(STUDIES[:4]):
 x=60+i*410
 p += [text(x,211,s['title'],25,INK,500),text(x,244,s['change'],14),icon(s,x+172,415,220),word('ATHENE',x+23,626,78),f'<rect x="{x}" y="676" width="350" height="105" fill="{INK}"/>',icon(s,x+175,728,70,PAPER)]
 for size,dx in [(16,9),(24,75),(32,149),(48,245)]:p += [icon(s,x+dx+size/2,846,size,native=True),text(x+dx,901,str(size)+' px',13)]
 p += [text(x,946,s['intent'],15,INK),text(x,978,'Riesgo: '+s['risk'],13)]
p += [text(60,1043,'EXPLORACIÓN DE IDENTIDAD / SIN LETRAS FORZADAS / CURVAS CONTENIDAS EN LAS RUTAS NUEVAS',13)]
save('athene-evolution',p)

p=board(1280,1030,'Round06 / relación producto-desarrollador con dos candidatos Strig',True)
p += [text(60,55,'ATHENE + STRIG SYSTEMS / JERARQUÍA DE FAMILIA',16,'#aab7bf'),text(60,113,'El sistema tiene rostro. La empresa lo respalda.',31,PAPER,500),text(60,151,'Aplicaciones de estudio; ninguna combinación está seleccionada.',17,'#aab7bf')]
for col,corp in enumerate(STUDIES[4:]):p += [text(60+col*610,202,corp['title'],20,PAPER)]
for row,product in enumerate(STUDIES[2:4]):
 for col,corp in enumerate(STUDIES[4:]):
  x=60+col*610;y=235+row*350
  p += [f'<rect x="{x}" y="{y}" width="550" height="290" fill="{PAPER}"/>',text(x+28,y+39,product['title'],17),icon(product,x+82,y+118,80),word('ATHENE',x+154,y+134,69),text(x+154,y+170,'SISTEMA CENTINELA AÉREO',13),text(x+28,y+218,'Desarrollado por',13),icon(corp,x+259,y+238,33),word('STRIG',x+289,y+245,33),word('SYSTEMS',x+291,y+263,13,weight=400,track=170)]
p += [text(60,994,'MISMA TIPOGRAFÍA / DIFERENTE ABSTRACCIÓN / PROPUESTA VISUAL SIN EVIDENCIA DE HARDWARE',12,'#aab7bf')]
save('family-applications',p)

p=board(1200,1110,'Round06 / tamaños nativos y presencia de los candidatos')
p += [text(40,52,'R06 / TAMAÑOS NATIVOS · CANVAS 128',18,INK),text(40,86,'Misma escala de canvas; los símbolos horizontales conservan su menor altura.',15)]
for i,s in enumerate(STUDIES):
 y=170+i*150;p += [text(40,y+7,s['title'],19,INK)]
 for size,x in [(16,470),(24,570),(32,680),(48,800),(128,960)]:p += [icon(s,x+size/2,y,size,native=True),text(x,y+77,str(size)+' px',12)]
save('native-sizes',p)
(OUT/'studies.json').write_text(json.dumps([{k:v for k,v in s.items() if k!='path'} for s in STUDIES],ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
(OUT/'boards.json').write_text(json.dumps([['athene-evolution',1700,1080],['family-applications',1280,1030],['native-sizes',1200,1110]],indent=2)+'\n',encoding='utf-8')
print('Round06: six symbols/lockups, three boards; previous proposals unchanged.')
