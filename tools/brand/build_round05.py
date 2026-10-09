"""Round05 studies. No public brand replacement; Round04 controls preserved."""
from pathlib import Path
import json, base64, html, shutil

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'assets/img/brand/round-05'
OUT.mkdir(parents=True, exist_ok=True)
SOURCE = ROOT / 'assets/img/brand/round-04'
FONT = base64.b64encode((SOURCE / 'source/SpaceGrotesk.ttf').read_bytes()).decode()
RUNS = json.loads((SOURCE / 'wordmark-source.json').read_text(encoding='utf-8'))['runs']
INK, PAPER, MUTED = '#101820', '#edf0f0', '#52606c'
STUDIES = [
 ('campo-control', 'Campo / R04', 'Control conservado', 'Dos marcos abiertos; posible S.', 'Riesgo: bracket genérico.', 'M18 54V38L38 18H110L94 34H46L34 46V54Z M110 74V90L90 110H18L34 94H82L94 82V74Z', (18,18,110,110)),
 ('campo-continuidad', 'Campo / continuidad', 'Piezas 3 u hacia el centro', 'Mayor unidad; conserva apertura.', 'Riesgo: S tecnológica convencional.', 'M18 57V41L38 21H110L94 37H46L34 49V57Z M110 71V87L90 107H18L34 91H82L94 79V71Z', (18,21,110,107)),
 ('campo-terminal', 'Campo / terminal corto', 'Retornos de 8 a 4 u', 'Menos gesto de corchete.', 'Riesgo: perder un rasgo propio.', 'M18 50V38L38 18H110L94 34H46L34 46V50Z M110 78V90L90 110H18L34 94H82L94 82V78Z', (18,18,110,110)),
 ('bilateral-control', 'Bilateral / R04', 'Control conservado', 'Atención y parentesco biológico.', 'Riesgo: cejas / ave genérica.', 'M12 32L44 40L58 54V66L48 76H40L24 60V50L12 42Z M116 32L84 40L70 54V66L80 76H88L104 60V50L116 42Z', (12,32,116,76)),
 ('bilateral-frente', 'Bilateral / frente estable', 'Menor inclinación superior', 'Gesto más contenido.', 'Riesgo: menos tensión / carácter.', 'M12 32L44 36L58 50V66L48 76H40L24 60V50L12 42Z M116 32L84 36L70 50V66L80 76H88L104 60V50L116 42Z', (12,32,116,76)),
 ('bilateral-profundo', 'Bilateral / más presencia', 'Base 8 u más profunda', 'Más masa vertical en pequeño.', 'Riesgo: máscara / mayor peso.', 'M12 32L44 40L58 54V74L48 84H40L24 68V50L12 42Z M116 32L84 40L70 54V74L80 84H88L104 68V50L116 42Z', (12,32,116,84)),
 ('athene-control', 'Athene / R04', 'Control conservado', 'Frente y pico; A no resuelta.', 'Riesgo: máscara / escudo.', 'M16 28L42 36H86L112 28L108 72L84 96L64 108L44 96L20 72Z M28 48H54L52 64L40 76L28 64Z M100 48H74L76 64L88 76L100 64Z M58 76H70L64 86Z', (16,28,112,108)),
 ('athene-at-invertida', 'Athene / A invertida + T', 'Otra estructura: diagonales y puente', 'Letras como construcción interna.', 'Riesgo: casco / símbolo matemático.', 'M12 28H116L106 66L88 86L64 106L40 86L22 66Z M28 46H56V62L48 74L38 70Z M100 46H72V62L80 74L90 70Z M58 80H70L64 90Z', (12,28,116,106)),
 ('athene-a-central', 'Athene / A central', 'A en masa positiva; cabeza autónoma', 'Lectura nominal secundaria en estudio.', 'Riesgo: centro pesado / acertijo.', 'M18 30L42 36H86L110 30L108 68L88 90L72 100H56L40 90L20 68Z M28 48H60L50 72L40 76L28 64Z M100 48H68L78 72L88 76L100 64Z M64 58L73 78H55Z M59 84H69L64 92Z', (18,30,110,100)),
 ('athene-compacto', 'Athene / cabeza compacta', 'Sin letras; curvas contenidas', 'Mirada facial y cierre más corto.', 'Riesgo: mascota / perder tensión.', 'M18 30L42 36H86L110 30L108 68L92 86L72 98H56L36 86L20 68Z M28 48H54L52 62Q48 72 42 74Q34 72 28 64Z M100 48H74L76 62Q80 72 86 74Q94 72 100 64Z M58 78H70L64 88Z', (18,30,110,98)),
]

def text(x,y,label,size=17,color=MUTED,weight=400):
 return f'<text x="{x}" y="{y}" font-size="{size}" fill="{color}" font-weight="{weight}">{html.escape(label)}</text>'

def word(name,x,y,size,color=INK,weight=700,track=40):
 out=[]
 for i,g in enumerate(RUNS[name+'_'+str(weight)]['glyphs']):
  out.append(f'<path transform="translate({g["originX"]+i*track} 0)" d="{g["svgPath"]}"/>')
 return f'<g fill="{color}" transform="translate({x} {y}) scale({size/1000})">'+''.join(out)+'</g>'

def icon(study,cx,cy,span,color=INK,native=False):
 x0,y0,x1,y1=study[6]
 scale=span/128 if native else span/max(x1-x0,y1-y0)
 return f'<path fill="{color}" fill-rule="evenodd" transform="translate({cx-(x0+x1)*scale/2} {cy-(y0+y1)*scale/2}) scale({scale})" d="{study[5]}"/>'

def board_start(w,h,title):
 return [f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-labelledby="board-title"><title id="board-title">{html.escape(title)}</title>',f'<style>@font-face{{font-family:Space;src:url(data:font/ttf;base64,{FONT}) format("truetype");font-weight:300 700}}text{{font-family:Space,Arial,sans-serif}}</style>',f'<rect width="{w}" height="{h}" fill="{PAPER}"/>']

def save(name,parts):
 (OUT/(name+'.svg')).write_text(''.join(parts)+'</svg>',encoding='utf-8')

def preview(group):
 dest=ROOT/'scratch/round05'/group
 dest.mkdir(parents=True,exist_ok=True)
 scaffold=Path('C:/Users/Tomas/.codex/skills/svg-design/assets/preview.html')
 if not (dest/'preview.html').exists(): shutil.copyfile(scaffold,dest/'preview.html')
 return dest

groups={'strig':preview('strig'),'athene':preview('athene')}
variants={'strig':[],'athene':[]}
for study in STUDIES:
 name,title,change,benefit,risk,d,bounds=study
 svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor" role="img" aria-labelledby="{name}-title {name}-desc"><title id="{name}-title">{html.escape(title)} / estudio sin aprobación</title><desc id="{name}-desc">{html.escape(change+". "+benefit+" "+risk)}</desc><path fill-rule="evenodd" d="{d}"/></svg>'
 (OUT/(name+'.svg')).write_text(svg,encoding='utf-8')
 group='athene' if name.startswith('athene') else 'strig'
 label='ATHENE' if group=='athene' else 'STRIG'
 lock=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 140" role="img" aria-labelledby="{name}-lock-title"><title id="{name}-lock-title">{html.escape(title)} / composición de estudio sin aprobación</title>'+icon(study,72,70,90,'currentColor')+word(label,145,88,85,'currentColor')
 if group=='strig':lock+=word('SYSTEMS',147,118,24,'currentColor',weight=400,track=170)
 lock+='</svg>'
 (OUT/(name+'-lockup.svg')).write_text(lock,encoding='utf-8')
 variants[group].append({'id':name,'name':title,'light':'../../../assets/img/brand/round-05/'+name+'.svg','description':change+'. '+risk})
 data={'projectName':'Round05 / estudios sin aprobación','brandName':'Athene' if group=='athene' else 'Strig Systems','concepts':[{'name':'Evolución y comparación','variants':variants[group]}]}
 (groups[group]/'variants.js').write_text('window.VARIANTS = '+json.dumps(data,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')

parts=board_start(1600,1290,'Strig / Round05: evolución de Campo y Bilateral; sin selección')
parts += [text(64,55,'STRIG SYSTEMS / R05 · EVOLUCIÓN CONTROLADA',16),text(64,114,'Cambiar una relación. Comparar lo que aporta.',35,INK,500),text(64,151,'Izquierda: R04. Centro y derecha: una operación distinta por variante.',19)]
for i,s in enumerate(STUDIES[:6]):
 col=i%3;row=i//3;x=64+col*510;y=202+row*510
 parts += [text(x,y,s[1],24,INK,500),text(x,y+32,s[2],16),icon(s,x+218,y+159,145),word('STRIG',x+155,y+295,58),word('SYSTEMS',x+157,y+317,19,weight=400,track=170),icon(s,x+100,y+275,54)]
 parts += [f'<rect x="{x}" y="{y+330}" width="438" height="74" fill="{INK}"/>',icon(s,x+218,y+367,49,PAPER),text(x,y+439,s[3],17,INK),text(x,y+470,s[4],16)]
parts += [text(64,1260,'ESTUDIOS / NO ADOPTADOS · Misma anchura visible; diferencias de altura conservadas.',14)]
save('strig-evolution',parts)

parts=board_start(1800,1100,'Athene / Round05: control y tres hipótesis formales; letras no validadas')
parts += [text(60,55,'ATHENE / R05 · ESTRUCTURAS EN COMPARACIÓN',16),text(60,114,'Primero el centinela. Después, la segunda lectura.',35,INK,500),text(60,151,'R04 como control; las otras rutas cambian estructura, no solo un parámetro.',19)]
for i,s in enumerate(STUDIES[6:]):
 x=60+i*435
 parts += [text(x,211,s[1],23,INK,500),text(x,242,s[2],14),icon(s,x+180,415,224),word('ATHENE',x+41,629,80),f'<rect x="{x}" y="680" width="375" height="110" fill="{INK}"/>',icon(s,x+187,735,72,PAPER)]
 for size,dx in [(16,9),(24,75),(32,154),(48,251)]:
  parts += [icon(s,x+dx+size/2,855,size,native=True),text(x+dx,909,str(size)+' px',13)]
 parts += [text(x,956,s[3],15,INK),text(x,986,s[4],14)]
parts += [text(60,1061,'LETRAS COMO HIPÓTESIS DE CONSTRUCCIÓN / LECTURA DE BÚHO Y A/T AÚN POR EVALUAR',14)]
save('athene-structures',parts)

parts=board_start(1200,1710,'Round05 / tamaños nativos de diez estudios, sin aprobación')
parts += [text(40,52,'R05 / MISMO CANVAS 128 · TAMAÑOS NATIVOS',18,INK),text(40,84,'La escala micro no exige conservar la lectura de las letras.',16)]
for i,s in enumerate(STUDIES):
 y=145+i*150
 parts += [text(40,y+7,s[1],18,INK)]
 for size,x in [(16,470),(24,570),(32,680),(48,800),(128,960)]:
  parts += [icon(s,x+size/2,y,size,native=True),text(x,y+77,str(size)+' px',12)]
save('native-sizes',parts)
(OUT/'studies.json').write_text(json.dumps([dict(id=s[0],title=s[1],change=s[2],intent=s[3],risk=s[4],bounds=s[6]) for s in STUDIES],ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('10 proposal symbols, 10 outlined lockups, 3 comparison boards; Round04 unchanged.')
