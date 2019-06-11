Srovnání CSS preprocesorů
=========================

<!--
* proměnné a jejich platnost
* mixiny
* parametrické mixiny
* if/else
* cykly
* extend

TODO
* návrhové principy
* media queries
* @content
* platnost proměnných (v lessu se dá změnit i zpětně)
* placeholder selectors
http://phpfashion.com/sass-less-stylus-nebo-ciste-css-1
v2
* mělo by to být spíš o konkrétním řešení (např. mq u rwd webu, mixin pro gradient, vygenerovani trid s ikonkami, generovani layoutu)
-->

Proměnné
---

LESS:

```
@text-color: red;

.pel {
  @text-color: blue;
  color: @text-color;
} 

.mel {
  color: @text-color; // red
} 
```

SASS:


```
$text-color: red;

.pel {
  $text-color: blue;
  color: $text-color;
} 

.mel {
  color: $text-color; // blue!
} 
```

Stylus:

```
text-color = red;

.pel {
  text-color = blue;
  color: text-color;
} 

.mel {
  color: text-color; // red
}
```

Extend
------

LESS:

```
.pel {
  color: white;
}

.mel:extend(.pel) {
  background: black;
}
```

SASS:

```
.pel {
  color: white;
}

.mel {
  @extend .pel;
  background: black;
}
```

Stylus:

```
.pel {
  color: white;
}

.mel {
  @extend .pel;
  background: black;
}
```


Mixiny
------

LESS:

```
.bordered {
  border: 1px solid black; 
}  

.pel {
  .bordered; 
}  
```

SASS:

```
@mixin bordered {
  border: 1px solid black; 
}  

.pel {
  @include bordered; 
}
```

Stylus:

```
bordered() {
  border: 1px solid black; 
}  

.pel {
  bordered(); 
} 
```

### Parametrické mixiny (CSS3 mixin)

LESS:

```
.box-shadow(…) {
  -webkit-box-shadow: @arguments;
  box-shadow: @arguments;
}

.pel { // Potreba string escapovani
  .box-shadow(~"1px 1px 5px 5px rgba(0,0,0,.25), -1px -1px 1px 0 rgba(0,0,0,.25)");
} 
```

SASS:


```
@mixin box-shadow($par…) {
  -webkit-box-shadow: $par;
  box-shadow: $par;
}

.pel {
  @include box-shadow(1px 1px 5px 5px rgba(0,0,0,.25), -1px -1px 1px 0 rgba(0,0,0,.25));
}
```

Stylus:

```
box-shadow() {
  -webkit-box-shadow: arguments;
  box-shadow: arguments;
}

.pel {
  box-shadow: 1px 1px 5px 5px rgba(0,0,0,.25), -1px -1px 1px 0 rgba(0,0,0,.25);
}
```


## Podmínky

LESS:

```
.css-triangle(@direction, @size, @color) {
  width: 0px;
  height: 0px;
  border-style: solid;
}

.css-triangle(@direction, @size, @color) when (@direction = top) {
  border-width: 0 @size/2 @size @size/2;  
  border-color: transparent transparent @color transparent;
}

.css-triangle(@direction, @size, @color) when (@direction = bottom) {
  border-width: @size @size/2 0 @size/2;  
  border-color: @color transparent transparent transparent;
}


.pel {
  .css-triangle(top, 10px, black);
}
```

SASS:


```
@mixin css-triangle($direction, $size, $color) {
  width: 0px;
  height: 0px;
  border-style: solid;
  @if $direction == top {
    border-width: 0 $size/2 $size $size/2;  
    border-color: transparent transparent $color transparent;
  }
  @else if $direction == bottom {
    border-width: $size $size/2 0 $size/2;  
    border-color: $color transparent transparent transparent;    
  }
}

.pel {
  @include css-triangle(top, 10px, black);
}
```

Stylus:

```
css-triangle(direction, size, color) {
  width: 0px;
  height: 0px;
  border-style: solid;
  if direction == top {
    border-width: 0 size/2 size size/2;  
    border-color: transparent transparent color transparent;
  }
  else if direction == bottom {
    border-width: size size/2 0 size/2;  
    border-color: color transparent transparent transparent;    
  }    
}

.pel {
  css-triangle(top, 10px, black);
}
```


## Cykly

LESS:

```
@icons: home, rss, facebook, twitter, google-plus;
@stop-index: length(@icons);

.each (@index) when (@index =< @stop-index) {
  @icon: extract(@icons,@index);
  .@{icon}-icon {
      background-image: url('/images/@{icon}.png');
  }
  .each(@index + 1);
}

.each(1);
```

SASS:

```
$icons: (home, rss, facebook, twitter, google-plus);

@each $icon in $icons {
  .#{$icon}-icon {
    background-image: url('/images/#{$icon}.png');
  }
}
```

Stylus:

```
icons = home, rss, facebook, twitter, google-plus;

for icon in icons {
  .{icon}-icon {
    background-image: url('/images/'+icon+'-icon.png');
  }
}
```
