"""B: one corporate cut operation in two widths; product preserved."""
from study_support import ROOT,INK,PAPER,board,text,word,icon,save,assets
import json,shutil,textwrap
OUT=ROOT/'assets/img/brand/round-16'
source=OUT/'source/studies_b.json'
if not source.exists():
    source.parent.mkdir(parents=True,exist_ok=True)
    shutil.copyfile(ROOT/'scratch/round16/studies_b.json',source)
data=json.loads(source.read_text(encoding='utf-8-sig'))
STUDIES=data['studies'];corporates=[s for s in STUDIES if s['id'].startswith('strig')];productStudy=next(s for s in STUDIES if s['id'].startswith('athene'))
assert len(corporates)==3 and len(STUDIES)==4
assets(OUT,STUDIES,ROOT/'scratch/round16/preview',preview_company=True)
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

p=board(1200,1000,'Round16 / B, S gruesa y dos canales')
p += [text(50,50,'R16 / B · S GRUESA Y ARTICULACIÓN',16),text(50,107,'Una S. Dos partes. Una misma dirección.',32,INK,500),text(50,148,'Control + dos anchuras del mismo canal diagonal. Athene permanece intacto.',17)]
labels=['0 / S GRUESA','1 / CANAL 6 U','2 / CANAL 10 U']
notes=['Recorrido monolítico; referencia que Tomás valora.','Dos piezas con separación contenida; comprobar el canal en pequeño.','Mayor separación; comprobar continuidad y fuerza del conjunto.']
for i,s in enumerate(corporates):
    x=50+i*390
    p += [text(x,224,labels[i],21,INK,500),icon(s,x+160,370,164),company(s,x+5,535,55),f'<rect x="{x}" y="580" width="320" height="82" fill="{INK}"/>',company(s,x+15,633,48,PAPER)]
    for size,dx in [(16,40),(24,105),(32,180),(48,270)]:
        p += [native(s,x+dx,742,size),text(x+dx-10,795,str(size)+' px',12)]
    p += wrapped(x,855,notes[i],15,width=36,step=22)
p += [text(50,969,'DOS PIEZAS NO GARANTIZAN DOS S LEGIBLES · HIPÓTESIS DE STRIG / SYSTEMS, NO SIGNIFICADO VALIDADO',13)]
save(OUT,'split-s',p)

p=board(1200,850,'Round16 / relación de Strig con Athene conservado',True)
p += [text(50,50,'R16 / B · FAMILIA EN UNA TINTA',16,'#aab7bf'),text(50,108,'La firma cambia; el centinela se conserva.',30,PAPER,500)]
for i,s in enumerate(corporates):
    x=50+i*390
    p += [text(x,206,labels[i],21,PAPER),product(productStudy,x+5,357,55,PAPER),text(x,422,'SISTEMA CENTINELA / ESTUDIO',14,'#aab7bf'),text(x,537,'Desarrollado por',14,'#aab7bf'),company(s,x+5,632,55,PAPER)]
p += [text(50,800,'MISMO ATHENE R15 · SIN FIGURA AÑADIDA EN SU CONTRAFORMA',13,'#aab7bf')]
save(OUT,'family-b',p)

p=board(1100,750,'Round16 / función del vacío posterior de Athene B')
p += [text(50,50,'R16 / B · FUNCIÓN DE LA CONTRAFORMA',16),text(50,107,'El vacío mantiene abierto el recorrido.',30,INK,500),icon(productStudy,300,350,240)]
p += wrapped(590,252,'Cabeza orientada, retorno de cuello y apoyo inferior pertenecen a un mismo recorrido.',19,width=38,step=28)
p += wrapped(590,384,'El hueco posterior los separa visualmente. No se diseñó como otra ave, ala o sensor.',19,width=38,step=28)
p += wrapped(590,520,'Añadir una pieza podría competir con la lectura del búho que Tomás ahora reconoce.',19,width=38,step=28)
p += [text(50,690,'FUNCIÓN DE CONSTRUCCIÓN · SIGNIFICADO ADICIONAL DIFERIDO',13)]
save(OUT,'negative-space-b',p)
(OUT/'boards.json').write_text(json.dumps([['split-s',1200,1000],['family-b',1200,850],['negative-space-b',1100,750]],indent=2)+'\n',encoding='utf-8')
print('Round16: four symbols/lockups, three boards; B focused study.')
