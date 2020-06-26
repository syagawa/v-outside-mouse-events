# vue-mouse-event-outside

## usage

```html
<div id="app">
  <div><div>
  <div @class="click" :ref="area">
    click me
  </div>
</div>
<script>
  import lib from "./index.js";

  new Vue({
    el: "#app",
    mounted: function(){
      const res = lib.setClickOutside(this, "area", function(){
        console.log("click outside");
      });
    }
  });

</script>

```
