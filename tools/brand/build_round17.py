"""B: longitudinal split following the S; preferred diagonal control retained."""
from study_support import ROOT,INK,PAPER,board,text,word,icon,save,assets
import json,shutil,textwrap
OUT=ROOT/'assets/img/brand/round-17'
source=OUT/'source/studies_b.json'
if not source.exists():
    source.parent.mkdir(parents=True,exist_ok=True)
    shutil.copyfile(ROOT/'scratch/round17/studies_b.json',source)
data=json.loads(source.read_text(encoding='utf-8-sig'))
STUDIES=data['studies'];corporates=[s for s in STUDIES if s['id'].startswith('strig')];productStudy=next(s for s in STUDIES if s['id'].startswith('athene'))
assert len(corporates)==3 and len(STUDIES)==4
coordination=None
coordinationSource=OUT/'source/team_c_coordination.json'
if not coordinationSource.exists() and (ROOT/'scratch/round17/team_c_coordination.json').exists():
    shutil.copyfile(ROOT/'scratch/round17/team_c_coordination.json',coordinationSource)
if coordinationSource.exists():
    coordination=json.loads(coordinationSource.read_text(encoding='utf-8-sig'))
    STUDIES += [coordination['corporate'],coordination['product']]
assets(OUT,STUDIES,ROOT/'scratch/round17/preview',preview_company=True)
def width(s,h):
    b=s['bounds'];return (b[2]-b[0])*h/(b[3]-b[1])
def sized(s,x,cy,h,color=INK):
    b=s['bounds'];span=max(b[2]-b[0],b[3]-b[1])*h/(b[3]-b[1])
    return icon(s,x+width(s,h)/2,cy,span,color)
def company(s,x,baseline,size=55,color=INK):
    k=size/85;h=65.4347826087*k;w=width(s,h)
    return sized(s,x,baseline-18*k,h,color)+word('STRIG',x+w+22*k,baseline,size,color)+word('SYSTEMS',x+w+24*k,baseline+30*k,24*k,color,weight=400,track=170)
def product(s,x,baseline,size=55,color=INK):
    k=size/85;h=59*k;w=width(s,h)
    return sized(s,x,baseline-29.75*k,h,color)+word('ATHENE',x+w+24*k,baseline,size,color)
def wrapped(x,y,label,size=15,color=INK,width=42,step=22):
    return [text(x,y+i*step,line,size,color) for i,line in enumerate(textwrap.wrap(label,width=width))]
def native(s,cx,cy,span,color=INK):
    k=span/128
    return f'<path fill="{color}" fill-rule="evenodd" transform="translate({cx-64*k} {cy-64*k}) scale({k})" d="{s["path"]}"/>'
for s in STUDIES:
    draw=company if s['id'].startswith('strig') else product
    save(OUT,s['id']+'-lockup',[f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 140" role="img" aria-labelledby="{s["id"]}-lock-title"><title id="{s["id"]}-lock-title">{s["title"]} / propuesta de estudio</title>',draw(s,15,88,85,'currentColor')])

p=board(1200,1000,'Round17 / B, S gruesa y dos canales')
p += [text(50,50,'R17 / B · S GRUESA Y ARTICULACIÓN',16),text(50,107,'Dos recorridos dentro de una S.',32,INK,500),text(50,148,'Canal diagonal preferido + dos costuras que acompañan toda la S. Athene intacto.',17)]
labels=['0 / DIAGONAL 6 U','1 / LONGITUDINAL 4 U','2 / LONGITUDINAL 6 U']
notes=['Canal de R16 que Tomás aprecia, conservado como referencia.','Costura contenida: seguir ambos recorridos y comprobar los giros.','Más margen de separación; comprobar cuánto peso pierden los rieles.']
for i,s in enumerate(corporates):
    x=50+i*390
    p += [text(x,224,labels[i],21,INK,500),icon(s,x+160,370,164),company(s,x+5,535,55),f'<rect x="{x}" y="580" width="320" height="82" fill="{INK}"/>',company(s,x+15,633,48,PAPER)]
    for size,dx in [(16,40),(24,105),(32,180),(48,270)]:
        p += [native(s,x+dx,742,size),text(x+dx-10,795,str(size)+' px',12)]
    p += wrapped(x,855,notes[i],15,width=36,step=22)
p += [text(50,969,'ENSAYO DE DOS S CONTIGUAS · VALORAR CONTINUIDAD DE CADA RIEL Y PESO DEL CONJUNTO',13)]
save(OUT,'split-s',p)

p=board(1200,850,'Round17 / relación de Strig con Athene conservado',True)
p += [text(50,50,'R17 / B · FAMILIA EN UNA TINTA',16,'#aab7bf'),text(50,108,'La firma cambia; el centinela se conserva.',30,PAPER,500)]
for i,s in enumerate(corporates):
    x=50+i*390
    p += [text(x,206,labels[i],21,PAPER),product(productStudy,x+5,357,55,PAPER),text(x,422,'SISTEMA CENTINELA / ESTUDIO',14,'#aab7bf'),text(x,537,'Desarrollado por',14,'#aab7bf'),company(s,x+5,632,55,PAPER)]
p += [text(50,800,'MISMO ATHENE R15 · SIN FIGURA AÑADIDA EN SU CONTRAFORMA',13,'#aab7bf')]
save(OUT,'family-b',p)


import re
p=board(1440,950,'Round17 / continuidad de cada recorrido')
p += [text(50,50,'R17 / B · DOS RECORRIDOS, VISTOS POR SEPARADO',16),text(50,107,'¿Cada parte conserva una S?',32,INK,500),text(50,148,'Mismo canvas y escala. Separar rieles permite examinar continuidad, sin depender del relato.',17)]
for row,s in enumerate(corporates[1:]):
    y=280+row*340
    parts=re.findall(r'M.*?Z',s['path'],re.S)
    assert len(parts)==2,'Two simple rails expected for longitudinal study'
    p += [text(50,y-55,labels[row+1],21,INK,500)]
    for col,(part,label) in enumerate([(s['path'],'CONJUNTO'),(parts[0],'RECORRIDO 1'),(parts[1],'RECORRIDO 2')]):
        x=50+col*470
        p += [text(x,y,label,15),native(dict(s,path=part),x+185,y+105,176)]
p += [text(50,910,'NO SON TRES LOGOS NUEVOS · DESCOMPOSICIÓN DE LOS DOS ENSAYOS',13)]
save(OUT,'rails-b',p)
boards=[['split-s',1200,1000],['family-b',1200,850],['rails-b',1440,950]]
if coordination:
    p=board(1440,1100,'Round17 / C nueva rama de coordinación')
    p += [text(50,50,'R17 / C · NUEVA RAMA: COORDINACIÓN DE SISTEMAS',16),text(50,107,coordination['name'],32,INK,500),text(50,148,'Nueva hipótesis desde el brief; no se atribuye este origen al Umbral de R13–R15.',17)]
    p += wrapped(50,209,coordination['boardSummary'],18,width=130,step=26)
    for i,(kind,label,draw) in enumerate([('corporate','STRIG SYSTEMS / EMPRESA',company),('product','ATHENE / PRODUCTO',product)]):
        x=50+i*695;s=coordination[kind]
        p += [text(x,320,label,16),icon(s,x+240,443,192),draw(s,x+20,619,70),f'<rect x="{x}" y="666" width="610" height="85" fill="{INK}"/>',draw(s,x+24,723,55,PAPER)]
        for size,dx in [(16,50),(24,170),(32,300),(48,450)]:
            p += [native(s,x+dx,837,size),text(x+dx-10,894,str(size)+' px',13)]
    p += wrapped(50,961,coordination['critiqueResponse'],15,width=150,step=23)
    p += [text(50,1065,'PRUEBA AUTORIZADA · MENSAJE COMÚN, DECISIÓN FORMAL PROPIA · SIN ADOPCIÓN',13)]
    save(OUT,'coordination-c',p)
    boards.append(['coordination-c',1440,1100])
    p=board(1200,780,'Round17 / C, hipótesis y consecuencias')
    p += [text(50,50,'R17 / C · TESIS Y DERIVACIÓN',16),text(50,107,'La relación entre partes debe hacer trabajo visible.',29,INK,500)]
    p += wrapped(50,181,coordination['thesis'],18,width=105,step=27)
    p += [company(coordination['corporate'],70,405,65),product(coordination['product'],650,405,65)]
    p += wrapped(50,506,coordination.get('namingRole','La raíz de los nombres orienta identidad; no obliga a letras o sensores.'),17,width=110,step=25)
    p += wrapped(50,637,coordination['tradeoffs'][0],15,width=120,step=23)
    p += [text(50,745,'EL SIGNO IDENTIFICA · RELATO Y EVIDENCIA EXPLICAN LAS CAPACIDADES',13)]
    save(OUT,'branch-c-detail',p)
    boards.append(['branch-c-detail',1200,780])
(OUT/'boards.json').write_text(json.dumps(boards,indent=2)+'\n',encoding='utf-8')
print(f'Round17: {len(STUDIES)} symbols/lockups, {len(boards)} boards.')
