"""Athene selected returns: lockup proportions, optical alignment and applications."""
from study_support import ROOT,INK,PAPER,board,text,word,icon,save,assets,retained
import json,shutil
OUT=ROOT/'assets/img/brand/round-12';PREVIOUS=ROOT/'assets/img/brand/round-11'
base=retained(PREVIOUS,'athene-retornos','athene-anterior','0 / composición anterior')
balanced=dict(base,id='athene-equilibrado',title='1 / presencia equilibrada',change='Símbolo 118; separación 24; centro alineado a ATHENE',intent='Dar al símbolo presencia equivalente a las mayúsculas.',risk='El rostro adquiere mayor protagonismo.')
compact=dict(base,id='athene-compacto',title='2 / firma contenida',change='Símbolo 102; separación 18; centro alineado a ATHENE',intent='Conjunto algo más compacto; nombre prioritario.',risk='Menor presencia del símbolo y separación más ajustada.')
corp=retained(PREVIOUS,'strig-h1','strig-h1','Strig H1 / referencia óptica')
STUDIES=[base,balanced,compact,corp]
assets(OUT,STUDIES,ROOT/'scratch/round12')
shutil.copyfile(PREVIOUS/'strig-h1-lockup.svg',OUT/'strig-h1-lockup.svg')
CONFIG=[(base,90,28,18),(balanced,118,24,29.75),(compact,102,18,29.75)]

def product(s,x,baseline,span,gap,offset,size=85,color=INK):
    return icon(s,x+span/2,baseline-offset*size/85,span,color)+word('ATHENE',x+span+gap,baseline,size,color)

def corporate(x,baseline,color=INK,k=.5):
    return icon(corp,x+35*k,baseline-18*k,70*k,color)+word('STRIG',x+92*k,baseline,85*k,color)+word('SYSTEMS',x+94*k,baseline+30*k,24*k,color,weight=400,track=170)

for s,span,gap,offset in CONFIG:
    p=[f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 140" role="img" aria-labelledby="{s["id"]}-lock-title"><title id="{s["id"]}-lock-title">{s["title"]} / estudio sin aprobación</title>',product(s,15,88,span,gap,offset,color='currentColor')]
    save(OUT,s['id']+'-lockup',p)
# Previous composition is an exact byte-preserved control, not a re-creation.
shutil.copyfile(PREVIOUS/'athene-retornos-lockup.svg',OUT/'athene-anterior-lockup.svg')

p=board(1200,1060,'Round12 / Athene: escala, separación y alineación')
p += [text(50,50,'R12 / ATHENE · COMPOSICIÓN DE MARCA',16),text(50,108,'El símbolo elegido encuentra su lugar junto al nombre.',29,INK,500),text(50,147,'Mismo path y misma tipografía. Se comparan escala, separación y alineación.',17)]
for i,(s,span,gap,offset) in enumerate(CONFIG):
    y=218+i*255
    p += [text(50,y,s['title'],23,INK,500),text(50,y+33,f'Símbolo {span} u · separación {gap} u · ATHENE cuerpo 85',16),product(s,70,y+139,span,gap,offset),f'<rect x="630" y="{y+66}" width="520" height="142" fill="{INK}"/>',product(s,654,y+151,span,gap,offset,color=PAPER)]
p += [text(50,1003,'0: SÍMBOLO MÁS BAJO · 1 Y 2: CENTRO DEL SÍMBOLO ALINEADO AL CENTRO DE LAS MAYÚSCULAS',13)]
save(OUT,'athene-lockups',p)

p=board(1440,1060,'Round12 / cabecera conceptual y ficha de Athene',True)
p += [text(60,50,'R12 / STRIG + ATHENE · APLICACIONES CONCEPTUALES',16,'#aab7bf'),text(60,107,'La empresa firma. El sistema toma presencia.',32,PAPER,500)]
for i,(s,span,gap,offset) in enumerate(CONFIG[1:]):
    x=60+i*710
    p += [text(x,185,s['title'],23,PAPER),f'<rect x="{x}" y="218" width="610" height="110" fill="#24323e"/>',corporate(x+24,282,PAPER,k=.62),text(x+442,283,'Contacto',16,PAPER),f'<rect x="{x}" y="328" width="610" height="316" fill="{PAPER}"/>',text(x+24,370,'PLATAFORMA DE STRIG SYSTEMS',13),product(s,x+24,466,span*.94,gap*.94,offset,size=85*.94),text(x+24,517,'Sistema centinela aéreo',21),text(x+24,592,'Maqueta de identidad; no implica capacidad en servicio.',14)]
    p += [f'<rect x="{x}" y="692" width="610" height="270" fill="{PAPER}"/>',text(x+24,734,'FICHA DE SISTEMA / ESTUDIO',13),product(s,x+24,827,span*.85,gap*.85,offset,size=85*.85),text(x+24,901,'Desarrollado por',13),corporate(x+260,907,k=.54)]
p += [text(60,1023,'STRIG H1 ÓPTICO Y ATHENE/RETORNOS INTACTOS · DOS COMPOSICIONES PARA EL MISMO PRODUCTO',13,'#aab7bf')]
save(OUT,'applications',p)

p=board(1200,1230,'Round12 / reducción y aplicación móvil conceptual')
p += [text(40,50,'R12 / REDUCCIÓN Y CONTEXTO MÓVIL',16),text(40,103,'El conjunto debe funcionar a escala de uso.',30,INK,500)]
for i,(s,span,gap,offset) in enumerate(CONFIG[1:]):
    x=40+i*585
    p += [text(x,176,s['title'],22,INK,500)]
    for row,k in enumerate([.3,.45,.6]):
        y=222+row*123
        p += [f'<g transform="translate({x} {y}) scale({k})">'+product(s,0,88,span,gap,offset)+'</g>',text(x,y+75,f'ATHENE cuerpo {85*k:g} · altura visible letra {59.5*k:g}',14)]
    p += [f'<rect x="{x}" y="644" width="360" height="472" fill="{PAPER}" stroke="#bdc7cc"/>',f'<rect x="{x}" y="644" width="360" height="84" fill="{INK}"/>',corporate(x+20,697,PAPER,k=.51),text(x+20,778,'PLATAFORMA STRIG SYSTEMS',12),f'<g transform="translate({x+20} 824) scale(.62)">'+product(s,0,88,span,gap,offset)+'</g>',text(x+20,952,'Sistema centinela aéreo',20,INK),text(x+20,1010,'Composición conceptual de producto.',14),text(x+20,1074,'Modelo experimental en desarrollo.',14)]
p += [text(40,1187,'CANVAS MÓVIL 360 U · SIN MODIFICAR LA WEB · NO SE FIJA AÚN UN TAMAÑO MÍNIMO UNIVERSAL',13)]
save(OUT,'reduction-and-mobile',p)
(OUT/'boards.json').write_text(json.dumps([['athene-lockups',1200,1060],['applications',1440,1060],['reduction-and-mobile',1200,1230]],indent=2)+'\n',encoding='utf-8')
print('Round12: three Athene compositions, corporate control; three boards.')
