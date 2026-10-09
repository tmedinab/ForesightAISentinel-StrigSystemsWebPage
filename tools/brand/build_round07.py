"""Open Athene as primary direction after Tomás' preference; no brand adoption."""
from study_support import ROOT,INK,PAPER,board,text,word,icon,save,assets,retained
import json
OUT=ROOT/'assets/img/brand/round-07';PREVIOUS=ROOT/'assets/img/brand/round-06'
STUDIES=[
 retained(PREVIOUS,'athene-frente-abierto','athene-abierto-control','Abierto / R06'),
 dict(id='athene-abierto-mejillas',title='Abierto / mejillas',change='Retornos curvos; mismo puente',intent='Disco facial sugerido; base abierta.',risk='Gafas / personaje.',bounds=[16,30,112,77],path='M16 30L40 36H88L112 30L108 62Q106 72 96 76L90 68Q98 62 98 54V48H74L76 60Q74 66 69 71L64 77L59 71Q54 66 52 60L54 48H30V54Q30 62 38 68L32 76Q22 72 20 62Z'),
 dict(id='athene-abierto-puente',title='Abierto / puente',change='Centro más estrecho y breve',intent='Menos dominancia del centro.',risk='Visor / puente frágil.',bounds=[16,30,112,75],path='M16 30L40 36H88L112 30L108 62L96 74L88 68L98 58V48H70L72 60Q70 64 67 68L64 75L61 68Q58 64 56 60L58 48H30V58L40 68L32 74L20 62Z'),
 retained(PREVIOUS,'athene-frente-solido','athene-solido-control','Sólido / R06'),
 dict(id='athene-solido-continuo',title='Sólido / contorno continuo',change='Mejillas curvas; mismas aperturas',intent='Cabeza más continua y contenida.',risk='Amabilidad excesiva / mascota.',bounds=[16,30,112,97],path='M16 30L40 36H88L112 30L108 70Q104 82 90 89Q82 95 70 97H58Q46 95 38 89Q24 82 20 70Z M28 48H56L54 62Q50 72 44 74H40Q32 70 28 62Z M100 48H72L74 62Q78 72 84 74H88Q96 70 100 62Z M58 78H70L64 88Z'),
 retained(PREVIOUS,'strig-campo','strig-campo','Strig / Campo continuidad'),
 retained(PREVIOUS,'strig-bilateral','strig-bilateral','Strig / Bilateral frente'),
]
assets(OUT,STUDIES,ROOT/'scratch/round07')

p=board(1560,1060,'Round07 / abierto como dirección principal; control y dos refinamientos')
p += [text(60,55,'ATHENE / R07 · RUTA ABIERTA PRIORITARIA',16),text(60,115,'Explorar el rostro. Conservar la apertura.',35,INK,500),text(60,154,'Cada variante trabaja un grupo distinto de relaciones; el control permanece intacto.',18)]
for i,s in enumerate(STUDIES[:3]):
 x=60+i*510;p += [text(x,214,s['title'],27,INK,500),text(x,249,s['change'],17),icon(s,x+216,416,232),word('ATHENE',x+44,625,86),f'<rect x="{x}" y="677" width="438" height="106" fill="{INK}"/>',icon(s,x+219,730,80,PAPER)]
 for size,dx in [(16,15),(24,96),(32,196),(48,311)]:p += [icon(s,x+dx+size/2,849,size,native=True),text(x+dx,902,str(size)+' px',13)]
 p += [text(x,949,s['intent'],17,INK),text(x,981,'Riesgo: '+s['risk'],15)]
p += [text(60,1033,'PROPUESTAS NO ADOPTADAS / SIN LETRAS FORZADAS / REVISIÓN INFORMADA DE AGENTES',13)]
save(OUT,'open-evolution',p)

p=board(1100,870,'Round07 / sólido como alternativa secundaria; contorno continuo')
p += [text(60,55,'ATHENE / R07 · ALTERNATIVA CERRADA',16),text(60,113,'Revisar el contorno, sin agrandar los ojos.',30,INK,500)]
for i,s in enumerate(STUDIES[3:5]):
 x=60+i*550;p += [text(x,189,s['title'],24,INK,500),text(x,225,s['change'],16),icon(s,x+210,402,225),word('ATHENE',x+40,582,83),f'<rect x="{x}" y="634" width="430" height="96" fill="{INK}"/>',icon(s,x+215,682,72,PAPER),text(x,789,s['intent'],17,INK),text(x,822,'Riesgo: '+s['risk'],15)]
save(OUT,'solid-evolution',p)

p=board(1280,1370,'Round07 / nuevos Athene con dos candidatos corporativos, sin selección',True)
p += [text(60,55,'ATHENE + STRIG SYSTEMS / ESTUDIOS DE FAMILIA',16,'#aab7bf'),text(60,112,'Identidad de sistema. Firma de ingeniería.',33,PAPER,500)]
for col,corp in enumerate(STUDIES[5:]):p += [text(60+col*610,174,corp['title'],20,PAPER)]
for row,product in enumerate([STUDIES[1],STUDIES[2],STUDIES[4]]):
 for col,corp in enumerate(STUDIES[5:]):
  x=60+col*610;y=205+row*355
  p += [f'<rect x="{x}" y="{y}" width="550" height="290" fill="{PAPER}"/>',text(x+28,y+39,product['title'],17),icon(product,x+82,y+118,80),word('ATHENE',x+154,y+134,69),text(x+154,y+170,'SISTEMA CENTINELA AÉREO',13),text(x+28,y+218,'Desarrollado por',13),icon(corp,x+259,y+238,33),word('STRIG',x+289,y+245,33),word('SYSTEMS',x+291,y+263,13,weight=400,track=170)]
p += [text(60,1333,'EMPRESA Y PRODUCTO CONSERVAN SUS PAPELES / CURVAS CONTENIDAS COMO ESTUDIO',13,'#aab7bf')]
save(OUT,'family-applications',p)

p=board(1200,1280,'Round07 / comparación a tamaños nativos, sin aprobación')
p += [text(40,52,'R07 / TAMAÑOS NATIVOS · CANVAS 128',18,INK),text(40,86,'Se conserva la menor altura del símbolo abierto; no se iguala artificialmente al cerrado.',15)]
for i,s in enumerate(STUDIES):
 y=170+i*150;p += [text(40,y+7,s['title'],18,INK)]
 for size,x in [(16,470),(24,570),(32,680),(48,800),(128,960)]:p += [icon(s,x+size/2,y,size,native=True),text(x,y+77,str(size)+' px',12)]
save(OUT,'native-sizes',p)
(OUT/'boards.json').write_text(json.dumps([['open-evolution',1560,1060],['solid-evolution',1100,870],['family-applications',1280,1370],['native-sizes',1200,1280]],indent=2)+'\n',encoding='utf-8')
print('Round07: seven symbols/lockups and four comparison boards; previous controls intact.')
