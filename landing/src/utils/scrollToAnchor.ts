export const scrollToAnchor = (element) => {
  //get the distance scrolled on body (by default can be changed)
  const distanceScrolled = document.body.scrollTop;
  //create viewport offset object
  const elemRect = element.getBoundingClientRect();
  //get the offset from the element to the viewport
  const elemViewportOffset = elemRect.top;
  //add them together
  return distanceScrolled + elemViewportOffset;
};
