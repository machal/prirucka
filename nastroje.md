# Nástroje co používám pro frontend kodéřinu

Sublime Text, DevTools, Grunt, Browserstack, Graphic, Photoshop Elements a další.

Dobré vědět, že používám Mac. Až na pár výjimek jsou ale zmíněné nástroje multiplatformní.

Kodéřina je jen část mé práce, takže dole je i seznam nástrojů, které používám pro osobní produktivitu.

## Sublime Text jako vývojové prostředí

[Sublime](http://www.sublimetext.com/) je klasika. Existují i modernější varianty, ale kromě nepříliš vymakaného našeptávání mě Sublime zcela vyhovuje. Je to editor z kategorie „jednoduchý, ale rozšiřitelný”. Moc toho neumí a vyžaduje nějaký čas pro nastavení a vyladění dle osobních preferencí. Pokud mu čas věnujete, bohatě se vám to vrátí. Pokud vám časová investice tohoto typu nevyhovuje, hledejte IDE jako WebStorm nebo Eclipse.

![Můj Sublime Text](http://www.vzhurudolu.cz/assets/img/content/dest/original/sublime-text.jpg)

Z obrázku sami vidíte, že můj Sublime Text neoplývá barvičkami a vizuálními vychytávkami. Princip „konvence je víc než konfigurace“ v praxi. 

### Sublime balíčky, bez kterých bych se nechtěl obejít

- EditorConfig – podpora `.editorconfig` souborů.
- Emmet – zkratky pro rychlé psaní HTML a CSS.
- Grunt – pouštění Grunt úloh přímo z editoru.
- Hayaku – rychlejší psaní kódu, pro CSS chytřejší než Emmet.
- SFTP – práce s FTP, například poslání editovaného souboru na server. Občas využívám samostatnou macovskou apku Transmit.
- SideBarEnhancements – vylepšení souborového panelu.
- SublimeGit – práce s gitem přímo ze Sublime, návykové!
- TabsExtra – přidání příkazů na taby se soubory.
- Package Control – instalace všech balíčků, bez toho nelze nic.

### Zbytnější balíčky

- Alignment – zarovnává bloky textu na tabulátory (např. LESS proměnné).
- StripHTML – odstranění HTML z textu.
- Sublime-HTMLPrettify – správné odsazení rozpadlého HTML kódu.
- Schemr – možnost měnit barevná schámata za chodu.
- SublimeCodeIntel – měl by hezky našeptávat, to ale v mém případě moc neplatí (nevylučuji, že jej špatně používám).
- Theme - Spacegray – krásné barevné schéma. Chvíli jsem používal, ale na školeních se na to hůř kouká, proto jsem zpět u `Default/Mac Classic`.
- Terminal – práce s terminálem přímo ze Sublime, většinou mám ale otevřený systémový terminál.
- Pochopitelně i balíčky se zvýrazňovači syntaxe: HTML5, jQuery, LESS, Nette, Sass a další. 

### Alternativy k Sublime: 

- Atom –  vychází se Sublime a mám jej odzkoušený. Tehdy ale nebyl nejrychlejší, pár věcí neuměl a měl slabší ekosystém. Prý se s ním už ale dá naplno pracovat. 
- WebStorm – více jako IDE, včetně chytrého našeptávání. Brácha od PHPStorm.
- Brackets – editor od Adobe, který si pochvalují kodéři co často pracují s PSD. 

Pro rychlé prototypování a ukázky kódu často používám online fidlátko [CodePen](http://codepen.io/machal/).


## Chrome DevTools

Chrome a jeho [DevTools](https://developers.google.com/web/tools/chrome-devtools/) jsou mým druhým nepoužívanějším nástrojem. Kdo ví, zda v něm časem nebudu trávit více času než v Sublime, protože se o něj zajímám i jako o vývojové prostředí.

Zatím v něm debuguju CSS, JS a návrhy rozhraní (v záložce Elements), ladím způsob načítání stránky (záložka Network) nebo ladím zobrazování na dotykových zařízeních (Device Mode). 

Věnujte pozornost [tipům a trikům pro DevTools](http://www.vzhurudolu.cz/blog/41-devtools-tipy).

Alternativy jako Firebug nebo Firefox DevTools zaspaly dobu. Nicméně fandím jim, konkurence je potřeba.

## Grunt pro sestavování a běh tasků

[Gruntu](/prirucka/grunt) česky říkám sestavovač, protože jeho hlavní úkol je sestavování produkčních verzí obrázkových, CSS a JS assetů. Nicméně – pomáhá mi také automatizovat a vylepšit vývojářské pracovní postupy. Podívejte se na [seznam Grunt pluginů co používám](/prirucka/grunt-pluginy).

Pokud jste méně kodéři a více vývojáři, zajímejte se spíše o Gulp a pokročilejší nástroje.

Jednodušší alternativou jsou zase klikací apky jako Prepros nebo CodeKit (ten ale jen pro Macy).

## NPM, Bower pro instalaci závislostí

[NPM](https://www.npmjs.com/) a [Bower](/prirucka/bower) jsou balíčkovače, které vám ušetří energii pro správu závislostí frontend balíčků, které při vývoji používáte.

NPM obvykle používám pro instalaci vývojářských balíčků jako jsou Grunt pluginy, Bower pro instalaci závislostí webu – jQuery atd.

Node.js ekosystému při profesionální kodérské práci asi nelze vyhnout. Mrkněte [jak si jej nainstalovat](http://www.vzhurudolu.cz/prirucka/node-instalace).

## Git pro verzování

Git používám přes různá rozhraní. Někdy přes jednoduchou vizuální apku Gitbox & DiffMerge (Mac only), někdy v editoru přes SublimeGit balíček, někdy přímo na příkazové řádce. Github a Bitbucket pak pro hosting kódu a komunikaci nad ním. 

## Terminal

Používám kvůli Gruntu a nástrojům kolem Node.js. Na to jak často příkazovou řádku otevírám, pořádně s ní neumím. Ale zatím mi to nevadí, napíšu tam denně jen zlomek v počtu znaků oproti textovým editorům.

## Grafika skoro bez Photoshopu

- [Photoshop Elements](http://www.adobe.com/cz/products/photoshop-elements.html) – moje obvyklé workflow je bez-photoshopové. Nedostávám PSD od grafiků, rozhraní skoro vždy vytvářím nebo spoluvytvářím. Proto disponuji luxusem vlastnit starší Photoshop. A ještě k tomu ořezaný, určený pro fotografy. A ve verzi 8 prosím!
- [Graphic](http://graphic.com/) – vektorový editor s výstupem do [SVG](/prirucka/svg). Připravuji tady schémata pro VzhůruDolů nebo třeba upravuji ikony. Jen pro Macy. 
- [Keynote](http://www.apple.com/mac/keynote/) – primárně v něm připravuji slajdy pro přednášky a školení. Ale divili byste se, kolik ilustrací pro tento blog vzniklo právě v něm. Vážně – Keynote je parádní grafický editor. Jen pro Macy.
- Preview – dle mé zásady „nauč se pořádně to nejjednodušší“ dělám hodně grafiky. Je to ale spíše „komunikační grafika“, typu schémat co přikládám do emailů atd. Jen pro Macy.
- ImageOptim a JPEGmini Lite – pokud potřebuji zmenšit obrázky jednotlivě, nepoužívám Grunt ale tyhle dva optimalizátory. JPEGmini je fakt objev, zmenšuje výrazněji než jiné grafické minifikátory.

## Testování na zařízeních

- [BrowserStack](https://www.browserstack.com/) – testování mobilních a alternativních prohlížečů. V cloudu, v prohlížeči. A neuvěřitelně svižně. Browserstack je stále lepší  a v mé nástrojové brašně rozhodně neleží někde dole. Je nahoře, vždy po ruce. O způsobu [testování responzivních webů](/prirucka/jak-testovat-responzivni-weby) jsem dříve psal.
- iOS simulátor (součást XCode, jen pro Macy) občas pustím, ale BrowserStack je poslední dobou skoro rychlejší.

## Běh localhostu

- MAMP Pro (lokální Apache, PHP, MySQL).
- Sequel Pro na správu databází.

## atd. (nekodérské nástroje)

Tohle je docela paradoxní „atd”. Obnáší totiž soupis aplikací, v nichž dohromady trávím více času než ve výšeuvedených. Čtení, psaní, organizace, komunikace. Nástroje pro „soft skills“ mají na mou obživu větší vliv než ty z předchozího seznamu. Tady je alespoň jejich seznam.

- Čtení: Kindle (ebooky a články stažené z webu), iBooks (ebooky).
- Psaní: [Mou](http://25.io/mou/) (Markdown editor, v poslední době tu vznikají všechny články na VzhůruDolů.cz), Google Docs (delší články nebo ty co vyžadují kooperaci více lidí), Buffer (plánování příspěvků na sociálních sítích).
- Organizace: [Trello](https://trello.com/) (projektové řízení), Google Tasks (osobní úkolníček), Evernote (zatím jen jako chytřejší bookmarky), Toggl (měření času), Basecamp (komunikace u některých projektů), Dropbox (sdílení souborů).
- Komunikace: Skype, Google Hangout, webový Gmail.

Asi jste si všimli, že můj přístup k nástrojům je konzervativnější. Je to vědomá volba. Do dalšího článku sepíšu ještě něco o filozofii výběru nástrojů.

Zapomněl jsem na něco? Jaké nástroje pro workflow kodéra používáte vy? Šup s nimi do komentářů.