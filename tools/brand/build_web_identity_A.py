"""Promote family A geometry to local web assets, retaining study originals."""
from study_support import ROOT,INK,PAPER
from pathlib import Path
import shutil,xml.etree.ElementTree as ET,json
ns='http://www.w3.org/2000/svg';ET.register_namespace('',ns)
out=ROOT/'assets/img/brand/web';out.mkdir(exist_ok=True)
source=ROOT/'exports/brand-review/2026-10-07_AB/vectors/A'
for brand in ['strig','athene']:
    for kind in ['symbol','lockup']:
        for suffix,color in [('light','#f8fafc'),('dark',INK)]:
            root=ET.parse(source/(brand+'-'+kind+'_ink.svg')).getroot()
            for node in root.iter():
                if node.get('fill') not in [None,'none']:node.set('fill',color)
            title=root.find(f'{{{ns}}}title');title.text='Strig Systems' if brand=='strig' else 'Athene'
            desc=root.find(f'{{{ns}}}desc');desc.text='Family A web identity. Preserved H1 corporate geometry.' if brand=='strig' else 'Family A web identity. Preserved open sentinel with prolonged cheek returns.'
            (out/(brand+'-'+kind+'-'+suffix+'.svg')).write_text(ET.tostring(root,encoding='unicode')+'\n',encoding='utf-8')
symbol=ET.parse(out/'strig-symbol-light.svg').getroot()
symbol.set('viewBox','0 0 128 128')
style=ET.Element(f'{{{ns}}}style');style.text='path{fill:#101820}@media(prefers-color-scheme:dark){path{fill:#f8fafc}}'
symbol.insert(2,style)
(out/'favicon.svg').write_text(ET.tostring(symbol,encoding='unicode')+'\n',encoding='utf-8')
(out/'identity.json').write_text(json.dumps({'family':'A','integration':'local website','date':'2026-10-07','corporate':'H1 / round12 optical composition','product':'Round11 prolonged returns / round12 balanced composition','selection':'Tomás requested family A for the website; current preference, not irreversible design freeze.','source':'exports/brand-review/2026-10-07_AB/vectors/A'},ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('Family A web assets prepared.')
