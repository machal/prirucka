# Browsersync: živý náhled webu a ladění na zařízeních

Browsersync je velmi užitečný nástroj pro lokální vývoj webů. Pomáhá hned s několika činnostmi naráz:

1. Živé promítání změn ve zdrojácích do prohlížeče.
2. Synchronizace interakcí při testování webu.
3. Ladění webu na mobilních zařízeních.

Browsersync je Node.js komponenta, takže je kompatibilní [s Gruntem](grunt.md), Gulpem, ale i dalšími nástroji tohoto ekosystému. Je opensource a zdarma: [browsersync.io](https://www.browsersync.io/).

V textu budu jeho instalaci a základní vlastnosti ukazovat na příkladu. Zkušenější mohou skočit rovnou na poslední část „Další tipy pro práci s Browsersync“. 

## Instalace ukázky krok za krokem

Vezmeme tento příklad z ukázek využití Browsersync: [git.io/vKfhs](https://github.com/Browsersync/recipes/tree/master/recipes/grunt.html.injection).

1. Na lokální mašině předtím potřebujete rozchodit [Node ekosystém](node-instalace.md) – hlavně NPM a [Grunt](grunt.md). Volitelně také Git v příkazové řádce.
2. Naklonujte repozitář (nebo prostě stáhněte v ZIPu: [git.io/vKfhc](https://github.com/BrowserSync/recipes/archive/master.zip)):  
`git clone https://github.com/Browsersync/recipes.git bs-recipes`
3. Skočte do adresáře s první ukázkou:   
`cd bs-recipes/recipes/grunt.html.injection`
4. Nainstalujte NPM závislosti:  
`npm install`
5. Pusťte příklad:  
`npm start`
6. Ve výchozím prohlížeči se vám otevře okno s adresou podobného tvaru:   
`http://localhost:3000/`

To bychom měli. A teď ještě k čemu nám to bude, že ano?

## Živé promítání změn do prohlížeče

Upravíte CSS nebo HTML soubor a změny se vám hned projeví v prohlížeči bez obnovení stránky. Možná už to znáte z jiných nástrojů, jako je LiveReload. 

Pokud živý náhled neznáte nebo nevěříte, že to nějak zásadně pomáhá, opravdu (ale *opravdu*) si to zkuste.

V našem příkladu stačí  upravit soubor `app/index.html` nebo `app/css/main.css`. Změny se hned projeví v prohlížeči. Obnovení stránky netřeba. Úplně nejlepší je nastavit si editor, aby ukládal změny v otevřených souborech hned po přepnutí do jiné aplikace (takto třeba u Sublime Text: [superuser.com/a/374668](http://superuser.com/a/374668)). Pak stačí přepínat mezi editorem a prohlížečem. Šetří to hrozně energie, fakt že jo. 

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

<p class="video">
Video: <a href="https://www.youtube.com/watch?v=2DTP8MuW9rw">Browsersync: živý náhled webu a synchronizace prohlížení </a> – obě vlastnosti rozebrány ve videu. Podívejte se.
</p>

## Ladění webu na mobilních zařízeních

Díky Browsersync také dostanete k dispozici jednoduchý nástroj podobný DevTools vašeho prohlížeče. Prostě *bazmek*, co umožňuje ladění HTML, CSS a JS kódu. Browsersync pro to využívá technologii Weinre.

Zkoušíte příklad a máte připojený mobil? 

1. Podívejte se v počítači na `UI` adresu (obvykle `http://localhost:3001`). Otevře se vám prostředí pro nastavování Browsersync.
2. V levé navigaci zvolte „Remote Debug“.
3. Zapněte „Remote Debugger (weinre)“.
4. Klikněte na „Access remote debugger (opens in a new tab)“. V prohlížeči se otevře něco jako vývojářské nástroje. Tohle je Weinre.
5. Mezi „Targets“ zvolte ten první. Pravděpodobně to bude mobil, který jste před chvíli připojili.
6. Teď už stačí kliknout třeba na „Elements“ nebo „Console“, protože jste v prostředí podobném DevTools vašeho prohlížeče.  

Weinre (vyslovujte jako *„winery“*) není tak pokročilá aplikace jako v prohlížečích vestavěné vývojářské nástroje. Máte ovšem k dispozici DOM, CSS a JS konzoli. To je pro základní ladění dost dobré. Ohromná výhoda Weinre je v tom, že můžete ladit napříč platformami. Třeba se z desktopového Firefoxu připojit do mobilního Safari. 

Homepage Weinre má trošku krkolomnější adresu: [people.apache.org/~pmuellr/weinre/docs/latest/Home.html](https://people.apache.org/~pmuellr/weinre/docs/latest/Home.html)

<p class="video">
Video: <a href="https://www.youtube.com/watch?v=3g-AaEkc47M">Browsersync: ladění mobilních prohlížečů </a> – vzdálené ladění pomocí Weinre a dalších funkcí Browsersync.
</p>

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

- V `bsFiles` je cesta k souborům, které se budou naživo vkládat do prohlížeče, jakmile je změníte.
- `watchTask: true` v nastavení úlohy říká, že soubory sledujete ještě `watch` pluginem. Pravděpdobně totiž po změně souboru provádíte ještě další operace nad nimi – minifikaci, spojování atd. BrowserSync tomuto procesu nesmí stát v cestě.
- V `proxy: 'vzhurudolu.localhost'` je adresa, na které mi projekt už na lokále běží. Využívám tedy jiný server (v mém případě Apache z MAMP balíčku). Je ale dobré vědět, že Browsersync nabízí vlastní server. Více v další části. 

## Další tipy pro práci s Browsersync

### Vlastní server

V nastavení Grunt nebo Gulp tasku stačí uvést parametr a cestu k souborům. Browsersync vám spustí  jednoduchý lokální server:

```javascript
server: {
  baseDir: "./"
}
```

Viz také [browsersync.io/docs/grunt#grunt-server](https://www.browsersync.io/docs/grunt#grunt-server).

### Živý náhled HTML

Pokud chcete vkládat změny v HTML souboru do všech připojených zařízení, použijte plugin HTML Injector. V demíčku ukazovaném v tomto textu je to už nastavené.

Viz také [github.com/shakyShane/html-injector](https://github.com/shakyShane/html-injector).

### Příklady použití

Recipes jsou sada funkčních příkladů s předpřipravenými obvyklými nastaveními Browsersync. Pěkný zdroj inspirace i pro pokročilejší uživatele.

Viz také [github.com/Browsersync/recipes](https://github.com/Browsersync/recipes).

### Přiškrcení rychlosti připojení

Pokud nepoužíváte Chrome, kde je možnost zpomalení rychlosti připojení vestavěná, bude se vám tahle vlastnost hodit. V demíčku jděte na `http://localhost:3001/network-throttle`. Výborné pro testování responzivních webů na mobilních internetových připojeních.

### Rychlé ladění CSS layoutu

Zobrazení obrysů prvků kvůli testování CSS layoutu můžete nastavit na `http://localhost:3001/remote-debug`. Layout je také možné testovat oproti  mřížce vykreslené na pozadí. Používá technologii Pesticide.

Viz také [Pesticide.io](http://pesticide.io/).

To by mohlo být všechno. Browsersync vám tedy pomůže zefektivnit práci s frontend technologiemi a testování na mobilních zařízeních. Patří k mým nejoblíbenějším nástrojům. Zkuste ho.


