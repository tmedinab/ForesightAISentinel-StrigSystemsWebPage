"""Two Campo hybrids: terminal faceting and convergent returns; Athene retained."""
from study_support import ROOT,INK,PAPER,board,text,word,icon,save,assets,retained
import json
OUT=ROOT/'assets/img/brand/round-09';PREVIOUS=ROOT/'assets/img/brand/round-08'
STUDIES=[
 retained(PREVIOUS,'strig-campo-control','strig-campo-control','Campo / continuidad · control'),
 dict(id='strig-campo-facetas',title='H1 / continuidad facetada',change='Cortes internos de 8 u; simetría de 180 grados',intent='S abierta con terminales interiores oblicuos.',risk='El matiz puede desaparecer en pequeño.',bounds=[18,21,110,107],path='M18 57V41L38 21H110L94 37H46L34 49L26 57Z M110 71V87L90 107H18L34 91H82L94 79L102 71Z'),
 retained(PREVIOUS,'strig-campo-direccion','strig-campo-apertura-control','Campo / apertura común · control'),
 dict(id='strig-campo-convergente',title='H2 / apertura convergente',change='Retornos interiores de 4 u; espejo horizontal',intent='Apertura común con dos retornos triangulares.',risk='Lectura de C / mandíbula / encuadre.',bounds=[18,21,110,107],path='M18 57V41L38 21H110L94 37H46L34 49L38 53L34 57Z M18 71V87L38 107H110L94 91H46L34 79L38 75L34 71Z'),
 retained(PREVIOUS,'athene-mejillas','athene-mejillas','Athene / abierto-mejillas'),
]
assets(OUT,STUDIES,ROOT/'scratch/round09',preview_company=True)
def company(s,x,y,size=65,color=INK):
 return icon(s,x+39,y-19,size*.9,color)+word('STRIG',x+101,y,size,color)+word('SYSTEMS',x+103,y+29,size*.32,color,weight=400,track=170)

p=board(1440,1340,'Round09 / Strig: dos controles y dos híbridos de Campo')
p += [text(60,55,'STRIG SYSTEMS / R09 · IDENTIDAD CORPORATIVA',16),text(60,115,'Dos maneras de refinar Campo.',35,INK,500),text(60,154,'Izquierda: controles. Derecha: estudios nuevos. Athene conserva su referencia.',18)]
for i,s in enumerate(STUDIES[:4]):
 col=i%2;row=i//2;x=60+col*710;y=214+row*540
 p += [text(x,y,s['title'],25,INK,500),text(x,y+35,s['change'],17),icon(s,x+290,y+151,159),company(s,x+127,y+291,61),f'<rect x="{x}" y="{y+335}" width="610" height="72" fill="{INK}"/>',icon(s,x+305,y+371,49,PAPER),text(x,y+442,s['intent'],17,INK),text(x,y+470,'Riesgo: '+s['risk'],14)]
p += [text(60,1304,'ESTUDIOS / SIN ADOPCIÓN / MISMA ANCHURA VISIBLE; ALTURA Y PESO PROPIOS CONSERVADOS',13)]
save(OUT,'strig-evolution',p)

p=board(1440,1080,'Round09 / identidad corporativa y respaldo de Athene estable',True)
p += [text(60,55,'STRIG + ATHENE / R09 · DOS PAPELES DIFERENTES',16,'#aab7bf'),text(60,114,'La empresa debe sostener más de un producto.',33,PAPER,500),text(60,151,'Aplicaciones conceptuales: no anuncian un desarrollo nuevo ni una identidad aprobada.',17,'#aab7bf')]
athene=STUDIES[4]
for col,corp in enumerate([STUDIES[1],STUDIES[3]]):
 x=60+col*710
 p += [text(x,210,corp['title'],22,PAPER),f'<rect x="{x}" y="244" width="610" height="314" fill="{PAPER}"/>',text(x+28,284,'FICHA DE SISTEMA / ESTUDIO',14),icon(athene,x+84,357,80),word('ATHENE',x+160,373,74),text(x+160,409,'SISTEMA CENTINELA AÉREO',13),text(x+28,481,'Desarrollado por',13),company(corp,x+246,505,35)]
 p += [f'<rect x="{x}" y="610" width="610" height="360" fill="{PAPER}"/>',text(x+28,651,'PLANTILLA CORPORATIVA / ESTUDIO',14),company(corp,x+44,736,70),f'<path d="M{x+28} 799H{x+582}" stroke="#bdc7cc"/>',text(x+28,845,'DOCUMENTO DE INGENIERÍA',22,INK,500),text(x+28,884,'Contexto genérico de otro desarrollo.',17),text(x+28,930,'Sin nombre de producto ni especificaciones inventadas.',14)]
p += [text(60,1044,'ATHENE / MEJILLAS NO CAMBIA · STRIG FIRMA AL DESARROLLADOR · COMPARACIÓN CONCEPTUAL',13,'#aab7bf')]
save(OUT,'company-and-product',p)

p=board(1200,1110,'Round09 / tamaños nativos corporativos y referencia Athene')
p += [text(40,52,'R09 / TAMAÑOS NATIVOS · CANVAS 128',18,INK),text(40,86,'Escala real del canvas: sin aumentar los detalles para hacerlos visibles.',15)]
for i,s in enumerate(STUDIES):
 y=170+i*170;p += [text(40,y+7,s['title'],18,INK)]
 for size,x in [(16,470),(24,570),(32,680),(48,800),(128,960)]:p += [icon(s,x+size/2,y,size,native=True),text(x,y+77,str(size)+' px',12)]
save(OUT,'native-sizes',p)
(OUT/'boards.json').write_text(json.dumps([['strig-evolution',1440,1340],['company-and-product',1440,1080],['native-sizes',1200,1110]],indent=2)+'\n',encoding='utf-8')
print('Round09: five symbols/lockups, three boards; Athene retained unchanged.')
