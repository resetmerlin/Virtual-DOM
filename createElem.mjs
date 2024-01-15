const createElem = (obj) => {
  const { tag, attrs, props } = obj;

  if (!props || !tag) return obj;

  const $elem = document.createElement(tag);

  if (attrs) {
    if (tag === "button") {
      $elem.setAttribute("type", attrs);
    } else if (tag === "img") {
      $elem.setAttribute("src", attrs);
    } else {
      $elem.setAttribute("id", attrs);
    }
  }

  for (const [key, value] of Object.entries(props)) {
    if (key == "className") {
      value.split(" ").forEach((word) => $elem.classList.add(word));
    } else if (key == "children") {
      const $children = createElem(value);

      if (typeof $children === "string") {
        $elem.innerText = $children;
      } else {
        $elem.appendChild($children);
      }
    }
  }

  return $elem;
};

export default createElem;
