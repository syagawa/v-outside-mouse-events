# v-outside-events

Vue directive, mouse / touch event outside element.


## load

### script tag

```html
<script type="text/javascript" src="path/to/outside-events.js"></script>
```

### import

```javascript
import { directive } from "../dist/outside-events.js";
```



## usage

### directives

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

### Vue.use

```html
<div id="app">
  <div><div>
  <div @class="click" v-outside-click="clickOutside">
    click me
  </div>
</div>
<script type="text/javascript" src="path/to/outside-events.js"></script>
<script>

  Vue.use(window["v-outside-events"].setOutsideEvent("click"));

  new Vue({
    el: "#app",
    methods: {
      click: function(){
        console.log("click");
      },
      clickOutside: function(){
        console.log("click outside");
      }
    }

  });

</script>

```
