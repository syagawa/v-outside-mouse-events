import outside_events from "../dist/outside-events.js";
import Vue from "vue";


new Vue({
  el: "#app",
  data: {
    outsides: []
  },
  computed: {
    message: function(){
      if(this.outsides.length > 0){
        return "Click outside !!";
      }
    }
  },
  methods: {
    click: function(num){
      this.outsides.splice(0, this.outsides.length);
      console.log("Click" , num);
    },
    clickOutside1: function(){
      var str = "Click outside 1 !!";
      this.outsides.push(str);
      console.log(str);
    },
    clickOutside2: function(){
      var str = "Click outside 2 !!";
      this.outsides.push(str);
      console.log(str);
    },
    clickOutside3: function(){
      var str = "Click outside 3 !!";
      this.outsides.push(str);
      console.log(str);
    },
    clickOutside: function(num){
      var str = "Click outside " + num + "!!!!!!";
      console.log(str);
      this.outsides.push(str);
    },
    setClickOutside: function(num){
      var self = this;
      return function(){
        self.clickOutside(num);
      }
    }
  },
  mounted: function(){
    console.info("mounted");
  },
  created: function(){
    console.info("created");
  },

  directives: {
    "outside-click": outside_events
  }
});