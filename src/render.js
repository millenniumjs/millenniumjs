export default function makeElement(node) {

  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  // Element
  const element = document.createElement(node.type);

  // Props
  if(node.props) {
    Object.keys(node.props).forEach(prop => {
      element[prop] = node.props[prop];
    });
  }

  // Text
  if(typeof node === "string") {
    const textNode = document.createTextNode(node);
    element.appendChild(textNode);
  } else {
    // Element childs
    if(node.children) {
      node.children.map(makeElement)
                   .forEach(element.appendChild.bind(element));
    }
  }

  return element;

}
