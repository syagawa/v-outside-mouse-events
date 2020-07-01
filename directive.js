const existsWindow = function(){
  const res = typeof window;
  if(res === "undefined"){
    return false;
  }
  return true;
};
const existsCallback = function(binding) {
  if(!binding){
    return false;
  }
  if(binding.value && typeof binding.value === "function"){
    return true;
  }
  return false;
};

const makeRemoveEvent = function(eventname){
  const removeEvent = function(handler){
    if(existsWindow()){
      window.removeEventListener(eventname, handler);
    }
  };
  return removeEvent;
};

const makeAddEvent = function(eventname){
  const addEvent = function(handler){
    if(existsWindow()){
      window.addEventListener(eventname, handler);
    }
  };
  return addEvent;
};

const makeHandler = function(el, cb, removeEvent){

  const handler = function(evt){
    const tgt_area = el;
    if(!tgt_area || tgt_area.length === 0){
      removeEvent(handler);
      return;
    }
    const clicked = evt.path;
    let exists = false;
    // let counter = 0;
    for(let i = 0; i < clicked.length; i++){
      // counter++;
      const p = clicked[i];
      if(tgt_area === p){
        exists = true;
        break;
      }

      if(tgt_area instanceof Array){
        for(let j = 0; j < tgt_area.length; j++){
          // counter++;
          const elm = tgt_area[j];
          if(elm === p){
            exists = true;
            break;
          }
          if(elm.$el === p){
            exists = true;
            break;
          }
        }
      }

      if(exists){
        break;
      }

    }
    if(!exists){
      cb();
    }
  };

  return handler;

};

const setClickOutside = function(el, binding, vnode, oldVnode){

  if(!existsCallback(binding)){
    return;
  }

  const cb = binding.value;

  const evtname = "click";
  const removeEvent = makeRemoveEvent(evtname);
  const addEvent = makeAddEvent(evtname);

  const clickHandler = makeHandler(el, cb, removeEvent);

  let working = false;

  const response = {
    area_name: el,
    cancel: function(){
      removeEvent(clickHandler);
      working = false;
    },
    get working(){
      return working;
    }
  };

  if(!el || !cb){
    return response;
  }

  removeEvent(clickHandler);
  addEvent(clickHandler);
  working = true;
  return response;

};


export default {
  bind: function(el, binding, vnode, oldVnode){

    const res = setClickOutside(el, binding, vnode, oldVnode);

  },
  inserted: function(el, binding, vnode, oldVnode){

  },
  update: function(el, binding, vnode, oldVnode){
  },
  componentUpdated: function(el, binding, vnode, oldVnode){
  },
  unbind: function(el, binding, vnode, oldVnode){
  },
};