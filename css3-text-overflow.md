
CSS3 Text Overflow – způsob přetékání textu
===========================================

Vytečkování textu, který přesahuje šířku elementu.

```
text-overflow:
  ( clip | ellipsis | <_retezec_> );
```

Když na školeních ukazuji `text-overflow: ellipsis`, opakuje se vždy stejný scénář. Polovina účastníků zívá: „Hm, tohle používám už dva roky…“ A druhá polovina? Nadšeně si píše: „Musím použít hned zítra!“

Hodnota `ellipsis` má háček — aktuálně je možné ji použít jen na vytečkování jednořádkového textu na blokových elementech. I tak je to ale velmi užitečný pomocník.

Příklad s navigací
--------

Představte si navigační lištu, kdy v každém případě potřebujete, aby text neskočil na další řádek. A jeho délku, stejně jako šířku boxu, ve kterém se objevuje, neznáte.

Pak stačí `ellipsis` doplnit o dvě další deklarace zajišťující „jednořádkovost“:

```css
.element {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
```

Zkuste si naživo změnit velikost okna v příkladu na [cdpn.io/e/FeLkJ](http://cdpn.io/e/FeLkJ).

Podpora v prohlížečích
----------------------

`text-overflow: ellipsis` má podporu od IE6, takže není co řešit.
