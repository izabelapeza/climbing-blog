const createIntersectionObserver = (htmlTag: string, animatedClass: string) => {
  let target: NodeListOf<Element>;

  const callback = function (entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        target.forEach((el) => el.classList.add(animatedClass));
      }
    });
  };

  let observer: IntersectionObserver;
  observer = new IntersectionObserver(callback);

  setTimeout(() => {
    target = document.querySelectorAll(htmlTag);
    target.forEach(function (t) {
      observer.observe(t);
    });
  }, 100);
};

export default createIntersectionObserver;
