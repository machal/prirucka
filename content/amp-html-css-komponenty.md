# AMP z pohledu frontendu: Upravené HTML, CSS, žádný JavaScript, ale spousta komponent

Co vlastně obnáší AMP z pohledu frontendistů, frontendistek, anebo prostě webových vývojářů a vývojářek? 

Na tomhle místě se zaměříme na frontendové technologie a vypíchneme rozdíly oproti triumvirátu HTML, CSS a JS, který je používán na běžných webech.

Podstatné změny si rovnou uveďme:

*   [V AMP HTML](https://docs.google.com/document/d/1kdSK7Q0LxoeU6DblzhJ-1EOtaCBD5IVSQwecr5gZyqQ/edit#) jsou některé obvyklé značky – jako třeba `<img>` – zakázané. Nahrazují je nové tagy.
*   [CSS](https://docs.google.com/document/d/1bTJ-tvBCEEFIQkwp-_KCgCV720L27BQ4u8TPEui7Kdc/edit#) se vkládá dovnitř HTML, nesmí být větší než 50 kB a je zakázáno používat oblíbenou direktivu `!important`. Webfonty z cizích domén jsou povolené jen u některých dodavatelů.
*   Stránka musí [projít validací](https://docs.google.com/document/d/1YjRVRHiaRMX4KKmo8CmVpv62sDSSGHaMr_d9URw2H8U/edit#) AMP formátu a nejde jinak, než aby běžela na protokolu HTTPS.
*   A co JavaScript? Ten náš, autorský, je zcela zakázaný. Na druhou stranu – máme k dispozici zhruba stovku komponent, které ho docela hezky nahrazují. Píšeme o nich [ve zvláštní kapitole](https://docs.google.com/document/d/1TukezqeSpA8sHZKZwpsRKOqcZHHQL8UT9ZuV4RNeN5k/edit#).

Tak a teď vzhůru na tu divnou změť znaků „větší než“ a „menší než“, které už téměř čtvrt století říkáme HyperText Markup Language. I v technologii s bleskem v logu hraje HTML zásadní roli.
