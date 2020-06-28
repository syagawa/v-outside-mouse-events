import ref from "./ref.js";
import dir from "./directive.js";

(function(global){
  if(global){
    global.ref = ref;
    global.dir = dir;
  }
})(window);