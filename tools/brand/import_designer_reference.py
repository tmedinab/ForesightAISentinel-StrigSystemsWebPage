"""Reconstruct web vectors from supplied raster references; never a vector master.

Requires Pillow only for development. Original JPEGs and prior web identity are
preserved. Pixel-boundary tracing retains letter silhouettes without guessing a
font; RDP simplifies contours within 0.65 source pixels.
"""
from pathlib import Path
import hashlib, json, shutil, math
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / 'docs/brand/designer-2026-10-10'
WEB = ROOT / 'assets/img/brand/web'
INPUTS = {
    'strig-white-background.jpeg': 'WhatsApp Image 2026-10-10 at 18.48.18((2).jpeg',
    'strig-navy-background.jpeg': 'WhatsApp Image 2026-10-10 at 18.48.18.jpeg',
    'athene-black-background.jpeg': 'WhatsApp Image 2026-10-10 at 18.50.10.jpeg',
}

def simplify(points, epsilon=.65):
    if len(points) < 3: return points
    a, b = points[0], points[-1]
    dx, dy = b[0]-a[0], b[1]-a[1]
    den = math.hypot(dx, dy)
    ds = [abs(dy*(p[0]-a[0])-dx*(p[1]-a[1]))/den if den else math.dist(p,a) for p in points]
    idx = max(range(len(ds)), key=ds.__getitem__)
    if ds[idx] <= epsilon: return [a,b]
    return simplify(points[:idx+1],epsilon)[:-1]+simplify(points[idx:],epsilon)

def trace(image, box, cyan=False):
    rgb = image.convert('RGB')
    pixels = rgb.load()
    x0,y0,x1,y1 = box
    solid = set()
    for y in range(y0,y1):
        for x in range(x0,x1):
            r,g,b = pixels[x,y]
            on = (b>150 and g>100 and r<100) if cyan else min(r,g,b)>180
            if on: solid.add((x,y))
    edges = {}
    for x,y in solid:
        if (x,y-1) not in solid: edges[(x,y)] = (x+1,y)
        if (x+1,y) not in solid: edges[(x+1,y)] = (x+1,y+1)
        if (x,y+1) not in solid: edges[(x+1,y+1)] = (x,y+1)
        if (x-1,y) not in solid: edges[(x,y+1)] = (x,y)
    paths=[]
    while edges:
        start = next(iter(edges)); cur=start; chain=[]
        while cur in edges:
            chain.append(cur); cur=edges.pop(cur)
            if cur==start: break
        if cur!=start or len(chain)<8: continue
        area=abs(sum(a[0]*b[1]-b[0]*a[1] for a,b in zip(chain,chain[1:]+chain[:1]))/2)
        if area<8: continue
        split=len(chain)//2
        pts=simplify(chain[:split+1])+simplify(chain[split:]+[chain[0]])[1:]
        paths.append('M'+'L'.join(f'{x},{y}' for x,y in pts[:-1])+'Z')
    assert paths, 'Reference threshold produced no contours'
    return ' '.join(paths)

def svg(name, viewbox, layers):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{viewbox}" role="img" aria-labelledby="title desc">'
            f'<title id="title">{name}</title><desc id="desc">Web reconstruction from designer JPEG reference, 2026-10-10. Font identity and vector master unconfirmed.</desc>'
            + ''.join(f'<path fill="{color}" fill-rule="evenodd" d="{path}"/>' for path,color in layers)+'</svg>\n')

def main():
    SOURCE.mkdir(parents=True,exist_ok=True)
    manifest={}
    for target,original in INPUTS.items():
        dst=SOURCE/target
        if not dst.exists(): shutil.copyfile(Path.home()/'Documents'/original,dst)
        manifest[target]={'original_filename':original,'sha256':hashlib.sha256(dst.read_bytes()).hexdigest()}
    previous=SOURCE/'previous-web'; previous.mkdir(exist_ok=True)
    for p in WEB.iterdir():
        if p.is_file() and not (previous/p.name).exists(): shutil.copyfile(p,previous/p.name)
    strig=Image.open(SOURCE/'strig-navy-background.jpeg')
    athene=Image.open(SOURCE/'athene-black-background.jpeg')
    # Source coordinates isolate intentional artwork; backgrounds and JPEG noise remain private.
    strig_symbol=trace(strig,(225,145,580,395))
    strig_accent=trace(strig,(225,145,580,395),cyan=True)
    strig_letters=trace(strig,(600,165,1375,395))
    athene_symbol=trace(athene,(100,150,415,330))
    athene_letters=trace(athene,(440,150,1440,335))
    for tone,ink in [('light','#f8fafc'),('dark','#062344')]:
        (WEB/f'strig-lockup-{tone}.svg').write_text(svg('Strig Systems','233 151 1135 239',[(strig_symbol,ink),(strig_accent,'#08b5eb'),(strig_letters,ink)]),encoding='utf-8')
        (WEB/f'strig-symbol-{tone}.svg').write_text(svg('Strig Systems','233 151 340 239',[(strig_symbol,ink),(strig_accent,'#08b5eb')]),encoding='utf-8')
        (WEB/f'athene-lockup-{tone}.svg').write_text(svg('Athene','106 155 1330 177',[(athene_symbol,ink),(athene_letters,ink)]),encoding='utf-8')
        (WEB/f'athene-symbol-{tone}.svg').write_text(svg('Athene','106 155 306 166',[(athene_symbol,ink)]),encoding='utf-8')
    # A padded square canvas keeps the oblique corporate symbol legible as a favicon.
    favicon=svg('Strig Systems','205 75 390 390',[(strig_symbol,'#062344'),(strig_accent,'#08b5eb')])
    favicon=favicon.replace('<title', '<style>@media(prefers-color-scheme:dark){path:first-of-type{fill:#f8fafc}}</style><title',1)
    (WEB/'favicon.svg').write_text(favicon,encoding='utf-8')
    (SOURCE/'manifest.json').write_text(json.dumps({'received':'2026-10-11','references':manifest,'derivation':'Pillow threshold + pixel boundaries + RDP 0.65px','font_identity':'unknown','master_status':'raster references only'},ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    identity=json.loads((previous/'identity.json').read_text(encoding='utf-8'))
    current_identity=json.loads((WEB/'identity.json').read_text(encoding='utf-8'))
    if current_identity.get('revision') == 'designer-reference-2026-10-10':
        identity['integration']=current_identity.get('integration',identity.get('integration'))
    identity.update({'date':'2026-10-11','corporate':'Designer two-piece oblique S with cyan accent','product':'Designer open sentinel and angular serif wordmark','selection':'Tomas supplied and requested integration of designer references; masters pending.','revision':'designer-reference-2026-10-10','source':'docs/brand/designer-2026-10-10/manifest.json','status':'web reconstruction; vector master and font identity pending','original_identity':'family A retained in previous-web'})
    (WEB/'identity.json').write_text(json.dumps(identity,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    layout={'revision':'designer-reference-2026-10-10','trim':'Source artwork bounds; contours reconstructed, not unchanged master geometry','dimensions':{'strig':{'width':1135,'height':239},'athene':{'width':1330,'height':177}},'previous':'docs/brand/designer-2026-10-10/previous-web/layout.json','master_status':'pending'}
    (WEB/'layout.json').write_text(json.dumps(layout,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    print(json.dumps({'references':len(manifest),'web_vectors':9,'master':'unconfirmed'}))

if __name__=='__main__': main()
