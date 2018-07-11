CSS3 Border Radius: poloměr rohu rámečku
========================================

Vykreslování zakulacených a elipsovitých rohů elementu.

Syntaxe
-------

```css
border-radius:
  _polomer_vlevo_nahore_
  _polomer_vpravo_nahore_
  _polomer_vpravo_dole_
  _polomer_vlevo_dole_
  (/ _elipsove_varianty_);
```

Rovnoměrné zakulacení rohů s poloměrem 10 pixelů vyšvihneme takto:

```css
border-radius: 10px;
```

Zakulacovat ovšem můžeme i v procentech ze šířky elementu a v dalších jednotkách dostupných v CSS. Zakulacovat můžeme **pro každý růžek zvlášť**. První je vždy levý horní a postupuje se po směru hodinových ručiček:

```css
border-radius: 15% 15% 0 0;
```

Přidáním lomítka zajistíme **zakulacení ve tvaru elipsy**, nikoliv kružnice. První růžek bude zakulacený v elipse se svislým poloměrem 15 % a vodorovným 30 %:

```css
border-radius: 15% 15% 0 0 / 30% 15% 0 0;
```

Na následujícím schématu je patrné, jak se podle elipsy v praxi zaobluje:

![border-radius: 15% 0 0 0 / 30% 0 0 0](dist/images/original/border-radius.svg)

Je dobré vědět, že `border-radius` je ve skutečnosti zkratka pro deklaraci vlastností jednotlivých rohů. Můžeme je samozřejmě **nastavit samostatně**:

```css
border-top-left-radius: 4em;
border-top-right-radius: 4em;
border-bottom-right-radius: 4em;
border-bottom-left-radius: 4em;
```

Živý příklad se zaoblenými rohy najdete na [cdpn.io/e/EljFa](https://cdpn.io/e/EljFa).

Tipy a triky
------------

Jak pomocí `border-radius` vykreslit **kruhové avatary**? [vrdl.in/uncsg](http://trentwalton.com/2010/08/03/css3-border-radius-rounded-avatars/)

Jak na **tabulky se zaoblenými rohy**? Na tabulky s `border-collapse: collapse` a rodičovské prvky s obrázkem uvnitř je potřeba aplikovat `overflow: hidden`. [cdpn.io/e/jpdFm](https://cdpn.io/e/jpdFm)


Podpora v prohlížečích
----------------------

Podpora v moderních prohlížečích je bezproblémová. Velmi tedy doporučuji strategii nulového fallbacku. Uživatelé starších prohlížečů prostě zakulacené rohy neuvidí, a co oči nevidí, to srdce nebolí.

Pokud vám v některých prohlížečích pod zaobleným rohem prosvítá barva pozadí, přidejte `background-clip: padding-box`. [vrdl.in/ls2uc](http://tumble.sneak.co.nz/post/928998513/fixing-the-background-bleed)
