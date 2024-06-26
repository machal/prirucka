# Lazy loading

[Lazy loading](http://cs.wikipedia.org/wiki/Lazy_loading) je v oblasti IT dost široký pojem, ale ve světě webové kodéřiny označuje techniku, která zajistí načtení části obsahu stránky až ve chvíli, kdy ji uživatel potřebuje.

Jde tedy o skutečně o „líné“ načtení. Prohlížeč prvky stáhne až když už je to opravdu nezbytně nutné.

<figure>
<img src="../dist/images/original/lazyloading.jpg" alt="Lazy loading obrázků">
<figcaption markdown="1">
*Odložené načtení obrázků, které nejsou viditelné ve viewportu uživatele. Ušetří to data a může zrychlit vykreslení stránky.*
</figcaption>
</figure>

Nejčastěji se ve webdesignu lazy loading týká [obrázků](lazy-loading-obrazku.md) a je  navázaný na posun stránky. Tento text je ale zaměřený obecněji, proto si pojďme nejprve připomenout různé typy obsahu stránky, které je vhodné načíst tímto způsobem.

## Co a jak je možné zpracovávat „líně“? {#co}

- *Obrázky*  
Stažení obrázků až po posunu stránky je nejčastější scénář, kterému věnuji [zvláštní text](lazy-loading-obrazku.md).
- *Iframe a externí obsah*  
Velmi vhodným kandidátem na líné stažení je vkládaný obsah třetích stran – YouTube videí, map od Google nebo Seznamu, obsah z Facebooku či Twitteru vkládaný přes `<iframe>`…  
- *Složitější struktury DOM*  
Často se zapomíná, že „líně” je možné načíst také komplexnější HTML v rámci obsahu stránky. Nejčastěji se to týká například navigací typu „megamenu“ viditelných až po akci uživatele nebo obsahu záložkové navigace uvnitř stránky.
- *Rendering stránky*  
Vlastnost [`content-visibility`](css-content-visibility.md) umožní odložit výpočet vykreslení prvků, které nejsou vidět v první obrazovce.

## K čemu je lazy loading dobrý? {#proc}

Cílem je nestahovat prvky, které nejsou potřeba v aktuálním [viewportu](viewport-meta.md) uživatele.

Je to užitečné z několika důvodů:

### 1) Uživatel ušetří data {#proc-1}

Méně stažených dat sice [nemusí zrychlit web](rychlost-myty.md#7), ale rozhodně šetří limity využívání mobilních dat ([FUP](https://cs.wikipedia.org/wiki/Fair_User_Policy)) A to je příjemné!

<!-- AdSnippet -->

Nejčastěji líně načítané prvky – obrázky a `<iframe>` s obsahem třetích stran – patří k zároveň k největším Otesánkům. Nasazením lazy loadingu jsme na jedné webové stránce schopni ušetřit až jednotky megabajtů dat.

### 2) Méně složitý DOM {#proc-2}

Google nám webmasterům radí, abychom počet prvků ve stromu DOM drželi [pod 1500 uzlů](https://developers.google.com/web/tools/lighthouse/audits/dom-size). Souhlasím, v DOMu by opravdu mělo být jen to nejdůležitější. Zrychluje to všechny operace nad stromem, ale také třeba překreslování stránky.

Veškerý méně důležitý obsah dostupný na akci uživatele – posun stránky, kliknutí, najetí myši – bychom měli načíst až když se akce přiblíží.

<!-- AdSnippet -->

Jak už jsem zmiňoval, týká se to různých megamenu nebo panelů s obsahem záložkových navigací schovaných v HTML a čekajících na akci uživatele. Ale pamatuji si i klienta, v jehož DOMu tvořil ohromnou část seznam zemí, ve kterých působí, dostupný na klik uživatele, ale zbytečně stahovaný všemi a na všech stránkách.

### 3) Méně zpracovávání JavaScriptu {#proc-3}

Odložením načtení knihoven třetích stran ale neděláme [primárně kvůli datům](https://twitter.com/machal/status/1160409274834726912). Podstatným faktorem je výkon prohlížeče, často zbytečně blokovaný počítáním odložitelného JavaScriptu třetí strany.

### 4) Prioritizace obsahu {#proc-4}

Jako vývojáři můžeme pomocí lazy loadingu také zvýšit prioritu stažení jiných prvků.

<div class="related" markdown="1">
- [Lazy loading obrázků a iframe](/prirucka/lazy-loading-obrazku)
- [Knihovna MiniLazyload](https://www.vzhurudolu.cz/blog/148-minilazyload)
</div>

Obrázek vložený ve značce `<img>` má totiž z pohledu fronty stahování v prohlížečích přednost před obsahem linkovaným v CSS.

Čím méně těchto obrázků ze značky `<img>` začně prohlížeč stahovat hned před prvním vykreslování stránky, tím rychleji se dostane na další zdroje, odkazované až v CSS, které jsou ale z našeho pohledu poměrně důležité – webfonty, ikony, obrázky obsahující design webu…

## 5) Šetření výkonu na serveru {#proc-5}

Uživatel ušetří data, vývojáři servery. Technika lazy loadingu totiž předpokládá, že velká část uživatelů líně načítaný obsah vůbec nestáhne. Servery se tak mohou věnovat jiným, důležitějším věcem.

Tímto bych rád ukončil teoretický úvod do lazy loadingu v kontextu webu. [V další části](lazy-loading-obrazku.md) se zaměříme na obrázky a rovnou také možnosti implementace této techniky – nativně v prohlížečích, pomocí hotových knihoven nebo vlastními řešeními s Intersection Observerem či jinak.

<!-- AdSnippet -->
