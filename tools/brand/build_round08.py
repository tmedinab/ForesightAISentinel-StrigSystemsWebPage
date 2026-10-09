"""Corporate phase: two Strig studies against controls; preferred Athene unchanged."""
from study_support import ROOT,INK,PAPER,board,text,word,icon,save,assets,retained
import json
OUT=ROOT/'assets/img/brand/round-08';PREVIOUS=ROOT/'assets/img/brand/round-07'
STUDIES=[
 retained(PREVIOUS,'strig-campo','strig-campo-control','Campo / continuidad R05'),
 dict(id='strig-campo-direccion',title='Campo / apertura común',change='Pieza inferior reflejada sobre x64',intent='Un vacío abierto en la misma dirección.',risk='C / bracket / encuadre genérico.',bounds=[18,21,110,107],path='M18 57V41L38 21H110L94 37H46L34 49V57Z M18 71V87L38 107H110L94 91H46L34 79V71Z'),
 retained(PREVIOUS,'strig-bilateral','strig-bilateral-control','Bilateral / frente R05'),
 dict(id='strig-bilateral-planos',title='Bilateral / planos',change='Sin escalón lateral; base más contenida',intent='Dos masas coordinadas, menos rostro.',risk='Módulos genéricos / menor presencia.',bounds=[12,32,116,68],path='M12 32L44 36L58 50V58L48 68H36L12 46Z M116 32L84 36L70 50V58L80 68H92L116 46Z'),
 retained(PREVIOUS,'athene-abierto-mejillas','athene-mejillas','Athene / abierto-mejillas'),
]
assets(OUT,STUDIES,ROOT/'scratch/round08',preview_company=True)
def company(s,x,y,size=65,color=INK):
 return icon(s,x+39,y-19,size*.9,color)+word('STRIG',x+101,y,size,color)+word('SYSTEMS',x+103,y+29,size*.32,color,weight=400,track=170)

p=board(1440,1340,'Round08 / Strig: dos controles y dos intervenciones corporativas')
p += [text(60,55,'STRIG SYSTEMS / R08 · IDENTIDAD CORPORATIVA',16),text(60,115,'Organizar un campo. Coordinar dos planos.',35,INK,500),text(60,154,'Izquierda: controles. Derecha: estudios nuevos. Athene conserva su referencia.',18)]
for i,s in enumerate(STUDIES[:4]):
 col=i%2;row=i//2;x=60+col*710;y=214+row*540
 p += [text(x,y,s['title'],25,INK,500),text(x,y+35,s['change'],17),icon(s,x+290,y+151,159),company(s,x+127,y+291,61),f'<rect x="{x}" y="{y+335}" width="610" height="72" fill="{INK}"/>',icon(s,x+305,y+371,49,PAPER),text(x,y+442,s['intent'],17,INK),text(x,y+470,'Riesgo: '+s['risk'],14)]
p += [text(60,1304,'ESTUDIOS / SIN ADOPCIÓN / MISMA ANCHURA VISIBLE; ALTURA Y PESO PROPIOS CONSERVADOS',13)]
save(OUT,'strig-evolution',p)

p=board(1440,1080,'Round08 / identidad corporativa y respaldo de Athene estable',True)
p += [text(60,55,'STRIG + ATHENE / R08 · DOS PAPELES DIFERENTES',16,'#aab7bf'),text(60,114,'La empresa debe sostener más de un producto.',33,PAPER,500),text(60,151,'Aplicaciones conceptuales: no anuncian un desarrollo nuevo ni una identidad aprobada.',17,'#aab7bf')]
athene=STUDIES[4]
for col,corp in enumerate([STUDIES[1],STUDIES[3]]):
 x=60+col*710
 p += [text(x,210,corp['title'],22,PAPER),f'<rect x="{x}" y="244" width="610" height="314" fill="{PAPER}"/>',text(x+28,284,'FICHA DE SISTEMA / ESTUDIO',14),icon(athene,x+84,357,80),word('ATHENE',x+160,373,74),text(x+160,409,'SISTEMA CENTINELA AÉREO',13),text(x+28,481,'Desarrollado por',13),company(corp,x+246,505,35)]
 p += [f'<rect x="{x}" y="610" width="610" height="360" fill="{PAPER}"/>',text(x+28,651,'PLANTILLA CORPORATIVA / ESTUDIO',14),company(corp,x+44,736,70),f'<path d="M{x+28} 799H{x+582}" stroke="#bdc7cc"/>',text(x+28,845,'DOCUMENTO DE INGENIERÍA',22,INK,500),text(x+28,884,'Contexto genérico de otro desarrollo.',17),text(x+28,930,'Sin nombre de producto ni especificaciones inventadas.',14)]
p += [text(60,1044,'ATHENE / MEJILLAS NO CAMBIA · STRIG FIRMA AL DESARROLLADOR · COMPARACIÓN CONCEPTUAL',13,'#aab7bf')]
save(OUT,'company-and-product',p)

p=board(1200,1110,'Round08 / tamaños nativos corporativos y referencia Athene')
p += [text(40,52,'R08 / TAMAÑOS NATIVOS · CANVAS 128',18,INK),text(40,86,'Las variantes horizontales conservan su menor altura; no se compensa para ocultarla.',15)]
for i,s in enumerate(STUDIES):
 y=170+i*170;p += [text(40,y+7,s['title'],18,INK)]
 for size,x in [(16,470),(24,570),(32,680),(48,800),(128,960)]:p += [icon(s,x+size/2,y,size,native=True),text(x,y+77,str(size)+' px',12)]
save(OUT,'native-sizes',p)
(OUT/'boards.json').write_text(json.dumps([['strig-evolution',1440,1340],['company-and-product',1440,1080],['native-sizes',1200,1110]],indent=2)+'\n',encoding='utf-8')
print('Round08: five symbols/lockups, three boards; Athene retained unchanged.')
