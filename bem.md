# BEM

## Block, Element, Modifier.

Frontend metodika pro pojmenovávání tříd v komponentách od lidí z Yandexu.

Je složitější, ale nosná myšlenka je v rozdělení tříd náležejících ke komponentám do těchto tří kategorií a k nim náležejícím vzorům pro vytváření názvů tříd.

<table>
<tr>
  <th>Blok</th>
  <td><code>.block</code></td> 
</tr>
<tr>
  <th>Element</th>
  <td><code>.block__element</code></td>  
</tr>
<tr>
  <th>Modifikátor</th>
  <td><code>.block--modifier</code></td>  
</tr>
</table>

Jednoduchou komponentu s navigací byste tedy v CSS pojmenovali takto:

```
.nav
  .nav__item
  .nav--hidden
```

Skvěle to na příkladu složení komponenty *člověk* (LOL) vysvětluje [Harry Roberts](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/).

Použití ošklivých podtržítek v elementu obhajuje možností pojmenovat komponentu složitěji, s minusem v názvu — `.top-nav`.

Pokud to — jako já – nepotřebujete, můžete sáhnout po jednodušším pojmenovávání:

```
.nav
  .nav-item
  .nav--hidden
```  


## Odkazy

* [http://bem.info/method/](http://bem.info/method/)
* [http://nicolasgallagher.com/about-html-semantics-front-end-architecture/](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
