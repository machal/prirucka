HTML5 History API
=================

Zjednodušeně řečeno umožňuje měnit část URL za doménou na libovolnou hodnotu. V kombinaci s AJAXem tak dokáže velmi zrychlit procházení webu nebo aplikace.

Příklady
-------

1. Mezi prvními [nasadil Github][1] na procházení adresářovou strukturou. Ve stránce se mění jen obsah (načítaný AJAXem), hlavička i patička se znovu nenačítají. Stránka nereloaduje a obsah se načítá s pomocí animace.
2. Tady je jednodušší příklad: http://html5.gingerhost.com

Technikálie
-----------

Objekt `history` má v HTML5 několik nových metod:

### `history.pushState(stateObj, title, url)`

- přidá nový záznam do historie prohlížení
- `stateObj` - povinný serializovaný objekt, který reprezentuje záznam, např. s hodnotou názvu stránky
- `title` - titulek stavu; povinný parametr, který ale všechny prohlížeče ignorují
- `url` - nepovinný string s novou hodnotou adresy
- např. `history.pushState(null, null, "/nove-url")`

### `history.replaceState(stateObj, title, url)`

- totéž jako `pushState()`, jen nevytváří nový záznam v historii

### `history.state`

- vrací hodnotu aktuálního záznamu v historii

### `window.onpopstate`

- událost, kterou vyvolá jakákoliv pokus o vydání jiného záznamu z historie procházení (`history.pushState()`, načtení nové stránky, tlačítko zpět v prohlížeči)

Podpora v prohlížečích
--------

Všechny moderní (i mobilní prohlížeče) a IE10+. Pokud potřebujete podporu v IE9 a starších, využijte skvělý a ověřený polyfill [History.JS][2].

  [1]: https://github.com/blog/760-the-tree-slider
  [2]: https://github.com/browserstate/history.js/