import re
import sys

def main():
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    with open('script.js', 'r', encoding='utf-8') as f:
        js = f.read()

    # Extract data-i18n keys from index.html
    html_i18n_keys = set(re.findall(r'data-i18n=["\']([^"\']+)["\']', html))
    html_ph_keys = set(re.findall(r'data-i18n-ph=["\']([^"\']+)["\']', html))
    all_html_keys = html_i18n_keys | html_ph_keys

    # Extract es and en dictionary blocks from script.js
    # Find translations = { es: { ... }, en: { ... } }
    es_match = re.search(r'es:\s*\{([^}]+(?:\{[^}]+\}[^}]+)*)\}', js, re.DOTALL)
    en_match = re.search(r'en:\s*\{([^}]+(?:\{[^}]+\}[^}]+)*)\}', js, re.DOTALL)

    if not es_match or not en_match:
        print("ERROR: Could not find es or en dictionary blocks in script.js")
        sys.exit(1)

    es_block = es_match.group(1)
    en_block = en_match.group(1)

    es_keys = set(re.findall(r'^\s*([a-zA-Z0-9_]+)\s*:', es_block, re.MULTILINE))
    en_keys = set(re.findall(r'^\s*([a-zA-Z0-9_]+)\s*:', en_block, re.MULTILINE))

    print(f"Total HTML keys: {len(all_html_keys)}")
    print(f"Total ES keys in JS: {len(es_keys)}")
    print(f"Total EN keys in JS: {len(en_keys)}")

    # Check parity between ES and EN
    es_missing_in_en = es_keys - en_keys
    en_missing_in_es = en_keys - es_keys

    if es_missing_in_en:
        print(f"[MISSING] Keys in ES but missing in EN: {es_missing_in_en}")
    if en_missing_in_es:
        print(f"[MISSING] Keys in EN but missing in ES: {en_missing_in_es}")

    # Check if any HTML keys are missing in ES or EN
    html_missing_in_es = all_html_keys - es_keys
    html_missing_in_en = all_html_keys - en_keys

    if html_missing_in_es:
        print(f"[MISSING] HTML keys missing in ES: {html_missing_in_es}")
    if html_missing_in_en:
        print(f"[MISSING] HTML keys missing in EN: {html_missing_in_en}")

    if not es_missing_in_en and not en_missing_in_es and not html_missing_in_es and not html_missing_in_en:
        print("[SUCCESS] 100% PARITY! All HTML keys exist in both ES and EN dictionaries, and ES/EN are perfectly synced.")
        sys.exit(0)
    else:
        sys.exit(1)

if __name__ == '__main__':
    main()
