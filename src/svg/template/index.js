/**
 * 填充颜色转换成当前色
 * @param {*} jsx
 */
function fillToCurrentColor(jsx) {
  jsx.openingElement.attributes = jsx.openingElement.attributes.map((item) => {
    if (item.name.name === 'fill') {
      item.value.value = 'currentColor';
    }
    return item;
  });

  if (jsx.children) {
    jsx.children = jsx.children.map(fillToCurrentColor);
  }

  return jsx;
}

function template({ template }, opts, { imports, componentName, props, jsx, exports }) {
  // console.log(jsx.children, jsx.openingElement.attributes.map(console.log));
  jsx = fillToCurrentColor(jsx);
  // console.log(opts);
  // console.log(jsx);
  return template.ast`
    ${imports}
    const ${componentName} = (${props}) => ${jsx}
    ${exports}
  `;
}
module.exports = template;
