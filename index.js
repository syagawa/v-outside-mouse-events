import dir from "./directive.js";

(function(global){
  if(global){
    global.dir = dir;
  }
})(window);