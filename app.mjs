const random = (count) => {
  return {
    tag: "div",
    props: {
      children: {
        tag: "button",
        attrs: "submit",
        props: {
          className: "button button-blue",
          children: {
            tag: "img",
            attrs: "https://media.giphy.com/media/QCwrk1jxSWzz4grp0x/giphy.gif",
            props: {
              children: "OK!",
            },
          },
        },
      },
    },
  };
};

const random1 = (count) => {
  return {
    tag: "div",
    props: {
      children: {
        tag: "button",
        attrs: "button",
        props: {
          className: `button-blue`,
          children: {
            tag: "button",
            attrs: "button",
            props: {
              children: `${count}`,
            },
          },
        },
      },
    },
  };
};

const render = (obj) => {
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
      const $children = render(value);

      if (typeof $children === "string") {
        $elem.innerText = $children;
      } else {
        $elem.appendChild($children);
      }
    }
  }

  return $elem;
};

let count = 0;

const diff = (vOldNode, vNewNode) => {
  const { tag: oldTag, attrs: oldAttrs, props: oldProps } = vOldNode;
  const { tag: newTag, attrs: newAttrs, props: newProps } = vNewNode;

  if (oldTag !== newTag) return render(vNewNode);
  if (newAttrs && oldAttrs && newAttrs !== oldAttrs) return render(vNewNode);

  for (const key in oldProps) {
    return render(diff(oldProps[key], newProps[key]));
  }

  return;
};

const vApp = render(random());

setInterval(() => {
  count++;
  const newVDom = random1(count);
  const patch = diff(vApp, newVDom);
  document.getElementById("app").replaceChildren(patch);
}, 1000);
