// import outside_events from "../dist/outside-events.js";
import { directive } from "../dist/outside-events.js";
import Vue from "vue";

new Vue({
  el: "#app",
  data: {
    outsides: [],
    insides: [],
    show: true,
    default_event: "click",
    options: [
      "click",
      "mousedown",
      "mouseup",
      "mouseover",
      "mousemove",
      "touchstart",
      "touchend",
      // "mouseleave",
      // "mouseout",
      // "mouseenter",
    ]
  },
  methods: {
    change: function(){
      this.outsides = [];
      this.insides = [];
    },
    click: function(num){
      console.log("click");
      var str = "click inside";
      this.insides.push(str);
    },
    mousedown: function(num){
      var str = "mousedown inside";
      this.insides.push(str);
      console.log("mousedown");
    },
    mouseup: function(num){
      var str = "mouseup inside";
      this.insides.push(str);
      console.log("mouseup");
    },
    mouseover: function(num){
      var str = "mouseover inside";
      this.insides.push(str);
      console.log("mouseover");
    },
    mousemove: function(num){
      var str = "mousemove inside";
      this.insides.push(str);

      console.log("mousemove");
    },
    mouseleave: function(num){
      var str = "mouseleave inside";
      this.insides.push(str);

      console.log("mouseleave");
    },
    mouseout: function(num){
      var str = "mouseout inside";
      this.insides.push(str);
      console.log("mouseout");
    },
    mouseenter: function(num){
      var str = "mouseenter inside";
      this.insides.push(str);
      console.log("mouseenter");
    },
    touchstart: function(num){
      var str = "touchstart inside";
      this.insides.push(str);
      console.log("touchstart");
    },
    touchend: function(num){
      var str = "touchend inside";
      this.insides.push(str);
      console.log("touchend");
    },
    clickOutside: function(num){
      var str = "Click outside !!";
      this.outsides.push(str);
      console.log(str);
    },
    setClickOutside: function(num){
      var self = this;
      return function(){
        self.clickOutside(num);
      }
    },
    mousedownOutside: function(){
      var str = "mousedown outside !!";
      this.outsides.push(str);
      console.log(str);
    },
    mouseupOutside: function(){
      var str = "mouseup outside !!";
      this.outsides.push(str);
      console.log(str);
    },
    mouseoverOutside: function(){
      var str = "mouseover outside !!";
      this.outsides.push(str);
      console.log(str);
    },
    mousemoveOutside: function(){
      var str = "mousemove outside !!";
      this.outsides.push(str);
      console.log(str);
    },
    mouseleaveOutside: function(){
      var str = "mouseleave outside !!";
      this.outsides.push(str);
      console.log(str);
    },
    mouseoutOutside: function(){
      var str = "mouseout outside !!";
      this.outsides.push(str);
      console.log(str);
    },
    mouseenterOutside: function(){
      var str = "mouseenter outside !!";
      this.outsides.push(str);
      console.log(str);
    },


    touchstartOutside: function(){
      var str = "touchstart outside !!";
      this.outsides.push(str);
      console.log(str);
    },
    touchendOutside: function(){
      var str = "touchend outside !!";
      this.outsides.push(str);
      console.log(str);
    },
    clickUnbind: function(){
      this.show = !this.show;
    }
  },
  mounted: function(){
    window.app = this;
  },
  directives: {
    "outside-click": directive,
    "outside-mousedown": directive,
    "outside-mouseup": directive,
    "outside-mouseover": directive,
    "outside-mousemove": directive,
    "outside-touchstart": directive,
    "outside-touchend": directive,
  }
});