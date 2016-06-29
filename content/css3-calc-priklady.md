# Příklady využití funkce calc()

---

Ukaž matiku


---

Responzivní obrázky

---

Výška bez hlavičky
https://css-tricks.com/a-couple-of-use-cases-for-calc/#article-header-id-3

---

BG position x pixelů zezdola
https://css-tricks.com/a-couple-of-use-cases-for-calc/#article-header-id-3
background-position: calc(100% - 50px) calc(100% - 20px);

---

Náhrada box-sizing

---

background: 
   linear-gradient(#e53b2c 1em, #f9f9f9 1em, 
                   #f9f9f9 calc(100% - 1em), 
                   #e53b2c calc(100% - 1em));

https://www.smashingmagazine.com/2015/12/getting-started-css-calc-techniques/#more-efficient-gradient-backgrounds-for-flexible-elements

---

background: 
   linear-gradient(to right bottom, 
                   transparent calc(50% - 2em), 
                   #000 0, 
                   #000 calc(50% + 2em), 
                   transparent 0);

----

https://www.smashingmagazine.com/2015/12/getting-started-css-calc-techniques/#positioning-children-of-known-dimensions-in-the-middle

position: absolute;
top: calc(50% - 2em); 
left: calc(50% - 2.5em);
width: 5em; 
height: 4em;

---

https://www.smashingmagazine.com/2015/12/getting-started-css-calc-techniques/#maintaining-aspect-ratio-and-covering-a-viewport-dimension

.slide {
   position: absolute;
   left: calc(100vw/2 - 4/3*100vh/2);
   width: calc(4/3*100vh);
   height: 100vh;
}

---



https://www.smashingmagazine.com/2015/12/getting-started-css-calc-techniques/#maintaining-aspect-ratio-and-covering-a-viewport-dimension
