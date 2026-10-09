"""Portable English A/B designer handoff; preserve candidate geometry."""
from study_support import ROOT,INK,PAPER,word,icon,retained
import sys
sys.path.insert(0,str(ROOT/'scratch/font-runtime'))
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
import json,shutil,html,re,xml.etree.ElementTree as ET
OUT=ROOT/'exports/brand-review/2026-10-07_AB'
for folder in ['boards','previews','source','fonts','vectors/A','vectors/B']:(OUT/folder).mkdir(parents=True,exist_ok=True)
ns='http://www.w3.org/2000/svg';ET.register_namespace('',ns)
load=lambda p:json.loads(p.read_text(encoding='utf-8-sig'))
b=load(ROOT/'assets/img/brand/round-19/source/team_b.json')
routes=[dict(id='A',name='Open field and frontal sentinel',corporate=retained(ROOT/'assets/img/brand/round-12','strig-h1','strig-a','Strig A'),product=retained(ROOT/'assets/img/brand/round-12','athene-equilibrado','athene-a','Athene A'),corporateSource='assets/img/brand/round-12/strig-h1.svg',productSource='assets/img/brand/round-12/athene-equilibrado.svg',corporateLockup='assets/img/brand/round-12/strig-h1-lockup.svg',productLockup='assets/img/brand/round-12/athene-equilibrado-lockup.svg'),dict(id='B',name='Dual path and directional sentinel',corporate=b['corporates'][0],product=b['products'][0],corporateSource='assets/img/brand/round-19/strig-r19-b-control.svg',productSource='assets/img/brand/round-19/athene-r19-b-control.svg',corporateLockup='assets/img/brand/round-19/strig-r19-b-control-lockup.svg',productLockup='assets/img/brand/round-19/athene-r19-b-control-lockup.svg')]
descriptions={
 ('A','corporate'):'Two opposing faceted shapes form an open corporate sign with 180-degree rotational symmetry. Abstract engineering/perception and an implicit S are intentions; owl recognition is not required. H1 geometry preserved. Review candidate, not a production master.',
 ('A','product'):'Broad frontal open sentinel with prolonged cheek returns and a connected central feature. Intended owl identity and protective attention; visor, helmet or mask readings remain open. Preferred R11 geometry and balanced R12 composition preserved. Review candidate.',
 ('B','corporate'):'Two continuous paths follow an S trajectory with a nominal 4-unit longitudinal channel and locally supported turns. B3 R18 geometry preserved through R19. Dual S reading is a hypothesis, not established recognition. Review candidate.',
 ('B','product'):'Directional owl-like profile with a facial opening and a posterior negative space separating head/neck and lower return. R15 geometry preserved, without copying the corporate cut. Intended competent sentinel attention; recognition and character remain review questions.'}
glyphCache={};fonts={}
for weight in [400,500,700]:
    f=TTFont(ROOT/'assets/img/brand/round-04/source/SpaceGrotesk.ttf')
    fonts[weight]=instantiateVariableFont(f,{'wght':weight},inplace=False) if 'fvar' in f else f
def text(x,y,label,size=17,color=INK,weight=400):
    f=fonts[weight];gs=f.getGlyphSet();cmap=f.getBestCmap();units=f['head'].unitsPerEm;cursor=0;p=[]
    for ch in label:
        name=cmap.get(ord(ch),'.notdef');key=(weight,name)
        if key not in glyphCache:
            pen=SVGPathPen(gs);gs[name].draw(pen);glyphCache[key]=pen.getCommands()
        d=glyphCache[key]
        if d:p.append(f'<path transform="translate({cursor} 0)" d="{d}"/>')
        cursor+=f['hmtx'][name][0]
    return f'<g fill="{color}" aria-label="{html.escape(label,quote=True)}" transform="translate({x} {y}) scale({size/units} {-size/units})">'+''.join(p)+'</g>'
def lines(x,y,labels,size=18,color=INK,step=27):return [text(x,y+i*step,t,size,color) for i,t in enumerate(labels)]
def board(w,h,title):return [f'<svg xmlns="{ns}" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-labelledby="title desc"><title id="title">{html.escape(title)}</title><desc id="desc">English professional review board. A and B are candidate identity systems; all visible lettering is outlined. No production master is adopted.</desc>',f'<rect width="{w}" height="{h}" fill="{PAPER}"/>']
def save(name,p):(OUT/'boards'/f'{name}.svg').write_text(''.join(p)+'</svg>',encoding='utf-8')
def sized(s,x,cy,h,color=INK):
    a=s['bounds'];w=(a[2]-a[0])*h/(a[3]-a[1]);span=max(a[2]-a[0],a[3]-a[1])*h/(a[3]-a[1])
    return icon(s,x+w/2,cy,span,color),w
def center(s,cx,cy,h,color=INK):
    a=s['bounds'];w=(a[2]-a[0])*h/(a[3]-a[1]);return sized(s,cx-w/2,cy,h,color)[0]
def company(s,x,baseline,size=60,color=INK):
    k=size/85;mark,w=sized(s,x,baseline-18*k,65.4347826087*k,color)
    return mark+word('STRIG',x+w+22*k,baseline,size,color)+word('SYSTEMS',x+w+24*k,baseline+30*k,24*k,color,weight=400,track=170)
def product(s,x,baseline,size=60,color=INK):
    k=size/85;mark,w=sized(s,x,baseline-29.75*k,59*k,color)
    return mark+word('ATHENE',x+w+24*k,baseline,size,color)
def native(s,cx,cy,size,color=INK):
    k=size/128;return f'<path fill="{color}" fill-rule="evenodd" transform="translate({cx-64*k} {cy-64*k}) scale({k})" d="{s["path"]}"/>'
for t in routes:
    for kind,brand in [('corporate','strig'),('product','athene')]:
        for lockup in [False,True]:
            source=t[kind+'Lockup' if lockup else kind+'Source']
            for suffix,color in [('ink',INK),('white','#ffffff')]:
                name=brand+('-lockup' if lockup else '-symbol')+'_'+suffix
                svg=ET.parse(ROOT/source).getroot()
                for child in list(svg):
                    if child.tag in [f'{{{ns}}}title',f'{{{ns}}}desc']:svg.remove(child)
                for node in svg.iter():
                    if node.get('fill')=='currentColor':node.set('fill',color)
                svg.set('fill',color);svg.set('role','img');svg.set('aria-labelledby',name+'-title '+name+'-desc')
                title=ET.Element(f'{{{ns}}}title',{'id':name+'-title'});title.text=f'Option {t["id"]} / {brand.title()} '+('horizontal lockup' if lockup else 'symbol')+' / review candidate'
                desc=ET.Element(f'{{{ns}}}desc',{'id':name+'-desc'});desc.text=descriptions[(t['id'],kind)]+' Fixed '+suffix+' fill; transparent background.'
                svg.insert(0,desc);svg.insert(0,title)
                (OUT/'vectors'/t['id']/(name+'.svg')).write_text(ET.tostring(svg,encoding='unicode')+'\n',encoding='utf-8')

routeNotes={
 'A':[['Corporate: open opposing facets; implicit S.','Product: frontal open face and cheek returns.','The family shares deliberate openings and','controlled geometry rather than one silhouette.'],['Earlier client preference; not a required winner.','Review distinctiveness and owl/visor/helmet','ambiguity, expression and wide-face proportion.']],
 'B':[['Corporate: two complete longitudinal S paths.','Product: directional profile with a lower return.','The family shares direction, return and hierarchy;','the product does not repeat the corporate cut.'],['B3 is liked by the client; not a final selection.','Review ink balance, small-size separation and','whether the profile feels attentive or sporty.']]}
man=[]
for t in routes:
    p=board(1200,1120,'Option '+t['id']+' / '+t['name'])
    p += [text(50,50,'STRIG SYSTEMS / ATHENE · PROFESSIONAL REVIEW · 2026-10-07',15),text(50,108,'Option '+t['id']+' — '+t['name'],29,INK,700)]
    for i,(kind,label,draw) in enumerate([('corporate','COMPANY / STRIG SYSTEMS',company),('product','SYSTEM / ATHENE',product)]):
        x=50+i*575;s=t[kind]
        p += [text(x,209,label,17),center(s,x+240,336,100 if kind=='corporate' else 80),draw(s,x+24,509,65),f'<rect x="{x}" y="554" width="525" height="86" fill="{INK}"/>',draw(s,x+24,611,52,'#ffffff')]
    p += [text(50,716,'DESIGN INTENT',17,INK,700)]+lines(50,757,routeNotes[t['id']][0],19,step=30)
    p += [text(50,930,'STATUS AND OPEN QUESTIONS',17,INK,700)]+lines(50,971,routeNotes[t['id']][1],18,step=28)
    p += [text(50,1090,'Candidate geometry preserved. Interpretation and professional judgment remain open.',14)]
    name='01_option_A' if t['id']=='A' else '02_option_B';save(name,p);man.append([name,1200,1120])

p=board(1200,1100,'A/B comparison / initial visual impressions')
p += [text(50,50,'A / B · INITIAL VISUAL COMPARISON',16),text(50,107,'Two company / system identity pairs.',31,INK,700),text(50,151,'Same type and visible symbol height per role; ink area and width are not equalized.',17)]
for i,t in enumerate(routes):
    x=50+i*575
    p += [text(x,225,'OPTION '+t['id'],24,INK,700),text(x,286,'COMPANY / STRIG SYSTEMS',15),center(t['corporate'],x+240,365,85),company(t['corporate'],x+24,493,62),f'<rect x="{x}" y="531" width="525" height="82" fill="{INK}"/>',company(t['corporate'],x+24,586,48,'#ffffff'),text(x,685,'SYSTEM / ATHENE',15),center(t['product'],x+240,757,70),product(t['product'],x+24,882,62),f'<rect x="{x}" y="924" width="525" height="82" fill="{INK}"/>',product(t['product'],x+24,979,48,'#ffffff')]
p += [text(50,1063,'Record first impressions before the rationale. This is not a blind audience study.',15)]
save('03_AB_comparison',p);man.append(['03_AB_comparison',1200,1100])

p=board(1200,760,'A/B native canvas reduction / positive and reversed')
p += [text(50,50,'A / B · REDUCTION',16),text(50,107,'Fixed 128-unit canvas and origin.',30,INK,700),text(50,150,'Native sizes below; avoid judging tiny assets from enlarged screenshots.',17)]
for x,size in [(460,16),(550,24),(650,32),(770,48),(880,16),(960,24),(1040,32),(1135,48)]:p += [text(x-15,207,str(size)+' px',13)]
for row,(t,kind,label) in enumerate([(routes[0],'corporate','A / Strig'),(routes[0],'product','A / Athene'),(routes[1],'corporate','B / Strig'),(routes[1],'product','B / Athene')]):
    cy=295+row*105;s=t[kind]
    p += [text(50,cy+6,label,21),f'<rect x="830" y="{cy-40}" width="345" height="80" fill="{INK}"/>']
    for x,size in [(460,16),(550,24),(650,32),(770,48)]:p += [native(s,x,cy,size)]
    for x,size in [(880,16),(960,24),(1040,32),(1135,48)]:p += [native(s,x,cy,size,'#ffffff')]
p += [text(50,715,'Production minimum sizes and micro variants are unresolved. SYSTEMS needs context checks.',15)]
save('04_native_sizes',p);man.append(['04_native_sizes',1200,760])

p=board(1400,1150,'A/B contextual hierarchy / company and system')
p += [text(50,50,'A / B · CONTEXTUAL HIERARCHY',16),text(50,107,'Same roles, different symbol systems.',31,INK,700),text(50,151,'Illustrative brand layouts, not product availability or performance claims.',17)]
for i,t in enumerate(routes):
    x=50+675*i;cs=t['corporate'];ps=t['product']
    p += [text(x,213,'OPTION '+t['id'],22,INK,700),f'<rect x="{x}" y="245" width="625" height="350" fill="{INK}"/>',text(x+25,277,'CORPORATE HEADER / STUDY',12,'#ffffff'),company(cs,x+25,349,42,'#ffffff'),text(x+25,411,'ENGINEERING AND DEVELOPMENT',16,'#ffffff'),text(x+25,458,'Systems to observe, understand and decide.',21,'#ffffff'),product(ps,x+25,548,40,'#ffffff')]
    p += [f'<rect x="{x}" y="660" width="625" height="390" fill="none" stroke="#aab7bf"/>',text(x+25,694,'SYSTEM SHEET / STUDY',12),product(ps,x+25,771,42),text(x+25,828,'TERRITORIAL SENTINEL SYSTEM',16),text(x+25,881,'Night-time awareness and human decision support.',19),text(x+25,939,'Developed by',14),company(cs,x+25,1006,36)]
p += [text(50,1110,'Corporate signature scales to preserve SYSTEMS. Parent/product hierarchy need not match ink mass.',14)]
save('05_contexts_AB',p);man.append(['05_contexts_AB',1400,1150])
(OUT/'source/boards.json').write_text(json.dumps(man,indent=2)+'\n',encoding='utf-8')
source={'date':'2026-10-07','scope':'A/B professional review; unchanged candidate geometry','routes':[],'constructionParameters':{'corporateAt85':{'visibleHeight':65.4347826087,'gap':22,'systemsSize':24,'opticalCenterFromBaseline':-18},'productAt85':{'visibleHeight':59,'gap':24,'opticalCenterFromBaseline':-29.75},'symbolCanvas':[0,0,128,128],'lockupCanvas':[0,0,490,140]},'boardScaling':'Equal visible height per role; native reduction fixes canvas and origin.'}
for t in routes:
    source['routes'].append({'id':t['id'],'name':t['name'],'corporate':{'path':t['corporate']['path'],'bounds':t['corporate']['bounds'],'description':descriptions[(t['id'],'corporate')],'symbolOrigin':t['corporateSource'],'lockupOrigin':t['corporateLockup']},'product':{'path':t['product']['path'],'bounds':t['product']['bounds'],'description':descriptions[(t['id'],'product')],'symbolOrigin':t['productSource'],'lockupOrigin':t['productLockup']},'status':'Earlier client-selected reference; no approved production master' if t['id']=='A' else 'B3 supported turns liked by client; no final global selection'})
    for kind in ['corporate','product']:
        tree=ET.parse(ROOT/t[kind+'Lockup']).getroot()
        source['routes'][-1][kind]['lockupTransformsInDocumentOrder']=[{'element':n.tag.split('}')[-1],'transform':n.get('transform')} for n in tree.iter() if n.get('transform')]
(OUT/'source/geometry_EN.json').write_text(json.dumps(source,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
for name in ['SpaceGrotesk.ttf','OFL.txt']:shutil.copyfile(ROOT/'assets/img/brand/round-04/source'/name,OUT/'fonts'/name)
def inline(t):
    t=html.escape(t);t=re.sub(r'\*\*(.+?)\*\*',r'<strong>\1</strong>',t);return re.sub(r'`(.+?)`',r'<code>\1</code>',t)
content=[];listType=None
for line in (OUT/'DESIGN_BRIEF_EN.md').read_text(encoding='utf-8').splitlines():
    typ='ul' if line.startswith('- ') else 'ol' if re.match(r'^\d+\. ',line) else None
    if typ!=listType:
        if listType:content.append('</'+listType+'>')
        if typ:content.append('<'+typ+'>')
        listType=typ
    if typ:content.append('<li>'+inline(re.sub(r'^(?:- |\d+\. )','',line))+'</li>')
    elif line.startswith('## '):content.append('<h2>'+inline(line[3:])+'</h2>')
    elif line.startswith('# '):content.append('<h1>'+inline(line[2:])+'</h1>')
    elif line.strip():content.append('<p>'+inline(line)+'</p>')
if listType:content.append('</'+listType+'>')
document='<!doctype html><html lang="en"><meta charset="utf-8"><title>Strig Systems / Athene — design review brief</title><style>body{max-width:850px;margin:48px auto;padding:0 28px;font:17px/1.65 system-ui,sans-serif;color:#101820}h1{font-size:34px;line-height:1.2}h2{font-size:23px;margin-top:34px}code{font-size:14px;background:#edf0f0;padding:2px 4px}li{margin-bottom:10px}@media print{body{margin:0;max-width:none;font-size:11pt}h2{break-after:avoid}p,li{orphans:3;widows:3}}</style><body>'+''.join(content)+'</body></html>'
(OUT/'DESIGN_BRIEF_EN.html').write_text(document,encoding='utf-8')
print('A/B package: 16 vector assets, 5 outlined English boards, briefing HTML/Markdown and font license.')
