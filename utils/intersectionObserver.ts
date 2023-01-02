const createIntersectionObserver = (
  htmlTag: string,
  animatedClass?: string,
  callback?: () => void
) => {
  let target: NodeListOf<Element>;

  const defaultCallback = function (entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        target.forEach((el) => el.classList.add(animatedClass || ""));
      }
    });
  };

  let observer: IntersectionObserver;
  observer = new IntersectionObserver(callback ? callback : defaultCallback);

  setTimeout(() => {
    target = document.querySelectorAll(htmlTag);
    target.forEach(function (t) {
      observer.observe(t);
    });
  }, 100);
};

export default createIntersectionObserver;
