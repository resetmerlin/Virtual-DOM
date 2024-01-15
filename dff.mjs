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
        oldNode.parentNode.replaceChild(newNode, oldNode);
        return [oldNode, oldNode];
      }
    }
  }

  return [vOldNode, vNewNode];
};

export default diff;
