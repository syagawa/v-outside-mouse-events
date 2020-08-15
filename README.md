# v-outside-mouse-events

Vue directive, mouse / touch event outside element.


## load

### script tag


```html
<script type="text/javascript" src="path/to/outside-events.js"></script>
```

### import

```javascript
import { directive } from "path/to//outside-events.js";
```


## usage

### script tag & directives

```html
<div id="app">
  <div><div>
  <div @class="click" v-outside-click="clickOutside">
    click me
  </div>
</div>
<script type="text/javascript" src="path/to/outside-events.js"></script>
<script>

  new Vue({
    el: "#app",
    methods: {
      click: function(){
        console.log("click");
      },
      clickOutside: function(){
        console.log("click outside");
      }
    },
    directives: {
      "outside-click": window["v-outside-events"].directive
    }

  });

</script>

```
### script tag & Vue.use

```html
<div id="app">
  <div><div>
  <div @class="click" v-outside-click="clickOutside">
    click me
  </div>
</div>
<script type="text/javascript" src="path/to/outside-events.js"></script>
<script>

  new Vue({
    el: "#app",
    methods: {
      click: function(){
        console.log("click");
      },
      clickOutside: function(){
        console.log("click outside");
      }
    },
    directives: {
      "outside-click": window["v-outside-events"].directive
    }

  });

</script>

```

### import & directives

```html
<div id="app">
  <div><div>
  <div @class="click" v-outside-click="clickOutside">
    click me
  </div>
</div>
```
```javascript
  import { directive } from "path/to//outside-events.js";

  new Vue({
    el: "#app",
    methods: {
      click: function(){
        console.log("click");
      },
      clickOutside: function(){
        console.log("click outside");
      }
    },
    directives: {
      "outside-click": directive
    }
  });
```
### import & Vue.use

```html
<div id="app">
  <div><div>
  <div @class="click" v-outside-click="clickOutside">
    click me
  </div>
</div>
```

```javascript
  import { directive } from "path/to//outside-events.js";

  Vue.use(directive.setOutsideEvent("click"));

  new Vue({
    el: "#app",
    methods: {
      click: function(){
        console.log("click");
      },
      clickOutside: function(){
        console.log("click outside");
      }
    },
  });
```

## events

  "outside-click"
  "outside-mousedown"
  "outside-mouseup"
  "outside-mouseover"
  "outside-mousemove"
  "outside-touchstart"
  "outside-touchend"

