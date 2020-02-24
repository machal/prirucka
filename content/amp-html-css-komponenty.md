# AMP v kontextu frontendu

Co vlastně obnáší AMP z pohledu frontendistů, frontendistek, anebo prostě webových vývojářů a vývojářek?

Na tomhle místě se zaměříme na frontendové technologie a vypíchneme rozdíly oproti triumvirátu HTML, CSS a JS, který je používán na běžných webech.

Podstatné změny si rovnou uveďme:

* [V AMP HTML](amp-html.md) jsou zakázané některé obvyklé značky – jako třeba `<img>`. Nahrazují je nové tagy.
* [CSS](amp-css.md) se vkládá dovnitř HTML, nesmí být větší než 75 kB a je zakázáno používat oblíbenou direktivu `!important`. Webfonty z cizích domén jsou povolené jen u některých dodavatelů.
* Stránka musí [projít validací](amp-validace.md) AMP formátu a nejde jinak, než aby běžela na protokolu HTTPS.
* A co JavaScript? Ten náš, autorský, je zcela zakázaný. Na druhou stranu – máme k dispozici zhruba stovku komponent, které ho docela hezky nahrazují. Píšeme o nich [ve zvláštní kapitole](amp-komponenty.md).

Tak a teď vzhůru na tu divnou změť znaků „větší než“ a „menší než“, které už téměř čtvrt století říkáme HyperText Markup Language. I v technologii s bleskem v logu hraje HTML zásadní roli.
