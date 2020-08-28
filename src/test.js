// import outside_events from "../dist/outside-events.js";
import { directive } from "../dist/outside-events.js";
import Vue from "vue";

new Vue({
  el: "#app",
  data: {
    outsides: [],
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
    },
    click: function(num){
      console.log("click");
    },
    mousedown: function(num){
      console.log("mousedown");
    },
    mouseup: function(num){
      console.log("mouseup");
    },
    mouseover: function(num){
      console.log("mouseover");
    },
    mousemove: function(num){
      console.log("mousemove");
    },
    mouseleave: function(num){
      console.log("mouseleave");
    },
    mouseout: function(num){
      console.log("mouseout");
    },
    mouseenter: function(num){
      console.log("mouseenter");
    },
    touchstart: function(num){
      console.log("touchstart");
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