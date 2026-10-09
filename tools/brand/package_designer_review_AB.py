"""Verify exact geometry, register exports and build a self-contained review zip."""
from pathlib import Path
import json,hashlib,zipfile,xml.etree.ElementTree as ET
ROOT=Path(__file__).resolve().parents[2];OUT=ROOT/'exports/brand-review/2026-10-07_AB';ns='http://www.w3.org/2000/svg'
load=lambda p:json.loads(p.read_text(encoding='utf-8-sig'))
source=load(OUT/'source/geometry_EN.json')
def geometry(p):
    r=ET.parse(p).getroot()
    return [(n.tag,n.get('d'),n.get('transform'),n.get('fill-rule')) for n in r.iter() if n.tag in [f'{{{ns}}}path',f'{{{ns}}}g']]
for route in source['routes']:
    for kind,brand in [('corporate','strig'),('product','athene')]:
        for lockup in [False,True]:
            original=ROOT/route[kind]['lockupOrigin' if lockup else 'symbolOrigin']
            for suffix in ['ink','white']:
                name=brand+('-lockup' if lockup else '-symbol')+'_'+suffix+'.svg'
                assert geometry(OUT/'vectors'/route['id']/name)==geometry(original),name
images=sorted(p for p in OUT.rglob('*') if p.suffix in ['.svg','.png'])
for p in images:
    if p.suffix=='.svg':
        tree=ET.parse(p).getroot();assert tree.find(f'{{{ns}}}title') is not None
        assert not any(n.tag in [f'{{{ns}}}text',f'{{{ns}}}image',f'{{{ns}}}script',f'{{{ns}}}filter'] for n in tree.iter())
report=load(OUT/'QA_REPORT.json');report.update(geometryMatchesOrigins=True,svgXmlValid=True,visibleTextOutlined=True,svgFiles=21)
(OUT/'QA_REPORT.json').write_text(json.dumps(report,indent=2)+'\n',encoding='utf-8')
files=sorted(p for p in OUT.rglob('*') if p.is_file() and p.name!='MANIFEST.json')
manifest={'version':'2026-10-07','scope':'Professional evaluation of A/B candidate identities','files':[{'path':p.relative_to(OUT).as_posix(),'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()} for p in files]}
(OUT/'MANIFEST.json').write_text(json.dumps(manifest,indent=2)+'\n',encoding='utf-8')
zipPath=OUT.parent/'StrigSystems_Athene_AB_DesignerReview_2026-10-07.zip'
with zipfile.ZipFile(zipPath,'w',compression=zipfile.ZIP_DEFLATED) as archive:
    for p in sorted(OUT.rglob('*')):
        if p.is_file():archive.write(p,arcname='StrigSystems_Athene_AB_DesignerReview/'+p.relative_to(OUT).as_posix())
with zipfile.ZipFile(zipPath) as archive:assert archive.testzip() is None
p=ROOT/'docs/ASSET_REGISTER.json';register=load(p);prefix=OUT.relative_to(ROOT).as_posix()+'/'
register['assets']=[a for a in register['assets'] if not a['path'].startswith(prefix)]
for image in images:
    register['assets'].append({'path':image.relative_to(ROOT).as_posix(),'status':'unapproved-exploration','source':'English A/B professional review export, 2026-10-07. Exact geometry preserved from A/H1-R11/R12 and B3R18/AtheneR15 via R19. Outlined labels and wordmarks, fixed ink/white assets, PNG Chromium. Origins/transforms in source/geometry_EN.json; hashes in MANIFEST.json.','rights':'AI-assisted design study; Space Grotesk under SIL OFL 1.1 included. No exclusivity or trademark clearance asserted.','approvedUse':'Share with a professional designer for independent evaluation as requested by Tomás. Not production adoption or public publication.'})
register['updated']='2026-10-07';p.write_text(json.dumps(register,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
p=ROOT/'tools/brand/README.md';t=p.read_text(encoding='utf-8')
if 'build_designer_review_AB.py' not in t:
    t+='\nEnglish designer handoff A/B: `python tools/brand/build_designer_review_AB.py`, `node tools/brand/verify_designer_review_AB.cjs`, `python tools/brand/package_designer_review_AB.py`. Output `exports/brand-review/2026-10-07_AB/` and ZIP alongside it. Builder uses fontTools from the existing development target `scratch/font-runtime` or the active Python environment; no frontend dependency. Outlines all board lettering, preserves native symbols/lockup transforms, includes font/OFL, English brief/HTML/response template and geometry provenance. Verifier checks five boards and48vector cases; packager compares geometry, hashes files and checks archive integrity. No redesign or publication.\n'
p.write_text(t,encoding='utf-8')
print(json.dumps({'zip':str(zipPath),'files':len(files)+1,'imageExports':len(images),'bytes':zipPath.stat().st_size,'geometry':'exact','archiveIntegrity':'pass'}))
