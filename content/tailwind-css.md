# Tailwind CSS

CSS framework, který má vcelku slušnou šanci změnit způsoby, jakými jsme zvyklí psát HTML a CSS kód. Dělá to ve jménu zlepšení zážitku vývojáře – zjednodušení jeho práce. Ve jménu produktivity.

[Tailwindem](https://tailwindcss.com/) se pár měsíců zabývám a v mnohém mu dávám za pravdu. V tomhle článku se pokusím shrnout, o co jde i s důvody, proč byste Tailwindu měli věnovat pozornost.

## Popularita

Z pohledu počtu hvězdiček na Githubu to ještě tak moc vidět není. [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss) jich má asi 45 tisíc, podobně jako další nový framework Bulma ([jgthms/bulma](https://github.com/jgthms/bulma)). Kam se hrabou na Bootstrap se 150 tisíci hvězdičkami.

Zajímavější je pohled do ankety [State of CSS 2021](https://2020.stateofcss.com/en-US/technologies/): spokojenost uživatelů s Tailwindem je 90 %, jedna z nejvyšších vůbec. Bulma je kolem 60 % a s Bootstrapem je spokojená jen necelá polovina uživatelů.

<!-- TODO obrázek -->

Díky dramatickému nárůstu uživatelské základy získal Tailwind v téhle anketě ocenění [Most Adopted Technology](https://2020.stateofcss.com/en-US/awards/).

## Utility-first framework

Mě na Tailwindu nejvíc zaujalo zaměření na utility (jinak též atomické nebo užitkové CSS). Jednotlivé třídy totiž reprezentují vlastnosti a jejich vybrané hodnoty:

```html
<button class="rounded-md bg-black text-white" type="submit">
  Buy now
</button>
```

Jak asi předpokládáte, toto vytvoří čené tlačítko s bílým textem a středně zakulacenými rohy.

Z mých dřívějších textů možná víte, že tento přístup mě osobně vyhovuje, protože představuje nízkoúrovňový systém designu. Jakmile jej dostanete do hlavy, psaní kódu vám začne jít výrazně rychleji, protože nejste nucení přepínat kontexty CSS a HTML.

Podmínkou pro správné využití atomických tříd je ovšem možnost abstrakce – nechci přeci každé tlačítko znovu zapisovat jako kombinaci mnoha jednotlivých tříd.

A právě Tailwind dotáhl možnosti abstrakce ze všech utility frameworků nejdál.

## Abstrakce

O Tailwindu nejde mluvit jako o „utility frameworku“, kam spadá třeba starší Tachyons, ale „utility first“.

Pomocí utilitárních tříd buď přímo zapisujete CSS kód nebo je použijete k abstrahování.

Nejjednodušší možností abstrakce je [direktiva `@apply`](https://tailwindcss.com/docs/extracting-components). pomocí níž prostě jednodušší kompontenty zapíšete pomocí staré dobré [metodiky BEM](bem.md):

```css
.btn {
  @apply rounded-md bg-black text-white;
}

.btn--secondary {
  @apply bg-gray-100 text-black;
}
```

Pro složitější komponenty ovšem `@apply` není dobrou cestou a tak vám spolu s autory frameworku vřele doporučuji využívat kompontentová zobecnění šablonovacícho frameworku, který používáte. Zde je zjednodušený příklad ve Vue.js:

```js
// Recipes.vue:

<template>
  <div class="divide-y divide-gray-100">
    <Nav>
      // …
    </Nav>
  </div>
</template>

// Nav.vue:

<template>
  <nav class="p-4">
    <ul class="flex space-x-2">
      <slot></slot>
    </ul>
  </nav>
</template>
```

Další možností abstrakce je napsání vlastního [pluginu do `tailwind.confing.js`](https://tailwindcss.com/docs/plugins#adding-components).

## Jakýkoliv design

V [podcastu o Tailwindu](https://www.vzhurudolu.cz/podcast/198-podcast-tailwind) jsme rozebírali rozdíly mezi [Bootstrapem](https://www.vzhurudolu.cz/bootstrap) a Tailwindem. Mimojiné jsme došli k tomu, že Bootstrap má, přes velké možnosti úprav vzhledu pomocí nastavení v preprocesoru, určitou tendenci ovlivňovat vzhled výsledku.

Na velké části webů a webových aplikací, používajících nejznámější CSS framework, je tenhle framework prostě vizuálně poznat. (A na další velké části je použitý úplně zbytečně.)

<!-- TODO img weby postavené na BS -->

Tailwind je v tomhle jiný – nenabídne vám hotové komponenty, ale nízkoúrovňový CSS framework nad konkrétními vlastnosti a sadou předvybraných (a nastavitelných) hodnot.

Toto velmi ocení typičtí „CSSkaři“ – frontendové kodérky a kodéři, jejichž běžným úkolem je kódování velmi různých designů webu.

Jak ve své přednášce říká Honza Bien: Tailwind je první CSS framework, který mu umožnil rychle nakódovat jakýkoliv design.

<!-- TODO Jan Bien YouTube -->

## Bootstrap vs Tailwind

Možnost nakódovat jakýkoliv design je skvělá pro někoho, kdo CSSka velmi dobře zvládá a potřebuje zrychlit svou práci, ale ne pro typického uživatele Bootstrapu – vývojáře, který do CSS až tak vidět nechce nebo nemůže.

Zatímco Bootstrap je „component-first“ a až v posledních verzích začal hojně [přidávat utility](https://getbootstrap.com/docs/5.0/utilities/api/), Tailwind na to jde z druhé strany – DNA frameworku tvoří právě utility a komponenty si buď postavíte sami nebo využijete některé předpřipravené externí nástroje, jako [Taiwind UI](https://tailwindui.com/), [Headless UI](https://headlessui.dev/) nebo [Heroicons](https://heroicons.com/) pro ikony.

Tyto dva přístupy jsme srovnávali v květnovém vydání podcastu:

<!-- TODO podcast -->

Je zajímavé sledovat, jak nově vzniknuvší konkurence přinutila autory Bootstrapu reagovat. Jejich přístup k utilitám a rychá reakce na Tailwind je určitě pozoruhodný.

Bootstrap má však jiné DNA. Je postavený na preprocesoru Sass, takže klasika. V Tailwindu veškeré nastavování probíhá na úrovni JavaScriptu – jednak nad PostCSS, ale také ve velmi mocném konfiguračním souboru.

### Konfigurace

`tailwind.config.js`

<!-- TODO -->
