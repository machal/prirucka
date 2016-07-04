# SMACSS

## Scalable and Modular Architecture for CSS. 

Style guide od Jonathana Snooka.

Je to daleko propracovanější, ale základní myšlenka je v oddělení rozdělení CSS deklarací do těchto kategorií a k nim náležejícím označením ve stylech.


<table>
<tr>
  <th>Základna</th>
  <td>stylování HTML tagů</td> 
</tr>
<tr>
  <th>Layout</th>
  <td><code>.l-content, .l-side, …</code></td>  
</tr>
<tr>
  <th>Modul</th>
  <td>všechny třídy bez prefixu</td>  
</tr>
<tr>
  <th>Stav</th>
  <td><code>.is-collapsed, .is-opened, …</code></td>  
</tr>
<tr>
  <th>Skinování</th>
  <td>v extra CSS souboru</td>  
</tr>
</table>


Pozn.: Jonathan neříká, že se mají třídy pro layout a stavy prefixovat zrovna takto. Je to na vás. Dělám to takhle na některých projektech a docela se osvědčilo.

## Odkazy

* [http://smacss.com](http://smacss.com/)
* [http://tv.adobe.com/watch/adc-presents-smacss/smacss-introduction-to-a-scalable-and-modular-architecture-for-css](http://tv.adobe.com/watch/adc-presents-smacss/smacss-introduction-to-a-scalable-and-modular-architecture-for-css/)
