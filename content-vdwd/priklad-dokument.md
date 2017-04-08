# Příklad: hotový dokument

Pojďme do fiktivního e-shopu přidat vlastní typografii, barvy a grafické prvky. Nějak si prostě dokument upravit k obrazu ForestKid.cz. Hotový stav  příkladu pro tuto fázi si můžete naživo prohlédnout nebo stáhnout na následujících adresách:

- Otevření v prohlížeči: [vrdl.in/vdwddok](http://vrdl.in/vdwddok)
- Stažení v ZIPu: [vrdl.in/vdwddokzip](http://vrdl.in/vdwddokzip)

Co jsme na stránce udělali, nejlépe uvidíme pohledem do `style.css`. 

## Vlastní písma 

Hned na první řádce je tohle:

```css
@import 
  url('https://fonts.googleapis.com/css?
    family=PT+Sans:400,400i,700|Yeseva+One&
      subset=latin-ext');
```

Jasně, přidali jsme naše fonty Yeseva One a PT Sans. Ten druhý ve třech řezech: základním (`400`), kurzívě (`400i`) a tučném (`700`). Pokud vám ta čísla nic neříkají, jde o stupně tučnosti používané také ve vlastnosti `font-weight`.

## Sjednocení základní typografie

Znáte už z předchozí podkapitoly. Normalize.CSS vymaže rozdíly ve vzhledu mezi prohlížeči:

```css
@import 'vendor/normalize.css';
```

Blanka.CSS sjednotí vzhled napříč HTML prvky.

```css
@import 'vendor/blanka.css';
```

Složku jsme pojmenovali `vendor/`, protože jde o projekty externích „dodavatelů“.

Teď se mrkneme do jiné složky. `core/` obvykle používám pro „programátorské“ části CSS kódu. U složitých projektů tady mívám funkce CSS preprocesorů. V našem případě si vystačíme s proměnnými.


## CSS proměnné

Používáme je tady, abychom si zjednodušili práci:

```css
@import 'core/variables.css';
```

Z toho bude mít radost naše hlava, protože si nebude muset pamatovat kódy barev a další často používané údaje. 

Definice proměnné vypadá takto:

```css
:root {
  --color-text: #063747;
}
```

Použití pak například takto: 

```css
body {
  color: var(--color-text);
}
```

Proměnné asi znáte z CSS preprocesorů. Ty jsou pro větší projekty dost užitečné. Píšu o nich v ebooku „Vzhůru do CSS3“ nebo ve starším textu na Vzhůru dolů. [vrdl.cz/blog/12-css-preprocesory-1](http://www.vzhurudolu.cz/blog/12-css-preprocesory-1)

Jak už víte, v knize se chci obejít bez složitějších technikálií a z relativně komplexních CSS preprocesorů bychom toho využili jen málo. Proměnné jsou ale nově přímou součástí kaskádových stylů. A jde s nimi páchat ještě větší legrace než s těmi z preprocesorů. Třeba číst a měnit je z javascriptového nebo HTML kódu. Nastudujte si to na JeČas.cz. [jecas.cz/var](http://jecas.cz/var)

Podpora CSS proměnných ovšem není vůbec špatná. Z aktuálních prohlížečů je nezvládají jenom Internet Explorery. [caniuse.com/css-variables](http://caniuse.com/#feat=css-variables)

Důležité je, že ani v Internet Explorerech se stránka (díky „blbuvzdornosti“ CSS) nerozpadne. Prostě se namísto barev z proměnných použijí barvy výchozí. Texty budou černé, odkazy modré. Vzhledem k rozšířenosti Exploreru verze 11 nám to ale může vadit. Pak doporučuji nasadit automatizované přepočítání proměnných do běžných CSS hodnot. Prohlížeč dostane CSS bez proměnných. Udělejte to pomocí PostCSS. [vrdl.cz/prirucka/postcss](http://www.vzhurudolu.cz/prirucka/postcss)

Konec technické odbočkou, pojďme nastavit další vzhled.


## Vlastnosti dokumentu

Velikosti nadpisů a písma, základní styl tabulek, formulářových a dalších prvků. 

```css
@import 'document/scale.css';
@import 'document/fonts.css';
@import 'document/table.css';
@import 'document/forms.css';
```

To už si nastudujte sami ve staženém příkladu, není to nic složitého.


## Pomocné třídy

Pomocné třídy jsou tak trochu mimo ostatní kategorie. Nelze je zařadit do dokumentové vrstvy, ani ke komponentám. 

```css
@import 'helpers/helpers.css';
```

Třída `.focus-only` například styluje prvky, jež mají být viditelné jen při ovládání z klávesnice. Například odkaz pro skok na hlavní obsah.

```css
.focus-only {
  position: absolute;
  top: 0;
  right: 100%; 
}

.focus-only:focus {
  right: auto;
}
```

## Maximální šířka dokumentu

Vzpomenete si na optimální délku řádku textu [z podkapitoly o typografii](typografie.md)? Ideál 66 znaků mám v našem základním písmu PT Sans napočítaný kolem `30em`, takže použijeme následující deklaraci:

```css
.container {
  max-width: 30em; 
  margin-left: auto;
  margin-right: auto;
}
``` 

Minimální odsazení ze stran na malých mobilních displejích zase zajistíme touto deklarací:

```css
body {
  margin: 1.5em;
}
```

Zabývám se tím v `document/document.css`. Tím bychom mohli mít v této fázi hotovo. Dovolte mi ale ještě jednu odbočku pro milovníky pořádku.


## Organizace CSS do malých souborů

Často ani profesionální weboví vývojáři moc nehledí na organizaci a způsob psaní CSS kódu. Psaní jakékoliv kódu bez jasné štábní kultury ovšem vede ke zbytečným bolehlavům. V knize budeme CSS kód alespoň dělit do malých soběstačných souborů, na které se pomocí závinačového pravidla `@import` odkazuji z hlavního `style.css`. Tvrdím, že je to přehlednější a rychlejší než práce s jedním velkým souborem. Na blogu mám článek o tomto způsobu dělení. [vrdl.cz/blog/29-organizace-css-2014](http://www.vzhurudolu.cz/blog/29-organizace-css-2014)

Je ale pravda, že z pohledu rychlosti načítání (alespoň na dnes ještě převládajícím protokolu HTTP/1) je vhodnější posílat prohlížeči CSS v jednom souboru. Šetříme tím dotazy na server, které by na mobilních připojeních velmi oddálily moment vykreslení stránky. CSS preprocesory dělají seskupení importovaných souborů do jednoho automaticky. Udělá to pro vás ale i komponenta `postcss-easy-import` z PostCSS. [vrdl.cz/prirucka/postcss](http://www.vzhurudolu.cz/prirucka/postcss)


## Pěkně jsme si zavrstvili, že?

Vrátím se teď na začátek kapitoly a přinutím vás vzpomenout si na obrázek se dvěmi hlavními vrstvami webu: dokumentové a komponentové. Pracovali jsme teď na té první, takže se nám povedlo ten krásně jednoduchý obrázek zkomplikovat.

![Vrstvy: dokumentová v detailu](dist/images/original/vdwd/vrstvy-dokument.jpg)

*Pod dokumentovou vrstvou máme ještě výchozí styly prohlížečů. V samotném dokumentu pak nejprve sjednocujeme vzhled a pomocí například barev, velikostní stupnice nebo písem nastavujeme ten náš*


## A jak teď vypadá rozpracovaná verze ForestKid.cz?

![Dokument fáze příkladu](dist/images/original/vdwd/priklad-dokument.jpg)

*Dokument se základním grafickým stylem, barvami a typografií. [vrdl.in/vdwddok](http://vrdl.in/vdwddok)*

Na obrázku trochu kecám a vy zkušenější to víte. Takhle by stránka sama o sobě v mobilu určitě nevypadala. Na obrázku je vidět až stav potom co jsme prohlížeči oznámili, že je optimalizovaná pro mobilní zařízení. 

Udělali jsme to meta značkou pro viewport. I přes to, že jde o jeden řádek HTML kódu, webaři v něm chyby sekají tempem Baťovy továrny na cvičky. Pojďme to napravit a o viewportech si rychle něco povědět.

