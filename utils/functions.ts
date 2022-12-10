export const scrollTo = (DOMElementName: string, offset: number) => {
  let element = document.querySelector(DOMElementName);
  if (element)
    window.scrollTo({
      top: element.getBoundingClientRect().top - offset,
      behavior: "smooth",
    });
};
