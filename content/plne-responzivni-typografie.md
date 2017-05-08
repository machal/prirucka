# Elastická typografie

Měnit velikost stránky i jednotlivých komponent už umíme díky předchozí podkapitole a díky jednotkám `em` a `rem`. Při změně velikosti okna se to děje *skokově*.

Co kdybychom ale stránku ale stránku a komponenty chtěli zvětšovat *plynule*? Prostě elasticky se změnou šířky nebo výšky okna.

K tomu si přizveme dříve už také zmíněné jednotky viewportu, hlavně `vw` (setina šířky okna) a `vh` (setina výšky okna).

Elastická (nebo také plně responzivní) typografie je v době psaní textu spíše v počátcích bádání. Nevyřeší zdaleka všechny situace, pro které byste je možná chtěli nadšeně použít. Ale je *cool* i tak. A já ji tady uvedu, i kdyby mě natahovali na elastický skřipec. 


## Elastická typografie pomocí `vw`

Představte si, že nadpis článku chcete na stránce zvětšovat a zmenšovat podle šířky okna. To je jednoduché:

```css
.heading { 
  font-size: 7vw;
}
```

Velikost písma bude na sedmi procentech šířky viewportu. Zmenšíme okno, a vše se zmenší. Zvětšíme ho, a vše se zvětší. Jupí! Zkuste si to na CodePenu. [cdpn.io/e/mAAOLa](http://codepen.io/machal/pen/mAAOLa)

Kód je jednoduchý, funguje ve všech moderních prohlížečích a náhradní řešení pro ty starší bude jednoduché: 

```css
.heading { 
  font-size: 2em; /* Starší prohlížeče */
  font-size: 7vw; /* Moderní prohlížeče */
}
```

Tak proč jsem tedy bručel o nějakých nevýhodách? Nerad kazím oslavu, ale pojďme si představit dvě situace:

1. Jednotka `vw` nezná váš layout. Neví, že jsou v něm fixně nastavené okraje nebo rámečky. Šířka `.heading` tak nemusí být vyjádřitelná v procentech ze šířky okna, na kterou se `vw` odkazuje. A text se prostě na některých viewportech zalomí jinak než na jiných. To vám může vadit.
2. Můžete chtít nastavit minimální a maximální velikost písma. Na mobilech bude sedm procent šířky okna už tak trochu trpasličí velikost, že ano?

První problém dokážu (za jistých podmínek) vyřešit v dalším textu. Ten druhý je zčásti řešitelný nastavením minimální velikosti v `rem`:

```css
.heading { 
  font-size: calc(2rem + 7vw);
}
```

Velikost písma v ukázce nikdy neklesne pod `2rem`. Nadpis se bude při změně šířky okna chovat elasticky. Pokud byste ale chtěli mít typografii důsledně pod kontrolou a zabránit různým zalomením textu na různých velikostech okna, bude se vám více líbit řešení následující.


## Elastická typografie podle výšky komponenty

Moje řešení v zásadě nahrazuje jednotku, která v CSS neexistuje, ale pevně doufám, že jednou existovat bude: setinu výšky rodičovského elementu.

Jakmile se totiž odkážeme na rozměry rodiče, při výpočtu velikosti elementu se vezme v potaz layout konkrétní komponenty a text se nám na žádném viewportu nezalomí jinak, než bychom chtěli. 

Pokud si onu výšku rodiče představíte jako fiktivní hodnotu `heading-height-percent`, kód by vypadal takto: 

```css
.heading { 
  font-size: 7 * heading-height-percent;
}
```

Počítáme teď sedm procent z výšky rodiče, nikoliv šířky stránky. Takže se nám text nezalomí, ani když šířku `.heading` nebude možné vyjádřit v procentech ze šířky okna.

A jak jsme vypočetli tu magickou hodnotu?

```
heading-height-percent = 
  (100vw - 2em)  /* 1. Layout .heading  */
  / 16 * 9       /* 2. Poměr stran .heading  */
  / 100;         /* 3. Získáme jedno procento  */
```  

Popíšu to ještě v textu:

1. Layout `.heading`: Prostě ze šířky stránky odečteme postranní okraje komponenty. Tím získáme její přesnou šířku. 
2. Šířku `.heading` pak vydělíme poměrem stran komponenty. Díky tomu máme vypočtenou výšku. 
3. Výšku `.heading` už pak stačí vydělit stem, abychom získali procentuální údaj.

Ano, řešení to není triviální, a navíc vychází z toho, že znáte poměr stran komponenty. Ale já vám to říkal: Elastická typografie je složitější, než jste si možná mysleli. Jenže ty výsledky za to stojí, že?

Podrobněji to rozepisuji na Vzhůru dolů v článku „CSS řešení: Elastická typografie počítaná v procentech z výšky komponenty“. [vrdl.cz/p/reseni-elasticka-typografie](http://www.vzhurudolu.cz/prirucka/reseni-elasticka-typografie)

Pokud jde o tipy na další možná řešení, můžete se obrátit na kolegy ze Smashing Magazine, konkrétně do jejich článku „Truly Fluid Typography With vh And vw Units“. [vrdl.in/4g9xs](https://www.smashingmagazine.com/2016/05/fluid-typography/)

Máme tedy všechny nezbytné znalosti o typografii a jednotkách v CSS. A máme připravený grafický styl našeho e-shopu. Můžeme tedy začít stavět kód. I ten budeme samozřejmě vrstvit. Ne každý kousek kódu musíme u každého projektu napsat znovu. Proto si ukážeme sadu nástrojů, které ty nejzákladnější vrstvy obstarají za nás.
