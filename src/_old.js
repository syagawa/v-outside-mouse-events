const existsWindow = function(){
  const res = typeof window;
  if(res === "undefined"){
    return false;
  }
  return true;
};

const setClickOutside = function(v, area_name, cb){
  const removeEvent = function(handler){
    if(existsWindow()){
      window.removeEventListener("click", handler);
    }
  };
  const addEvent = function(handler){
    if(existsWindow()){
      window.addEventListener("click", handler);
    }
  };
  const clickHandler = function(evt){
    const tgt_area = v.$refs[area_name];
    if(!tgt_area || tgt_area.length === 0){
      removeEvent(clickHandler);
      return;
    }
    const clicked = evt.path;
    let exists = false;
    let counter = 0;
    for(let i = 0; i < clicked.length; i++){
      counter++;
      const p = clicked[i];
      if(tgt_area === p){
        exists = true;
        break;
      }

      if(tgt_area instanceof Array){
        for(let j = 0; j < tgt_area.length; j++){
          counter++;
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

  let working = false;

  const response = {
    vueObj: v,
    area_name: area_name,
    callback: cb,
    cancel: function(){
      removeEvent(clickHandler);
      working = false;
    },
    get working(){
      return working;
    }
  };

  if(!v || !area_name || !cb){
    return response;
  }

  removeEvent(clickHandler);
  addEvent(clickHandler);
  working = true;
  return response;

};

export default {
  setClickOutside: setClickOutside
};