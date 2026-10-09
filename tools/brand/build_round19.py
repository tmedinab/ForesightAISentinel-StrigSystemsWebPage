"""Individual B/C refinement with retained controls and fixed native canvases."""
from study_support import ROOT, INK, PAPER, board, text, word, icon, save, assets
import json, shutil, textwrap, html
OUT=ROOT/'assets/img/brand/round-19'
OUT.mkdir(parents=True,exist_ok=True)
(OUT/'source').mkdir(exist_ok=True)
def source(name):
    p=OUT/'source'/name
    if not p.exists(): shutil.copyfile(ROOT/'scratch/round19'/name,p)
    return json.loads(p.read_text(encoding='utf-8-sig'))
b=source('team_b.json');c=source('team_c.json')
studies=b['corporates']+b['products']+c['corporates']+c['products']
assert len({s['id'] for s in studies})==len(studies)
assets(OUT,studies,ROOT/'scratch/round19/preview',preview_company=True)
def wrapped(x,y,label,size=15,color=INK,width=60,step=23):
    return [text(x,y+i*step,t,size,color) for i,t in enumerate(textwrap.wrap(label,width=width))]
def sized(s,x,cy,h,color=INK):
    a=s['bounds'];w=(a[2]-a[0])*h/(a[3]-a[1]);span=max(a[2]-a[0],a[3]-a[1])*h/(a[3]-a[1])
    return icon(s,x+w/2,cy,span,color),w
def company(s,x,baseline,size=55,color=INK):
    k=size/85;mark,w=sized(s,x,baseline-18*k,65.4347826087*k,color)
    return mark+word('STRIG',x+w+22*k,baseline,size,color)+word('SYSTEMS',x+w+24*k,baseline+30*k,24*k,color,weight=400,track=170)
def product(s,x,baseline,size=55,color=INK):
    k=size/85;mark,w=sized(s,x,baseline-29.75*k,59*k,color)
    return mark+word('ATHENE',x+w+24*k,baseline,size,color)
def native(s,cx,cy,size,color=INK):
    k=size/128
    return f'<path fill="{color}" fill-rule="evenodd" transform="translate({cx-64*k} {cy-64*k}) scale({k})" d="{s["path"]}"/>'
for s in studies:
    draw=company if s['id'].startswith('strig') else product
    save(OUT,s['id']+'-lockup',[f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 140" role="img" aria-labelledby="{s["id"]}-title"><title id="{s["id"]}-title">{html.escape(s["title"])} / firma de estudio</title>',draw(s,15,88,85,'currentColor')])
boards=[]
p=board(1200,1050,'Round19 / C, transición superior del frente')
p += [text(50,50,'R19 / C · HOMBROS DEL FRENTE',16),text(50,107,'Más articulación en la transición superior.',30,INK,500),text(50,151,'Pico original, ojos, división y salida lateral como controles. Strig exacto.',17)]
for i,s in enumerate(c['products']):
    x=50+i*575
    p += [text(x,225,['0 / ORIGINAL R17','1 / HOMBROS ARTICULADOS'][i],20,INK,500),icon(s,x+230,370,200),product(s,x+20,584,65),text(x,651,'DESARROLLADO POR',13),company(c['corporates'][0],x+20,728,48)]
    p += wrapped(x,811,s['change'],15,width=57,step=23)
p += [text(50,1015,'UNA RELACIÓN DE CONTORNO · ATENCIÓN COMPETENTE COMO DIRECCIÓN · SIN ADOPCIÓN',13)]
save(OUT,'shoulders-c',p);boards.append(['shoulders-c',1200,1050])

cs=b['corporates'][0];ps=b['products'][0]
p=board(1400,1150,'Round19 / B, jerarquía de empresa y producto en contexto')
p += [text(50,50,'R19 / B · APLICACIONES DE IDENTIDAD',16),text(50,107,'La familia se alinea por proporción y papel.',31,INK,500),text(50,151,'B3 y Athene R15 intactos. Bocetos de uso; no cambian la web ni acreditan prestaciones.',17)]
p += [f'<rect x="50" y="210" width="620" height="390" fill="{INK}"/>',text(80,242,'CABECERA CORPORATIVA / ESTUDIO',12,PAPER),company(cs,80,309,42,PAPER),text(80,373,'INGENIERÍA Y DESARROLLO',16,PAPER),text(80,427,'Sistemas para observar,',28,PAPER,500),text(80,465,'comprender y decidir.',28,PAPER,500),product(ps,80,553,40,PAPER)]
p += [f'<rect x="730" y="210" width="620" height="390" fill="none" stroke="#aab7bf"/>',text(760,242,'FICHA DE PRODUCTO / ESTUDIO',12),product(ps,760,309,42),text(760,373,'SISTEMA CENTINELA TERRITORIAL',16),text(760,427,'Atención nocturna y apoyo',25,INK,500),text(760,465,'a la decisión humana.',25,INK,500),text(760,519,'Desarrollado por',13),company(cs,760,566,36)]
p += [text(50,647,'DOCUMENTO / FIRMA DEL DESARROLLADOR Y NOMBRE DEL SISTEMA',14),'<rect x="50" y="678" width="1300" height="392" fill="none" stroke="#aab7bf"/>',company(cs,80,757,42),product(ps,1000,757,34),text(80,809,'INGENIERÍA Y DESARROLLO',13),text(1000,809,'SISTEMA CENTINELA',13),'<path d="M80 839H1320" stroke="#aab7bf"/>',text(80,899,'Nota conceptual de arquitectura',31,INK,500),text(80,950,'Composición de identidad para comparar jerarquía, márgenes y presencia de la firma.',18),text(80,1025,'BOCETO DE MARCA / CONTENIDO ILUSTRATIVO',13)]
p += [text(50,1120,'ALTURAS Y SEPARACIONES DE R18 CONSERVADAS · ROLES DISTINTOS, GRAMÁTICA COMÚN',13)]
save(OUT,'contexts-b',p);boards.append(['contexts-b',1400,1150])
height=230+len(studies)*100
p=board(1200,height,'Round19 / todos los símbolos en tamaños nativos e inversa')
p += [text(50,50,'R19 / REPRODUCCIÓN · ESCALA Y ORIGEN DEL CANVAS128 FIJOS',16),text(50,107,'Mismo tamaño declarado, sin recentrar la tinta.',29,INK,500)]
for x,size in [(520,16),(650,24),(790,32),(925,16),(1020,24),(1120,32)]:p += [text(x-12,170,str(size)+' px',13)]
for i,s in enumerate(studies):
    cy=235+i*100
    p += wrapped(50,cy-7,s['title'],15,width=44,step=22)
    p += [f'<rect x="875" y="{cy-40}" width="280" height="80" fill="{INK}"/>']
    for x,size in [(520,16),(650,24),(790,32)]:p += [native(s,x,cy,size)]
    for x,size in [(925,16),(1020,24),(1120,32)]:p += [native(s,x,cy,size,PAPER)]
p += [text(50,height-22,'REPRODUCCIÓN Y COMPARACIÓN LOCAL · NO MIDE RECEPCIÓN COMERCIAL',13)]
save(OUT,'native-sizes',p);boards.append(['native-sizes',1200,height])
(OUT/'boards.json').write_text(json.dumps(boards,indent=2)+'\n',encoding='utf-8')
print(f'Round19: {len(studies)} symbols/lockups, {len(boards)} boards.')
