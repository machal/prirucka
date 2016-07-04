# Browserstack: testování v alternativních prohlížečích

Co se týká renderování CSS kódu, není mezi dnešními moderními prohlížeči velkých rozdílů.

Naneštěstí je dnes prohlížečů hodně, nemluvě o nově příchozích mobilních. A pak jsou tu prohlížeče v důchodu jako Internet Explorer 8.

Kodér se tedy bez testování v alternativních prohlížečích neobejde.

Je tu možnost stáhnout si alternativní operační systémy přes VirtualBox nebo podobné programy, a pak mobilní prohlížeče testovat v emulátorech a simulátorech.

Druhá možnost je Browserstack nebo podobné online služby. Ty alternativní prohlížeče provozují u sebe a vám je poskytují pro vzdálené připojení.

Browserstack stojí nezanedbatelné peníze. Jsem si ovšem jistý, že ve srovnání s časem stráveným nad údržbou Android emulátorů a VirtualBoxu se investice bohatě vyplatí.

- [browserstack.com](http://browserstack.com)
- Alternativa: [crossbrowsertesting.com](http://crossbrowsertesting.com)

## Jak testovat responzivní weby?

Ideální je třífázové testování:

1. Vývojářský desktopový prohlížeč – v mém případě Chrome, jeho DevTools a emulace mobilních rozlišení.
2. Simulátory/emulátory – u mě vyhrál Browserstack.
3. Reálná zařízení – u mě iPhone 4 s iOS, Vodafone 945 se starým Androidem 2.1, iPad Mini s iOS8, Tablet Sencor Element 7 s Androidem 4.1, Samsung Galaxy S III mini s Androidem 4.1 a Nokia Lumia 520 s Windows Phone 8.

Více najdete na blogu: [vrdl.cz/prirucka/jak-testovat-responzivni-weby](http://www.vzhurudolu.cz/prirucka/jak-testovat-responzivni-weby).
