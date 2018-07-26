const initial = {
    siteList: {}, //barcode
  }

  export default function(state= initial,action){
    switch(action.type){

      case "SET_SITELIST":
      state = {...state,
        siteList: {['SITE_LIST'] : action.payload},
      }
      break;
      }
    return state;
  }
