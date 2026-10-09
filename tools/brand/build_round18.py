"""Individual B/C refinement with retained controls and fixed native canvases."""
from study_support import ROOT, INK, PAPER, board, text, word, icon, save, assets
import json, shutil, textwrap, html
OUT=ROOT/'assets/img/brand/round-18'
OUT.mkdir(parents=True,exist_ok=True)
(OUT/'source').mkdir(exist_ok=True)
def source(name):
    p=OUT/'source'/name
    if not p.exists(): shutil.copyfile(ROOT/'scratch/round18'/name,p)
    return json.loads(p.read_text(encoding='utf-8-sig'))
b=source('team_b.json');c=source('team_c.json')
studies=b['corporates']+b['products']+c['corporates']+c['products']
assert len({s['id'] for s in studies})==len(studies)
assets(OUT,studies,ROOT/'scratch/round18/preview',preview_company=True)
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
p=board(1440,1100,'Round18 / B, cuatro firmas con el mismo Athene')
p += [text(50,50,'R18 / B · CONTRASTE DE FAMILIA',16),text(50,107,'Una firma; tres maneras de articular su masa.',31,INK,500),text(50,151,'Control sólido, diagonal, longitudinal y un refinamiento localizado. Athene permanece exacto.',17)]
labels=['0 / SÓLIDA','1 / DIAGONAL 6 U','2 / LONGITUDINAL 4 U','3 / GIROS REFORZADOS']
for i,s in enumerate(b['corporates']):
    x=50+350*i
    p += [text(x,224,labels[i],18,INK,500),icon(s,x+135,330,140),company(s,x+4,468,46),text(x,530,'MISMO ATHENE / PRODUCTO',13),product(b['products'][0],x+4,603,46)]
    p += [f'<rect x="{x}" y="662" width="290" height="158" fill="{INK}"/>',company(s,x+14,722,40,PAPER),product(b['products'][0],x+14,790,40,PAPER)]
    for size,dx in [(16,45),(24,135),(32,235)]:
        p += [native(s,x+dx,876,size),native(b['products'][0],x+dx,965,size),text(x+dx-12,1020,str(size)+' px',12)]
p += [text(50,1070,'COMPOSICIÓN CONSTANTE · CONTROLES HISTÓRICOS EXACTOS · NO ADOPCIÓN',13)]
save(OUT,'family-b',p);boards.append(['family-b',1440,1100])

p=board(1200,1000,'Round18 / B, un cambio en los giros')
p += [text(50,50,'R18 / B · CONTINUIDAD Y APOYO DE TINTA',16),text(50,107,'El recorrido se conserva; los giros ganan apoyo.',30,INK,500)]
for i,s in enumerate(b['corporates'][-2:]):
    x=50+i*575
    p += [text(x,203,['CONTROL R17 / 4 U','ENSAYO R18 / 4 U'][i],19,INK,500),icon(s,x+235,390,230),company(s,x+28,604,65)]
    p += wrapped(x,715,s['change'],16,width=53,step=24)
p += wrapped(50,880,'Se evalúa continuidad y masa, no reconocimiento espontáneo de SS. El producto conserva su perfil; el parentesco no exige atravesarlo con la misma costura.',16,width=125,step=24)
p += [text(50,969,'UNA VARIABLE LOCAL · BARRAS, TERMINALES Y ATHENE COMO CONTROLES',13)]
save(OUT,'detail-b',p);boards.append(['detail-b',1200,1000])

p=board(1440,1300,'Round18 / C, registro común y carácter facial')
p += [text(50,50,'R18 / C · REGISTRO COMÚN',16),text(50,107,'La misma división, un ajuste de presencia.',31,INK,500),text(50,151,'Strig se conserva. Athene explora su carácter manteniendo ojos y encuentro registrado.',17)]
for i in range(2):
    x=50+i*695;cs=c['corporates'][min(i,len(c['corporates'])-1)];ps=c['products'][i]
    p += [text(x,225,['0 / CONTROL R17','1 / ENSAYO R18'][i],20,INK,500),text(x,271,'STRIG SYSTEMS / EMPRESA',13),icon(cs,x+240,360,145),company(cs,x+24,497,65),text(x,553,'ATHENE / PRODUCTO',13),icon(ps,x+240,650,150),product(ps,x+24,806,65)]
    p += [f'<rect x="{x}" y="864" width="610" height="153" fill="{INK}"/>',company(cs,x+24,925,45,PAPER),product(ps,x+24,991,45,PAPER)]
    for size,dx in [(16,85),(24,240),(32,420)]:
        p += [native(cs,x+dx,1090,size),native(ps,x+dx,1180,size),text(x+dx-10,1230,str(size)+' px',12)]
p += [text(50,1270,'ATENCIÓN COMPETENTE COMO DIRECCIÓN · FUNCIÓN Y BENEFICIO EN NOMBRE, RELATO Y EVIDENCIA',13)]
save(OUT,'family-c',p);boards.append(['family-c',1440,1300])

height=230+len(studies)*100
p=board(1200,height,'Round18 / todos los símbolos en tamaños nativos e inversa')
p += [text(50,50,'R18 / REPRODUCCIÓN · ESCALA Y ORIGEN DEL CANVAS128 FIJOS',16),text(50,107,'Mismo tamaño declarado, sin recentrar la tinta.',29,INK,500)]
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
print(f'Round18: {len(studies)} symbols/lockups, {len(boards)} boards.')
