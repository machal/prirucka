# Nepostradatelný pomocník Browsersync: živý náhled webu a ladění na zařízeních

[Browsersync](https://www.browsersync.io/) je velmi užitečný nástroj pro lokální vývoj webů. Pomáhá hned s několika činnostmi naráz:

1. Živé promítání změn ve zdrojácích do prohlížeče.
2. Synchronizace interakcí při testování webu.
3. Ladění webu na mobilních zařízeních.

Browsersync je Node.js komponenta, takže je kompatibilní [s Gruntem](grunt.md), Gulpem, ale i dalšími nástroji tohoto ekosystému. Je opensource a zdarma.

V textu budu jeho instalaci a základní vlastnosti ukazovat na příkladu. Zkušenější mohou skočit rovnou na poslední část - pokročilejší tipy. 

## Instalace ukázky krok za krokem

Vezmeme [tento příklad](https://github.com/Browsersync/recipes/tree/master/recipes/grunt.html.injection) z [ukázek využití Browsersync](https://github.com/BrowserSync/recipes). 

1. Na lokální mašině předtím potřebujete rozchodit [Node ekosystém](node-instalace.md) – hlavně NPM a [Grunt](grunt.md). Volitelně také [Git](https://git-scm.com/downloads) v příkazové řádce.
2. Naklonujte repozitář (nebo prostě [stáhněte v ZIPu](https://github.com/BrowserSync/recipes/archive/master.zip)):
```bash
git clone https://github.com/Browsersync/recipes.git bs-recipes
```
3. Skočte do adresáře s první ukázkou:   
```bash
cd bs-recipes/recipes/grunt.html.injection
```
4. Nainstalujte NPM závislosti:  
```bash
npm install
```
5. Pusťte příklad:  
```bash
npm start
```
6. Ve výchozím prohlížeči se vám otevře okno s adresou podobného tvaru:   
```
http://localhost:3000/
```

To bychom měli. A teď ještě k čemu nám to bude, že ano?

## Živé promítání změn do prohlížeče

Upravíte CSS nebo HTML soubor a změny se vám hned projeví v prohlížeči bez obnovení stránky. Možná už znáte z jiných nástrojů jako je LiveReload. 

Pokud živý náhled neznáte nebo nevěříte, že to nějak zásadně pomáhá, opravdu (ale *opravdu*) si to zkuste.

V našem příkladu stačí  upravit soubor `app/index.html` nebo `app/css/main.css`. Změny se hned projeví v prohlížeči. Obnovení stránky netřeba. Úplně nejlepší je nastavit si editor, aby ukládal změny v otevřených souborech hned po přepnutí do jiné aplikace ([takhle třeba u Sublime Text](http://superuser.com/a/374668)). Pak stačí přepínat mezi editorem a prohlížečem. Šetří to hrozně energie, fakt že jo. 

## Synchronizace interakcí při testování webu

Browsersync vám během spuštění do příkazové řádky vypíše něco takového:

```bash
[BS] Access URLs:
------------------------------------
     Local: http://localhost:3000
  External: http://192.168.0.2:3000
------------------------------------
        UI: http://localhost:3001
UI External: http://192.168.0.2:3001
------------------------------------
```
 
Co je to za adresy?

 - `Local` –  tam najdete svůj web.
- `External` – kde svůj web uvidíte na všech zařízeních připojených do stejné sítě.
- `UI` – rozhraní s nastavením Browsersync.
- `UI External` – rozhraní s nastavením na připojených zařízeních.

Vezměte mobil připojený do stejné wifi a vyťukejte do tamního prohlížeče `External` adresu.  Teď když budete provádět uživatelské interakce v jednom zařízení, druhé bude dělat totéž za vás.  Pěkné, ne? Browsersync to umí s klikáním, rolováním stránky nebo taky vyplňováním formulářů. 

Proč vám o takové *blbině* vyprávím? Protože šetří děsně energie při [testování responzivních webů](jak-testovat-responzivni-weby.md) na reálných zařízeních.

## Ladění webu na mobilních zařízeních

Díky Browsersync také dostanete k dispozici jednoduchý nástroj podobný DevTools vašeho prohlížeče. Prostě *bazmek* co umožňuje ladění HTML, CSS a JS kódu. Browsersync pro to využívá technologii Weinre.

Zkoušíte příklad a máte připojený mobil? 

1. Podívejte se v počítači na `UI` adresu (obvykle `http://localhost:3001`). Otevře se vám prostředí pro nastavování Browsersync.
2. V levé navigaci zvolte „Remote Debug“.
3. Zapněte „Remote Debugger (weinre)“.
4. Klikněte na „Access remote debugger (opens in a new tab)“. V prohlížeči se otevře něco jako vývojářské nástroje. Tohle je Weinre.
5. Mezi „Targets“ zvolte ten první. Pravděpodobně to bude mobil, který jste před chvíli připojili.
6. Teď už stačí kliknout třeba na „Elements“ nebo „Console“, protože jste v prostředí podobnému DevTools vašeho prohlížeče.  

[Weinre](https://people.apache.org/~pmuellr/weinre/docs/latest/Home.html) (vyslovujte jako *„winery“*) není tak pokročilá aplikace jako v prohlížečích vestavěné vývojářské nástroje. Máte ovšem k dispozici DOM, CSS a JS konzoli. To je pro základní ladění dost dobré. Ohromná výhoda Weinre je v tom, že můžete ladit napříč platformami. Třeba se z desktopového Firefoxu připojit do mobilního Safari. 

## Browsersync a Grunt

Stačí nainstalovat a přidat konfiguraci podobnou této:

```javascript
browserSync: {
  dev: {
    bsFiles: {
      src : 'assets/css/*.css'
    },
    options: {
      watchTask: true,
      proxy: 'vzhurudolu.localhost'
    }
  }
},
```

Co jsem tím nastavil?

- V `bsFiles` je cesta k souborům, které se budou naživo vkládat do prohlížeče jakmile je změníte.
- `watchTask: true` v nastavení úlohy říká, že soubory sledujete ještě `watch` pluginem. Pravděpdobně totiž po změně souboru provádíte ještě další operace nad nimi – minifikaci, spojování atd. BrowserSync tomuto procesu nesmí stát v cestě.
- V `proxy: 'vzhurudolu.localhost'` je adresa, na které mi projekt už na lokále běží. Využívám tedy jiný server (v mém případě Apache [z MAMP](https://www.mamp.info/)). Je ale dobré vědět, že Browsersync nabízí vlastní server. Více v další části. 

## Další tipy pro práci s Browsersync

### Vlastní server

V nastavení Grunt nebo Gulp tasku stačí uvést parametr a cestu k souborům. Browsersync vám spustí  jednoduchý [lokální server](https://www.browsersync.io/docs/grunt#grunt-server):

```javascript
server: {
  baseDir: "./"
}
```

### Živý náhled HTML

Pokud chcete vkládat změny v HTML souboru do všech připojených zařízení, použijte plugin [HTML Injector](https://github.com/shakyShane/html-injector). V demíčku ukazovaném v tomto textu je to už nastavené.

### Příklady použití

[Recipes](https://github.com/Browsersync/recipes) jsou sada funkčních příkladů s předpřipravenými obvyklými nastaveními Browsersync. Pěkný zdroj inspirace i pro pokročilejší uživatele.

### Přiškrcení rychlosti připojení

Pokud nepoužíváte Chrome, kde je možnost zpomalení rychlosti připojení [vestavěná](http://www.vzhurudolu.cz/prirucka/rychlost-nastroje#chrome-devtools), bude se vám tahle vlastnost hodit. V demíčku jděte na `http://localhost:3001/network-throttle`. Výborné pro testování responzivních webů na mobilních internetových připojeních.

### Rychlé ladění CSS layoutu

Zobrazení obrysů prvků kvůli testování CSS layoutu můžete nastavit na `http://localhost:3001/remote-debug`. Layout je také možné testovat oproti  mřížce vykreslené na pozadí. Používá technologii [Pesticide](http://pesticide.io/).

To by mohlo být všechno. Browsersync mám tedy pomůže zefektivnit práci s frontend technologiemi a testování na mobilních zařízeních. Patří k mým nejoblíbenějším nástrojům. Zkuste ho.
