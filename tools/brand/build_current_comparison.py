"""Current A/B/C review snapshot; no new geometry or selection."""
from study_support import ROOT,INK,PAPER,board,text,word,icon,save,retained
import json,textwrap
OUT=ROOT/'assets/img/brand/current-comparison';OUT.mkdir(parents=True,exist_ok=True)
load=lambda p:json.loads(p.read_text(encoding='utf-8-sig'))
b=load(ROOT/'assets/img/brand/round-19/source/team_b.json');c=load(ROOT/'assets/img/brand/round-19/source/team_c.json')
teams=[dict(letter='A',name='Campo abierto',status='Referencia seleccionada',corporate=retained(ROOT/'assets/img/brand/round-12','strig-h1','strig-a','Strig A'),product=retained(ROOT/'assets/img/brand/round-12','athene-equilibrado','athene-a','Athene A'),summary='Continuidad abierta y centinela frontal.'),dict(letter='B',name='Doble recorrido',status='B3 / giros apoyados apreciado',corporate=b['corporates'][0],product=b['products'][0],summary='Firma recorrida y centinela de perfil.'),dict(letter='C',name='Registro común',status='Original R17 confirmado dentro de C',corporate=c['corporates'][0],product=c['products'][0],summary='Planos complementarios y atención frontal.')]
def sized(s,x,cy,h,color=INK):
    a=s['bounds'];w=(a[2]-a[0])*h/(a[3]-a[1]);span=max(a[2]-a[0],a[3]-a[1])*h/(a[3]-a[1])
    return icon(s,x+w/2,cy,span,color),w
def company(s,x,baseline,size=60,color=INK):
    k=size/85;mark,w=sized(s,x,baseline-18*k,65.4347826087*k,color)
    return mark+word('STRIG',x+w+22*k,baseline,size,color)+word('SYSTEMS',x+w+24*k,baseline+30*k,24*k,color,weight=400,track=170)
def product(s,x,baseline,size=60,color=INK):
    k=size/85;mark,w=sized(s,x,baseline-29.75*k,59*k,color)
    return mark+word('ATHENE',x+w+24*k,baseline,size,color)
def centered(s,cx,cy,h,color=INK):
    a=s['bounds'];w=(a[2]-a[0])*h/(a[3]-a[1]);return sized(s,cx-w/2,cy,h,color)[0]
p=board(1600,1220,'A, B y C / estado actual de los tres sistemas de marca')
p += [text(50,50,'COMPARACIÓN ACTUAL / 2026-10-07',16),text(50,107,'Tres sistemas de identidad.',34,INK,500),text(50,151,'Misma tipografía, altura visible por rol y composición. Geometrías conservadas.',18)]
for i,t in enumerate(teams):
    x=50+515*i;cs=t['corporate'];ps=t['product']
    p += [text(x,230,t['letter']+' / '+t['name'],26,INK,500),text(x,271,t['status'],15),text(x,309,t['summary'],16),text(x,365,'EMPRESA / STRIG SYSTEMS',13),centered(cs,x+225,432,85),company(cs,x+22,563,62),f'<rect x="{x}" y="600" width="460" height="82" fill="{INK}"/>',company(cs,x+25,654,48,PAPER),text(x,749,'PRODUCTO / ATHENE',13),centered(ps,x+225,823,70),product(ps,x+22,966,62),f'<rect x="{x}" y="1006" width="460" height="82" fill="{INK}"/>',product(ps,x+25,1060,48,PAPER)]
p += [text(50,1153,'C muestra el original preferido. La transición de hombros de R19 sigue como contraste pendiente.',17),text(50,1190,'NO HAY GANADOR GLOBAL NI MASTER FINAL · COMPARACIÓN LOCAL',13)]
save(OUT,'three-current-systems',p)
(OUT/'snapshot.json').write_text(json.dumps({'date':'2026-10-07','teams':teams,'pendingC':c['products'][1],'composition':'Equal visible symbol height per role, same nominal wordmark size and gaps; not equal ink area.'},ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('Current comparison ready.')
