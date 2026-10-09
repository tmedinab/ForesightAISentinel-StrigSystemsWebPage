from pathlib import Path
import json,re,base64,shutil
root=Path(__file__).resolve().parents[2]
b=root/'assets/img/brand/round-04'
j=json.loads((b/'wordmark-source.json').read_text(encoding='utf-8'))
font=base64.b64encode((b/'source/SpaceGrotesk.ttf').read_bytes()).decode()
head=f'<style>@font-face{{font-family:Space;src:url(data:font/ttf;base64,{font}) format("truetype");font-weight:300 700}}text{{font-family:Space,Arial,sans-serif}}</style>'
def t(x,y,label,size=18,color='#52606c',spacing=0,weight=400):
 return f'<text x="{x}" y="{y}" font-size="{size}" fill="{color}" letter-spacing="{spacing}" font-weight="{weight}">{label}</text>'
def word(name,x,y,size,color='#101820',custom=False,track=60,weight=700):
 run=j['runs'][f'{name}_{weight}'];s=size/1000;out=[]
 for i,g in enumerate(run['glyphs']):
  d=g['svgPath']
  if custom and g['character']=='R':d=d.replace('Q568 -271 568 -229V0H436','Q568 -271 568 -229V-90L478 0H436')
  out.append(f'<path transform="translate({g["originX"]+i*track} 0)" d="{d}"/>')
 return f'<g fill="{color}" transform="translate({x} {y}) scale({s})">'+''.join(out)+'</g>'
def icon(file,cx,cy,maxdim,color='#101820'):
 txt=(b/file).read_text(encoding='utf-8');paths=''.join(re.findall(r'<path[^>]*>',txt))
 bounds={'strig-01-campo.svg':(18,18,110,110),'strig-02-bilateral.svg':(12,32,116,76),'athene-01-centinela.svg':(16,28,112,108)}[file]
 x0,y0,x1,y1=bounds;k=maxdim/max(x1-x0,y1-y0)
 return f'<g fill="{color}" transform="translate({cx-(x0+x1)/2*k} {cy-(y0+y1)/2*k}) scale({k})">{paths}</g>'
def rawicon(file,x,y,size,color='#101820'):
 txt=(b/file).read_text(encoding='utf-8');paths=''.join(re.findall(r'<path[^>]*>',txt))
 return f'<g fill="{color}" transform="translate({x} {y}) scale({size/128})">{paths}</g>'
def lockup(route,x,y,color='#101820',factor=1):
 parts=[]
 if route<2:
  parts.append(icon(['strig-01-campo.svg','strig-02-bilateral.svg'][route],x+38,y-11,60,color))
  parts.append(word('STRIG',x+98,y+4,64,color));parts.append(word('SYSTEMS',x+100,y+34,25,color,weight=400,track=170))
 else:
  parts.append(word('STRIG',x+70,y+4,64,color,custom=True));parts.append(word('SYSTEMS',x+73,y+34,25,color,weight=400,track=170))
 return ''.join(parts)
# Portable corporate lockups, all letterforms outlined.
for i,file in enumerate(['strig-01-campo','strig-02-bilateral','strig-03-firma']):
 svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100" role="img" aria-labelledby="{file}-lock-title"><title id="{file}-lock-title">Strig Systems / propuesta {i+1}, sin aprobación</title>'+lockup(i,29 if i<2 else 12,54,'currentColor')+'</svg>'
 (b/(file+'-lockup.svg')).write_text(svg,encoding='utf-8')
# Portable product lockup; standard Space Grotesk, glyphs rather than text.
svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 140" role="img" aria-labelledby="athene-lock-title"><title id="athene-lock-title">Athene / propuesta Centinela, sin aprobación</title>'+icon('athene-01-centinela.svg',74,70,102,'currentColor')+word('ATHENE',158,88,85,'currentColor',track=40)+'</svg>'
(b/'athene-01-centinela-lockup.svg').write_text(svg,encoding='utf-8')
parts=['<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1180" viewBox="0 0 1600 1180"><title>Ronda 04 / tres territorios corporativos de Strig Systems, sin aprobación</title>',head,'<rect width="1600" height="1180" fill="#edf0f0"/>',t(64,58,'STRIG SYSTEMS / RONDA 04',16,'#52606c',2),t(1286,58,'SIN APROBACIÓN',14,'#75684f',1.5),'<path d="M64 90H1536" stroke="#bdc7cc"/>',t(64,151,'Tres formas de expresar ingeniería.',38,'#101820',0,500),t(64,187,'Percepción primero. Búho implícito. Empresa de desarrollo.',19)]
names=['Campo','Bilateral','Firma'];files=['strig-01-campo.svg','strig-02-bilateral.svg'];xcols=[64,574,1084]
for i,x in enumerate(xcols):
 parts += [t(x,250,f'0{i+1}',16,'#667580',2),t(x,291,names[i],28,'#101820',0,500)]
 if i<2:parts.append(icon(files[i],x+219,398,156))
 else:parts += [word('STRIG',x+52,427,106,custom=True),t(x+54,458,'El nombre como signo.',15)]
 parts += ['<path d="M'+str(x)+' 511H'+str(x+438)+'" stroke="#bdc7cc"/>',lockup(i,x+(73 if i<2 else 55),579)]
 parts += [f'<rect x="{x}" y="663" width="438" height="122" fill="#101820"/>',lockup(i,x+(73 if i<2 else 55),716,'#edf0f0')]
 parts += [t(x,831,'REPRODUCCIÓN / TAMAÑOS NATIVOS',12,'#667580',1)]
 if i<2:
  for size,offset in [(16,0),(24,60),(32,130),(48,215),(96,321)]:
   parts += [rawicon(files[i],x+offset,880-size/2,size),t(x+offset,954,str(size)+' px',11)]
 else:
  parts += [word('STRIG',x,890,44,custom=True),word('STRIG',x+168,895,68,custom=True),t(x,947,'Firma a 131 / 202 px de ancho nominal.',13),t(x,973,'Identificador micro pendiente de diseño.',13)]
 pros=['Campo abierto; posible lectura de S.','Atención y parentesco biológico.','Claridad de nombre y firma corporativa.']
 cons=['Riesgo: bracket tecnológico genérico.','Riesgo: cejas / ave genérica.','Riesgo: intervención demasiado sutil.']
 parts += [t(x,1041,pros[i],17,'#101820'),t(x,1074,cons[i],16)]
parts += ['<path d="M64 1122H1536" stroke="#bdc7cc"/>',t(64,1157,'CONTORNOS DE FUENTE REAL / UNA TINTA / EXPLORACIÓN DE IDENTIDAD',12,'#52606c',1),'</svg>']
(b/'strig-comparison.svg').write_text(''.join(parts),encoding='utf-8')
parts=['<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1050" viewBox="0 0 1600 1050"><title>Athene / centinela A y relación con tres propuestas de Strig, sin aprobación</title>',head,'<rect width="1600" height="1050" fill="#101820"/>',t(64,58,'ATHENE / IDENTIDAD DE SISTEMA',16,'#9ba8b0',2),t(1286,58,'SIN APROBACIÓN',14,'#bba77f',1.5),'<path d="M64 90H1536" stroke="#35434d"/>',t(64,151,'Un centinela. Una familia de ingeniería.',38,'#edf0f0',0,500),t(64,188,'Frente contenido y mirada más abierta. La A sigue en estudio.',19,'#9ba8b0')]
parts += [icon('athene-01-centinela.svg',354,381,254,'#edf0f0'),word('ATHENE',651,403,126,'#edf0f0',track=40),t(654,450,'SISTEMA CENTINELA AÉREO',16,'#9ba8b0',2),t(654,489,'La silueta se revisa antes de incorporar una segunda lectura.',15,'#9ba8b0'),'<path d="M64 565H1536" stroke="#35434d"/>']
for i,x in enumerate(xcols):
 parts += [t(x,608,f'0{i+1} / CON STRIG {names[i].upper()}',13,'#9ba8b0',1),f'<rect x="{x}" y="639" width="438" height="253" fill="#edf0f0"/>',icon('athene-01-centinela.svg',x+64,704,52),word('ATHENE',x+113,721,65,track=40),t(x+33,774,'Desarrollado por',13),f'<g transform="translate({x+(49 if i<2 else 68)} 829) scale(0.65)">'+lockup(i,0,0)+'</g>']
parts += [t(64,944,'NOCTUA / plataforma aérea',18,'#c5cdd2'),t(410,944,'NEST / estación',18,'#c5cdd2'),t(64,982,'Nombres y funciones subordinados al sistema; sin emblemas independientes en esta ronda.',15,'#9ba8b0'),t(64,1022,'PROPUESTA VISUAL / NO REPRESENTA GEOMETRÍA DE HARDWARE',12,'#788994',1),'</svg>']
(b/'athene-family.svg').write_text(''.join(parts),encoding='utf-8')
# Native-size plate, same 128-unit canvas. Wordmark route excluded from favicon ranking.
parts=['<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="540" viewBox="0 0 1200 540"><title>Pruebas digitales a tamaño nativo / ronda04</title>',head,'<rect width="1200" height="540" fill="#edf0f0"/>',t(40,49,'R04 / TAMAÑOS NATIVOS',16,'#101820',2)]
for i,file in enumerate(['strig-01-campo.svg','strig-02-bilateral.svg','athene-01-centinela.svg']):
 y=142+i*121
 parts.append(t(40,y+8,['01 Campo','02 Bilateral','A1 Athene'][i],18,'#101820'))
 for size,x in [(16,270),(24,380),(32,490),(48,610),(128,790)]:
  parts += [rawicon(file,x,y-size/2,size),t(x,y+80,str(size)+' px',12)]
parts += [t(40,520,'03 Firma: es wordmark; identificador micro pendiente. No se presenta el nombre completo como favicon.',14),'</svg>']
(b/'native-sizes.svg').write_text(''.join(parts),encoding='utf-8')
