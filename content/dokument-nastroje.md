# Nástroje pro vyladění dokumentu

Při práci na dokumentu, nevyhnutelném základu každého webu se může hodit pár nástrojů. Předpokládejme jen, že máme hotový obsah v HTML. Co teď?

## Výchozí styly prohlížečů

Často se zapomíná, že ještě než napíšeme první řádku CSS, náš dokument už dokument nějaké styly má. Prohlížeč prostě musí mít nějaká zadní vrátka, kterými vejde škodolibý skřítek a náš milý dokument pokazí ohyzdným písmem Times New Roman s modrými odkazy, že ano? 

Jsou to výchozí styly prohlížečů, které ve vývojářských nástrojích vidíte jako „user agent stylesheet“. Pokud nevidíte, doporučím vám si jejich zobrazování zapnout. Ony totiž mají ošklivou vlastnost – v různých prohlížečích mají různá nastavení. 

### Proč nepoužívat resetování?

Svého času se v prvním kroku technické práce prakticky na každém webu používal „CSS Reset“ Erika Meyera. Ten prostě vynuloval všechny vnější i vnitřní okraje prvku, takže jsme získali konzistentně ošklivý Time New Roman a modré odkazy ve všech prohlížečích. [meyerweb.com/eric/tools/css/reset/](http://meyerweb.com/eric/tools/css/reset/)

Nevýhoda resetovacího přístupu je – to byste nečekali – v onom *resetování*. Když totiž nějaké vlastnosti „resetujeme“, musíme je v druhém kroku také „setovat“, nastavit na vysněné hodnota. Co když nám ale vyhovovalo původní nastavení prohlížečů? To jsme pak udělali dva zbytečné kroky a práci na webu si zkomplikovali. hned ze startu.

## Normalize.css

Normalize je 

