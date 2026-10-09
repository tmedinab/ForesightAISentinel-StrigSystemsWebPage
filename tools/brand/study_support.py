"""Shared development helpers for proposal SVGs. No output on import."""
from pathlib import Path
import base64,html,json,re,shutil,os
ROOT=Path(__file__).resolve().parents[2]
SOURCE=ROOT/'assets/img/brand/round-04'
RUNS=json.loads((SOURCE/'wordmark-source.json').read_text(encoding='utf-8'))['runs']
FONT=base64.b64encode((SOURCE/'source/SpaceGrotesk.ttf').read_bytes()).decode()
INK,PAPER,MUTED='#101820','#edf0f0','#52606c'
def retained(directory,old,new,title):
 studies={s['id']:s for s in json.loads((directory/'studies.json').read_text(encoding='utf-8'))}
 s=dict(studies[old]);s.update(id=new,title=title,change='Control conservado',path=re.search(r'<path[^>]* d="([^"]+)"',(directory/(old+'.svg')).read_text(encoding='utf-8')).group(1));return s
def text(x,y,label,size=17,color=MUTED,weight=400):
 return f'<text x="{x}" y="{y}" font-size="{size}" fill="{color}" font-weight="{weight}">{html.escape(label)}</text>'
def word(name,x,y,size,color=INK,weight=700,track=40):
 p=[f'<path transform="translate({g["originX"]+i*track} 0)" d="{g["svgPath"]}"/>' for i,g in enumerate(RUNS[name+'_'+str(weight)]['glyphs'])]
 return f'<g fill="{color}" transform="translate({x} {y}) scale({size/1000})">'+''.join(p)+'</g>'
def icon(s,cx,cy,span,color=INK,native=False):
 x0,y0,x1,y1=s['bounds'];k=span/128 if native else span/max(x1-x0,y1-y0)
 return f'<path fill="{color}" fill-rule="evenodd" transform="translate({cx-(x0+x1)*k/2} {cy-(y0+y1)*k/2}) scale({k})" d="{s["path"]}"/>'
def board(w,h,title,dark=False):
 return [f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-labelledby="board-title"><title id="board-title">{html.escape(title)}</title>',f'<style>@font-face{{font-family:Space;src:url(data:font/ttf;base64,{FONT}) format("truetype");font-weight:300 700}}text{{font-family:Space,Arial,sans-serif}}</style>',f'<rect width="{w}" height="{h}" fill="{INK if dark else PAPER}"/>']
def save(out,name,parts):(out/(name+'.svg')).write_text(''.join(parts)+'</svg>',encoding='utf-8')
def assets(out,studies,preview,preview_company=False):
 out.mkdir(parents=True,exist_ok=True);preview.mkdir(parents=True,exist_ok=True)
 if not (preview/'preview.html').exists():shutil.copyfile('C:/Users/Tomas/.codex/skills/svg-design/assets/preview.html',preview/'preview.html')
 variants=[]
 for s in studies:
  name=s['id'];title=s['title'];desc=s['change']+'. '+s['intent']+' Riesgo: '+s['risk']
  svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor" role="img" aria-labelledby="{name}-title {name}-desc"><title id="{name}-title">{html.escape(title)} / estudio sin aprobación</title><desc id="{name}-desc">{html.escape(desc)}</desc><path fill-rule="evenodd" d="{s["path"]}"/></svg>'
  (out/(name+'.svg')).write_text(svg,encoding='utf-8')
  company=name.startswith('strig')
  lock=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 140" role="img" aria-labelledby="{name}-lock-title"><title id="{name}-lock-title">{html.escape(title)} / lockup de estudio</title>'+icon(s,72,70,90,'currentColor')+word('STRIG' if company else 'ATHENE',145,88,85,'currentColor')
  if company:lock+=word('SYSTEMS',147,118,24,'currentColor',weight=400,track=170)
  (out/(name+'-lockup.svg')).write_text(lock+'</svg>',encoding='utf-8')
  if company==preview_company:
   relative=os.path.relpath(out/(name+'.svg'),preview).replace('\\','/')
   variants.append(dict(id=name,name=title,light=relative,description=s['change']))
   (preview/'variants.js').write_text('window.VARIANTS = '+json.dumps(dict(projectName=out.name+' / sin aprobación',brandName='Strig Systems' if preview_company else 'Athene',concepts=[dict(name='Evolución comparada',variants=variants)]),ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
 (out/'studies.json').write_text(json.dumps([{k:v for k,v in s.items() if k!='path'} for s in studies],ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
