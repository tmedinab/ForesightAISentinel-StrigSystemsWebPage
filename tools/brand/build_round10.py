"""Optical lockups and restrained Athene family study; no public adoption."""
from study_support import ROOT, INK, PAPER, board, text, word, icon, save, assets, retained
import json
OUT=ROOT/'assets/img/brand/round-10'
PREVIOUS=ROOT/'assets/img/brand/round-09'
base=retained(PREVIOUS,'strig-campo-facetas','strig-h1-control','Strig H1 / composición anterior')
opt=dict(base,id='strig-h1-optico',title='Strig H1 / equilibrio óptico',change='Símbolo 70; separación 22; STRIG 85',intent='Menor peso del emblema junto al nombre.',risk='Menor presencia del símbolo aislado en el conjunto.')
compact=dict(base,id='strig-h1-compacto',title='Strig H1 / composición compacta',change='Símbolo 62; separación 16; STRIG 85',intent='Nombre prioritario y firma más contenida.',risk='El símbolo puede parecer accesorio.')
ath=retained(PREVIOUS,'athene-mejillas','athene-control','Athene / mejillas conservado')
facet=dict(ath,id='athene-cejas-facetadas',title='Athene / cejas facetadas',change='Dos transiciones de 6 × 6 u a 45 grados',intent='Compartir dirección angular; conservar frente abierto.',risk='Orejas más explícitas; posible mayor severidad.',path='M16 30L22 36H106L112 30L108 62Q106 72 96 76L90 68Q98 62 98 54V48H74L76 60Q74 66 69 71L64 77L59 71Q54 66 52 60L54 48H30V54Q30 62 38 68L32 76Q22 72 20 62Z')
STUDIES=[base,opt,compact,ath,facet]
assets(OUT,STUDIES,ROOT/'scratch/round10',preview_company=True)

def corp(s,x,baseline,span=70,gap=22,size=85,color=INK):
    k=size/85
    return icon(s,x+span/2,baseline-18*k,span,color)+word('STRIG',x+span+gap,baseline,size,color)+word('SYSTEMS',x+span+gap+2*k,baseline+30*k,size*24/85,color,weight=400,track=170)

for s,span,gap in [(base,90,28),(opt,70,22),(compact,62,16)]:
    parts=[f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 140" role="img" aria-labelledby="{s["id"]}-lock-title"><title id="{s["id"]}-lock-title">{s["title"]} / estudio sin aprobación</title>',corp(s,25,88,span,gap,color='currentColor')]
    save(OUT,s['id']+'-lockup',parts)

p=board(1200,1030,'Round10 / proporción y espaciado Strig H1')
p += [text(50,50,'R10 / STRIG · ACABADO DEL LOCKUP',16),text(50,105,'La misma silueta. Tres relaciones con el nombre.',30,INK,500),text(50,145,'STRIG conserva tamaño y tracking. Cambian símbolo y separación.',17)]
for i,(s,span,gap) in enumerate([(base,90,28),(opt,70,22),(compact,62,16)]):
    y=215+i*255
    p += [text(50,y,s['title'],23,INK,500),text(50,y+31,f'Símbolo visible {span} u · separación {gap} u · cuerpo STRIG 85 u',16),corp(s,70,y+136,span,gap),f'<rect x="650" y="{y+61}" width="490" height="145" fill="{INK}"/>',corp(s,675,y+149,span,gap,color=PAPER)]
p += [text(50,988,'PROPUESTA: EQUILIBRIO ÓPTICO COMO BASE · SIN CAMBIAR EL PATH H1 SELECCIONADO',14)]
save(OUT,'strig-lockups',p)

p=board(1200,850,'Round10 / Athene control y parentesco angular')
p += [text(50,50,'R10 / ATHENE · PARENTESCO SIN COPIAR EL EMBLEMA',16),text(50,105,'Una gramática común, dos identidades.',31,INK,500),text(50,145,'Strig mantiene la S abierta. Athene conserva rostro, mejillas y espacio inferior.',16)]
for i,s in enumerate([ath,facet]):
    x=50+i*590
    p += [text(x,218,s['title'],23,INK,500),text(x,254,'Control intacto' if i==0 else 'Solo cambia el borde superior',17),icon(s,x+245,380,175),icon(s,x+58,531,76),word('ATHENE',x+123,550,72),f'<rect x="{x}" y="602" width="510" height="96" fill="{INK}"/>',icon(s,x+255,650,64,PAPER),text(x,746,'Curvas contenidas; mayor continuidad.' if i==0 else 'Facetas a 45 grados; orejas más marcadas.',16)]
p += [text(50,812,'VARIANTE DE PRODUCTO EN EVALUACIÓN · NO SE AFIRMA UNA A RECONOCIBLE',14)]
save(OUT,'athene-family',p)

p=board(1440,1040,'Round10 / jerarquía corporativa y respaldo de producto',True)
p += [text(60,52,'R10 / APLICACIONES CONCEPTUALES',16,'#aab7bf'),text(60,108,'Strig desarrolla. Athene identifica el sistema.',32,PAPER,500)]
for i,s in enumerate([ath,facet]):
    x=60+i*710
    p += [text(x,176,s['title'],22,PAPER),f'<rect x="{x}" y="204" width="610" height="318" fill="{PAPER}"/>',text(x+24,243,'FICHA DE SISTEMA / ESTUDIO',14),icon(s,x+75,314,78),word('ATHENE',x+145,334,73),text(x+145,372,'SISTEMA CENTINELA AÉREO',13),text(x+24,459,'Desarrollado por',14),corp(opt,x+244,467,35,11,42.5),f'<rect x="{x}" y="566" width="610" height="355" fill="{PAPER}"/>',text(x+24,608,'DOCUMENTO CORPORATIVO / ESTUDIO',14),corp(opt,x+40,710,70,22,85),text(x+24,809,'INGENIERÍA Y DESARROLLO',24,INK,500),text(x+24,853,'La firma corporativa sirve a otros desarrollos.',16)]
p += [text(60,996,'EL PARENTESCO RESIDE EN MASA, APERTURA, DIAGONALES Y TIPOGRAFÍA; NO EN HARDWARE OBLIGATORIO',13,'#aab7bf')]
save(OUT,'company-and-product',p)

p=board(1200,1110,'Round10 / tamaños nativos y detalle de producto')
p += [text(40,52,'R10 / SÍMBOLOS EN CANVAS NATIVO 128',18,INK),text(40,86,'Las tres filas Strig son el mismo path: el ajuste ocurre en el lockup.',16)]
for i,s in enumerate(STUDIES):
    y=170+i*170;p += [text(40,y+7,s['title'],18,INK)]
    for size,x in [(16,470),(24,570),(32,680),(48,800),(128,960)]:
        p += [icon(s,x+size/2,y,size,native=True),text(x,y+77,str(size)+' px',12)]
save(OUT,'native-sizes',p)

p=board(1200,1050,'Round10 / cabecera conceptual y reducción del lockup')
p += [text(50,50,'R10 / APLICACIÓN Y REDUCCIÓN',16),text(50,108,'La jerarquía continúa fuera de la lámina.',31,INK,500),text(50,147,'Maqueta de identidad; no es una modificación de la web publicada.',17)]
p += [f'<rect x="50" y="206" width="1100" height="118" fill="{INK}"/>',f'<g transform="translate(80 219) scale(.72)">'+corp(opt,0,88,color=PAPER)+'</g>',text(718,272,'Tecnología',17,PAPER),text(864,272,'Equipo',17,PAPER),text(987,272,'Contacto',17,PAPER)]
p += [text(80,403,'PLATAFORMA DE STRIG SYSTEMS',15),icon(ath,133,493,88),word('ATHENE',211,513,88),text(211,556,'Sistema centinela aéreo',19),text(80,613,'La empresa firma la cabecera; el producto identifica el contenido.',18)]
p += [text(50,700,'REDUCCIÓN DEL CONJUNTO / TAMAÑO TIPOGRÁFICO NOMINAL',18,INK)]
for i,k in enumerate([.35,.5,.7]):
    x=50+i*375
    p += [f'<g transform="translate({x} 750) scale({k})">'+corp(opt,0,88)+'</g>',text(x,875,f'Escala {k:g} · SYSTEMS cuerpo {24*k:g}',15),text(x,911,'Descriptor demasiado pequeño.' if i==0 else ('Uso pequeño por revisar.' if i==1 else 'Mayor margen de lectura.'),15)]
p += [text(50,994,'EN ESPACIOS MÍNIMOS: SÍMBOLO SOLO; NO REDUCIR SYSTEMS HASTA CONVERTIRLO EN UNA LÍNEA',13)]
save(OUT,'applications-and-reduction',p)
(OUT/'boards.json').write_text(json.dumps([['strig-lockups',1200,1030],['athene-family',1200,850],['company-and-product',1440,1040],['native-sizes',1200,1110],['applications-and-reduction',1200,1050]],indent=2)+'\n',encoding='utf-8')
print('Round10: five study symbols/lockups; five comparison boards.')
