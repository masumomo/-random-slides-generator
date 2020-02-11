import { createStore } from "redux";

const initialState = {
  photos: [""], //TODO
  currentView: "AllPhotos", //TODO
  selectedPhoto: ""
};

export const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "GO_HOME":
      return {
        photos: state.photos,
        currentView: "AllPhotos",
        selectedPhoto: state.selectedPhoto
      };
    case "SELECT_PHOTO":
      return {
        photos: state.photos,
        currentView: "SinglePhoto",
        selectedPhoto: action.imgSrc
      };
    case "STORE_PHOTO":
      return {
        photos: action.photos,
        currentView: state.currentView,
        selectedPhoto: state.selectedPhoto
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
