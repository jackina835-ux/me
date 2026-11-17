"""Vérification locale des pages, liens, ancres et images, sans dépendance."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).parent

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.ids, self.links, self.images = [], [], []
        self.h1 = self.main = 0
        self.feed(path.read_text(encoding='utf-8-sig'))
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs: self.ids.append(attrs['id'])
        if tag == 'h1': self.h1 += 1
        if tag == 'main': self.main += 1
        for key in ('href', 'src'):
            if attrs.get(key): self.links.append(attrs[key])
        if tag == 'img': self.images.append(attrs)

pages = {p.name: Page(p) for p in ROOT.glob('*.html')}
errors = []
for name, page in pages.items():
    if page.h1 != 1 or page.main != 1: errors.append(f'{name}: h1/main unique requis')
    if len(page.ids) != len(set(page.ids)): errors.append(f'{name}: identifiant dupliqué')
    for image in page.images:
        if not image.get('alt'): errors.append(f'{name}: image sans texte alternatif')
        if not image.get('width') or not image.get('height'): errors.append(f'{name}: dimensions manquantes')
    for link in page.links:
        url = urlsplit(link)
        if url.scheme or url.netloc: continue
        target = unquote(url.path) or name
        if not (ROOT / target).exists(): errors.append(f'{name}: fichier absent {target}')
        if url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
            errors.append(f'{name}: ancre absente {link}')
if errors:
    raise SystemExit('\n'.join(errors))
print(f'OK : {len(pages)} pages, liens locaux, ancres, textes alternatifs et dimensions des images.')
