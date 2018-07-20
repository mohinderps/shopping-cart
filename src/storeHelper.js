const hydrateStateWithLocalStorage = (defaultState) => {
  let newState = {};
  for(let key in defaultState) {
    if(localStorage.hasOwnProperty(key)){
      let value = localStorage.getItem(key);
      value = JSON.parse(value);
      newState[key] = value;
    }
    else {
      newState[key] = defaultState[key];
    }
  }
  return newState;
}

export default hydrateStateWithLocalStorage;
