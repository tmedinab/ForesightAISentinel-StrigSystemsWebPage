"""Package only the compact public website and the assets it actually references.

Preserve the public HTML, including institutional artwork authorized for publication.
"""
from pathlib import Path
from urllib.parse import urlparse, unquote
import re, shutil, json, argparse

ROOT=Path(__file__).resolve().parents[1]
def build(out):
    out=out.resolve()
    assert out.is_relative_to(ROOT/'build') and out!=ROOT/'build', 'Output must be a subdirectory of build/'
    if out.exists():shutil.rmtree(out)
    out.mkdir(parents=True)
    pending=['index.html','404.html','privacy.html','terms.html','styles.css','script.js','CNAME']
    seen=set()
    while pending:
        name=pending.pop(0)
        if name in seen:continue
        src=(ROOT/name).resolve()
        assert src.is_relative_to(ROOT) and src.is_file(), f'Missing public resource: {name}'
        seen.add(name)
        dst=out/name;dst.parent.mkdir(parents=True,exist_ok=True)
        if src.suffix in ['.html','.css','.js','.svg']:
            text=src.read_text(encoding='utf-8')
            dst.write_text(text,encoding='utf-8')
            refs=re.findall(r'(?:src|href)=["\']([^"\']+)["\']',text) if src.suffix in ['.html','.svg'] else []
            refs+=re.findall(r'content=["\'](https?://[^"\']+/assets/[^"\']+)["\']',text)
            refs+=re.findall(r'url\(["\']?([^\)"\']+)',text)
            for ref in refs:
                u=urlparse(ref)
                if u.scheme:
                    if u.netloc not in ['strigsystems.tech','strigsystems.cl'] or not u.path.startswith('/assets/'):continue
                    ref=u.path.lstrip('/')
                else:ref=u.path
                if not ref or ref.startswith('#'):continue
                relative=(Path(unquote(ref).lstrip('/')) if ref.startswith('/') else Path(name).parent/unquote(ref)).as_posix()
                if relative.startswith('assets/'):
                    pending.append(relative)
                elif relative not in seen and relative in ['index.html','404.html','privacy.html','terms.html','styles.css','script.js']:
                    pending.append(relative)
                elif not u.scheme and Path(relative).suffix and relative not in ['index.html','404.html','privacy.html','terms.html','styles.css','script.js']:
                    raise ValueError(f'Unexpected public reference: {relative}')
        else:shutil.copyfile(src,dst)
    (out/'.nojekyll').touch()
    forbidden=['docs','scratch','exports','.agents','.git','dossier.html','tools','AGENTS.md']
    assert not any((out/x).exists() for x in forbidden)
    print(json.dumps({'output':str(out),'files':len(seen)+1,'institutional_artwork':True,'internal_material':'excluded'}))
    return seen

if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('--out',default='build/public')
    a=p.parse_args();build(ROOT/a.out)
