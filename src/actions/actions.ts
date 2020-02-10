export const goHome = () => ({
  type: "GO_HOME"
});

export const selectPhoto = (imgIndex: number, imgSrc: string) => ({
  type: "SELECT_PHOTO",
  imgIndex,
  imgSrc
});

export const storePhoto = (photos: Array<string>) => ({
  type: "STORE_PHOTO",
  photos
});
