import d from "./directive.js";

// export default  directive;

export const directive = d;

export const setOutsideEvent = function(type){
  const default_type = "click";
  let str = "outside-";
  if(!type){
    str += default_type;
  }else{
    str += type;
  }
  return {
    install :function(Vue, options){
      Vue.directive(str, directive);
    }
  };
};