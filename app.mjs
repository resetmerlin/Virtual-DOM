import createElem from "./createElem.mjs";

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

const random1 = (count = 0) => {
  return {
    tag: "div",
    props: {
      children: {
        tag: "button",
        attrs: "button",
        props: {
          className: `button-blue`,
          children: {
            tag: "h1",
            attrs: "heading-1",
            props: {
              className: `${count}`,
              children: {
                tag: "img",
                attrs:
                  "https://media.giphy.com/media/QCwrk1jxSWzz4grp0x/giphy.gif",
                props: {
                  children: "OK!",
                },
              },
            },
          },
        },
      },
    },
  };
};

let count = 0;

const oldNode = createElem(random1(0));

const $root = document.getElementById("app").appendChild(oldNode);

const diff = (vOldNode, vNewNode) => {
  if (vOldNode === vNewNode) return null;
  let oldChild = vOldNode.childNodes;
  let newChild = vNewNode.childNodes;

  for (const oNode of oldChild) {
    for (const nNode of newChild) {
      const [oldNode, newNode] = diff(oNode, nNode);

      if (oldNode.isEqualNode(newNode)) {
        return [oldNode.parentNode, newNode.parentNode];
      } else {
        oldNode.replaceChild(newNode.firstChild, oldNode.firstChild);
        vOldNode = vNewNode;
        return;
      }
    }
  }

  return [vOldNode, vNewNode];
};

setInterval(() => {
  count++;
  const newNode = createElem(random1(count));
  diff(oldNode, newNode);
}, 2000);
