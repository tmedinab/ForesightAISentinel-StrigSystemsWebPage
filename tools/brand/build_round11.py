"""Athene open-face controls: one-variable returns and central-projection studies."""
from study_support import ROOT,INK,PAPER,board,text,word,icon,save,assets,retained
import json,shutil
OUT=ROOT/'assets/img/brand/round-11';PREVIOUS=ROOT/'assets/img/brand/round-10'
control=retained(PREVIOUS,'athene-control','athene-control','0 / mejillas actual')
returns=dict(control,id='athene-retornos',title='1 / retornos prolongados',change='Extremos inferiores 4 u hacia el centro y 2 u abajo',intent='Más continuidad de las regiones faciales.',risk='Puede aproximarse a gafas o máscara.',bounds=[16,30,112,78],path='M16 30L40 36H88L112 30L108 62Q106 72 92 78L86 70Q98 62 98 54V48H74L76 60Q74 66 69 71L64 77L59 71Q54 66 52 60L54 48H30V54Q30 62 42 70L36 78Q22 72 20 62Z')
center=dict(control,id='athene-centro-contenido',title='2 / centro contenido',change='Punta central 4 u más corta; hombros intactos',intent='Menor proyección de la pieza central.',risk='Puede perder pico y parecer más visor.',bounds=[16,30,112,76],path='M16 30L40 36H88L112 30L108 62Q106 72 96 76L90 68Q98 62 98 54V48H74L76 60Q74 66 69 69L64 73L59 69Q54 66 52 60L54 48H30V54Q30 62 38 68L32 76Q22 72 20 62Z')
corp=retained(PREVIOUS,'strig-h1-optico','strig-h1','Strig H1 / referencia óptica')
STUDIES=[control,returns,center,corp]
assets(OUT,STUDIES,ROOT/'scratch/round11')
shutil.copyfile(PREVIOUS/'strig-h1-optico-lockup.svg',OUT/'strig-h1-lockup.svg')

def corporate(x,baseline,color=INK,k=.5):
    return icon(corp,x+35*k,baseline-18*k,70*k,color)+word('STRIG',x+92*k,baseline,85*k,color)+word('SYSTEMS',x+94*k,baseline+30*k,24*k,color,weight=400,track=170)

p=board(1440,880,'Round11 / Athene: control y dos modificaciones aisladas')
p += [text(50,50,'R11 / ATHENE · REVISIÓN DEL CENTINELA ABIERTO',16),text(50,105,'Comparar antes de sumar detalles.',34,INK,500),text(50,145,'Misma frente y puente superior. Cada alternativa modifica una región distinta.',17)]
for i,s in enumerate(STUDIES[:3]):
    x=50+i*475
    p += [text(x,215,s['title'],22,INK,500),text(x,253,'Control conservado' if i==0 else ('Retornos inferiores: +4 hacia dentro / +2 abajo' if i==1 else 'Centro: punta y flancos inferiores contenidos'),14),icon(s,x+210,384,185),icon(s,x+45,539,74),word('ATHENE',x+112,558,68),f'<rect x="{x}" y="604" width="390" height="94" fill="{INK}"/>',icon(s,x+195,651,65,PAPER),text(x,744,'Centro y mejillas de referencia.' if i==0 else ('Centro intacto; mejillas más envolventes.' if i==1 else 'Mejillas intactas; centro menos proyectado.'),15),text(x,779,'Lectura por comparar, sin variante ganadora.' if i==0 else ('Riesgo: gafas / máscara.' if i==1 else 'Riesgo: perder pico / reforzar visor.'),14)]
p += [text(50,846,'ESTUDIOS · SIN ADOPCIÓN · STRIG H1 CONSERVADO · NO SE AÑADEN OJOS, LETRAS NI PUNTAS',13)]
save(OUT,'athene-comparison',p)

p=board(1440,790,'Round11 / conjunto Athene con respaldo de Strig H1',True)
p += [text(50,50,'R11 / IDENTIDAD EN APLICACIÓN',16,'#aab7bf'),text(50,108,'La forma cambia. La arquitectura se mantiene.',32,PAPER,500)]
for i,s in enumerate(STUDIES[:3]):
    x=50+i*475
    p += [text(x,182,s['title'],22,PAPER),f'<rect x="{x}" y="214" width="390" height="490" fill="{PAPER}"/>',text(x+24,256,'FICHA DE SISTEMA / ESTUDIO',13),icon(s,x+195,354,117),word('ATHENE',x+70,469,74),text(x+24,520,'SISTEMA CENTINELA AÉREO',15),text(x+24,576,'Desarrollado por',13),corporate(x+24,647,k=.58)]
p += [text(50,750,'MISMO WORDMARK Y MISMO RESPALDO CORPORATIVO; SOLO CAMBIA EL SÍMBOLO ATHENE',13,'#aab7bf')]
save(OUT,'company-and-product',p)

p=board(1200,930,'Round11 / tamaños nativos de Athene y Strig')
p += [text(40,52,'R11 / CANVAS NATIVO 128 · SIN AMPLIAR DETALLES',18,INK),text(40,87,'Las diferencias pueden desaparecer en pequeño; conservar identidad importa más que la metáfora completa.',14)]
for i,s in enumerate(STUDIES):
    y=180+i*170;p += [text(40,y+7,s['title'],18,INK)]
    for size,x in [(16,470),(24,570),(32,680),(48,800),(128,960)]:
        p += [icon(s,x+size/2,y,size,native=True),text(x,y+78,str(size)+' px',12)]
p += [text(40,889,'PRUEBA DIGITAL DE REPRODUCCIÓN; NO ESTABLECE RECONOCIMIENTO HUMANO NI MÍNIMO FINAL',13)]
save(OUT,'native-sizes',p)
(OUT/'boards.json').write_text(json.dumps([['athene-comparison',1440,880],['company-and-product',1440,790],['native-sizes',1200,930]],indent=2)+'\n',encoding='utf-8')
print('Round11: four symbol/lockup studies, three boards; Strig reference retained.')
