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

const existsInParents = function(evt, tgt_area){

  const array = evt.path || (evt.composedPath && evt.composedPath());

  console.info(evt);

  let exists = false;
  if(array && array.length){
    // let counter = 0;
    for(let i = 0; i < array.length; i++){
      // counter++;
      const p = array[i];
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
  }else{
    let parent = evt.target.parentElement;
    while(!exists){
      if(parent === tgt_area){
        exists = true;
        break;
      }
      parent = parent.parentElement;
      if(!parent){
        break;
      }
      // const parent = 

    }

  }
  return exists;
};

const makeHandler = function(el, removeEvent){

  const handler = function(evt){
    const tgt_area = el;
    if(!tgt_area || tgt_area.length === 0){
      removeEvent(handler);
      return;
    }
    
    const exists = existsInParents(evt, tgt_area);

    if(!exists){
      executeCallback(el);
    }
  };

  return handler;

};

const setOutside = function(evtname, el, binding, vnode, oldVnode){

  if(!existsCallback(binding)){
    return;
  }

  const cb = binding.value;

  const removeEvent = makeRemoveEvent(evtname);
  const addEvent = makeAddEvent(evtname);

  const clickHandler = makeHandler(el, removeEvent);

  let working = false;

  const response = {
    evtname: evtname,
    el: el,
    cancel: function(){
      removeEvent(clickHandler);
      working = false;
    },
    get working(){
      return working;
    },
    cb: cb
  };

  if(!el || !cb){
    return response;
  }

  removeEvent(clickHandler);
  addEvent(clickHandler);
  working = true;
  return response;

};

const cache = [];

const findTempByElement = function(el){
  const ind = cache.findIndex(elm => elm.el === el);
  return {
    index: ind,
    temp: cache[ind]
  };
};

const executeCallback = function(el){
  const temp = findTempByElement(el).temp;
  if(!temp){
    return;
  }
  if(temp.cb && typeof temp.cb === "function"){
    temp.cb();
  }
};

const updateCallback = function(el, cb){
  if(cb && typeof cb === "function"){
    const temp = findTempByElement(el).temp;
    if(temp){
      temp.cb = cb;
    }
  }
};

const start = function(el, binding, vnode, oldVnode){
  const evtname = detectEvent(binding);
  if(!evtname){
    return;
  }
  const temp = setOutside(evtname, el, binding, vnode, oldVnode);
  cache.push(temp);
};

const end = function(el){
  const { temp, index } = findTempByElement(el)
  const cancel = temp.cancel;
  if(typeof cancel === "function"){
    cancel();
  }
  cache.splice(index, 1);
};

const detectEvent = function(binding){

  if(!binding){
    return;
  }

  const name = binding.name;
  const arr = name.split("-");
  const evtname = arr.pop();
  const evts = [
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
  ];

  const exists = evts.filter(elm => elm === evtname);
  if(exists){
    return evtname;
  }
  return;
};



export default {
  bind: function(el, binding, vnode, oldVnode){
    // console.info(this, arguments);
    // console.info("bind", el, binding, vnode, oldVnode);

    start(el, binding, vnode, oldVnode);

  },
  inserted: function(el, binding, vnode, oldVnode){
    // console.info("inserted", el, binding, vnode, oldVnode);

  },
  update: function(el, binding, vnode, oldVnode){
    // console.info("update", el, binding, vnode, oldVnode);
    updateCallback(el, binding.value);

  },
  componentUpdated: function(el, binding, vnode, oldVnode){
    // console.info("componentUpdated", el, binding, vnode, oldVnode);
  },
  unbind: function(el, binding, vnode, oldVnode){
    // console.info("unbind", el, binding, vnode, oldVnode);
    end(el);
  },
};