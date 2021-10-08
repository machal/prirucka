# Shrnutí páté kapitoly

Otesujte si, co jste se naučili o vícesloupcovém layoutu.

1. **Modul CSS Multi-column Layout umožňuje:**  
a. vytvářet layout do mřížky  
b. zalamovat obsah do sloupců  
c. podepírat sloupy těžkou hlavu kodérům
1. **Jak pomocí „multicol“ definovat layout se šířkou sloupce `300px`?**  
a. `column-width:300px`  
b. `column-size:300px`  
c. `column-block:300px`
1. **Co dělá zápis `columns:3`?**  
a. pokusí se zalomit obsah do tří sloupců  
b. pokusí se zalomit obsah do sloupců s rozměrem `3em`  
c. tento zápis neudělá nic, umí jej jen Internet Explorer
1. **Jak definovat šířku mezery mezi sloupci?**  
a. jen vlastností `gap`  
b. jen vlastností `column-gap`  
c. vlastností `gap` (kromě IE a Safari), nebo vlastností `column-gap`
1. **Co dělá zápis `column-fill:balance`?**  
a. rozdělí obsah do sloupečků, aby měly co nejpodobnější výšku  
b. rozdělí obsah vždy do co nejvíce sloupečků  
c. vypíše obsah, tak, aby byl politicky co nejkorektnější
1. **Jak zajistit, aby se prvek nerozdělil do více sloupečků?**  
a. teoreticky `break-inside:avoid`, ale nepodporují to prohlížeče  
b. teoreticky `break-inside:auto`, ale nepodporují to prohlížeče  
c. teoreticky ani prakticky to prostě nejde
1. **Co zajistí `column-span:all`?**  
a. chyták, toto neexistuje  
b. všechny prvky layoutu se budou vykreslovat jako `<span>`  
c. prvek překlene celou šířku vícesloupcového layoutu

---

Řešení:

1. **Modul CSS Multi-column Layout umožňuje:**  
b. zalamovat obsah do sloupců  
1. **Jak pomocí „multicol“ definovat layout se šířkou sloupce `300px`?**  
a. `column-width:300px`  
1. **Co dělá zápis `columns:3`?**  
a. pokusí se zalomit obsah do tří sloupců  
1. **Jak definovat šířku mezery mezi sloupci?**  
c. vlastností `gap` (kromě IE a Safari), nebo vlastností `column-gap`
1. **Co dělá zápis `column-fill:balance`?**  
a. rozdělí obsah do sloupečků, aby měly co nejpodobnější výšku  
1. **Jak zajistit, aby se prvek nerozdělil do více sloupečků?**  
a. teoreticky `break-inside:avoid`, ale nepodporují to prohlížeče  
1. **Co zajistí `column-span:all`?**  
c. prvek překlene celou šířku vícesloupcového layoutu
