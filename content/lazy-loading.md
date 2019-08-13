# Lazy loading

[Lazy loading](http://cs.wikipedia.org/wiki/Lazy_loading) je v oblasti IT dost široký pojem, ale ve světě webové kodéřiny označuje techniku, která zajistí načtení části obsahu stránky až ve chvíli, kdy ji uživatel potřebuje.

Jde tedy o skutečně o „líné“ načtení. Prohlížeč prvky stáhne až když už je to opravdu nezbytně nutné.

<figure>
<img src="../dist/images/original/lazyloading.jpg" alt="Lazy loading obrázků">
<figcaption markdown="1">
*Odložené načtení obrázků, které nejsou viditelné ve viewportu uživatele. Ušetří to data a může zrychlit vykreslení stránky.*
</figcaption>
</figure>

<!-- TODO Nejčastěji se ve webdesignu lazy loading týká [obrázků](lazy-loading-obrazky.md) a je  navázaný na posun stránky. Tento text je ale zaměřený obecněji, proto si pojďme nejprve připomenout různé typy obsahu stránky, které je vhodné načíst tímto způsobem.
 -->

Nejčastěji se ve webdesignu lazy loading týká obrázků a je  navázaný na posun stránky. Tento text je ale zaměřený obecněji, proto si pojďme nejprve připomenout různé typy obsahu stránky, které je vhodné načíst tímto způsobem.

## Co a jak je možné načítat „líně“? {#co}

- *Obrázky*  
Stažení obrázků až po posunu stránky je nejčastější scénář, kterému bude věnován zvláštní text. <!-- TODO Stažení obrázků až po posunu stránky je nejčastější scénář, kterému věnuji [zvláštní text](lazy-loading-obrazky.md). -->
- *Iframe a externí obsah*  
Velmi vhodným kandidátem na líné stažení je vkládaný obsah třetích stran – YouTube videí, map od Google nebo Seznamu, obsah z Facebooku či Twitteru vkládaný přes `<iframe>`…  
- *Složitější struktury DOM*  
Často se zapomíná, že „líně” je možné načíst také komplexnější HTML v rámci obsahu stránky. Nejčastěji se to týká například navigací typu „megamenu“ viditelných až po akci uživatele nebo obsahu záložkové navigace uvnitř stránky.

## K čemu je lazy loading dobrý? {#proc}

Cílem je nestahovat prvky, které nejsou potřeba v aktuálním [viewportu](viewport-meta.md) uživatele.

Je to užitečné z několika důvodů:

### 1) Uživatel ušetří data {#proc-1}

Méně stažených dat sice [nemusí zrychlit web](rychlost-myty.md#7), ale rozhodně šetří limity využívání mobilních dat ([FUP](https://cs.wikipedia.org/wiki/Fair_User_Policy)) A to je příjemné!

<!-- AdSnippet -->

Nejčastěji líně načítané prvky – obrázky a `<iframe>` s obsahem třetích stran – patří k zároveň k největším Otesánkům. Nasazením lazy loadingu jsme na jedné webové stránce schopní ušetřit až jednotky megabajtů dat.

### 2) Méně složitý DOM {#proc-2}

Google nám webmasterům radí, abychom počet prvků ve stromu DOM drželi [pod 1500 uzlů](https://developers.google.com/web/tools/lighthouse/audits/dom-size). Souhlasím, v DOM by opravdu mělo být jen to nejdůležitější. Zrychluje to všechny operace nad stromem, ale také třeba překreslování stránky.

Veškerý méně důležitý obsah dostupný na akci uživatele – posun stránky, kliknutí, najetí myši – bychom měli načíst až když se akce přiblíží.

<!-- AdSnippet -->

Jak už jsem zmiňoval, týká se to různých megamenu nebo panelů s obsahem záložkových navigací schovaných v HTML a čekajících na akci uživatele. Ale pamatuji si i klienta, v jehož DOMu tvořil ohromnou část seznam zemí, ve kterých působí, dostupný na klik uživatele, ale zbytečně stahovaný všemi a na všech stránkách.

### 3) Méně zpracovávání JavaScriptu {#proc-3}

Odložením načtení knihoven třetích stran ale neděláme primárně kvůli datům. Podstatným faktorem je výkon prohlížeče, často zbytečně blokovaný počítáním odložitelného JavaScriptu třetí strany.

<blockquote class="twitter-tweet"><p lang="cs" dir="ltr">Proč dělat lazy loading služeb vkládaných přes &lt;iframe&gt;?<br>I proto, abychom se zbavili zbytečného zpracování JS.<br><br>Podívejte se, na jak dlouho zablokuje CPU jedno vkládané YouTube na webu klienta.<br><br>→ <a href="https://t.co/Hq5G3UkQaX">https://t.co/Hq5G3UkQaX</a> <a href="https://t.co/AFBwsBOGtY">pic.twitter.com/AFBwsBOGtY</a></p>&mdash; Martin Michálek (@machal) <a href="https://twitter.com/machal/status/1160409274834726912?ref_src=twsrc%5Etfw">August 11, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### 4) Prioritizace obsahu {#proc-4}

Jako vývojáři můžeme pomocí lazy loadingu také zvýšit prioritu stažení jiných prvků.

Obrázek vložený ve značce `<img>` má totiž z pohledu fronty stahování v prohlížečích přednost před obsahem linkovaným v CSS.

Čím méně těchto obrázků ze značky `<img>` začně prohlížeč stahovat hned před prvním vykreslování stránky, tím rychleji se dostane na další zdroje, odkazované až v CSS, které jsou ale z našeho pohledu poměrně důležité – webfonty, ikony, obrázky obsahující design webu…

## 5) Šetření výkonu na serveru {#proc-5}

Uživatel ušetří data, vývojáři servery. Technika lazy loadingu totiž předpokládá, že velká část uživatelů líně načítaný obsah vůbec nestáhne. Servery se tak mohou věnovat jiným, důležitějším věcem.

<!-- TODO Tímto bych rád ukončil teoretický úvod do lazy loadingu v kontextu webu. [V další části](lazy-loading-obrazku.md) se zaměříme na obrázky a rovnou také možnosti implementace této techniky – nativně v prohlížečích, pomocí hotových knihoven nebo vlastními řešeními s Intersection Observerem či jinak. -->

Tímto bych rád ukončil teoretický úvod do lazy loadingu v kontextu webu. V další části se zaměříme na obrázky a rovnou také možnosti implementace této techniky – nativně v prohlížečích, pomocí hotových knihoven nebo vlastními řešeními s Intersection Observerem či jinak.

<!-- AdSnippet -->
